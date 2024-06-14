import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import cl from "./style.module.css";

interface PostItemProps {
    post: IPost;
}


const PostItem: FC<PostItemProps> = ({post}) => {
    return (
        <div className={cl.cont}>
            {post.id} {post.title} - {post.body}
        </div>
    );
};

export default PostItem;