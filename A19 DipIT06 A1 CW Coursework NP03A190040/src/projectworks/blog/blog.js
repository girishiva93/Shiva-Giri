import React, { Component } from "react";
import '../blog/blog.css';
import '../blog/blogres.css';
import axios from 'axios';

class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {
        blog: []
    }
}
componentDidMount(){
    axios.get('http://localhost:8000/blog')
    .then(response => {
        return response.data;
    })
    .then(data => {
        console.log(data)
        this.setState({
            blog: data.slice(0,10)
        });
    })
}
render(){
    const blog = this.state.blog;
    const bloglist = blog.length ? (
        <>
                     {blog.map(blog => (
                         <div className="columnblog" key={Math.random()}>
                             <img src={"images/"+ blog.image} alt="blog" width="100%" ></img> 
                            <div className="title"><h1>{blog.title}</h1></div>
                            <div className="Description">{blog.Description}</div>
                       </div>
                       ))}
        </>
    ):(
        <div className="center">No post to Show</div>
    );
        return(
          <>
             <div className="hero">
          <img src={process.env.PUBLIC_URL + "/images/everest.jpg"} alt="blog" width="100%" />
             </div>
             <div>
          <h1>Blog</h1>
          <div className="rowblog">
          {bloglist}
          </div>
            </div>
            {/* json server bata link gareko */}
            {/* <div className="rowblog">
            <div className="columnblog">
              <img src={process.env.PUBLIC_URL + "/images/everest.jpg"}  alt="Everest" width="100%" />
              </div>
              </div> */}
              </>
        )
              /*
              <h1>What it's like to climb Mount Everest without oxygen</h1>
              <p>I’d be literally having to force myself after that 15th breath to take the next step,” said Ed Viesturs, the only American who has stood atop all 14 of the world’s 8,000-meter peaks — and he scaled them all without using supplemental oxygen. “Up there, you do something that’s too aerobic all of a sudden and you lay there for 10 minutes trying to catch your breath."

               Most people who climb Everest begin using supplemental oxygen — just "oxygen", in climbing terms — at around 23,000 feet (about 7,000 meters). Above 26,000 feet, nearly everyone uses it, including most Sherpa guides. The tiny subset of climbers who don’t use bottled oxygen account for about 3 percent of total summits but 22 percent of the 111 deaths that have occurred above 26,000 feet, according to Richard Salisbury of the Himalayan Database.

              Until this month, no one had been on top of Everest for two years; a catastrophic earthquake in Nepal triggered an avalanche that killed 24 on the mountain last year, ending the climbing season.
              This month, several hundred climbers have summited Everest, at least four have died, and more are still climbing. But very few will reach the peak without oxygen masks blocking their view.</p> 
            </div>
                <div className="columnblog">
              <img src={process.env.PUBLIC_URL + "/images/everest.jpg"}  alt="Everest" width="100%" />
              <h1>Trekkers gone out of contact in Annapurna Base Camp area</h1>
             <p>TAAN Nepal Kathmandu, TAAN Nepal Pokhara, Tourist Police Pokhara, UNITRAV and All Nepal Tourism Workers Union are coordinating 24 hours with dealing a situation and managed the sent resuce team at Avalanche place near   from Hinku Cave.Our resue team reached the Avalanche area. Local level also - led by Chairman of Ward No.11 Mr. Him Gurung Annapurna Munipalicity, Chhomrong Tourism Management Committee and Century Youth Club-A helicopter flown to rescue the Missing trekkers and workers. Thank you all support from local level and media freinds too. Any further information please contact us. Simbir Ghale Media coordinator 984-1146306 </p> 
            </div>
                <div className="columnblog">
              <img src={process.env.PUBLIC_URL + "/images/everest.jpg"}  alt="Everest" width="100%" />
              <h1>Visit Nepal Year 2020 campaign officially inaugurated</h1>
              <p>The much awaited National Campaign “Visit Nepal Year 2020” was inaugurated by the President Bidhya Devi Bhandari on January 1, 2020 by lighting the “Flame of Unity” and unveiling the mascot of the VNY Yeti.

              The VNY 2020 is being observed as a national festival with a target to bring in 2 million tourists, and with a determination to establish tourism sector as the major foundation of Nepal’s economic prosperity.
 
              Speaking in the inaugural ceremony, President Bhandari urged all for building greater cooperation and contribution to make the national campaign a grand success stating that such event helps achieve the goal of economic prosperity in the country. 

              In his welcome remarks, Minister for Culture, Tourism and Civil Aviation Yogesh Bhattarai said that the VNY 2020 was only an entry point and that the government was preparing to observe the coming decade as the tourism decade. He also asked the people to welcome the Visit Nepal Year (VNY) by enlightening their houses and to express their solidarity in the national campaign. “The brightness of the lights will give a message of our new journey,” he added.

              Trekking Agencies' Association of Nepal (TAAN) team led by President Khum Bahadur Subedi participated in the March past where different tourism related associations, social organizations, Nepal Army, Nepal Police and Armed Police Force made a special presentation.Hundreds of foreign delegates, including tourism ministers from India, China, Myanmar and Jamaica participated in the inaugural ceremony.

              Meanwhile, the campaign was also inaugurated in all seven provinces of Nepal in the same day.</p> 
            </div>
            </div>
            <div className="rowblog1">
            <div className="columnblog1">
            <img src={process.env.PUBLIC_URL + "/images/everest.jpg"}  alt="Everest" width="100%" />
            <h1>TAAN opposes double entry fees in national park </h1>
            <p>A delegation led by Trekking Agencies’ Association of Nepal (TAAN) President Mr. Khum Bahadur Subedi met with Hon’ble Minister for Forest and Environment Mr. Shakti Bahadur Basnet on December 6, 2019 TAAN First Vice President Mr. Cholendra Bahadur Karki handed over three point memorandum to the Minister Basnet expressing strong opposition to the decision of Sagarmatha National Park and Shivapuri Conservation Area to charge double entry fees as well as the requirement of compulsory 'Local Nature Guides' for visitors entering the park. TAAN Secretary Mr. Damodar Dhakal stated that it is really unfortunate to require a local guide to enter…
            </p>
            </div>
            <div className="columnblog1">
            <img src={process.env.PUBLIC_URL + "/images/everest.jpg"}  alt="Everest" width="100%" />
            <h1>TAAN discusses on Ramechhap tourism promotion </h1>
            <p>Trekking Agencies’ Association of Nepal (TAAN) held a meeting with Manthali Municipality of Ramechhap district on November 19.  As the government has decided to divert all flights of Lukla to Manthali airport from the Tribhuvan International Airport, tourists are facing difficulties due to ineffective management of airport and infrastructure. Discussing in the meeting, tourism entrepreneurs in Ramechhap are gearing up to develop the infrastructure in Manthali Municipality and TAAN has decided to provide skill-based training to entrepreneurs. “As entrepreneurs in Manthali have demanded skill-based training, we have decided to provide hospitality training here to improve the service quality,” TAAN General…
            </p>
            </div>
            <div className="columnblog1">
            <img src={process.env.PUBLIC_URL + "/images/everest.jpg"}  alt="Everest" width="100%" />
            <h1>Tourism Secretary to resolve problems in tourism sector </h1>
            <p>A delegation of Trekking Agencies’ Association of Nepal (TAAN) paid a courtesy call on Mr. Kedar Bahadur Adhikari, Secretary at the Ministry of Culture, Tourism and Civil Aviation on 23 October, 2019. The delegation led by TAAN President Mr. Khum Bahadur Subedi handed over 9-point memorandum to Secretary Adhikari apprising the latter about existing problems faced by Nepali tourism industry. The delegation pointed out the impractical imposition of expensive and double trekking permit fee as well as the need to make it mandatory to have at least two trekkers for trekking. Stating the importance of TIMS in controlling illegal trekking…</p>
            </div>
            </div> */
      
}
}

  export default Blog;