

import React from 'react';
import './style.css';
import { loungeFinderSquare1, loungeFinderSquare2, loungeFinderSquare3, loungeFinderTab1, loungeFinderTab2, loungeFinderTab3 } from '../../s3.Links';

const LoungeFinder = () => {
    return (
        <div className="lounge-finder-section">
            <div className='compare-card-content'>
                <div className='text'>Uncover hidden benefits and find the perfect card for your financial goals.</div>
                <span className='credit-button'>Compare Card</span>
            </div>
            <div className='lounge-finder-heading'>Lounge Finder</div>
            <div className='lounge-finder-subheading'>Check which lounges you can access at a click!</div>
            <span className='credit-button'>Try Lounge Finder</span>
            <div className='lounge-finder-sub-tabs'>
                <div className='lounge-finder-tabs'>
                    <div className='upper-tab-section'>
                        <img src={loungeFinderTab1} alt="loungeFinderTab1e" />
                        <div className='tab-content'>
                            <div className='tab-heading'>Indra Gandhi Int’l</div>
                            <div className='tab-sub-heading'>IGI . New Delhi</div>
                        </div>
                    </div>
                    <div className='lower-tab-section'>
                        <img src={loungeFinderSquare1} alt="loungeFinderSquare" />
                    </div>
                </div>
                <div className='lounge-finder-tabs'>
                    <div className='upper-tab-section'>
                        <img src={loungeFinderTab2} alt="loungeFinderTab1e" />
                        <div className='tab-content'>
                            <div className='tab-heading'>Indra Gandhi Int’l</div>
                            <div className='tab-sub-heading'>IGI . New Delhi</div>
                        </div>
                    </div>
                    <div className='lower-tab-section'>
                        <img src={loungeFinderSquare2} alt="loungeFinderSquare" />
                    </div>
                </div>
                <div className='lounge-finder-tabs'>
                    <div className='upper-tab-section'>
                        <img src={loungeFinderTab3} alt="loungeFinderTab1e" />
                        <div className='tab-content'>
                            <div className='tab-heading'>Indra Gandhi Int’l</div>
                            <div className='tab-sub-heading'>IGI . New Delhi</div>
                        </div>
                    </div>
                    <div className='lower-tab-section'>
                        <img src={loungeFinderSquare3} alt="loungeFinderSquare" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoungeFinder;
