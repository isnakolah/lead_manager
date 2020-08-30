# Lead Manager Application

Lead Manager is Django-React app for managing your leads

- Create user
- Create Leads, View Leads and Delete Leads

## Technology Stack

Lead Manager uses a number of open source projects to work properly:

### Frontend

- [React.js][reactjs] - A javascript library for building user interfaces.
- [Redux][redux] - A predictable state container for JS apps - one source of truth.
- [React-Redux][reactredux] - A library with React bindings for Redux.
- [Axios][axios] - Promise based HTTP client for the browser.
- [Booststrap][bootstrap] - A css framework for designing webpages.

### Backend

- [Django][django] - A python based backend framework for business logic.
- [Django REST framework][djangorestframework] - A powerful flexible toolkit for building Web.
- [django-rest-knox][djangorestknox] - An authentication module for django rest auth.

### Database

- [PostgreSQL][postgresql] - An open source relational database

And of course Lead Manager itself is open source with a [public repository][githubpage]
on GitHub.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.
We will be using [yarn](https://yarnpkg.com/) package manager.

Clone the repo.
Current directory: **\$**

```sh
# Clone the github repo, you must have git installed locally

$ git clone https://github.com/isnakolah/lead_manager.git

```

Installation procedure for Mac and Linux based systems

Install the node dependencies and devDependencies.
Current directory: **\$**

```sh
# Change directory to the lead_manager base directory
$ cd lead_manager

# Install all the dependency
$ yarn add -d

```

Install the node dependencies and devDependencies.
Current directory: **\$** _lead_manager/_

```sh
# Change the directory to the django lead_manager project
$ cd lead_manager/

# Initialize a python virtual environment
$ python -m venv .venv

# Activate the virtual environment
$ source .venv/bin/activate

# Install all the python packages
$ pip install -r requirements.txt

```

**Use the .env-example in lead_manager/lead_manager/.env-example to configure your db**

## Running the application

Open a seperate terminal in the base folder for this project **\$** _\ lead_manager/_

```sh
# In the base directory of the project, run the dev script
$ yarn run dev

```

In the terminal with path **\$** _lead_manager/lead_manager/_

```sh
# In the django project directory run the server to display the app
$ python manage.py runserver

```

**Open [http://127.0.0.1:8000/#/](http://127.0.0.1:8000/#/)**

## Using the app

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
[postgresql]: https://www.postgresql.org/
[axios]: https://www.npmjs.com/package/axios
