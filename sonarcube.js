const scanner = require('sonarqube-scanner');

scanner(
  {
    // this example uses local instance of SQ
    serverUrl: 'http://localhost:9000',
    login: 'admin',
    password: 'admin',
    options: {
      'sonar.projectKey': 'react-boilerplate-v1',
      'sonar.projectVersion': '1.0.0',
      'sonar.sources': './src',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info'
    }
  },
  () => process.exit()
);
