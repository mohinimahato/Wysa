import { useNavigate } from 'react-router-dom';
import chatbotAvatar from '../assets/images/chatbotAvatar.png';
import { useState } from 'react';
import ChatInput from './ChatInput';
import SenderChatBubble from './SenderChatBubble';

export default function Chat() {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        if (message.trim() !== '') {
            setMessages([...messages, message]);
        }
    };

    return (
        <div>
            <div className='col-4 col-md-6'>
                <button className='border-light  rounded-3 py-md-2 px-md-5 login-btn' onClick={() => {
                    navigate("/")
                }}><i class="fas fa-arrow-left pe-1 pe-md-3" ></i>Back to Login</button>
            </div>


            <div className='col-12 col-md-4 mx-auto mt-4'>

                <div className="card-body p-4">
                    <div className="d-flex align-items-baseline mb-4">
                        <div className="position-relative avatar">
                            <img src={chatbotAvatar} className="img-fluid rounded-circle" alt="" />
                        </div>
                        <div className="pe-2">
                            <div className="card card-text d-inline-block py-2 px-3 m-1 card-beginning">Hi there 👋</div>
                            <div className="card card-text d-inline-block p-2 px-3 m-1 card-middle">I'm Wysa an AI chatbot built by therapists.</div>
                            <div className="card card-text d-inline-block p-2 px-3 m-1 card-middle">I'm here to understand your concerns and connect you with the best resources available to support you.</div>
                            <div className="card card-text d-inline-block p-2 px-3 m-1 card-last">Can I help?</div>
                        </div>
                    </div>
                    {messages.map((msg, index) => (
                        <SenderChatBubble key={index} message={msg} />
                    ))}


                </div>
                <ChatInput onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
}