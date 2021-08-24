# esbuild problem

## Setup

1. Install Node 16.x (not a strict requirement, probably happens with other node versions too)
2. Clone this repo
3. Run `npm install`
4. Run `npm test`

You should see an error message including `Error [DataCloneError]`.

If you remove `watch: true` from `build.js` you'll see that everything works.
