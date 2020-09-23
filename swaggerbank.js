const SwaggerBank = require('./src');
const commandLineArgs = require('command-line-args')

const optionDefinitions = [
  { name: 'spec', type: String, multiple: false, defaultOption: true },
]

const options = commandLineArgs(optionDefinitions)
console.log(options)

const api = new SwaggerBank.API(options.spec);

api.validateAPI()
.then( () => {
  api.setupMountebankImposter(50000);
})
.catch(error => {
  console.log(error);
})
