// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    autoWatch: true,
    browsers: ['Chrome'],
    files: [
      {
        pattern: './src/utils/**/*.ts',
        watched: true
      }
    ],
    frameworks: ['jasmine', 'karma-typescript'],
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json'
    },
    preprocessors: {
      './src/utils/**/*.ts': ['karma-typescript']
    },
    reporters: ['progress', 'karma-typescript']
  });
};
