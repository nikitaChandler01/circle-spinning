import { Configuration } from 'webpack';
import { BuildOptions } from './types/types';

export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.paths.src,
      '@app': options.paths.src + '/app',
      '@pages': options.paths.src + '/pages',
      '@widgets': options.paths.src + '/app/widgets',
      '@shared': options.paths.src + '/app/shared',
    },
  };
}
