# App with React

This app was created following the instruction in [React js Crash Course](https://www.youtube.com/watch?v=w7ejDZ8SWv8) with additional modifications and custom CSS.

Original code available at [bradtraversy/react-crash-2021](https://github.com/bradtraversy/react-crash-2021)

## Start React JS
We use `npx` and `npm` to create the skeleton (*template dependencies* ~ 120 packages) of our app.

    npx create-react-app APP_NAME

This also creates a folder for us.
(<small>The app can be renamed later on using `npx react-native-rename <newName>`</small>)

Now we can change directory and start our project:

    cd my-app-folder
    nmp start

This will open the page `localhost:3000` in the browser (our dev environment). Here we can see live what we're implementing in our app.

## Steps

The main file for our app is `MY_APP/src/App.js`. This is the js file which creates the HTML elements inside the root tag. 
The folder `/public` contains some useful templates and files: logos, index.html, robots.txt.

To create our App we proceed as follows:

<small>(In VS Code make sure to install the ES7 React extension, which provides many useful snippets for creating classes and other objects.)</small>

+ Create a subfolder `src/components` where we're going to implement the single components of our App to inject then in App.js.
    + `Header.js` 
    + `Button.js`
    + `Tasks.js` for the array
    + `TaskView.js` for the single task



    The nice thing about these components is that, we can reuse them
    as often we wish to, optionally changing params or css.

All those files (components) will be imported in the main file `App.js`

Icons for the `delete` functions were inported with:
        
        cd MY_APP
        npm i react-icons

### New for me

**The arrow operator**:
In JS (ES 6) the arrow operator (=>) skips the keywords function and return as well as parenthesis. The basic syntax is `Identifier` => `Expression`.