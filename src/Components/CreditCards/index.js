

import React from 'react';
import './style.css';
import { creditCard1,creditCard2,creditCard3 } from '../../s3.Links';
import { ArrowRightOutlined } from '@ant-design/icons';

const CreditCards = () => {
    return (
        <div className="credit-cards-section">
            <div className='heading'>Popular credit cards for every dedicated category</div>
            <div className='card-tabs'>
                <div className='tab tab-selected'>Featured</div>
                <div className='tab'>Cashback</div>
                <div className='tab'>Rewards</div>
                <div className='tab'>Fuel</div>
                <div className='tab'>Business</div>
            </div>
            <div className='cards-section'>
                <div className='card-container'>
                    <img src={creditCard1} alt="card" className="card" />
                    <div className='card-heading'>HDFC Regalia</div>
                    <div className='sub-tabs'>
                        <div className='tab-content'>Travel</div>
                        <div className='tab-content'>Online Shopping</div>
                    </div>
                    <div className='sub-heading'>50% Cashback</div>
                    <div className='content'>High cashback on online and offline spends</div>
                    <div className='apply-now'>Apply Now  <ArrowRightOutlined /></div>
                </div>
                <div className='card-container'>
                    <img src={creditCard2} alt="card" className="card" />
                    <div className='card-heading'>Axis Bank Ace Credit Card</div>
                    <div className='sub-tabs'>
                        <div className='tab-content'>Travel</div>
                        <div className='tab-content'>Online Shopping</div>
                    </div>
                    <div className='sub-heading'>50% Cashback</div>
                    <div className='content'>High cashback on online and offline spends</div>
                    <div className='apply-now'>Apply Now  <ArrowRightOutlined /></div>
                </div>
                <div className='card-container'>
                    <img src={creditCard3} alt="card" className="card" />
                    <div className='card-heading'>Indian Oil HDFC Credit Card</div>
                    <div className='sub-tabs'>
                        <div className='tab-content'>Travel</div>
                        <div className='tab-content'>Online Shopping</div>
                    </div>
                    <div className='sub-heading'>50% Cashback</div>
                    <div className='content'>High cashback on online and offline spends</div>
                    <div className='apply-now'>Apply Now <ArrowRightOutlined /></div>
                </div>
            </div>
        </div>
    );
};

export default CreditCards;
