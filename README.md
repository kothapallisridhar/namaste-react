# Namaste React

- crossorigin
- npm
- Parcel
-

# Parcel

- Dev Build
- Local Server
- HMR: Hot Module Replacement
- File watching algorithm - writtern in C++
- Caching - faster builds
- Image Optimization
- Minification
- Building
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error handling
- HTTPS
- Tree Shaking -remove unused code
- Different DEV and PROD bundles

# Default export / import

- export default resList;
- import resList from "../utils/mockdata";

# Named export / import

- export const LOGO_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy74aAasUvsShzcGg5nTMO9Nd34w09s9wmQg&usqp=CAU";

import { LOGO_URL } from "../utils/constants";

# React architecture

- Virtual DOM
- Reconciliation algorithm (React Fiber)
- Diff algorithm

- Read this:
  https://github.com/acdlite/react-fiber-architecture

# 2 types of routing in web apps

- Client Side Routing
- Server Side Routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Types of Testing (Developer)

- Unit Testing
- Integration Testing
- End to End Testing (E2E)

# Setting up Testing in our App

- Install React Testing Library
- Install jest
- Install Babel dependencies
- Configure Babel
- Configure Parcel config file to disable default Babel transpilation
- Jest Configuration (npx jest --init)
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom (npm i -D @testing-library/jest-dom)
