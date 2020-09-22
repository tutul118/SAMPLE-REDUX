import { configureStore } from "@reduxjs/toolkit";
import count from './count';

export interface AppState{
    count: number;
}

export default configureStore({reducer: {count}});