import './Statistic.scss';
import {useEffect, useState} from 'react';
import {IconButton} from '../IconButton/IconButton';
import {CircleStatistic} from '../CircleStatistic/CircleStatistic.js';

export const Statistic = () => {
    const [percentLeft, setPercentLeft] = useState(0);
    const [percentRight, setPercentRight] = useState(0);

    useEffect (() => {
        const getPercent = (percent) => percent === 100 ? 0 : percent +1;
        const leftInterval = setInterval (() => {
            setPercentLeft (getPercent)
        }, 100)
        const rightInterval = setInterval(() => {
            setPercentRight (getPercent)
        }, 200)

        return () => {
            clearInterval(leftInterval);
            clearInterval(rightInterval);
        }
    }, [])

    const onShare = () => {
        alert('ON SHARE')
    }

    return (
        <div className="statistic">
            <div className="statistic__label">YOUR MONEY</div>
            <div className="statistic__data-holder">
                <div className="statistic__balance">$898,00</div>
                <IconButton icon="share-icon" onClick={onShare}/>                
            </div>
            <div className="statistic__label">MONEY SPENT</div>
            <div className="statistic__data-holder">
                <CircleStatistic label="last month" percent={percentLeft} disabled
                >$208,00</CircleStatistic>
                <CircleStatistic label="this Month" percent={percentRight}
                >$328,00</CircleStatistic>
            </div>
        </div>
    )
}