import React, {useContext} from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../redux/actions/actionPost';
import Modal from '../modal/Modal';
import {  AppUserContext } from '../authComponents/AppUser';

const modalBodyStyle = {
    background: 'white',
    padding: '2rem',
}



class PostCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            title: '',
            body: '',
            userId: '',
        }   
    }
    

    InputChangeHandler = (event) => {
        event.persist();
        this.setState(previousState => ({
            ...previousState, ...{
                [event.target.name]: event.target.value
            }
        }))
    }

    submitHandler = event => {
        event.preventDefault();

        const appUser = this.context;

        const newPost = {
            userId: appUser._id,
            title: this.state.title,
            body: this.state.body
        }
        
        this.props.createPost(newPost);
        this.clearState();
    }

    clearState = () => {
        this.setState({
            isOpen: false,
            title: '',
            body: '',
            userId: ''
        })
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.isOpen &&
                    <button className='btn btn-success' onClick={() => this.setState({ isOpen: true })}>Create post</button>
                }
                <Modal>
                    {this.state.isOpen &&
                        <div className='modal'>
                            <div className='modal-body' style={modalBodyStyle}>
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name='title'
                                            value={this.state.title}
                                            onChange={this.InputChangeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="body">Post</label>
                                        <textarea type="text"
                                            className="form-control"
                                            id="body"
                                            name='body'
                                            value={this.state.body}
                                            onChange={this.InputChangeHandler}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-outline-success">Create</button>
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => this.setState({ isOpen: false })}>Close</button>

                                </form>
                            </div>
                        </div>
                    }
                </Modal>
            </React.Fragment>
        )
    }

}

PostCreateForm.contextType = AppUserContext;

const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps)(PostCreateForm)