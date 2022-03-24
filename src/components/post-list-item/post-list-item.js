import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrashCan, faHeart } from '@fortawesome/free-regular-svg-icons';
import './post-list-item.css'

export default class PostListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false,
        };
        this.onImportant = this.onImportant.bind(this)
        this.onLike = this.onLike.bind(this)
    }

    onImportant() {
        this.setState(({important}) => ({
            important: !important,
        }))
    }

    onLike() {
        this.setState(({like}) => ({
            like: !like,
        }))
    }


    render() {

        const {label, onDelete} = this.props;
        const {important, like} = this.state;

        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span 
                className="app-list-item-label"
                onClick={this.onLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                    type="button"
                    className="btn-star btn-sm"
                    onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                        {/* <FontAwesomeIcon icon={faStar} color="red"/> */}
                    </button>
                    <button 
                    type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                        {/* <FontAwesomeIcon icon={faTrashCan}/> */}
                    </button>
                    <i className="fa fa-heart"></i>
                    {/* <FontAwesomeIcon icon={faHeart}/> */}
                </div>
            </div>
        )
    };
}
