# A Simple Simon Game

This project is a simple version of [Simon](https://en.wikipedia.org/wiki/Simon_(game)). 

By starting the game with Start Game, the player is presented with a sequence of colors and have to input the same sequence in order to advance. Sequences increase randomly. Score for the match is displayed on the middle and increases each time the player chooses a correct option. When the player chooses a wrong option, the match ends. The number of times played increases and a new best score is registered, if the score is higher. That could be reset to zero with "reset info".

## A simple screenshot

![game_screenshot](https://github.com/anacko/simple-simon/blob/master/docs/imgs/Example-211210.png)

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

* `npm install`   To install dependencies.
* `npm start`   To run the app in development mode (port 3000).

[React documentation](https://reactjs.org/).

Icons made by [Roundicons](https://www.flaticon.com/authors/roundicons)

## Current features

* Increasing sequence by one at each time the user completes the current sequence
* Different light intensity for sequence presentation and option selection on mouse over
* Anti-cheat mode: the player must wait for the whole sequence presentation before starting to select colors
* Score and number of levels played persistent and stored locally

## Potential future additions

* Sound effects to match.
* More visual communication, such as "begin", "you have a high score" and "good game!".
* About button, to explain the rules.
* Starting routine for the match. Ex. one color at a time, then all colors at the same time, then a beep, than the match begins.
* Ending routing for when the player loses. Ex. random fast blinking, as if the board is confused.
* Difficulty levels - easy (faster presentation at the beginning of a long sequence), medium (current implementation), hard (random sequence at each stage).
* Cheat mode, by allowing the player to start clicking before the sequence is totally presented.
* Penalization / not registering score when the player cheats.
* Zen more with one blink, one click.
* Personalization with player name / option to register (database storage with more information).
* Rotation between players.
* Sessions where players could share a match.

* Suggestions? Let me know!