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
    const [isAnimatedReservationAndBookingDivOpen, setIsAnimatedReservationAndBookingDivOpen] = useState(false);
    const [isAnimatedRoomOptionsMenuOpen, setIsAnimatedRoomOptionsMenuOpen] = useState(false)
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
                        <span className="link-container">
                            <div className="link-divs">
                                <Link to="/contact">CONTACT</Link>
                            </div>
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
                                    {/* <div className="hide-gallery-options">
                                        <ul>
                                            <li>
                                                <Link to="/about">THE PROPERTY</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">FOOD</Link>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            }
                            {isReservationAndBookingOpen ?
                                <>
                                    <div className="reservation-and-booking-container" onMouseEnter={() => setIsReservationAndBookingOpen(!isReservationAndBookingOpen)} onMouseLeave={() => {
                                        setIsReservationAndBookingOpen(!isReservationAndBookingOpen)
                                        setIsAnimatedReservationAndBookingDivOpen(!isAnimatedReservationAndBookingDivOpen)
                                    }} >
                                        <a>RSVN/BOOKING</a>
                                        <div className="options-rsvn-my-booking">
                                            <div className="make-a-reservation">
                                                <Link to="/about">MAKE A RESERVATION</Link>
                                            </div>
                                            <div className="my-booking">
                                                <Link to="/about">MY BOOKING</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                isAnimatedReservationAndBookingDivOpen ?
                                    <>
                                        <div className="reservation-and-booking-container">
                                            <a onMouseEnter={() => setIsReservationAndBookingOpen(!isReservationAndBookingOpen)} onMouseLeave={() => { setIsReservationAndBookingOpen(!isReservationAndBookingOpen) }}>RSVN/BOOKING</a>
                                            <div className="hide-options-rsvn-my-booking" onMouseEnter={() => setIsReservationAndBookingOpen(!isReservationAndBookingOpen)} onMouseLeave={() => { setIsReservationAndBookingOpen(!isReservationAndBookingOpen) }}>
                                                <div className="make-a-reservation">
                                                    <Link to="/about">MAKE A RESERVATION</Link>
                                                </div>
                                                <div className="my-booking" onMouseEnter={() => setIsReservationAndBookingOpen(!isReservationAndBookingOpen)} onMouseLeave={() => { setIsReservationAndBookingOpen(!isReservationAndBookingOpen) }}>
                                                    <Link to="/about">MY BOOKING</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <div className="reservation-and-booking-container">
                                        <a onMouseEnter={() => {
                                            setIsReservationAndBookingOpen(!isReservationAndBookingOpen)

                                        }} onMouseLeave={() => { setIsReservationAndBookingOpen(!isReservationAndBookingOpen) }}>RSVN/BOOKING</a>

                                    </div>
                            }
                            {isRoomOptionsOpen ?
                                <>
                                    <div id="rooms-container-animation" className="rooms-container" onMouseEnter={() => setIsRoomOptionsOpen(!isRoomOptionsOpen)} onMouseLeave={
                                        () => {
                                            setIsRoomOptionsOpen(!isRoomOptionsOpen)
                                            setIsAnimatedRoomOptionsMenuOpen(!isAnimatedRoomOptionsMenuOpen);
                                        }}>
                                        <a>ROOMS</a>
                                        <div className="room-options">
                                            <div className="room-options-container" id="all-container">
                                                <Link to="/about">ALL</Link>
                                            </div>
                                            <div className="room-options-container" id="premium-container">
                                                <Link to="/about">PREMIUM</Link>
                                            </div>
                                            <div className="room-options-container" id="delux-container">
                                                <Link to="/about">DELUX</Link>
                                            </div>
                                            <div className="room-options-container" id="cottage-container">
                                                <Link to="/about">COTTAGE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                isAnimatedRoomOptionsMenuOpen ?

                                    <div className="rooms-container" onMouseEnter={() => setIsRoomOptionsOpen(!isRoomOptionsOpen)} onMouseLeave={() => setIsRoomOptionsOpen(!isRoomOptionsOpen)}>
                                        <a id="rooms-title" onMouseEnter={() => setIsRoomOptionsOpen(!isRoomOptionsOpen)} onMouseLeave={() => setIsRoomOptionsOpen(!isRoomOptionsOpen)}>ROOMS</a>
                                        <div className="animated-room-options">
                                            <div>
                                                <Link to="/about">ALL</Link>
                                            </div>
                                            <div>
                                                <Link to="/about">PREMIUM</Link>
                                            </div>
                                            <div>
                                                <Link to="/about">DELUX</Link>
                                            </div>
                                            <div>
                                                <Link to="/about">COTTAGE</Link>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="rooms-container">
                                        <a onMouseEnter={() => setIsRoomOptionsOpen(!isRoomOptionsOpen)} onMouseLeave={() => setIsRoomOptionsOpen(!isRoomOptionsOpen)}>ROOMS</a>
                                        <div className="invisible-room-options">
                                            <div>
                                                <Link to="/about">ALL</Link>
                                            </div>
                                            <div>
                                                <Link to="/about">PREMIUM</Link>
                                            </div>
                                            <div>
                                                <Link to="/about">DELUX</Link>
                                            </div>
                                            <div>
                                                <Link to="/about">COTTAGE</Link>
                                            </div>
                                        </div>
                                    </div>

                            }
                            <div className="link-divs">
                                <Link to="/about">ABOUT</Link>
                            </div>
                            <div className="link-divs">
                                <Link to="/">HOME</Link>
                            </div>
                        </span>
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
