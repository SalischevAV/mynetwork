import React, { useState } from 'react';
import { useFormik } from 'formik';
import userCreateSchemaValidation from '../../services/userCreateSchemaValidation';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/actions/actionsUser';
import Modal from '../modal/Modal';
import app from '../../auth/base';

const modalBodyStyle = {
    background: 'white',
    padding: '2rem',
}
const userData = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    password: ''
}

export const UserCreateFormWithValidation = ({ history }) => {
    const [user, setUser] = useState(userData);
    const dispatch = useDispatch();
  
    const formik = useFormik({
        initialValues: userData,
        onSubmit: (values) => {
            const newUser = {
                name: formik.values.name,
                username: formik.values.username,
                email: formik.values.email,
                phone: formik.values.phone,
                website: formik.values.website,
                password: formik.values.password
            }
            console.log(newUser)
    
            app
                .auth()
                .createUserWithEmailAndPassword(formik.values.email, formik.values.password);
    
            app
                .auth()
                .onAuthStateChanged(currentUser => {
                    if (currentUser) {
                        currentUser.updateProfile({
                            displayName: formik.values.username,
                            email: formik.values.email,
                            phoneNumber: formik.values.phone,
                        })
                        dispatch(createUser({ ...newUser, firebaseId: currentUser.uid }));
                    }
                })
            
            formik.resetForm(userData);
        },
        validationSchema: userCreateSchemaValidation,
    });

    const closeHandler = () => {
        setUser({ isOpen: false });
        formik.resetForm(userData);
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
                            <form onSubmit={formik.handleSubmit} >
                                <div className="form-group">
                                    <label htmlFor="name">Full name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name='name'
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.name &&
                                        formik.touched.name &&
                                        <div className="alert alert-danger">{formik.errors.name}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userName">User Name(Login)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name='username'
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.username &&
                                        formik.touched.username &&
                                        <div className="alert alert-danger">{formik.errors.username}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email"
                                        className="form-control"
                                        id="email"
                                        name='email'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    {formik.errors.email &&
                                        formik.touched.email &&
                                        <div className="alert alert-danger">{formik.errors.email}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor=" phone">Phone number</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        name='phone'
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        //pattern="0[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                                        placeholder='0xx-xxx-xx-xx'
                                    />
                                    <small id="telHelp" className="form-text text-muted">We'll never share your phone with anyone else.</small>
                                    {formik.errors.phone &&
                                        formik.touched.phone &&
                                        <div className="alert alert-danger">{formik.errors.phone}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="website">Web-site</label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        id="website"
                                        name='website'
                                        value={formik.values.website}
                                        onChange={formik.handleChange}
                                        placeholder="https://example.com"
                                        //pattern="https://.*"
                                        size="30"
                                    />
                                    {formik.errors.website &&
                                        formik.touched.website &&
                                        <div className="alert alert-danger">{formik.errors.website}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name='password'
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.password &&
                                        formik.touched.password &&
                                        <div className="alert alert-danger">{formik.errors.password}</div>}
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
};
