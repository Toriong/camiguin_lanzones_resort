import React from 'react'
import background from './images/backgroundOption2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCalendar } from '@fortawesome/free-solid-svg-icons'

// have a number input for the occupancy room, adult, and children
const HomePage = () => {
    return (
        <>
            <div className="homepage-picture-container" >
                <img src={background} alt="intro_image" />
            </div>
            <div className="check-availabilty-container">
                <div>
                    <h3>Check Availability</h3>
                </div>
                <div id="availability-search-container">
                    <div id="availability-search-sub-container">
                        <div className="room-and-occupancy">
                            <div className="occupacy-paragraph-container">
                                <p>Occupancy</p>
                            </div>
                            <div className="line-icon-container">
                                <div className="line">
                                    <p id="room-number-input">1</p>
                                    <p id="room-paragraph">Room</p>
                                    <p id="adults-number-input">2</p>
                                    <p id="adults-paragraph">Adult</p>
                                    <p id="children-number-input">1</p>
                                    <p id="children-paragraph" >Child</p>
                                </div>
                                <div id="icon-availability-search-occupancy"><FontAwesomeIcon icon={faAngleDown} /></div>
                            </div>
                        </div>
                        <div className="check-in-out-date-container">
                            <div className="check-in-paragraph">
                                <p>Check-in</p>
                            </div>
                            <div className="check-out-paragraph">
                                <p>Check-out</p>
                            </div>
                            <div className="line-icon-container">
                                <div className="calender-icon-container"> <FontAwesomeIcon icon={faCalendar} /> </div>
                                <div className="line" id="line-spacing-for-calender-icon"><p id="check-in-date">03/12/2021</p><p id="check-out-date" >03/13/2021</p></div>
                                <div id="icon-availability-search-check-ins-outs" ><FontAwesomeIcon icon={faAngleDown} /></div>
                            </div>
                        </div>
                        <div className="special-rates-container">
                            <div className="specials-rates-paragraph">
                                <p>Special Rates</p>
                            </div>
                            <div className="line-icon-container">
                                <div className="line" id="spacing-for-special-rates"><p id="check-in-date">Lowest Available Rate</p></div>
                                <div id="icon-availability-search-check-ins-outs" ><FontAwesomeIcon icon={faAngleDown} /></div>
                            </div>
                        </div>
                        <div className="button-search">
                            <p>SEARCH</p>
                        </div>

                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>

    )
}

export default HomePage
