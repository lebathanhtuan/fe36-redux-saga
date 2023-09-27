import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: {
    data: [],
    loading: false,
    error: null,
  },
  productDetail: {
    data: {},
    loading: false,
    error: null,
  },
  createProductData: {
    loading: false,
    error: null,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    // getProductList
    getProductListRequest: (state, action) => {
      state.productList.loading = true;
      state.productList.error = null;
    },
    getProductListSuccess: (state, action) => {
      const { data } = action.payload;
      state.productList.data = data;
      state.productList.loading = false;
    },
    getProductListFailure: (state, action) => {
      const { error } = action.payload;
      state.productList.loading = false;
      state.productList.error = error;
    },
    // createProduct
    createProductRequest: (state, action) => {
      state.createProductData.loading = true;
      state.createProductData.error = null;
    },
    createProductSuccess: (state, action) => {
      state.createProductData.loading = false;
    },
    createProductFailure: (state, action) => {
      const { error } = action.payload;
      state.createProductData.loading = false;
      state.createProductData.error = error;
    },
  },
});

export const {
  getProductListRequest,
  getProductListSuccess,
  getProductListFailure,
  createProductRequest,
  createProductSuccess,
  createProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
