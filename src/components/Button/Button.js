import './Button.scss'

export const Button = (props) => {
    const {onClick, children, className} = props;
    let cls = "btn";

    if (className) {
        cls += ` ${className}`
    }

    return (
        <button className={cls} onClick={onClick}>
            <span>{children}</span>
            </button>
    )
}
