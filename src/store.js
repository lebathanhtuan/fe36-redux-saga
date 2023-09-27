import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import commonReducer from "./redux/slicers/common.slice";
import userReducer from "./redux/slicers/user.slice";
import productReducer from "./redux/slicers/product.slice";
import rootSaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    common: commonReducer,
    user: userReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);
