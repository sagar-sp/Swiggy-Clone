# Namaste React

# Parcel

- Dev Build
- Local server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching = Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Differential Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - Remove Unnecessary Code

# Food Ordering App

    /**

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
-      - RestaurantCard
-        - Img
-        - Name of res, Star Rating, cuisines, delivery time
- Footer
- - Copyright
- - Address
- - Contact
    \*/

Two type of export/import
export default
export default Component
import Component from "path";

export Named
export const Component
import { component } from "path";

# React Hooks

Normal Js Utility Function

- useState() - Super powerful State Variable in React
- useEffect()

# Types of routing

- Client side Routing - React Uses client side routing
- Server Side Routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build Our store
- Connect our store to our app
- Create a slice(CartSlice)
- dispatch(action)
- selector

# Types of testing(Developer)

- Unit Testing
- Integration testing
- E2E Testing - End to End Testing

# Setting up Testing in our app

- Install React Testing Library
- Install Jest
- Install Babel Dependencies
- Configure Babel
- Configure Parcel Config File to disable default babel transpilation
- Jest Configuration - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make jsx works in test cases
- Include @babel/preset-react inside my babel config
- Install - npm i -D @testing-library/jest-dom