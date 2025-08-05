import ReactRefreshTypeScript from 'react-refresh-typescript';
import { ModuleOptions } from 'webpack';
import { babelBuildLoader } from './babel/babelBuildLoader';
import { BuildOptions } from './types/types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';
  const isProd = options.mode === 'production';

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgLoader = {
    test: /\.svg$/i,
    type: 'asset',
    resourceQuery: /url/,
  };
  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/] },
    use: ['@svgr/webpack'],
  };
  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: { api: 'modern-compiler' },
      },
    ],
  };
  const cssLoader = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
  };

  const tsLoader = {
    test: /\.ts$|tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
  };

  const babelLoader = babelBuildLoader(options);

  return [assetLoader, svgLoader, svgrLoader, cssLoader, scssLoader, tsLoader, babelLoader];
}
