import './Actions.scss'
import { Block } from '../Block/Block'

export const Actions = () => {
    const onCopy = () => {
        alert('ON COPY')
    }

    const onShow = () => {
        alert('ON SHOW CCV')
    }

    return (
        <div className="actions" onClick={onCopy}>
        <Block className="action">
            <i  className="ic-copy-icon" />
            <span>COPY CARD NUMBER</span>
        </Block>
        <Block className="action" onClick={onShow}>
            <i  className="ic-cvv-icon" />
            <span>SHOW CVV</span>
        </Block>
    </div>
    )
}

