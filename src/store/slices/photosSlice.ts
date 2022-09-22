import {PhotoType} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type PhotosSliceType = {
    loading: boolean,
    error: string,
    photos: PhotoType[]
}

const initialState: PhotosSliceType = {
    loading: false,
    error: '',
    photos: []
}

export const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<PhotoType[]>) {
            state.loading = false;
            state.photos = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message
        }
    }
})

export default photoSlice.reducer;