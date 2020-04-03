import React, { Component } from 'react';
import './footer/footer.css';
import './footer/footerres.css';
import { Link } from 'react-router-dom';
class Footer extends Component{
  userData;

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: ""
        };
    }

    // Form Values
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                email: this.userData.email
            })
        } else {
            this.setState({
                email: '',
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    onSubmit(e) {
        e.targetreset();
        console.log(this.state.props)
    }
    render(){
        return(
        <div className="container1"> 
            <footer>
                <div className="copyright">
              <div className="rowfoot">
                <div className="colfoot">
                  <h1>Contact us !</h1>
                  <img src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="mount" width='100%'/> 
                  <div className="contactrow">
                  <div className="contactcol">
                  <img src={process.env.PUBLIC_URL + "/images/contact.png"} alt="mount" width='100%'/> 
                </div>
                <div className="contactcolnum"><br />
                  <p>+977-98446695456</p>
                </div>
                </div>
                  <h1>follows us on</h1>
                  <div className="socialrow">
                  <div className="socialcol">
                  <Link to="#"><img src={process.env.PUBLIC_URL + "/images/facebook.png"} alt='mount' width='100%'/></Link>
                    </div>
                    <div className="socialcol">
                        <Link to="#"><img src={process.env.PUBLIC_URL + "/images/instagram.png"} alt='mount' width='100%'/></Link>
                    </div>
                     <div className="socialcol">
                        <Link to="#"><img src={process.env.PUBLIC_URL + "/images/gmail.png"} alt='mount' width='100%'/></Link>
                    </div>
                    <div className="socialcol">
                    <Link to="#"><img src={process.env.PUBLIC_URL + "/images/search.png"} alt='mount' width='100%'/></Link>
                  </div>
                    <div className="socialcol">
                    <Link to="#"><img src={process.env.PUBLIC_URL + "/images/google.png"} alt='mount' width='100%'/></Link>
                  </div>
                  </div>
                </div>
                <div className="colfoot">
                    <div id="contactform">
              <div className="subscribe"><br />
                  <h1>Subscribe to see Secret Deals</h1>
                    <form >
                      <label>
                      <input id="btnsubscribe"  type="email" 
                       name=""
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      placeholder="Get the special price"></input>
                      <button id="btnsignup" onSubmit={this.onSubmit} type="button" >Sign up</button>
                    </label>
                    </form>
                  </div>
                  </div>
                  <div className="news">
                    <h1>News</h1>
                    <Link to="/blog"><h3>What it's like to climb Mount Everest without oxygen </h3></Link>
                    <Link to="/blog"><h3>Trekkers gone out of contact in Annapurna Base Camp area</h3></Link>
                    <Link to="/blog"><h3>Visit Nepal Year 2020 campaign officially inaugurated</h3></Link>
                    <Link to="/blog"><h3>TAAN opposes double entry fees in national park</h3></Link>
                    <Link to="/blog"><h3>TAAN discusses on Ramechhap tourism promotion </h3></Link>
                    <Link to="/blog"><h3>Tourism Secretary to resolve problems in tourism sector</h3></Link>
                  </div>  
                  </div>
                  <div className="colfoot">
                  <h1>Certificated</h1>              
      
                  <img src={process.env.PUBLIC_URL + "/images/tripad.png"} alt='tripad' width='100%'/>
                  </div>
                </div>
              </div>
          </footer>
          </div>
            /* <!-- *************************************fOOTER********************* --> */
        );
    }
}
export default Footer;