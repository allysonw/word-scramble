# Word Scramble

![](http://forthebadge.com/images/badges/made-with-ruby.svg)
![](https://forthebadge.com/images/badges/made-with-javascript.svg)

![](https://img.shields.io/badge/Released-June--2018-ff69b4.svg?style=flat-square)
[![GitHub last commit](https://img.shields.io/github/last-commit/allysonw/word-scramble.svg?style=flat-square)]()

Word Scramble is a fun game where your task is to unscramble scrambled words for points!

Visit the live site [here](https://unscramble-it.herokuapp.com/)!

![demo](https://media.giphy.com/media/oysCGIV1inoexjw3H9/giphy.gif)

## Installation
Fork and clone this repository. From the `rails-app` folder, run `bundle install` and migrate the db with `rake db:migrate`. From the `react-app` folder, run `npm install`.

Start the server from the `rails-app` directory:

```rails s -p 3001```

Start the client from the `react-app` directory:

```npm start```

The site will be launched in your browser at `localhost:3000`.

* Ruby version: ruby-2.5.0

## Usage
Click Play to play a new game. The countdown starts at 999 seconds. Try to form the letters presented into English words. Hit Scramble to jumble the letters to help you solve it. If you need a hint, click the Hint button.

The more quickly you solve all 3 word scrambles, the higher your score. Once you solve all 3 words, you win! Enter your name so it can be saved for posterity.

Click High Scores to view the top 15 scores of all time.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/allysonw/word-scramble. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Credits

Lead Developer - Allyson Wesman (@allysonw)

## License

The project is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
