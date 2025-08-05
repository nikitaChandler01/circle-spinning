import ReactRefreshTypeScript from 'react-refresh-typescript';
import { ModuleOptions } from 'webpack';
import babelBuildLoader from './babel/babelBuildLoader';
import { BuildOptions } from './types/types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';
  const isProd = options.mode === 'production';

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{ loader: '@svgr/webpack', options: { icon: true } }],
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

  return [assetLoader, svgrLoader, cssLoader, scssLoader, tsLoader];
}
