import { Block } from '../Block/Block'
import { MenuItem } from './MenuItem.js'
import { useState } from 'react'

const menuItemsIcon = [
    'home-icon',
    'balance-icon',
    'stats-icon',
    'messenger-icon'
]

export const Menu = () => {    
    const [activeIndex, setActiveIndex] = useState(0);
    const setActive = (index) => () => setActiveIndex(index);  
     
    return (
        (
            <Block className="menu" big>            
            {menuItemsIcon.map((item, index) => (
                <MenuItem key={index} isActive={index === activeIndex} onClick={setActive(index)} icon={item} />
            ))}            
        </Block>
        )
    )
}

