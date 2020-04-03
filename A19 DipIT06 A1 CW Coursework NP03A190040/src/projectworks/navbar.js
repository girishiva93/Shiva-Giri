import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav/nav.css';
import './Nav/navres.css';
class Navbar extends Component{
    constructor(props) {
      super(props);
      this.openSlideMenu = this.openSlideMenu.bind(this);
      this.closeSlideMenu = this.closeSlideMenu.bind(this);
    }
    openSlideMenu() {
      document.getElementById("side-menu").style.display = "block";
    }
    closeSlideMenu() {
      document.getElementById("side-menu").style.display = "none";
    }
    render(){
        return(
<header>
<span className="open-slide">
            <button to="" className="menu" onClick={this.openSlideMenu}>
              Menu
            </button>
          </span>   
        <div className="page-header">
      <nav id="page-nav" className="page-nav">

        <ul className="nav-list">
       
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/trip">Trip</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/guide-profile">Guide Profile</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul> 
         <Link to="/">
         <div className="logo"><img src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt='logo' width="150px" /></div>
         </Link> 
      </nav>
      </div>
      {/* <script>
      var menuBtn = document.getElementById('mobile-nav');
      var menu = document.getElementById('page-nav');
      menuBtn.addEventListener('click',function(e){
	    if (menu.style.display === "none") {
		  menu.style.display="block";
	      } 
	    else if (menu.style.display ==="block") {
		  menu.style.display="none";
	    }
	    else{
		  menu.style.display="block";
	}
      });

      </script> */}
              <div className="side-navigation">
          <div className="container">
            <div id="side-menu">
              <nav className="side_nav-list">
                <div className="list">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/trip">Trip</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/guide-profile">Guide-Profile</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="cross">
                  <Link className="btn-close" onClick={this.closeSlideMenu}>
                    &times;
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
  </header>
        );
};
}

export default Navbar;