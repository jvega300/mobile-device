# mobile-device
React project with Store and Sagas


# Developer Notes

This app is created with Create React App. Show commands to start, test, build below.

The application architecture comprises 1 page, 2 containers, and shared components. 

State management of the applications aworks under redux and sagas for side effects.

Every 60 min data will be reloaded. User will have an alert messge.

User can searh for products. This search is stored so, if page is reloaded, search pattern willl be applied for new render. This action is developed for home -> detail -> home navigation rutine.

For now, if user wants to clear search term, text must be deleted from search input. A Clear button would be a solution.

If price is not informed, there is no action to add product to cart on detail view, so product can´t be added to basket. Message will be shown. 
Card component will show a "Not Available" text as well if price is not informed.

React Bootstrap is used for Layout.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
