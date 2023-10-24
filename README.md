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

export default resList;
import resList from "../utils/mockdata";

# Named export / import

export const LOGO_URL =
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy74aAasUvsShzcGg5nTMO9Nd34w09s9wmQg&usqp=CAU";

import { LOGO_URL } from "../utils/constants";

# React architecture

Virtual DOM
Reconciliation algorithm (React Fiber)
Diff algorithm

- Read this:
  https://github.com/acdlite/react-fiber-architecture

# 2 types of routing in web apps

- Client Side Routing
- Server Side Routing
