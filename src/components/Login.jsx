import { useNavigate } from 'react-router-dom';
import wysaLogo from '../assets/images/wysa-logo-optimized.svg';
export default function Login() {
    const navigate = useNavigate();
    return (
        <div className='my-auto login-container mt-5 mt-md-0'>
            <div className="col-10 col-md-6 mx-auto">
                <div className="col-12 col-md-8 mx-auto form-box px-3 px-md-5 py-4">
                    <div className='col-8 col-md-5 mx-auto'>
                        <div className='col-12'>
                            <img src={wysaLogo} alt="Login" style={{ width: '10rem' }} />
                        </div>
                    </div>
                    <h4 className='greetingText text-center ' style={{ color: "#388794" }}>Hello, Human</h4>
                    <div className="my-4">
                        <form >
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text pt-3 pb-3 px-3"><i class="fa fa-user" style={{ color: "#388794" }}></i></span>
                                </div>
                                <input type="text" className="form-control" name='username' id='username' placeholder="Username" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend h-100">
                                    <span className="input-group-text pt-3 pb-3 px-3"><i class="fa fa-lock" style={{ color: "#388794" }} ></i></span>
                                </div>
                                <input type="password" className="form-control" name='password' id='password' placeholder="Password" />
                            </div>
                            <div className='col-6 col-md-4 mx-auto mt-4'>
                                <button className='border-light  rounded-3 py-2 px-5 login-btn' onClick={() => {
                                    navigate("/chat")
                                }}>Login</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

        </div>
    )

}