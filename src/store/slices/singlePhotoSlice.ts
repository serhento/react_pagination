import {PhotoType} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type PhotoSliceType = {
    loading: boolean,
    error: string,
    photo: PhotoType
}

const initialState: PhotoSliceType = {
    loading: false,
    error: '',
    photo: {
        albumId: 0,
        id: 0,
        title: '',
        url: '',
        thumbnailUrl: ''
    }
}

export const singlePhotoSlice = createSlice({
    name: 'singlePhoto',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<PhotoType>) {
            state.loading = false;
            state.photo = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message
        }
    }
})

export default singlePhotoSlice.reducer;