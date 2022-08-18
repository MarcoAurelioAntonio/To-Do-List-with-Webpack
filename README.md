![Microverse](https://img.shields.io/badge/Microverse-blueviolet) ![HTML](https://img.shields.io/badge/-HTML-orange) ![CSS](https://img.shields.io/badge/-CSS-blue) ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)

# To Do List
- In this project, you will build a simple HTML list of To Do tasks. The list will be styled according to the specifications listed later in this lesson. This simple web page will be built using webpack and served by a webpack dev server.

### Prerequisites
- VIsual Studio Code.

### Project requirements
- Set up a new project with webpack that is based on the webpack exercise you have already completed.
- Create an index.html file and write your HTML markup here. 
- Create an empty To Do List placeholder( `<div>` or `<ul>` element). 
- The index.html file must be set as a template using the HTML Webpack Plugin.
- Create an index.js file and set an array of some simple to do tasks (array of objects). 

Each task object should contain three keys:
    - description [string].
    - completed [bool].
    - index: [number].
    
- Write a function to iterate over the tasks array and populate an HTML list item element for each task.
- On page load render the dynamically created list of tasks in the dedicated placeholder. The list should appear in order of the index values for each task.
- Create a style.css and set rules for the To Do List. CSS must be loaded by Webpack Style/CSS Loader. Your list should be a clone of the part of the minimalist project captured in the video below.

## Built With
- **HTML/CSS & JS best practices:** Correct use of tags, elements, properties and syntax.
- **GitHub flow:** Correct use of Branches for deployment and features development.
- **Linters Check:** Local and Pull Request check for errors, bugs and stylistic errors in code.
- **Webpack:** used as a bundle to compile JavaScript modules.

## 🌎 Live Demo:
- [To Do List]()

### Setup
1. Download the **Zip** file or clone the repo with:
```bash
git clone https://github.com/MarcoAurelioAntonio/To-Do-List-with-Webpack.git 
```
3. To access cloned directory run:
```bash
cd To-Do-List-with-Webpack
```
3. Open it with the live server

### Install
> To install linters and other project's dependencies run:
```bash
npm install
```
## Run Test for Linters

For tracking linter errors locally you need to follow these steps:

1. For tracking linter errors in HTML files run:
```bash 
npx hint .
```

2. For tracking linter errors in CSS or SASS files run:

```bash
npx stylelint "\*_/_.{css,scss}"
```

3. For tracking linter errors in JavaScript files run:

```bash
npx eslint .
```

## Authors 
👤 **Gustavo Porcilio**

- GitHub: [@MarcoAurelioAntonio](https://github.com/MarcoAurelioAntonio)
- Twitter: [@gustavoporcilio](https://twitter.com/gustavoporcilio)
- LinkedIn: [Gustavo Porcilio](https://www.linkedin.com/in/gustavo-porcilio-4496a223a/)

## 🤝 Contributing

- Contributions, issues, and feature requests are welcome!
- Feel free to check the [issues page](https://github.com/MarcoAurelioAntonio/To-Do-List-with-Webpack/issues)

## Show your support
- Give a ⭐️ if you like this project!

## 📝 License
- This project is [MIT](./LICENSE) licensed.
