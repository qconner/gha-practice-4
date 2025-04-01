// must run these commands from this directory to use built-in functions for Actions
// must also check in node_modules to version control for runtime Actions to find the packages
// $ npm init -y
// $ npm install @actions/core @actions/github @actions/exec

const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    core.notice('Entered custom Javascript action');

}

run();
