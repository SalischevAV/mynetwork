import React from 'react';

function ChatUser(props) {
    return (
        <div>
            <button className='btn btn-outline-success btn-sm' onClick={props.btnChatClick} >chat</button>{props.user.name}
        </div>
    )
}

export default ChatUser
