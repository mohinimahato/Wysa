import { useNavigate } from 'react-router-dom';
export default function Chat() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='col-12 col-md-4 mx-auto mt-4'>
                <button className='border-light  rounded-3 py-2 px-5 login-btn' onClick={() => {
                    navigate("/")
                }}>Chat</button>
            </div>
        </div>
    )
}