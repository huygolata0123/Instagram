import React from 'react'

import Close from "@material-ui/icons/Close"

import './Modal.css'
import { Post } from '../../models/post/Post'
import Button from '../button/Button';
import MoreHoriz from "@material-ui/icons/MoreHoriz"
import Comment from '../comment/Comment'

import Favorite from "@material-ui/icons/Favorite";
import ModelComment from "@material-ui/icons/ModeComment";
import Send from "@material-ui/icons/Send";
import Bookmark from "@material-ui/icons/Bookmark";

interface Props {
    post ?: Post;
    onClose: Function;
}

export default function Modal( {onClose, post }: Props ) {
    return ( 
    <div className="modal-container">
        <div onClick={() => onClose() } className="close-modal hoverables">
            <Close fontSize="large" />
        </div>
        <div className="modal">
                <img className="modal-image" src={post?.image_url} />
             <div className="modal-content-section modal-section">
         <div className="modal-top-section"  >
            <img className="profile-image hoverable" src={post?.profile_url} />
            <div className="modal-username hoverable">{post?.profile_name}</div>
             <Button label="Follow" />
             <div className="spacer"></div>
              <MoreHoriz className="hoverable" />
              </div>
                <div className="modal-comment-section modal-section">
             <div className="comment-container">
        <img className="profile-image hoverable" src={post?.profile_url} />
        <div>
            <div>
                <span className="username hoverable">{post?.profile_name}</span>
                <span>{post?.description}</span>
            </div>    
            </div>
            </div>
                   {post?.comments.map((comment, index) => (
              <Comment comment={comment} />
            ))}
                </div>
                <div className="modal-details-section">
                    <div className="detail-action">
                  <Favorite className="hoverable" />
                  <ModelComment className="hoverable" />
                 <Send />
                    <div className="spacer"></div>
                   <Bookmark className="hoverable" />
                </div>
                <span>{post?.likes} Likes</span>
                </div>
                 <div>Write section</div>
             </div>
            </div>
            </div>
    );
}