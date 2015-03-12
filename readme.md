## Synopsis

A gulp webapp running on ExpressJS.

The idea and part of the instructions are taken from [Building an Angular and Express App Part 1](http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/).

This app was built from the following generators:

[gulp-webapp](https://github.com/yeoman/generator-gulp-webapp) built by the Yeoman Team.

[express-generator](https://github.com/expressjs/generator) by ExpressJS.

## Motivation

Evolutionary step in my boot-build app. This connects boot-build to an express server. The express server can be run in development and production modes. The server and the build app are seperate. Only the 'server' folder needs to be deployed after building the app.

## Installation

The files inside the 'client' folder ARE my boot-build app files minus apache-server-configs. Any commands that can be run by boot-build can be run inside the 'client' folder. See the 'readme' inside the 'client' folder.

Clone the repo on Github: 'git clone https://github.com/swamper/express-build.git'

Install Node dependencies in the 'client' and 'server' folders BOTH: 'npm install'

Install Bower dependencies in the 'client' and 'server' folders BOTH: 'bower install'

Starting the server:

Open two command line windows. One inside of 'client' and one inside of 'server'.

In the 'client' window run '$ gulp serve' and to start it on localhost:9000. Close that browser tab, you don't need it.

In the 'server' window run '$ npm test' and your express server will begin running on localhost:3000. Open that up in a web browser and you should see the same Yeoman welcome page that your gulp serve method gave you. The difference is... THIS one is being served by your express server!

Make it Production Ready:

When you want to build things into production mode you'd shut both your gulp server and your express server down (so a ctrl+c in your client command line tab and your server command line tab).

Next, in your client tab, run:

$ gulp --force

And Yeoman will optimize/jshint/minify your client side code, CSS, images, etc, and put the fresh version in your server/dist directory. To test it out go to your server tab and run

$ npm start

Your production ready version will fire up on 'localhost:3000'

After doing these steps, your server folder is what you'd deploy to your hosting service of choice.

Note: if you used just plain $ gulp instead of $ gulp --force it would run any angular unit tests you have setup.

## To Do

LOL!!!......

## Contributors

## License
