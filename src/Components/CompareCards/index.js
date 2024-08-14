

import React from 'react';
import './style.css';
import { compareCardsVideo, creditCardComparisonCard1, creditCardComparisonCard2, creditCardComparisonCard3, creditCardComparisonWhiteBuilding } from '../../s3.Links';

const CompareCards = () => {
    return (
        <div className="compare-cards-section">
            <div className='main-header'>Compare Cards</div>
            <video autoPlay loop muted className="compare-background-video">
                <source src={compareCardsVideo} type="video/mp4" />
            </video>
            <div className='compare-white-building'>
            <img src={creditCardComparisonWhiteBuilding} alt="creditCardComparisonWhiteBuilding" />
            </div>
            <div className='compare-card-container'>
                <img src={creditCardComparisonCard3} alt="Card Image" className="card-image-1" width={'200px'} />
                <img src={creditCardComparisonCard2} alt="Card Image" className="card-image-2" width={'300px'}/>
                <img src={creditCardComparisonCard3} alt="Card Image" className="card-image-3" width={'200px'}/>
            </div>
        </div>
    );
};

export default CompareCards;
