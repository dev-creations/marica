import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'marica-io',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
      footer: '*Built with ♥ and ♫*',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
