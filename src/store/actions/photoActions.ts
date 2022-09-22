import axios from "axios";
import {AppDispatch} from "../index";
import {photoSlice} from "../slices/photosSlice";

export const fetchPhotos =()=> {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(photoSlice.actions.fetching())
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=300');
            dispatch(photoSlice.actions.fetchSuccess(
                res.data
            ))
        } catch (e) {
            dispatch(photoSlice.actions.fetchError(e as Error))
        }
    }
}