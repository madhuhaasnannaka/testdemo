const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'https://sonarcloud.io/',
       token : '5c720034b30f2f505e976bab6dacc5dd6171aa21',
       options : {
       'sonar.login': '5c720034b30f2f505e976bab6dacc5dd6171aa21',
       'sonar.organization': 'madhuhaasnannaka',
       'sonar.projectKey': 'madhuhaasnannaka',
       'sonar.projectVersion': '1.0',
       'sonar.language': 'js',
       'sonar.sourceEncoding': 'UTF-8',
       //'sonar.sources': '.',
       'sonar.inclusions' : '**', // Entry point of your code
       'sonar.exclusions': '*.test.*',
       'sonar.tests': '.',
       'sonar.test.inclusions': '**/testing/**,**/*.spec.ts',
       'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
       'sonar.testExecutionReportPaths': 'test-report.xml'
       

       }
     }, () => {});
