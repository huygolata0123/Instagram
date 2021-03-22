import React, {useEffect} from 'react';

import './Content.css';
import posts from "../../data/posts/posts.json";
import Post from "../post/Post";

interface Props {
    selectPost: Function;
}

export default function Content( {selectPost}: Props) {
    useEffect(() => {
        console.log(posts);
    }, []); 
    return (
     <div className="content-container">
        <div className="content">{posts.map((post,index) => (
        <Post key={index} post={post} selectPost={selectPost} />
        ))}
            </div>
        </div>
    );
}