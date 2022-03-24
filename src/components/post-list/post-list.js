import React from "react";
import PostListItem from "../post-list-item";
import './post-list.css'

const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem label="Going to learn React" />
            <PostListItem label="Okay" />
            <PostListItem label="Have a rest" />
        </ul>
    )
}

export default PostList;