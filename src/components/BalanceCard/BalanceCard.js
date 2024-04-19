import { Button } from '../Button/Button';
import './BalanceCard.scss'

export const BalanceCard = () => {
    const onClick = () => {
        alert('Add Money')
    }
    return (
        <div className="balance-card">
            <div className="balance-card__label">Current Balance</div>
            <div className="balance-card__balance">$76000</div> 
            <div className="balance-card__info">
                <div>1234 5678 9012 3456</div>
                <div>12/23</div>
            </div>        
            <Button 
            className="balance-card__btn"
            onClick={onClick}>
                Add money
            </Button>
        </div>
    )
}

