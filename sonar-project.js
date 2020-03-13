const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'https://sonarcloud.io/',
       token : '426db0aaf54106db935b090f8be8e915086b1f7f',
       options : {
       'sonar.login': '426db0aaf54106db935b090f8be8e915086b1f7f',
       'sonar.organization': 'dileepbodapati92',
       'sonar.projectKey': 'dileepbodapati92',
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
