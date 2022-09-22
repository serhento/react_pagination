import React, {useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hook/redux";
import {fetchPhoto} from "../../store/actions/singlePhotoActions";

export const SinglePost = () => {

    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {photo, loading} = useAppSelector(state => state.singlePhoto);

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(()=> {
        dispatch(fetchPhoto(Number(id)))
    }, [dispatch, id])

    return (
        <div>
            <button className="absolute left-0" onClick={goBack}>Go Back</button>
            {loading && <p>Loading...</p>}
            {photo && (
                <>
                    <h1>{photo.title}</h1>
                </>
            )}
        </div>
    );
};