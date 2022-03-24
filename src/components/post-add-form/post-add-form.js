import React from "react";
import './post-add-form.css'

const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
            type="text"
            placeholder="O chem dumaesh?"
            className="form-control new-post-label"
            />
            <button 
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => onAdd('Hello')}>
                Dobavit`</button>
        </div>
    )
}

export default PostAddForm;