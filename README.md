# Mobile-device
React project with Store and Sagas

# Online deployment
Project is deployed on GitHub Pages: https://jvega300.github.io/mobile-device


# Developer Notes

This app is created with Create React App. Show commands to start, test, build below.

The application architecture comprises 1 page, 2 containers, and shared components. 

State management of the applications works under redux and sagas for side effects.

Every 60 min data will be reloaded. User will have an alert messge.

User can searh for products. This search is stored so, if page is reloaded, search pattern willl be applied for new render. This action is developed for home -> detail -> home navigation rutine.

For now, if user wants to clear search term, text must be deleted from search input. A Clear button would be a soluction.

If price is not informed, there is no action for add to cart on detail viwe, so product can´t be added to basket. Card component will show a "Not Available" as well.

React Bootstrap is used for Layout.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `start`

Run npm run start to launch localhost development server.
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `linter`
Run npm run lint to launch code inspection.


### `test`

Run npm run test.
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
Coverage is setted in the script. It´s launched and documents are saved on /coverage folder.

### `build`

Run npm run build.
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
