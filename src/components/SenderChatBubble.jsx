
export default function SenderChatBubble({ message }) {
    return (
        <div className="d-flex align-items-baseline text-end justify-content-end mb-2">
            <div className="pe-1">
                <div>
                    <div className="card card-text d-inline-block p-2 px-3 m-1">{message}</div>
                </div>
            </div>
            <div className="position-relative avatar">
                <img src="https://nextbootstrap.netlify.app/assets/images/profiles/2.jpg"
                    className="img-fluid rounded-circle" alt="" />
            </div>
        </div>
    )
}