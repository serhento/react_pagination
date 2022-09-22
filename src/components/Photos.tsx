import React, {FC} from 'react';
import {PhotoType} from "../models/models";
import {Link} from "react-router-dom";

type PhotosType = {
    currentPosts: PhotoType[]
}

export const Photos: FC<PhotosType> = ({currentPosts}) => {

    return (
        <ul className="mb-8">
            {currentPosts.map(post => (
                <li className="w-max bg-slate-300 px-2 py-2 mb-2 cursor-pointer" key={post.id}>
                    <Link to={`/second/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                </li>
            ))}
        </ul>
    );
};