export default function ColorList({ color, setColor }) {
    return (
        <div>
            <div onClick={setColor} className="color-item" style={{ '--bg-color': color }}></div>

        </div>
    )
}