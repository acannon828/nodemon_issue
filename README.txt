Nodemon doesn't reload (as I think would be expected) in cases where:

* There are two -w flags passed to it AND
* The file referenced by the second -w flag exists AND
* The file referenced by the first -w flag does not exist when nodemon is first started, but is
created while nodemon is running

To repro the nodemon issue:

1. Run `make` to bring up the docker-compose stack running nodemon, watching the bin/ dir
2. In a separate terminal, run `make copy`, to cp ./src/index.js into the bin/ dir watched by
nodemon, within the docker image spun up in step 1

We should expect to see nodemon reload, and the NodeJS server defined in ./src/index.js to get
spun up, but we don't.

To fix the issue (though this shouldn't be necessary):

3a. Remove '-w foo.txt' from the 'start-nodemon' script in src/package.json
4a. If still running, kill the `make` process from step 1
5a. Re-do steps 1-2

You should see nodemon reload as expected, and output indicating that the NodeJS server defined in
./src/index.js was reloaded.

An alternative fix (though this shouldn't be necessary):

3b. Start from a clean git state, reverting any changes made from previous fixes
4b. Remove foo.txt: `rm server/foo.txt`
5b. If still running, kill the `make` process from step 1
6b. Re-do steps 1-2

You should also see nodemon reload as expected, and output indicating that the NodeJS server defined
in ./src/index.js was reloaded.

Yet another alternative fix (though this shouldn't be necessary):

3b. Start from a clean git state, reverting any changes made from previous fixes
4b. Create an empty bin/index.js file: `touch server/bin/index.js`
5b. If still running, kill the `make` process from step 1
6b. Re-do steps 1-2

You should also see nodemon reload as expected, and output indicating that the NodeJS server defined
in ./src/index.js was reloaded.
