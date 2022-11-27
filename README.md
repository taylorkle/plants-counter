# Diversify
 With the intent to encourage dietary diversity, Diversify allows users to track the plant based foods they consume and visualize how this compares to a personal goal.

 ## Ruby Version
 - Ruby 2.7.3

 ## System Dependencies
 - Rails 5.2.8.1
 - PostgreSQL 14.5

 ## Instruction to Run Application Locally
 1. git clone https://github.com/taylorkle/plants-counter.git
 2. `bundle install`
 3. `yarn install`
 4. `bundle exec rake db:create`
 5. `bundle exec rake db:migrate`
 6. `bundle exec rake db:seed`
 7. In a second terminal tab `bundle exec rails s`
 8. In a third terminal tab `yarn run start`
 9. Navigate to localhost/3000
 10. See "External API" to use the spoonacular API

 ## External API
 1. Navigate to https://spoonacular.com/food-api/console#Dashboard to create account and select plan
 2. Assign constant variable 'SPOONACULAR_API_KEY' with personal spoonacular key in a .env file in the main directory

 ## TODO
 - Add delete plant feature
 - Edit ruby date and time objects to reflect local time instead of UTC time
 - Add plant intake and goal history
 - Add recipes feature


