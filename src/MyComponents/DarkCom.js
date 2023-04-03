import React from 'react'
import './Darkcom.css';
import Contact from './Contact';

export default function DarkCom() {
    return (
        <>
            <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3 nav-font sticky-top">
                <a className="navbar-brand" href="#">Dark commerce - One stop for all your dark fantasies</a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading1">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading2">Weapons</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading3">Drugs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading4">Hitman</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading5">Pornography</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading6">Contact Us</a>
                    </li>

                </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%"
                data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
                <section id="scrollspyHeading1" className="carousel-height">
                    <div id="carouselExample" className="carousel slide caurosel-height">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={require('.//Images/gun.jpg')} className="d-block w-100" alt="image1" />
                            </div>
                            <div className="carousel-item">
                                <img src={require('.//Images/drug img.jpg')} className="d-block w-100" alt="image2" />
                            </div>
                            <div className="carousel-item">
                                <img src={require('.//Images/tounge out.jpg')} className="d-block w-100" alt="image3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="about">
                        <h3>Welcome to dark commerce</h3>
                        <h5>Tired of visiting different websites for different needs?</h5>
                        <p>Don't worry, Dark commerce got your back. We fulfill all your dark fantasies without letting you roam
                            here and there. We give best deals in Weapons, Drugs and have experienced hitmans who have never
                            missed a shot. Explore the website and order what you want. We make sure that no one knows who you
                            are.</p>
                        <p></p>
                    </div>
                </section>
                <section id="scrollspyHeading2" className="sec-2">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={require('.//Images/weapons/Pistol.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Pistol</h5>
                            <p className="card-text">Price: Rs 60,000</p>
                            <a href="#" className="btn btn-primary">Order now</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={require('.//Images/weapons/handgun.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Handgun</h5>
                            <p className="card-text">Price: Rs 60,000</p>
                            <a href="#" className="btn btn-primary">Order now</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={require('.//Images/weapons/sniper with scope.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sniper</h5>
                            <p className="card-text">Price: Rs 1,20,000</p>
                            <a href="#" className="btn btn-primary">Order now</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={require('.//Images/weapons/STNGR AR-15 Free Float Handguard.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">STNGR</h5>
                            <p className="card-text">Price: Rs 90,000</p>
                            <a href="#" className="btn btn-primary">Order now</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={require('.//Images/weapons/granades.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Hand granade</h5>
                            <p className="card-text">Price: Rs 50,000</p>
                            <a href="#" className="btn btn-primary">Order now</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={require('.//Images/weapons/american sniper.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">American sniper</h5>
                            <p className="card-text">Price: Rs 1,20,000</p>
                            <a href="#" className="btn btn-primary">Order now</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={require('.//Images/weapons/ar 15.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">AR-15</h5>
                            <p className="card-text">Price: Rs 80,000</p>
                            <a href="#" className="btn btn-primary">Order now</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={require('.//Images/weapons/long range gun.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Long range gun</h5>
                            <p className="card-text">Price: Rs 1,00,000</p>
                            <a href="#" className="btn btn-primary">Order now</a>
                        </div>
                    </div>
                </section>
                <section id="scrollspyHeading3" className="sec-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={require('.//Images/drugs/cannabis.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Marijuana</h5>
                            <p className="card-text">Price: Rs 2000/100g</p>
                            <a href="#" className="btn btn-primary">Order now</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={require('.//Images/drugs/cocaine.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Cocaine</h5>
                            <p className="card-text">Price: Rs 9000/100g</p>
                            <a href="#" className="btn btn-primary">Order now</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={require('.//Images/drugs/lsd.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">LSD</h5>
                            <p className="card-text">Price: Rs 11000/10 pills</p>
                            <a href="#" className="btn btn-primary">Order now</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={require('.//Images/drugs/Methamphetamine.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Methamphetamine</h5>
                            <p className="card-text">Price: Rs 12000/100ml</p>
                            <a href="#" className="btn btn-primary">Order now</a>
                        </div>
                    </div>
                </section>

                <section id="scrollspyHeading4" className="sec-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={require('.//Images/hitman/hitman1.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Hitman1</h5>
                            <h6 className="card-title">Head count - 20</h6>
                            <p className="card-text">Rate: Rs 1,50,000/kill </p>
                            <a href="#" className="btn btn-primary">Order now</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={require('.//Images/hitman/hitman2.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Hitman2</h5>
                            <h6 className="card-title">Head count - 26</h6>
                            <p className="card-text">Rate: Rs 1,80,000/kill </p>
                            <a href="#" className="btn btn-primary">Order now</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={require('.//Images/hitman/hitman3.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Hitman3</h5>
                            <h6 className="card-title">Head count - 18</h6>
                            <p className="card-text">Rate: Rs 1,20,000/kill</p>
                            <a href="#" className="btn btn-primary">Order now</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={require('.//Images/hitman/hitman4.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Hitman4</h5>
                            <h6 className="card-title">Head count - 30</h6>
                            <p className="card-text">Rate: Rs 2,50,000/kill</p>
                            <a href="#" className="btn btn-primary">Order now</a>
                        </div>
                    </div>
                </section>

                <section id="scrollspyHeading5" className="sec-5">
                    <div className="card porn-card" style={{ width: "50rem" }}>
                        <img src={require('.//Images/live porn room.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body" id="porn-card-body">
                            <h5 className="card-title">Join live room</h5>
                            <p className="card-text">Price - Rs 6000/hour</p>
                            <a href="#" className="btn btn-primary">Join now</a>
                        </div>
                    </div>
                </section>
                <section id="scrollspyHeading6" className="sec-6">
                    <Contact/>
                </section>
                <footer>
                    <div className="center">
                        Copyrigth &copy; www.Dark Commerce.onion | All rights reserved!
                    </div>
                </footer>

            </div>
        </>
    )
}
