# Generator Angular Rest


[![npm](https://img.shields.io/npm/dt/generator-angular-rest.svg?style=flat-square)](https://www.npmjs.com/package/generator-angular-rest)
[![npm](https://img.shields.io/npm/v/generator-angular-rest.svg?style=flat-square)](https://www.npmjs.com/package/generator-angular-rest)

A micro AngularJS scaffolding for start projects with mocking and routing modules ready,

based on this [Best Practice angular-styleguide made by johnpapa](https://github.com/johnpapa/angular-styleguide).

#### Based on this [Angular Boilerplate](https://github.com/damianopetrungaro/angular-boilerplate).

## News
#### As soon as possible will be avaiable new modules:

#### angular-rest:cordova
Will geneate an app compatible with ngCordova

#### angular-rest:module-cordova
Will geneate a module compatible with ngCordova


#### angular-rest:factory-cordova
Will geneate a factory compatible with SQLite operations (for ngCordova)

#### angular-rest:repository-cordova
Will generate a factory that will handle database queries


## Installation

First, install
[Yeoman](http://yeoman.io) and
[angular-rest](https://www.npmjs.com/package/generator-angular-rest) using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
    $ npm install -g yo
    $ npm install -g generator-angular-rest
```

Then generate and start your new project:

```bash
    $ mkdir myNewproject
    $ cd myNewproject
    $ yo angular-rest
    $ npm run serve
```

## Running Generator:

Generators for module, directive, factory and filter

```bash
	$ yo angular-rest:module
	$ yo angular-rest:component
	$ yo angular-rest:factory
	$ yo angular-rest:filter

```


## Set up environment

For developing env:

With watch and live reload for js and css (or sass)

```bash
	$  npm run serve
```

For production env:

Simply return minified code and optimizated images

```bash
	$  npm run prod
```

## What does the module create?

### angular-rest

Create the folder structure, based on [Angular Boilerplate](https://github.com/damianopetrungaro/angular-boilerplate).
For more info goes to the repo.

### angular-rest:module

Generate a module with mocking and routing core functionality.

The folder will be pushed here

    src/app/modules/
    |
    |___delete
    |    |___name.delete.js
    |    |___name.delete.html
    |
    |___index
    |    |___index.js
    |    |___name.index.html
    |
    |___show
    |    |___show.js
    |    |___name.show.html
    |
    |___store
    |    |___name.store.js
    |    |___name.store.html
    |
    |___update
    |   |___name.update.js
    |   |___name.update.html
    |
    |___name.mock.js
    |___name.route.js
    |___name.factory.js
    |___name.validator.js

The core modules are ```name.factory.js```, ```name.mock.js```, ```name.route.js``` (where name is the module name).

```name.factory.js``` contains all the http request for the backend.

```name.mock.js``` generate a fake response (also simulating errors).

```name.route.js``` generate a routing for the module.

```name.validator.js``` generate a validation file for the module's model. Use [valdr validation](https://github.com/netceteragroup/valdr)

All the other directory ```delete```, ```index```, ```show```, ```store``` and ```update``` are the actions avaiable for the module.

Each action contains a controller (```name.action.js```) and a view (```name.action.html```).



### angular-rest:component

Generate a directive with 'controller' and 'link' functions.

    src/app/shared/components/
    |
    |___name-component.js
    |___name-component.html

There are 2 files.

The ```name-component.html``` (where name is the name of the component) for the template that will be used by the directive, and the ```name-component.js``` will contains the directive.

### angular-rest:factory

Generate a basic factory.

    src/app/shared/factories/
    |___name.factory.js

Will be generated a ```name.factory.js``` (where name is the name of the factory) file that will contain a factory with a simple init function (will log a string).

### angular-rest:filter

Generate a basic filter.

    src/app/shared/filters/
    |___name.filters.js

Will be generated a ```name.filters.js```(where name is the name of the filter)  file that will contain a filter.
