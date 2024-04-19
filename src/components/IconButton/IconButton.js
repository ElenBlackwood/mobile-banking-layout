import './IconButton.scss'

export const IconButton = ({icon, onClick}) => {
    return (
        <div className="icon-btn" onClick={onClick}>
            <i className={`ic-${icon}`}></i>

        </div>
    )
}