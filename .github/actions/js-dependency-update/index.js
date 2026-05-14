const core = require("@actions/core");

async function run() {
  /* 1.  Parse inputs:
        1.1 base-branch from which to check for updates
        1.2 target-branch to use to create the Parse
        1.3 Github Token for authenticatiuon purposes (to create PSs)
        1.4 Working Directory for which to checkj for dependencies
    2. Execute the NPM Update the command within the working directory
    3. Check whether modified *package.json
    4. If there are Modified files
        4.1 Add modified files to the target branch
        4.2 create a PR to the base branch using the Octokit API
    5. Otherwise, conclude the custom action
    */
  core.info("I am a custom JS action");
}

run();
