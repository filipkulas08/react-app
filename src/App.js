import './styles/index.min.css';
import logo from './icons/logo.svg';
import close from './icons/close.svg';
import orthodontic from './icons/orthodontic.svg';
import prosthetic from './icons/prosthetic.svg';
import scaling from './icons/scaling.svg';
import extraction from './icons/tooth-extraction.svg';
import implant from './icons/implant.svg';
import healthy from './icons/healthy-tooth.svg';
import canal from './icons/root-canal.svg';
import drill from './icons/dental-drill.svg';
import baby from './icons/baby-teeth.svg';
import slider1 from './images/slider1.webp';
import slider2 from './images/slider2.webp';
import slider3 from './images/slider3.webp';
import slider4 from './images/slider4.webp';
import slider5 from './images/slider5.webp';
import slider6 from './images/slider6.webp';
import slider7 from './images/slider7.webp';
import modalDental from './images/publicdomainq-dentist.svg';
import hero from './images/hero-dentist.webp';
import video from './videos/dental-video.mp4';


function App() {
  return (
    <div className="App">
      <header className="first-header">
        <div className="columns">
            <section className="col col-large-12-of-12 col-medium-12-of-12 col-small-12-of-12">
                <div className="navigation main-nav section">
                    <ul className="menu-wrapper simple horizontal">
                        <li className="menu-item-level-1">
                            <a href="#introduction" aria-label="Introduction" className="navigation-link menu-link-level-1">
                                <span>
                                    Introduction
                                </span>
                            </a>
                        </li>

                        <li className="menu-item-level-1">
                            <a href="#our-services" aria-label="Our-services" className="navigation-link menu-link-level-1">
                                <span>
                                    Our services
                                </span>
                            </a>
                        </li>

                        <li className="menu-item-level-1">
                            <a href="#office" aria-label="Our-office" className="navigation-link menu-link-level-1">
                                <span>
                                    Our office
                                </span>
                            </a>
                        </li>

                        <li className="menu-item-level-1 book hidden">
                            <a href="#booking" aria-label="Booking" className="navigation-link menu-link-level-1">
                                <span>
                                    Book a visit
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navigation mobile-nav section">
                    <div className="navigation-title hidden-desktop">
                    </div>
                    <ul className="menu-wrapper simple horizontal hidden-desktop">
                        <li className="menu-item-level-1">
                            <a href="#introduction" aria-label="Introduction" className="navigation-link menu-link-level-1">
                                <span>
                                    Introduction
                                </span>
                            </a>
                        </li>

                        <li className="menu-item-level-1">
                            <a href="#our-services" aria-label="Our-services" className="navigation-link menu-link-level-1">
                                <span>
                                    Our services
                                </span>
                            </a>
                        </li>

                        <li className="menu-item-level-1">
                            <a href="#office" aria-label="Our-office" className="navigation-link menu-link-level-1">
                                <span>
                                    Our office
                                </span>
                            </a>
                        </li>

                        <li className="menu-item-level-1 book hidden">
                            <a href="#booking" aria-label="Booking" className="navigation-link menu-link-level-1">
                                <span>
                                    Book a visit
                                </span>
                            </a>
                        </li>

                        <li className="menu-item-level-1">
                            <a href="#"aria-label="Login" className="navigation-link menu-link-level-1 loginButton open">
                                <span>Login</span>
                            </a>
                        </li>

                        <li href="#" className="menu-item-level-1">
                            <a href ="#" aria-label="Register" className="navigation-link menu-link-level-1 registerButton open">
                                <span>Register</span>
                            </a>
                        </li>

                        <li className="menu-item-level-1">
                            <a href="#" aria-label="Logout" className="navigation-link menu-link-level-1 logoutButton">
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="register-button">
                    <div className="textAndMedia">
                        <div className="text-media-button">
                            <button className="registerButton open">Register</button>
                        </div>
                    </div>
                </div>
                <div className="login-button">
                    <div className="textAndMedia">
                        <div className="text-media-button">
                            <button className="loginButton open">Login</button>
                        </div>
                    </div>
                </div>
                <div className="logout-button">
                    <div className="textAndMedia">
                        <div className="text-media-button">
                            <button className="logoutButton">Logout</button>
                        </div>
                    </div>
                </div>
                <div className="textAndMedia logo section">
                    <div className="text-media">
                        <div>
                            <a aria-label="logo" href="#" className="text-media-img-link">
                                <img src={logo} alt="" className="text-media-img" width="90" height="90"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </header>
    <main>
        <a href="#" aria-label="Back to top" className="backToTopButton" id="backToTop">Back to top</a>
        <div className="modal-window modal-popup login">
            <div className="wrapper">
                <div className="modal-content">
                    <div className="columnLayoutBlock">
                        <div className="columns">
                            <div className="col col-large-5-of-12 col-medium-5-of-12 col-small-12-of-12">
                                <div className="login">
                                    <div>
                                        <div className="icon">
                                            <img src={close} alt="close" width="25" height="25" />
                                        </div>
                                        <h2>Welcome back</h2>
                                        <h3>Login</h3>
                                        <div className="form">
                                            <input className="emailInput" type="email" placeholder="Type your email"
                                                id="emailLogin" />
                                            <input className="passwordInput" type="password"
                                                placeholder="Type your password" id="passwordLogin" />
                                            <p className="errorMessage"></p>
                                        </div>
                                        <button id="loginBtn">Login</button>
                                        <button className="googleButton" id="login">Google</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col col-large-7-of-12 col-medium-7-of-12 col-small-12-of-12 hidden-mobile">
                                <div className="image-div">
                                    <img src={modalDental} alt="dentist" width="485" height="397" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal-window modal-popup register">
            <div className="wrapper">
                <div className="modal-content">
                    <div className="columnLayoutBlock">
                        <div className="columns">
                            <div className="col col-large-6-of-12 col-medium-6-of-12 col-small-12-of-12">
                                <div className="login">
                                    <div>
                                        <div className="icon">
                                            <img src={close} alt="close" width="25" height="25" />
                                        </div>
                                        <h2>Welcome</h2>
                                        <h3>Create account</h3>
                                        <div className="form">
                                            <input className="emailInput" type="email" placeholder="Type your email"
                                                id="emailRegister" />
                                            <input className="passwordInput" type="password"
                                                placeholder="Type your password" id="passwordRegister" />
                                            <p className="errorMessage"></p>
                                        </div>
                                        <button id="signUp">Sign up</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col col-large-6-of-12 col-medium-6-of-12 col-small-12-of-12 hidden-mobile">
                                <div className="image-div">
                                    <img src={modalDental} alt="dentist" width="485" height="284" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="columnLayoutBlock hero">
            <div className="columns">
                <div className="col col-large-12-of-12 col-medium-12-of-12 col-small-12-of-12">
                    <div className="textAndMedia">
                        <div className="text-media">
                            <div>
                                <div className="article">
                                    <h1>Dentistry</h1>
                                    <p>A dentist at work in his vocation always looks down in the mouth</p>
                                </div>
                            </div>
                            <div>
                                <div className="image">
                                    <img src={hero} alt="hero dentist" width="338" height="450" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section id="introduction" className="introduction">
            <div className="section-body">
                <div className="columnLayoutBlock">
                    <div className="columns">
                        <div className="col col-large-12-of-12 col-medium-12-of-12 col-small-12-of-12">
                            <h2>Step into the tooth world</h2>
                            <h3>You’re never fully dressed without a smile.</h3>
                            <video controls>
                                <source src={video} type="video/mp4" />
                                Your browser does not support HTML video.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="our-services" className="our-services">
            <div className="section-body">
                <div className="columnLayoutBlock">
                    <div className="columns">
                        <div className="col col-large-12-of-12 col-medium-12-of-12 col-small-12-of-12 description">
                            <h3>Our core services</h3><br />
                            <h4>Comprehensive dental services.<br /> We guarantee comfort, convenience and 100% treatment
                                effectiveness.</h4>
                        </div>
                    </div>
                </div>
                <div className="columnLayoutBlock">
                    <div className="columns container">
                        <div className="col col-large-3-of-12 col-medium-12-of-12 col-small-12-of-12 card">
                            <div className="box">
                                <div className="content">
                                    <img src={orthodontic} alt="orthodontic" width="85" height="85" />
                                    <h4>Orthodontic</h4>
                                    <p>Treatment of malocclusion and maxillofacial defects. Treatment of dysfunction of
                                        the
                                        masticatory organ.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-large-3-of-12 col-medium-12-of-12 col-small-12-of-12 card">
                            <div className="box">
                                <div className="content">
                                    <img src={prosthetic} alt="prosthetic" width="85" height="85" />
                                    <h4>Prosthetic</h4>
                                    <p>Reconstruction and restoration of the dentition. Significant improvement in
                                        chewing,
                                        speech and facial aesthetics.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-large-3-of-12 col-medium-12-of-12 col-small-12-of-12 card">
                            <div className="box">
                                <div className="content">
                                    <img src={implant} alt="implant" width="85" height="85" />
                                    <h4>Implant</h4>
                                    <p>Restoring lost dentition. Implants perfectly imitate natural teeth, fulfilling
                                        their
                                        functions in every detail. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columnLayoutBlock">
                    <div className="columns container">
                        <div className="col col-large-3-of-12 col-medium-12-of-12 col-small-12-of-12 card">
                            <div className="box">
                                <div className="content">
                                    <img src={canal} alt="root-canal" width="85" height="85" />
                                    <h4>Root canal treatment </h4>
                                    <p>Treatment of the chamber and root canals of the tooth. Removal of infected tissue
                                        as
                                        well as bacteria from the center of the canals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-large-3-of-12 col-medium-12-of-12 col-small-12-of-12 card">
                            <div className="box">
                                <div className="content">
                                    <img src={drill} alt="caries-treatment" width="85" height="85" />
                                    <h4>Caries treatment</h4>
                                    <p>Dental health check. Cavity treatment. Caries prevention and treatment. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-large-3-of-12 col-medium-12-of-12 col-small-12-of-12 card">
                            <div className="box">
                                <div className="content">
                                    <img src={baby} alt="children's-dentistry" width="85" height="85" />
                                    <h4>Children's dentistry</h4>
                                    <p>Learning proper oral hygiene. Stress-free treatment in a pleasant atmosphere.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columnLayoutBlock">
                    <div className="columns container">
                        <div className="col col-large-3-of-12 col-medium-12-of-12 col-small-12-of-12 card">
                            <div className="box">
                                <div className="content">
                                    <img src={extraction} alt="dental-surgery" width="85" height="85" />
                                    <h4>Dental surgery</h4>
                                    <p>Oral treatment and surgery. Extraction of impacted teeth, wisdom teeth and others
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-large-3-of-12 col-medium-12-of-12 col-small-12-of-12 card">
                            <div className="box">
                                <div className="content">
                                    <img src= {healthy} alt="teeth-whitening" width="85" height="85" />
                                    <h4>Teeth whitening</h4>
                                    <p>Restoring the natural color of the teeth so that they look like they used to be.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-large-3-of-12 col-medium-12-of-12 col-small-12-of-12 card">
                            <div className="box">
                                <div className="content">
                                    <img src={scaling} alt="scaling" width="85" height="85" />
                                    <h4>Scaling</h4>
                                    <p>Removal of tartar. It protects our teeth and oral cavity against the growth of
                                        bacteria.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="office" className="office">
            <div className="section-body">
                <div className="columnLayoutBlock">
                    <div className="columns">
                        <div className="col col-large-12-of-12 col-medium-12-of-12 col-small-12-of-12">
                            <h1>
                                Get to know our office
                            </h1>
                            <div className="container">
                                <div className="carousel">
                                    <div className="carousel-prev"></div>
                                    <div className="carousel-next"></div>
                                    <ul className="carousel-pagination">
                                        <li className="carousel-bullet"></li>
                                        <li className="carousel-bullet"></li>
                                        <li className="carousel-bullet"></li>
                                        <li className="carousel-bullet"></li>
                                        <li className="carousel-bullet"></li>
                                    </ul>
                                    <ul className="carousel-container">
                                        <li className="carousel-item">
                                            <img src={slider1} loading="lazy" alt="dental-office"
                                                width="840" height="427"/>
                                        </li>
                                        <li className="carousel-item">
                                            <img src={slider2} loading="lazy" alt="dental-office"
                                                width="840" height="427"/>
                                        </li>
                                        <li className="carousel-item">
                                            <img src={slider3} loading="lazy" alt="dental-office"
                                                width="840" height="427"/>
                                        </li>
                                        <li className="carousel-item">
                                            <img src={slider4} loading="lazy" alt="dental-office"
                                                width="840" height="427"/>
                                        </li>
                                        <li className="carousel-item">
                                            <img src={slider5} loading="lazy" alt="dental-office"
                                                width="840" height="427"/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="booking" className="booking">
            <div className="section-body">
                <div className="columnLayoutBlock">
                    <div className="columns">
                        <div className="col col-large-12-of-12 col-medium-12-of-12 col-small-12-of-12">
                            <div className="booking-form">
                                <h3>Visit booking form</h3>
                                <label htmlFor="firstName">
                                    <span>First name</span>
                                    <input type="text" id="firstName" />
                                </label>
                                <label htmlFor="lastName">
                                    <span>Last name</span>
                                    <input type="text" id="lastName" />
                                </label>
                                <label htmlFor="email">
                                    <span>E-mail address</span>
                                    <input type="email" id="email"  />
                                </label>
                                <label htmlFor="number">
                                    <span>Phone number</span>
                                    <input type="text" id="number" />
                                </label>
                                <label htmlFor="datepicker">
                                    <span>Select date</span>
                                    <input type="text" id="datepicker" />
                                </label>
                                <label htmlFor="timepicker" className="timepicker">
                                    <span>Select time</span>
                                    <input type="text" className="timepicker" id="timepicker" />
                                </label>
                                <button id="submit">Submit
                                </button>
                            </div>
                            <div className="nextVisit">
                                <h3>Your next visit will take place in </h3>
                                <div className="countdown">
                                    <div className="tiles" id="tiles"></div>
                                    <div className="labels">
                                        <ul>
                                            <li>Days</li>
                                            <li>Hours</li>
                                            <li>Mins</li>
                                            <li>Secs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer className="footer ">
        <div className="columnLayoutBlock section basic-columns">
            <div className="columns ">
                <section className="col col-large-12-of-12 col-medium-12-of-12 col-small-12-of-12">
                    <div className="textAndMedia section  footer-logos">
                        <div className="text-media">
                            <div>
                                <a aria-label="logo2" className="text-media-img-link"
                                    href="#">
                                    <img src={logo} alt="logo" width="90" height="90" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="textAndMedia footer-copywrite references section">
                        <div className="text-media " data-component="text-media" data-role="footer-copywrite references"
                            data-content-featured="false">
                            <div>
                                <div className="text-media-article">
                                    <p>© 2022 Dental Clinic&nbsp; DATE OF
                                        PREPARATION:&nbsp;March 2022<br />
                                    </p>
                                    <p className="justify">At Dental Clinic, accessible from Dental Clinic.com, one of our main priorities
                                        is the privacy of our visitors. This Privacy Policy document contains types of
                                        information that is collected and recorded by Dental Clinic and how we use it.
                                        If you have additional questions or require more information about our Privacy
                                        Policy, do not hesitate to contact us.<br />
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="text-media-description">
                                    <p>Find Us</p>
                                    <ul>
                                        <li><a aria-label="Linkedin" href="https://www.linkedin.com" target="_blank"
                                                className="linkedin">LinkedIn</a>&nbsp;</li>
                                        <li><a aria-label="Facebook" href="https://www.facebook.com" target="_blank"
                                                className="facebook">Facebook</a>&nbsp;</li>
                                        <li><a aria-label="Instagram" href="https://www.instagram.com" target="_blank"
                                                className="instagram">Instagram</a>&nbsp;</li>
                                        <li><a aria-label="Twitter" href="https://twitter.com" target="_blank"
                                                className="twitter">Twitter</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
