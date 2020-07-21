import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../redux/actions/actionsUser';

const modalStyle = {
    position: 'relative',
    display: 'flex',
}

const modalBodyStyle = {
    background: 'white',
    padding: '2rem',
}

class UserCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            name: '',
            username: '',
            email: '',
            phone: '',
            website: '',
        };
    }

    submitHandler = event => {
        event.preventDefault();
        //const userObject ={...this.state};
       
        const newUser = {...this.state}

        this.props.createUser(newUser);
        this.setState({
            isOpen: false,
            name: '',
            username: '',
            email: '',
            phone: '',
            website: '',
        })
    }

    changeInputHandler = event =>{
        event.persist();
        this.setState(previousState =>({...previousState, ...{
            [event.target.name]: event.target.value
        }}));
    }

    render(){
        return (
            <React.Fragment>
                {!this.state.isOpen &&
                    <button className="btn btn-success" onClick={() => this.setState({ isOpen: true })}> Create user</button>
                }
                {this.state.isOpen &&
                    <div className='modal' style={modalStyle}>
                        <div className='modal-body' style={modalBodyStyle}>
                            <form onSubmit={this.submitHandler} >
                                <div className="form-group">
                                    <label htmlFor="name">Full name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name='name'
                                        value={this.state.name}
                                        onChange={this.changeInputHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userName">User Name(Login)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name='username'
                                        value={this.state.username}
                                        onChange={this.changeInputHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email"
                                        className="form-control"
                                        id="email"
                                        name='email'
                                        value={this.state.email}
                                        onChange={this.changeInputHandler}
                                    />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor=" phone">Phone number</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        name='phone'
                                        value={this.state.phone}
                                        onChange={this.changeInputHandler}
                                        pattern="0[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                                        placeholder='0xx-xxx-xx-xx'
                                    />
                                    <small id="telHelp" className="form-text text-muted">We'll never share your phone with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="website">Web-site</label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        id="website"
                                        name='website'
                                        value={this.state.website}
                                        onChange={this.changeInputHandler}
                                        placeholder="https://example.com"
                                        pattern="https://.*"
                                        size="30"
                                    />
                                    <small id="telHelp" className="form-text text-muted">We'll never share your phone with anyone else.</small>
                                </div>
                                <button type="submit" className="btn btn-success">Create</button>

                            </form>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = {
    createUser
}

export default connect(null, mapDispatchToProps)(UserCreateForm);
/*
export default () => {
    const [isOpen, setIsopen] = useState(false);

    return (
        <React.Fragment>
            <button className="btn btn-success" onClick={() => setIsopen({ isOpen: true })}> Create user</button>
            {isOpen &&
                <div className='modal' style={modalStyle}>
                    <div className='modal-body' style={modalBodyStyle}>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Full name</label>
                                <input type="text" className="form-control" id="name" name='name' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userName">User Name(Login)</label>
                                <input type="text" className="form-control" id="userName" name='userName' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" name='email' />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="tel">Phone number</label>
                                <input type="tel" className="form-control" id="tel" name='tel' pattern="0[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder='0xx-xxx-xx-xx' />
                                <small id="telHelp" className="form-text text-muted">We'll never share your phone with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="url">Web-site</label>
                                <input type="url" className="form-control" id="url" name='url' placeholder="https://example.com" pattern="https://.*" size="30" />
                                <small id="telHelp" className="form-text text-muted">We'll never share your phone with anyone else.</small>
                            </div>
                            <button type="button" className="btn btn-success" onClick={() => setIsopen({ isOpen: false })}>Create</button>

                        </form>
                    </div>
                </div>
            }{console.log('qweqwe :' + isOpen.isOpen)}
        </React.Fragment>
    )
}
onClick={() => this.setState({ isOpen: false })}
*/