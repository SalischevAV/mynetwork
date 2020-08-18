import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { createUser } from '../../redux/actions/actionsUser';
import Modal from '../modal/Modal';


const modalBodyStyle = {
    background: 'white',
    padding: '2rem',
}

export default(props)=> {
    const[user, setUser] = useState({});
    const dispatch = useDispatch();
    
    const submitHandler = event => {
        event.preventDefault();       
        const newUser ={
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            website: user.website,
        }
       
        dispatch(createUser(newUser));     
        clearState();
    };

    const closeHandler = ()=>{
        setUser({isOpen: false});
        clearState();
    }

    const clearState = () => setUser({});

    
    const changeInputHandler = event =>{
        event.persist();
        setUser(previousState =>({...previousState, ...{
            [event.target.name]: event.target.value
        }}));
    }

        return (
            <React.Fragment>
                 {!user.isOpen &&
                    <button className="btn btn-warning btn-block" onClick={() => setUser({ isOpen: true })}> I do not have an account</button>
                }
            <Modal>               
                {user.isOpen &&
                    <div className='modal'>
                        <div className='modal-body' style={modalBodyStyle}>
                            <form onSubmit={submitHandler} >
                                <div className="form-group">
                                    <label htmlFor="name">Full name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name='name'
                                        value={user.name}
                                        onChange={changeInputHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userName">User Name(Login)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name='username'
                                        value={user.username}
                                        onChange={changeInputHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email"
                                        className="form-control"
                                        id="email"
                                        name='email'
                                        value={user.email}
                                        onChange={changeInputHandler}
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
                                        value={user.phone}
                                        onChange={changeInputHandler}
                                        //pattern="0[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
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
                                        value={user.website}
                                        onChange={changeInputHandler}
                                        placeholder="https://example.com"
                                        //pattern="https://.*"
                                        size="30"
                                    />
                                    <small id="telHelp" className="form-text text-muted">We'll never share your phone with anyone else.</small>
                                </div>
                                <button type="submit" className="btn btn-outline-success">Create</button>
                                <button type="button" className="btn btn-outline-secondary" onClick={closeHandler}>Close</button>

                            </form>
                        </div>
                    </div>
                }
            </Modal>
            </React.Fragment>
        )
}



//export default UserCreateForm;
