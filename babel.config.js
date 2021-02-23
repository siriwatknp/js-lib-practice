module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 12
        }
      }
    ],
  ],
  env: {
    esm: {
      presets: [
        [
          '@babel/env',
          {
            modules: false,
            targets: {
              node: 10,
            },
          },
        ],
      ],
    },
    cjs: {
      presets: [
        [
          '@babel/env',
          {
            targets: {
              node: 6,
            },
            useBuiltIns: 'usage',
            corejs: "2.0"
          },
        ],
      ],
    },
  },
};