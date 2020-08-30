# Lead Manager Application

Lead Manager is Django-React app for managing your leads

- Create user
- Create Leads, View Leads and Delete Leads

## Technologies Used

Lead Manager uses a number of open source projects to work properly:

- [Django][django] - A python based backend framework for business logic.
- [Django REST framework][djangorestframework] - A powerful flexible toolkit for building Web.
- [django-rest-knox][djangorestknox] - An authentication module for django rest auth.
- [React.js][reactjs] - A javascript library for building user interfaces.
- [Redux][redux] - A predictable state container for JS apps - one source of truth.
- [React-Redux][reactredux] - A library for React bindings for Redux.
- [Booststrap][bootstrap] - A css framework for designing webpages.

And of course Lead Manager itself is open source with a [public repository][githubpage]
on GitHub.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.
We will be using [yarn](https://yarnpkg.com/) package manager.

Clone the repo.
Current directory: \$

```sh
$ git clone https://github.com/isnakolah/lead_manager.git

```

Installation procedure for Mac and Linux based systems

Install the node dependencies and devDependencies.
Current directory: \$

```sh
$ cd lead_manager
$ yarn add -d

```

Install the node dependencies and devDependencies.
Current directory: lead_manager/

```sh
$ cd lead_manager/
$ python -m venv .venv
$ source .venv/bin/activate
$ pip install -r requirements.txt

```

Use the .env-example in lead_manager/lead_manager/.env-example to configure your db

## Running the application

Open a seperate terminal in the base folder \$ lead_manager/

```sh
$ yarn run dev

```

In the terminal with path \$ lead_manager/lead_manager/

```sh
$ python manage.py runserver

```

```sh

Open [http://127.0.0.1:8000/#/](http://127.0.0.1:8000/#/)

```

Register a user to add and delete Leads.

## License

MIT

**Free Software, Hell Yeah!**

## Developer

**By [Nakolah Daniel](https://www.linkedin.com/in/danielnakolah)**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[reactjs]: https://reactjs.org/
[django]: https://www.djangoproject.com/
[djangorestframework]: https://www.django-rest-framework.org/
[redux]: https://redux.js.org//
[reactredux]: https://react-redux.js.org/
[djangorestknox]: https://pypi.org/project/django-rest-knox/
[githubpage]: https://github.com/isnakolah/lead_manager
[bootstrap]: https://getbootstrap.com/
