import React, { useState } from 'react';

export default function ChatInput({ onSendMessage }) {
    const [message, setMessage] = useState('');

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <div className="col-md-4 mx-auto fixed-bottom pb-3">
            <div className="col-12  ">
                <div className="d-flex" style={{ background: "white" }}>
                    <input
                        type="text"
                        className="col-12 chatinput ps-3"
                        placeholder="Type your message here.."
                        value={message}
                        onChange={handleMessageChange}
                    />
                    <button className="sendMsgBtn" onClick={handleSendMessage}>
                        <i className="fas fa-paper-plane" style={{ color: "#fff" }}></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
