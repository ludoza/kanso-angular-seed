module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'packages/angular/angular/angular.js',
      'test/lib/angular/angular-mocks.js',
      'js/**/*.js',
      'lib/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'       
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
