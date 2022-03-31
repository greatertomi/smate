const yargs = require('yargs');
const helpers = require("yargs/helpers");
const chalk = require("chalk");
const {listIssues, addIssue, deleteIssue, updateIssue} = require("./functions");

const yargsConfiguration = (config) => {
  return config.positional('action', {
    describe: 'The action to take on todo list',
    type: "string",
    default: "ls"
  }).positional('actionArg', {
    describe: "The first argument for action",
    default: ""
  }).positional('actionArg2', {
    describe: "The second argument for action",
    default: ""
  }).positional('actionArg3', {
    describe: "The third argument for action",
    default: ""
  })
}

const processArgs = async ({action, actionArg, actionArg2, actionArg3}) => {
  if (action === 'ls') {
    await listIssues();
  } else if (action === 'add') {
    await addIssue(actionArg, actionArg2)
  } else if (action === 'delete') {
    await deleteIssue(actionArg);
  } else if (action === 'update') {
    await updateIssue(actionArg, actionArg2, actionArg3)
  } else {
    console.log('%s', chalk.red(`This command does not exist. Run 'maze todos --help' to see list of commands`));
  }
}

const description = 'Manage todo lists'
function runCli() {
  const cleanArgs = helpers.hideBin(process.argv);
  yargs(cleanArgs).command('issues <action> [actionArg] [actionArg2] [actionArg3]', description, yargsConfiguration, processArgs).argv;
}

module.exports = runCli;
