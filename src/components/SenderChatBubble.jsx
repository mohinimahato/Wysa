import User from '../assets/images/User.png';
export default function SenderChatBubble({ message }) {
    return (
        <div className="d-flex align-items-baseline text-end justify-content-end mb-1">
            <div className="pe-1">
                <div>
                    <div className="card card-text d-inline-block p-2 px-3 m-1">{message}</div>
                </div>
            </div>
            <div className="position-relative avatar rounded-circle pt-2 mt-1 text-center" style={{ color: "#388794", fontFamily: "Roboto", fontWeight: "500" }}>

                <img src={User}
                    className="img-fluid rounded-circle w-75" alt="" />
            </div>
        </div>
    )
}