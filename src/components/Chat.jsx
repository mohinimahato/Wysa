import { useNavigate } from 'react-router-dom';
import chatbotAvatar from '../assets/images/chatbotAvatar.png';
import { useState } from 'react';
import ChatInput from './ChatInput';
export default function Chat() {
    const navigate = useNavigate();

    return (
        <div>
            <div className='col-12 col-md-4 mx-auto mt-4'>
                <button className='border-light  rounded-3 py-2 px-5 login-btn' onClick={() => {
                    navigate("/")
                }}>Chat</button>
                <div class="card-body p-4">


                    <div class="d-flex align-items-baseline mb-4">
                        <div class="position-relative avatar">
                            <img src={chatbotAvatar}
                                class="img-fluid rounded-circle" alt="" />
                        </div>
                        <div class="pe-2">
                            <div>
                                <div class="card card-text d-inline-block py-2 px-3 m-1 card-beginning">Hi there 👋
                                </div>
                            </div>
                            <div>
                                <div class="card card-text d-inline-block p-2 px-3 m-1 card-middle">I'm Wysa an AI chatbot built by therapists.
                                </div>
                            </div>
                            <div>
                                <div class="card card-text d-inline-block p-2 px-3 m-1 card-middle">I'm here to understand your concerns and connect you wth the best resources available to support you
                                </div>
                            </div>
                            <div>
                                <div class="card card-text d-inline-block p-2 px-3 m-1 card-last">Can I help?
                                </div>
                            </div>

                        </div>


                    </div>

                    <div class="d-flex align-items-baseline text-end justify-content-end mb-4">
                        <div class="pe-2">
                            <div>
                                <div class="card card-text d-inline-block p-2 px-3 m-1">Sure</div>
                            </div>
                            <div>
                                <div class="card card-text d-inline-block p-2 px-3 m-1">Let me know when you're available?
                                </div>
                            </div>
                            <div>
                                <div class="small">01:13PM</div>
                            </div>
                        </div>
                        <div class="position-relative avatar">
                            <img src="https://nextbootstrap.netlify.app/assets/images/profiles/2.jpg"
                                class="img-fluid rounded-circle" alt="" />
                            <span
                                class="position-absolute bottom-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                            </span>
                        </div>
                    </div>


                </div>
                {/* <ChatInput /> */}
            </div>
        </div>
    )
}