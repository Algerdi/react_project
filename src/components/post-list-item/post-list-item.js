import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrashCan, faHeart } from '@fortawesome/free-regular-svg-icons';
import './post-list-item.css'


const PostListItem = ({label}) => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                type="button"
                className="btn-star btn-sm">
                    
                    <i className="fa fa-star"></i>
                    <FontAwesomeIcon icon={faStar} color="red"/>
                </button>
                <button 
                type="button"
                className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                    <FontAwesomeIcon icon={faTrashCan}/>
                </button>
                <i className="fa fa-heart"></i>
                <FontAwesomeIcon icon={faHeart}/>
            </div>

        </li>
    )
}
export default PostListItem;