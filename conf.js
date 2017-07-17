var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    specs: ['test/*test.js'],
    multiCapabilities: [
        {'browserName': 'chrome'}
    ],
	onPrepare: function() {   
	jasmine.getEnv().addReporter(        new Jasmine2HtmlReporter({          savePath: 'autotests/screenshots'      }));  
	}
}



/*var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

exports.config = {
    beforeLaunch: function() {
      return new Promise(function(resolve){
        reporter.beforeLaunch(resolve);
      });
    },	
    specs: ['test/*test.js'],
    multiCapabilities: [
        {'browserName': 'chrome'}
    ],
	onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  },
	 afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
} */
