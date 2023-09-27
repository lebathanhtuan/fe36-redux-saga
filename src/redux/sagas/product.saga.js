import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

import {
  getProductListRequest,
  getProductListSuccess,
  getProductListFailure,
  createProductRequest,
  createProductSuccess,
  createProductFailure,
} from "../slicers/product.slice";

function* getProductListSaga(action) {
  try {
    const result = yield axios.get("http://localhost:4000/products");
    yield put(getProductListSuccess({ data: result.data }));
  } catch (e) {
    yield put(getProductListFailure({ error: "Lỗi" }));
  }
}

function* createProductSaga(action) {
  try {
    const { data } = action.payload;
    yield axios.post("http://localhost:4000/products", data);
    yield put(getProductListRequest());
    yield put(createProductSuccess());
  } catch (e) {
    yield put(createProductFailure({ error: "Lỗi" }));
  }
}

export default function* productSaga() {
  yield takeEvery(getProductListRequest, getProductListSaga);
  yield takeEvery(createProductRequest, createProductSaga);
}
