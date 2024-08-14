

import React from 'react';
import './style.css';
import { icon1, icon2, icon3, icon4 } from '../../s3.Links';

const RewardsIcons = () => {
    return (
        <div className="reward-section">
        <div className='rewards-bg'></div>
            <div className="icons-container">
                <div className='icon-block'>
                    <img src={icon1} alt="Icon" className="icon" />
                    <div className='heading'>Personalised Offers</div>
                    <div className='sub-headings'>Find best Credit Cards based on your spend pattern</div>
                </div>
                <div className='icon-block'>
                    <img src={icon2} alt="Icon" className="icon" />
                    <div className='heading'>Earn Rewards</div>
                    <div className='sub-headings'>Earn Rewards for every successful Credit Card approval</div>
                </div>
                <div className='icon-block'>
                    <img src={icon3} alt="Icon" className="icon" />
                    <div className='heading'>Compare Cards</div>
                    <div className='sub-headings'>Compare your existing Cards with best in the industry</div>
                </div>
                <div className='icon-block'>
                    <img src={icon4} alt="Icon" className="icon" />
                    <div className='heading'>Max Benifits</div>
                    <div className='sub-headings'>Get maximum benefits from your Credit Cards</div>
                </div>
            </div>
            <div className='tools'>
            <img src='/Frame 1.svg' alt="Icon" className="icon" />
            <img src='/Frame 2.svg' alt="Icon" className="icon" />
            <img src='/Frame 3.svg' alt="Icon" className="icon" />
            <img src='/Frame 4.svg' alt="Icon" className="icon" />
            </div>
        </div>
    );
};

export default RewardsIcons;
