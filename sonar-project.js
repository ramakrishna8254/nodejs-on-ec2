const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://ec2-13-233-29-207.ap-south-1.compute.amazonaws.com:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'SampleNodeJSApplication',
	    'sonar.projectKey':'samplenodejsapplication',
	    'sonar.login': 'admin',
	    'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	    //'sonar.exclusions': '**/node_modules/**,/coverage/lcov-report/*.test/*.js',
	    //'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
	    //'sonar.tests': 'specs',
            //'sonar.inclusions' : 'src/**'
       },
}, () => {});
