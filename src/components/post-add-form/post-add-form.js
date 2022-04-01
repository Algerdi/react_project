import React, {Component} from "react";
import './post-add-form.css'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
        this.onValueCHange= this.onValueCHange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    onValueCHange(e) {
        this.setState({
            text: e.target.value,
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: '',
        });
    }

    render() {
        return (
            <form 
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}>
                <input
                type="text"
                placeholder="O chem dumaesh?"
                className="form-control new-post-label"
                onChange={this.onValueCHange}
                value={this.state.text}
                />
                <button 
                    type="submit"
                    className="btn btn-outline-secondary">
                    Dobavit`</button>
            </form>
        )
    }
    
}