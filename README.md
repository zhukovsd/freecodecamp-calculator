# freecodecamp-calculator
The built application is deployed to GitHub Pages - https://zhukovsd.github.io/freecodecamp-calculator/

## Used libraries and tools
Application:
1. ES6, ReactJS and material-ui
2. Building and debugging:
   - Browserify + babelify for bundling js, bash for copying html and css [build.sh](https://github.com/zhukovsd/freecodecamp-calculator/blob/master/build.sh)
   - Watchify for watching and hotswapping js, bash for hot swapping changed html and css [watch.sh](https://github.com/zhukovsd/freecodecamp-calculator/blob/master/watch.sh)
   - browser-sync for refreshing browser when files in `build/` has been changed
3. CI and deploying to gh-pages:
   - travis-ci.org as CI service
   - CI runner executes [deploy.sh](https://github.com/zhukovsd/freecodecamp-calculator/blob/master/deploy.sh) to build the app and deploy it to GitHub Pages

## Build the app on your side
- `git clone`
- `npm install`
- `npm run build` or `build.sh`
- `watch.sh` to run browser-sync and open the app in your default browser
