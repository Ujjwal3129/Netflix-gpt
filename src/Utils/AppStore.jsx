import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
// import { composeWithDevTools } from 'redux-devtools-extension';



const AppStore = configureStore({
  reducer: {
    user : userReducer,
  },
});

export default AppStore;
