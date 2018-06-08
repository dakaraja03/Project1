exports.config = {
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  specs: ['test.js'],
  // baseUrl: 'http://google.com',
  // seleniumAddress: 'http://juliemr.github.io/protractor-demo/',
  framework: 'jasmine'
};