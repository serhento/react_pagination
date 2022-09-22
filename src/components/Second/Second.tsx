import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hook/redux";
import {fetchPhotos} from "../../store/actions/photoActions";
import {Photos} from "../Photos";
import ReactPaginate from "react-paginate";

export const Second = () => {

    const dispatch = useAppDispatch();
    const {error, photos, loading} = useAppSelector(state => state.photo);

    useEffect(()=> {
        dispatch(fetchPhotos())
    }, [dispatch])

    const [page, setPage] = useState(0);
    const [itemsPerPage] = useState(15);
    const pageCount = Math.ceil(300 / itemsPerPage);

    const pageChangeHandler =({selected}: {selected: number})=> {
        setPage(selected)
    }

    const indexOfLastPost = (page+1) * itemsPerPage; //15
    const indexOfFirstPost = indexOfLastPost - itemsPerPage; //0
    const currentPosts = photos.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="w-5/12 mt-7 relative">
            {loading && <p className="absolute -top-6">Loading...</p>}
            {error && <p className="text-lg text-red-600">{error}</p>}

            <Photos currentPosts={currentPosts}/>

            {/*<input className="border border-black rounded-md" placeholder="Type here..." type="text"/>*/}

            <ReactPaginate
                forcePage={page}
                breakLabel="..."
                breakClassName="mr-2"
                nextLabel=">"
                onPageChange={pageChangeHandler}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                containerClassName="flex"
                pageClassName="py-1 px-2 border mr-2"
                previousClassName="py-1 px-2 border mr-2 bg-slate-100"
                nextClassName="py-1 px-2 border bg-slate-100"
                activeClassName="bg-gray-500 text-white"
            />
        </div>
    );
};