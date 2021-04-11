module.exports = {
  plugins: [
    require('postcss-import'), // eslint-disable-line global-require
    require('tailwindcss'), // eslint-disable-line global-require
    require('postcss-preset-env')({ stage: 1 }), // eslint-disable-line @typescript-eslint/no-var-requires, global-require
  ],
};
