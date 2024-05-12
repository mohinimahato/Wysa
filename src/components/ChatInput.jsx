import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ChatInput() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialMessage = queryParams.get('message') || '';

    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState(initialMessage);

    const sendMessage = () => {
        const userMessage = userInput.trim();
        if (userMessage !== '') {
            displayMessage('You', userMessage);
            setUserInput('');
        }
    };

    const displayMessage = (sender, message) => {
        setMessages([...messages, `${sender}: ${message}`]);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    useEffect(() => {
        // Simulate receiving a message after 2 seconds
        const timer = setTimeout(() => {
            displayMessage('ChatGPT', 'Hello! How can I help you today?');
        }, 2000);

        return () => clearTimeout(timer);
    }, []); // Empty dependency array to only run once on component mount

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className="chat-message">{message}</div>
                ))}
            </div>
            <div style={{ display: 'flex' }}>
                <input
                    type="text"
                    className="chat-input"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={handleKeyPress}
                />
                <button className="send-button" onClick={sendMessage}>
                </button>
            </div>
        </div>
    );
}

