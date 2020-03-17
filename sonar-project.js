const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'https://sonarcloud.io/',
       token : 'bc5138032700d06c88d1f08ca47e4832ebd1a473',
       options : {
       'sonar.login': 'bc5138032700d06c88d1f08ca47e4832ebd1a473',
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
