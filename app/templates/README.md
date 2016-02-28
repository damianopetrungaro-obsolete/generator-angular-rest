# AngularJS-boilerplate
A micro AngularJS boilerplate for start projects with mocking and routing modules ready, based on John Papa's style guide

# Install

Make a directory and move into it

```sh
$ mkdir myFolder
$ cd myFolder
```

Then clone the boilerplate and install all dependecies

```sh
$ git clone https://github.com/damianopetrungaro/AngularJS-boilerplate.git
$ cd AngularJS-boilerplate
$ npm install
```

For start a server with the running app

```sh
$ npm run serve
```


# Modules

The sample modules have a ``` .mock.js ``` and ``` .route.js ``` files.

Those files are used by the ``` core ``` for pass information to a provider.


If you want to remove a core module, just delete from the resources ( i.e ``` users ``` ) and the``` core ``` directory the file and folder.

Remember also to remove the modules injection to the ```app.module.js``` file
