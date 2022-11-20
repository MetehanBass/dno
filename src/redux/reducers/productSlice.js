import { createSlice } from "@reduxjs/toolkit";
import { productData } from "dummyData";

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: productData,
    selectedProduct: {},
  },

  reducers: {
    setSelectedProduct: (state, action) => {
      state.allProducts.map((item) => {
        if (item.id === action.payload) {
          return (state.selectedProduct = item);
        }
        return true;
      });
    },
  },
});

export const { setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;
