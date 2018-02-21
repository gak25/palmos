# Palmos

[ ![Codeship Status for palmos/palmos_web](https://app.codeship.com/projects/a034b610-c695-0135-9eb9-1e50aff0702d/status?branch=master)](https://app.codeship.com/projects/261212)
[![Maintainability](https://api.codeclimate.com/v1/badges/0cf406f698d95459e5a4/maintainability)](https://codeclimate.com/github/drewandre/palmos/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0cf406f698d95459e5a4/test_coverage)](https://codeclimate.com/github/drewandre/palmos/test_coverage)

## To run locally:

_Note that you’ll need to have [Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed._

* create a directory (`$ mkdir palmos`) and navigate into that directory (`$ cd palmos`)
* run `$ git clone https://github.com/drewandre/palmos.git <APP_NAME_HERE>`
* run `$ bundle` to install gem dependencies
* run `$ yarn` to install package dependencies
* copy `.env.example`, add your unique credentials, and save the file as `.env`
* optionally adjust database names in `/config/database.yml`
* run `$ rake db:setup` to configure MySQL database
* adjust base development URL in `/app/javascript/react/src/constants/baseUrl.js`
* run `$ foreman start`, and visit either `localhost:3000`, or dev URL of your choice to view the application

## To run tests:

* to run feature tests, run `$ yarn test`
* to run feature tests continuously in the background, run `$ karma start` (optionally visit localhost:9397 in your browser)
* to run unit tests, run `$ bundle exec rspec` (optionally open `/coverage/index.html` in your browser to view coverage report)

## To debug:

* run `$ rails c` to enter the rails console (`$ exit` to exit)
* use `binding.pry` in any .rb files and `debugger` in any .js files _(note pry will not work with `foreman start` - instead, run `$ bundle exec rails s` in one terminal window for viewing pry, and `$ yarn start` in another window)_

## Linting:

_note that the linter watch task is run automatically in development and once in production_

* to run the linter once, run `$ yarn lint`
* to run the watch task, run `$ yarn lint:watch`

## To run [Brakeman](https://brakemanscanner.org/) security analysis:

_note there may be vulnerabilities Brakeman does not test for or did not discover. No security tool has 100% coverage_

* run `$ brakeman` from the project's root folder

## To declare development and test environment variables (i.e. company passwords, emails, etc)

* run `$ open .env` and edit credentials
* confirm that `.env` is present in `.gitignore`

## To declare encrypted production environment variables (i.e. company passwords, emails, etc)

_these secrets will be encrypted and are safe for production builds_

* run `bin/rails secrets:edit` - if secret key is required, <a href="mailto:drewjamesandre@gmail.com">contact Drew</a>
* _example:_ secret_gmail_username: "me@gmail.com"
* save file and close - secrets will be encrypted and available through `Rails.application.secrets.secret_gmail_username`
  _On Heroku, the application’s environment variables are managed from the heroku CLI:_
  `$ heroku config:set SECRET_TOKEN=...` or from the [web dashboard]("https://dashboard.heroku.com/apps/my-app/settings")

## To push to heroku:

* commit all changes to master and run `$ git push heroku master`
* if database migrations were made in commit, run `$ heroku run rake db:migrate`

## To run puma server independently (not needed if running `foreman start`:

* run `$ bundle exec rails s`

## To run webpack independently from Puma server (not needed if running `foreman start`:

* to run webpack-dev-server independent of Puma sever, run `$ yarn start`
* to compile webpack output, run `$ yarn build`
