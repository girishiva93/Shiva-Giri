import React, { Component } from "react";
import '../About_us/aboutus.css';
import '../About_us/responsive.css';
import { Link } from "react-router-dom";
import axios from 'axios';
class Aboutus extends Component {
    constructor(props){
        super(props);
        this.state = {
            About_Us: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8000/About_Us')
        .then(response => {
            return response.data;
        })
        .then(data => {
            console.log(data)
            this.setState({
                About_Us: data.slice(0,10)
            });
        })
    }
    render(){
        const About_Us = this.state.About_Us;
        const About_Uslist = About_Us.length ? (
            <>
                         {About_Us.map(About_Us => (
                             <div className="aboutus" key={Math.random()}>
                                  
                                <div className="title"><h1>{About_Us.title}</h1></div>
                                <div className="Description">{About_Us.Description}</div>
                           </div>
                           ))}
            </>
        ):(
            <div className="center">No post to Show</div>
        );


                    //  json server bata link gareko

        return(
            <div className="container">
             		    <img src={process.env.PUBLIC_URL + "./images/about_us/boudha.jpg"} alt='mount' width="100%" />
                         {About_Uslist}
                         <div className="aboutus">
                         <Link to="/trip"><button className="btnbookfind" type="button">Find Out Our More intertesting Trip</button></Link>
                        <br></br>
             	        </div>
                         </div>
        );

    //     render(){
    //     
    //         <React.Fragment>
    //          lass="aboutus"><p>Pacific Discovery is an educational organization and a labor of love.
    //                 Since its inception in 2001, Pacific Discovery has taken more than 2,000 students and many faculty-led groups on our experiential journeys. We value our incredible team of experienced, qualified and passionate Program Instructors. We have an excellent safety record, comprehensive safety management systems and a database of alumni, parents, advisers and faculty, who are happy to be contacted by you, to discuss their experience.

    //                 Pacific Discovery has undergone independent safety accreditations with Gap Year Association (USA), Year Out Group (UK), and OutdoorsMark (NZ).

    //                 Our summer, semester and gap year programs are grounded in the philosophy of experiential education, where learning is facilitated and hands-on. Our programs are overland journeys, blending cultural immersion, personal and leadership development, volunteer and community service projects, experiential education, wilderness exploration and optional transferable academic credit. Our Mission is to offer the world’s best experiential programs - providing insights into our increasingly global society, developing empathy for other cultures, furthering understanding of international issues, heightening appreciation for the earth’s wild places, and assisting you to stretch and grow.

    //                 Our story
    //                 Kiwi’s Rachel Sanson and Scott Burnett, founded Pacific Discovery in 2001, utilizing experience gained through working in environmental and outdoor education, teaching, tourism, grass-roots community development and extensive travels. From the start the focus was offering deeply meaningful programs where students would gain new insights and ways of thinking about our world, through educational journeys. These journeys were ethically sound, ensured a positive outcome for host communities, and a lower impact on the environment. Initially based in Oregon, they relocated Pacific Discovery's home to New Zealand in 2005 to raise family.

    //                 In 2018 the reins were handed to another kiwi, Zach Johnston. Alongside continued input from Rachel and Scott, Zach’s varied educational and leadership experience made him the perfect person to continue the focus on authentic and inspiring international travel. As a Senior Instructor in Leadership Development, General Manager in the Tourism Industry, Field Based Outdoor Educator, International Expedition Leader, and Operational Ambulance Officer with extensive travel experience around the world, his input into program development and commitment to consistency of service is apparent.

    //                 Today, Pacific Discovery runs 25+ programs annually. We continue to be a small and personal organization that strives to offer authentic, inspiring and pivotal experiences.

    //                 As an organisation, we remain passionately and personally involved in all aspects of the program, from answering phone and email enquiries, to researching, developing and evaluating programs. We even manage to get out and lead programs from time to time. This means you have a very personalized experience and can trust that we are always focused on providing you with an inspiring and safe journey with Pacific Discovery.

    //                 Visit our Gallery of Appreciation to see a group mount from every Pacific Discovery program.</p>
    //             </div>
    //                 <div>
	//                 <Link to="#"><button className="btnbookfind" type="button">Find Out Our More intertesting Trip</button></Link>
    //                 </div><br></br>




    //         </React.Fragment>
    //     );
    // }
}
}
export default Aboutus;