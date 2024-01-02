## How to debug our redux application using redux-devTools extension.

### 🚀How to configure redux-devTools
Install the library with npm i redux-devtools-extension and import devToolsEnhancer from this library in configureStore file.

```javascript
import { legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./tasks";
 
const store = createStore(reducer, devToolsEnhancer({ trace: true }));
 
export default store;
```

We can also do tracing with this extension and even we can import and export log file from this extension.
