

import React from 'react';
import './style.css';
import { ratanTataPageBg } from '../../s3.Links';

const RatanTataPage = () => {
    return (
        <div className='ratan-tata-page'>
            <video autoPlay loop muted className="ratan-tata-background-video">
                <source src={ratanTataPageBg} type="video/mp4" />
            </video>
            <div className='descriptions'>WHAT THEY SAY ABOUT BANKKARO</div>
            <div className='ratan-tata-headings'>
                See the <span className='impact'>Impact</span> in action
            </div>
            <div className='ratan-tata-body'>
                <div className='left-text'>
                    <div className='left-header'>Ratan Tata</div>
                    <div className='left-sub-header'>Chairperson Tata Group</div>
                </div>
                <img src='/Ratan Tata.svg' alt="Ratan Tata's image" width={'30%'} />
                <div className='right-text'>
                    “ BankKaro helped me find the perfect credit card that matches my spending on groceries and travel. Highly recommend it for personalized credit card options. “
                </div>
            </div>
        </div>
    );
};

export default RatanTataPage;
