import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./country-slice";
import ApiSlice from "./api-slice";

const store =configureStore({
    reducer:{country:countrySlice.reducer,api:ApiSlice.reducer}
})

export default store;