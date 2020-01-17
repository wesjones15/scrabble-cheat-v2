# Scrabble Cheat App
## How to use

This project is hosted on Heroku and can be accessed here:
scrabble-cheat-v2.herokuapp.com

Enter up to seven letters in the input fields and click *FIND*. The top three best scoring valid scrabble words and their corresponding scores will be returned and displayed on screen.

## Description
### v1
The first iteration of Scrabble Cheat App was written entirely in JavaScript, served solely from the front end, which is built with React. 

I built this project to solidify my skills after taking an online React course.

### v2 (current)
For the second iteration of Scrabble Cheat App, I extracted the business logic out of the front end and built a backend API with Python and Flask. 

On the front end, the user inputs up to seven letters. These letters are sent as a path variable using a GET request to the backend api. When the backend receives the request, it parses the seven letters into a string array and performs the business logic. 

It starts with a string array containing every scrabble word. 
* Filters out words that are longer than the provided user input. 
* Filters out words containing letters that are not included in the user input. 
* Removes words that contain more occurrences of the letters than the user provided. 
    * For example, OFE would yield OOF and OFF before this method. 
* After getting the completely filtered list to only contain words that can be created from the user input, the score of the words are determined. 
    * This is done by getting the score for each letter in the word, then returning the sum as the score for that word. 
* Then, a map of words and scores is sorted and the top 3 best scoring words are returned to the front end and displayed for the user to see on screen.

I built v2 of this project after completing an online course on building RESTful APIs.

### v3 (future)
For the third iteration of Scrabble Cheat App, I plan on implementing (Double/Triple) (Word/Letter) Score tiles

I will have to rewrite the frontend to send a collection of LetterTile objects containing letter value and tile multiplier

I will have to rewrite the backend to accept these objects. The majority of the business logic in the backend will remain unchanged, but I will have to rework the getScoreFromLetters method to take in multipliers and apply them to the appropriate letters. 
I may rewrite the backend using another language or framework, such as Java Spring.
The api response will be similar, the only change being the score that is returned along with the words. After I change the getScoresFromWords method to account for multiplier tiles, the GetBestScoringWords method should still function as intended.


## TODO:

**-Use regular expressions to ensure one letter per input**

**-make css look nicer**

—fix the text in the input fields misaligned on Mobile Safari & Desktop Safari
    
**-add option to add up to 2 "blank" tiles to search**

**-add ability to set position of particular letter in output word**

**-add ability to choose desired word length**

—if too few words meet user's criteria, should return error message
    
—then show the next best words with fewer/greater letters
    
**-move error messages to an error element instead of showing up in results component**

—error: api may be offline
    
—error: you must enter at least one letter in the fields above
    
—error: your search returned no words

# Default README Below

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
