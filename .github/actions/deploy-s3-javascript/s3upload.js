// must run these commands from this directory to use built-in functions for Actions
// must also check in node_modules to version control for runtime Actions to find the packages
// $ npm init -y
// $ npm install @actions/core @actions/github @actions/exec

const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    core.notice('Entered custom Javascript action');
    const bucket = core.getInput('bucket', { required: true });
    const region = core.getInput('region', { required: true });
    const folder = core.getInput('folder', { required: true });

    core.notice('bucket ' + bucket);
    core.notice('region ' + region);
    core.notice('folder ' + folder);

    const s3URI = `s3://${bucket}`;

    // github.context

    // github.getOctokit().
    // useful for github API use

    exec.exec(`aws s3 sync ${folder} ${s3URI} --region ${region}`);

    const websiteURL = `http://${bucket}.s3-website-${region}.amazonaws.com`;
    core.setOutput('website-url', websiteURL);
}

run();
