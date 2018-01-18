# Palmos

[ ![Codeship Status for palmos/palmos_web](https://app.codeship.com/projects/a034b610-c695-0135-9eb9-1e50aff0702d/status?branch=master)](https://app.codeship.com/projects/261212)

## To run locally:
_Note that you’ll need to have [Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed._
* create a directory (`$ mkdir palmos`) and navigate into that directory (`$ cd palmos`)
* run `$ git clone https://gitlab.com/palmos/palmos_web.git`
* run `$ bundle install` to install gem dependencies
* run `$ yarn install` to install package dependencies
* run `$ rake db:setup` to configure PostgreSQL database
* run `$ foreman start`, and visit `localhost:5000` to view the application

## To debug:

* to run react tests, `$ yarn test` (optionally visit localhost:9397 in your browser)
* run `$ rspec` to view the status of all unit tests
* run `$ rails c` to enter the rails console (`$ exit` to exit)

## Linting:

_note that the linter watch task is run automatically in development and once in production_

* to run the linter once, run `$ yarn lint`
* to run the watch task, run `$ yarn lint:watch`

## To declare development and test environment variables (i.e. company passwords, emails, etc)

* from the project's home directory, run `$ open config/secrets.yml`
* _secrets can be added here, but only for development and test environments - not production!_
* _add any secrets in the example format found at the top of the file_
* confirm that `/config/application.yml` is present in `.gitignore`

## To declare encrypted production environment variables (i.e. company passwords, emails, etc)

_these secrets will be encrypted and are safe for production builds_

* run `bin/rails secrets:edit` - if secret key is required, <a href="mailto:drewjamesandre@gmail.com">contact Drew</a>
* _example:_ secret_gmail_username: "me@gmail.com"
* save file and close - secrets will be encrypted and available through `Rails.application.secrets.secret_gmail_username`

## To run webpack independently from Puma server (not needed if running `foreman start`:

* to run webpack-dev-server independent of Puma sever, run `yarn start`
* to compile webpack output, run `yarn build`
