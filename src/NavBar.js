import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
    const [isRoomOptionsOpen, setIsRoomOptionsOpen] = useState(false);
    const [isReservationAndBookingOpen, setIsReservationAndBookingOpen] = useState(false)
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        console.log(scrollPosition)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollPosition]);
    return (
        <>
            <div className="adjust-elements">
                <div className="wrapper">
                    <div className="navbar" >
                        <div id="logo-container">
                            <img src="/images/logo.png" alt="" width="120px" />
                        </div>
                        <div className="link-container">
                            <div className="link-divs">
                                <Link to="/">HOME</Link>
                            </div>
                            <div className="link-divs">
                                <Link to="/about">ABOUT</Link>
                            </div>
                            {isRoomOptionsOpen ?
                                <>
                                    <div className="rooms-container" onMouseEnter={() => setIsRoomOptionsOpen(!isRoomOptionsOpen)} onMouseLeave={() => setIsRoomOptionsOpen(!isRoomOptionsOpen)}>
                                        <a onClick={() => setIsRoomOptionsOpen(!isRoomOptionsOpen)}>ROOMS</a>
                                        <div className="room-options">
                                            <ul className="drop-down-menu">
                                                <li>
                                                    <Link to="/about">ALL</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about">PREMIUM</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about">DELUX</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about">COTTAGE</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                                :
                                <div className="rooms-container">
                                    <a onClick={() => setIsRoomOptionsOpen(!isRoomOptionsOpen)}>ROOMS</a>
                                    <div className="room-options-hide">
                                        <ul>
                                            <li>
                                                <Link to="/about">ALL</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">PREMIUM</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">DELUX</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">COTTAGE</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            }
                            {isReservationAndBookingOpen ?
                                <>
                                    <div className="reservation-and-booking-container" onMouseEnter={() => setIsReservationAndBookingOpen(!isReservationAndBookingOpen)} onMouseLeave={() => { setIsReservationAndBookingOpen(!isReservationAndBookingOpen) }} >
                                        <a onClick={() => setIsReservationAndBookingOpen(!isReservationAndBookingOpen)}>RESERVATION/BOOKING</a>
                                        <div className="reservation-and-booking-options">
                                            <ul className="drop-down-menu">
                                                <li>
                                                    <Link to="/about">MAKE A RESERVATION</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about">MY BOOKING</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                                :
                                <div className="reservation-and-booking-container">
                                    <a onClick={() => setIsReservationAndBookingOpen(!isReservationAndBookingOpen)}>RESERVATION/BOOKING </a>
                                    <div className="hide-reservation-and-booking-options">
                                        <ul>
                                            <li>
                                                <Link to="/about">MAKE A RESERVATION</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">MY BOOKING</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            }
                            {isGalleryOpen ?
                                <>
                                    <div className="gallery-container" onMouseEnter={() => setIsGalleryOpen(!isGalleryOpen)} onMouseLeave={() => { setIsGalleryOpen(!isGalleryOpen) }} >
                                        <a onClick={() => setIsGalleryOpen(!isGalleryOpen)}>GALLERY</a>
                                        <div className="gallery-options">
                                            <ul className="drop-down-menu">
                                                <li>
                                                    <Link to="/about">THE PROPERTY</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about">FOOD</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                                :
                                <div className="gallery-container">
                                    <a onClick={() => setIsGalleryOpen(!isGalleryOpen)}>GALLERY</a>
                                    <div className="hide-gallery-options">
                                        <ul>
                                            <li>
                                                <Link to="/about">THE PROPERTY</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">FOOD</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            }
                            <div className="link-divs">
                                <Link to="/contact">CONTACT</Link>
                            </div>



                        </div>
                    </div>
                </div>
                {/* <div id="blocker"></div> */}


                {/* <div className="wrapper">
                <div className="navbar" >
                    <div className="link-container">
                        <Link to="/">HOME</Link>
                        <Link to="/about">ABOUT</Link>
                        <i class="fas fa-chevron-down"></i>
                        <a ClassName="link-style">ROOM <FontAwesomeIcon icon={faAngleDown} /> </a>
                        <Link to="/reservation">RESERVATION <FontAwesomeIcon icon={faAngleDown} /> </Link>
                        <Link to="/gallery">PHOTO GALLERY <FontAwesomeIcon icon={faAngleDown} /> </Link>
                        <Link to="/contact"> CONTACT </Link>
                        <Link to="/policy">POLICY</Link>
                    </div>
                </div>
            </div> */}












            </div>
        </>
    )
}

export default NavBar
