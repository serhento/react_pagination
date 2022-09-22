import axios from "axios";
import {AppDispatch} from "../index";
import {singlePhotoSlice} from "../slices/singlePhotoSlice";

export const fetchPhoto =(id: number)=> {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(singlePhotoSlice.actions.fetching())
            const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
            dispatch(singlePhotoSlice.actions.fetchSuccess(
                res.data
            ))
        } catch (e) {
            dispatch(singlePhotoSlice.actions.fetchError(e as Error))
        }
    }
}