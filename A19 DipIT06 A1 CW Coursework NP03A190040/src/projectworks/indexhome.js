import React, { Component } from 'react'; 
import './home/responsive.css';
import { Link } from 'react-router-dom';
import './trip/everestbasecamp/everest';
import axios from 'axios';
import './Search/search';
import Search from './Search/search';

class Indexhome extends Component {
    render() {
        return(
            <React.Fragment>
                <Search />
<div className="container1">  
        <div className="row1">
            <div className="col1">
                <img src={process.env.PUBLIC_URL + "/images/trip/everest.jpg"} alt='mount' width='100%'/>
                <h1>Everest Base Camp</h1>
                 <p>Everest Base Camp trek is quite simply the classic trek in Nepal. High in the priority list of trekkers, the Everest Base Camp is one of the most visited regions in the Himalaya. The two week trek starts and finishes at Lukla, an airstrip to the south of the region also known as the ‘Gateway to Everest’. Most trekkers fly to Lukla, to begin the trek.Starting from Lukla, a gentle two-day trek up the Dudh Koshi valley leads to the famous Namche Bazaar. The route has an abundance of tea houses.</p>
                 <Link to="/Everest"><button className="readmore" type="button">Read More!</button></Link>
            </div>
            <div className="col1">
            <img src={process.env.PUBLIC_URL + "/images/trip/anapurna.jpg"} alt='mount' width='100%'/>
                <h1>Anapurna Base Camp</h1>
                <p>7 Days Annapurna base camp trek starts at Kimche, a short drive of 3 hours from Pokhara and one hour trek to Ghandruk village. The trail takes you through forests and fascinating traditional villages of Ghandurk and Chhomrong Gurung village. After reaching Chhomrong Gurung village, we follow the Modi Khola and passes through stands of rhododendron trees and bamboo. By the time you reach the large rock overhanging.</p>
                 <Link to="/Anapurna"><button className="readmore" type="button">Read More!</button></Link>
            </div>    
            <div className="col1">
            <img src={process.env.PUBLIC_URL + "/images/trip/mustang.jpg"} alt='mount' width='100%'/>
                 <h1>Mustang Village Camp</h1>
                 <p>Mustang is actually a district in the western part of Nepal. It is divided into two parts by the Himalayas. The lower part towards the south is called lower Mustang and the upper part towards the north is called Upper Mustang. Mustang Village isn’t really a single village, rather, it is a cluster of villages in the Mustang district. Mustang Village is one of the ideal destinations for you to spend your vacation, as it offers different kinds of experiences to the tourists that make it a point .</p>
                 <Link to="/Mustang"><button className="readmore" type="button">Read More!</button></Link>
                 </div>
            </div>
            <div>
                <br></br>
            <Link to="/trip"><button className="moretrip" type="button">Find more Trip in Nepal</button></Link>
            </div>
        </div>
        {/* <!-- *********************************************Trip************************************* --> */}
        <div>
          <h1><center>Meet Our Local Guide</center></h1>
        </div>
           <div className="container1">  
        <div className="row2">
        <div className="col2">
            <img src={process.env.PUBLIC_URL + "/images/john.jpg"} alt='mount' width='100%'/>
                 <h1>Johnson Dhakal</h1>
                 <p>Sherpa, also called Sharwa, group of some 150,000 mountain-dwelling people of Nepal; Sikkim state, India; and Tibet (China); they are related to the Bhutia. Small groups of Sherpas also live in parts of North America, Australia, and Europe. Sherpas are of Tibetan culture.</p>
                  <Link to="guide-profile"><button className="readmore" type="button">Read More!</button></Link>
            </div>
        <div className="col2">
            <img src={process.env.PUBLIC_URL + "/images/aasis.jpg"} alt='mount' width='100%'/>
                <h1>Shiva Giri</h1>
                <p>Sherpa, also called Sharwa, group of some 150,000 mountain-dwelling people of Nepal; Sikkim state, India; and Tibet (China); they are related to the Bhutia. Small groups of Sherpas also live in parts of North America, Australia, and Europe. Sherpas are of Tibetan culture.</p>
                <Link to="guide-profile"><button className="readmore" type="button">Read More!</button></Link>
            </div>  
            <div className="col2">
            <img src={process.env.PUBLIC_URL + "/images/pramod.jpg"} alt='mount' width='100%'/>
                <h1>Pramod Chaudhary</h1>
                <p>Sherpa, also called Sharwa, group of some 150,000 mountain-dwelling people of Nepal; Sikkim state, India; and Tibet (China); they are related to the Bhutia. Small groups of Sherpas also live in parts of North America, Australia, and Europe. Sherpas are of Tibetan culture.</p>
                <Link to="guide-profile"><button className="readmore" type="button">Read More!</button></Link>
            </div> 
            <div className="col2">
            <img src={process.env.PUBLIC_URL + "/images/yogi.jpg"} alt='mount' width='100%'/>
                <h1>Yogesh shrestha </h1>
                 <p>Sherpa, also called Sharwa, group of some 150,000 mountain-dwelling people of Nepal; Sikkim state, India; and Tibet (China); they are related to the Bhutia. Small groups of Sherpas also live in parts of North America, Australia, and Europe. Sherpas are of Tibetan culture.</p>
                 <Link to="guide-profile"><button className="readmore" type="button">Read More!</button></Link>
            </div>
        </div>
        <br></br>
        <div>
            <br></br>
            <Link to="/guide-profile">
            <button className="moretrip1" type="button">Find more Local Guide</button></Link>
        </div>   
        </div>
        {/* <!-- ***********************************Guide Guys**************** --> */}
    </React.Fragment>
   );
    }
}
    export default Indexhome;