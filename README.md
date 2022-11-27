# Diversify
 With the intent to encourage dietary diversity, Diversify allows users to track the plant based foods they consume and visualize how this compares to a personal goal.

## Ruby Version
- Ruby 2.7.3

## System Dependencies
- Rails 5.2.8.1
- PostgreSQL 14.5

## Instructions to Run Locally

1. git clone https://github.com/taylorkle/plants-counter.git
2. `cd plants-counter`
3. `bundle install`
4. `yarn install`
5. `bundle exec rake db:create`
6. `bundle exec rake db:migrate`
7. `bundle exec rake db:seed`
8. In a second terminal tab `bundle exec rails s`
9. In a third terminal tab `yarn run start`
10. Navigate to localhost/3000
11. See "External API" to use the spoonacular API

## Spoonacular API
1. Navigate to https://spoonacular.com/food-api/console#Dashboard to create account and select plan
2. Assign constant variable 'SPOONACULAR_API_KEY' with personal spoonacular key in a .env file in the main directory

## TODO
- Add delete plant feature
- Edit ruby date and time objects to reflect local time instead of UTC time
- Add plant intake and goal history
- Add recipes feature

## Contributing
Pull requests are welcome. For major changes, please open an issue to discuss requested change further.

## License
MIT License

Copyright (c) [2022] [Taylor Le]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


