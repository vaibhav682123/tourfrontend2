
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : {
            creatine: {
                quantity: 0,
                price: 200,
            },
            wheyprotienisolate: {
                quantity: 0,
                price: 1800,
            },
            BCAA: {
                quantity: 0,
                price: 500,
            },
        },
    subTotal: localStorage.getItem("cartPrices")
        ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
        : 0,
    tax: localStorage.getItem("cartPrices")
        ? JSON.parse(localStorage.getItem("cartPrices")).tax
        : 0,
    shippingCharges: localStorage.getItem("cartPrices")
        ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
        : 0,
    total: localStorage.getItem("cartPrices")
        ? JSON.parse(localStorage.getItem("cartPrices")).total
        : 0,
    shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
};

export const cartReducer = createReducer(initialState, {
    creatineIncrement: (state) => {
        state.cartItems.creatine.quantity += 1;
    },
    wheyprotienisolateIncrement: (state) => {
        state.cartItems.wheyprotienisolate.quantity += 1;
    },
    BCAAIncrement: (state) => {
        state.cartItems.BCAA.quantity += 1;
    },
    creatineDecrement: (state) => {
        state.cartItems.creatine.quantity -= 1;
    },
    wheyprotienisolateDecrement: (state) => {
        state.cartItems.wheyprotienisolate.quantity -= 1;
    },
    BCAADecrement: (state) => {
        state.cartItems.BCAA.quantity -= 1;
    },

    calculatePrice: (state) => {
        state.subTotal =
            state.cartItems.creatine.price *
            state.cartItems.creatine.quantity +
            state.cartItems.wheyprotienisolate.price *
            state.cartItems.wheyprotienisolate.quantity +
            state.cartItems.BCAA.price *
            state.cartItems.BCAA.quantity;

        state.tax = state.subTotal * 0.18;
        state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
        state.total = state.subTotal + state.tax + state.shippingCharges;
    },

    emptyState: (state) => {
        state.cartItems = {
            creatine: {
                quantity: 0,
                price: 200,
            },
            wheyprotienisolate: {
                quantity: 0,
                price: 1800,
            },
            BCAA: {
                quantity: 0,
                price: 500,
            },
        };

        state.subTotal = 0;
        state.shippingCharges = 0;
        state.tax = 0;
        state.total = 0;
    },

    addShippingInfo: (state, action) => {
        state.shippingInfo = {
            hNo: action.payload.hNo,
            city: action.payload.city,
            state: action.payload.state,
            country: action.payload.country,
            pinCode: action.payload.pinCode,
            phoneNo: action.payload.phoneNo,
        };
    },
});
