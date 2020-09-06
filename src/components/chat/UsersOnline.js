import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { AppUserContext } from '../authComponents/AppUser';
import { refreshUserList } from '../../redux/actions/actionChat';
import ChatUser from './ChatUser';

const socket = io();


function UsersOnline() {
    const dispatch = useDispatch();
    const AppUser = useContext(AppUserContext);
    const userList = useSelector(state => state.chat.userList);
    socket.on('register', data => dispatch(refreshUserList(data)));
    socket.on('unregister', data => dispatch(refreshUserList(data)));
    // socket.on('broadcast', data => dispatch(refreshUserList(data)));
    useEffect(
        () => {
            if(!!AppUser._id){
            socket.emit('register', AppUser._id);
            }
            return () => {
                socket.emit('unregister', AppUser._id);
            }
        }, []);

    return (
        <div>
            <h5>users online</h5>
            <div>
                {userList.map(
                    user => (user._id != AppUser._id) ?
                        (<ChatUser user={user} key={user._id} btnChatClick={() => socket.emit('chat', { message: 'qwe asd' })} />) :
                        null
                )}
            </div>
        </div>
    )
}

export default UsersOnline
