const { LiveReloadCompiler } = require('@nestjs/ng-universal');

const compiler = new LiveReloadCompiler({
  projectName: 'my-app'
});
compiler.run();
