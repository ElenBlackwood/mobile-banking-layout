import './MenuItem.scss'

export const MenuItem = ({icon, onClick, isActive}) => {    
    const cls = isActive ? "menu-item active" : "menu-item";
    return (
        <div className={cls} onClick={onClick}>
            <i className={`ic-${icon}`}></i>
            {isActive && (
                <div className="menu-item__dot"></div>
            )}
        </div>
    )
}