

import React from 'react';
import './style.css';
import { cardImage,landingPageVideo } from '../../s3.Links';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="card-container w-100 h-100">
                <div className="card-bg">
                    <video autoPlay loop muted className="background-video">
                        <source src={landingPageVideo} type="video/mp4" />
                    </video>
                    <img src={cardImage} alt="Card Image" className="card-image" />
                    <div className='card-content'>
                        <p className="card-description">
                            We find the Best <br />
                            Credit Cards for You
                        </p>
                        <span className='credit-button'>Find a credit card</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
