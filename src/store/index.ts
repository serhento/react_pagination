import {combineReducers, configureStore} from "@reduxjs/toolkit";
import photoReducer from './slices/photosSlice';
import singlePhotoReducer from './slices/singlePhotoSlice';

const rootReducer = combineReducers({
    photo: photoReducer,
    singlePhoto: singlePhotoReducer
})

export const setupStore =()=> {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']