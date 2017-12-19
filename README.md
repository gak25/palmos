# Palmos

[ ![Codeship Status for palmos/palmos_web](https://app.codeship.com/projects/a034b610-c695-0135-9eb9-1e50aff0702d/status?branch=master)](https://app.codeship.com/projects/261212)

## To run locally:
* create a directory (`mkdir palmos`) and navigate into that directory (`cd palmos`)
* run `git clone https://gitlab.com/palmos/palmos_web.git`
* run `bundle install` to install gem dependencies
* run `yarn install` to install package dependencies
* run `rake db:setup` to configure PostgreSQL database
* run `foreman start`, and visit `localhost:5000` to view the application

##To debug:
* to run react tests, `yarn test` and visit localhost:9397 in your browser
* run `rspec` to view the status of all unit tests
* run `rails c` to enter the rails console (`exit` to exit)

##To run webpack (not needed if running `foreman start`:
* to run webpack-dev-server independent of Puma sever, run `yarn start`
* to compile webpack output, run `yarn build`
