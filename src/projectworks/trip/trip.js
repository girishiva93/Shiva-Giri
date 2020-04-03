import React, {Component} from 'react';
import '../trip/trip.css';
import {Link} from 'react-router-dom';
import '../trip/tripres.css';
class Trip extends Component{
    
     render(){
         return(
         <main>
            <div className="container">
	 	        <div className="heroslider">
			    <img src={process.env.PUBLIC_URL+"/images/trip/mount.jpg"} alt="mount" width="100%" />
			  		<div className="happyholidays"><p>Happy Holidays</p></div>
                 </div>
             </div>
         <div className="container"><br></br>
         <h1><center>Mountain Area</center></h1><br></br>
         <div className="row">
             <div className="columneve">
                 <img src={process.env.PUBLIC_URL + "/images/trip/everest.jpg"} alt="everest" width='100%'/>
                 <h1>Everest Base Camp</h1>
                 <p>Everest Base Camp trek is quite simply the classic trek in Nepal. High in the priority list of trekkers, the Everest Base Camp is one of the most visited regions in the Himalaya. The two week trek starts and finishes at Lukla, an airstrip to the south of the region also known as the ‘Gateway to Everest’. Most trekkers fly to Lukla, to begin the trek.Starting from Lukla, a gentle two-day trek up the Dudh Koshi valley leads to the famous Namche Bazaar. The route has an abundance of tea houses. </p>
                 <Link to="/Everest"><button className="readmore" type="button">Read More!</button></Link>
             </div>
             <div className="columneve">
              <img src={process.env.PUBLIC_URL + "/images/trip/anapurna.jpg"} alt="anapurna" width='100%'/>
                 <h1>Anapurna Base Camp</h1>
                 <p>7 Days Annapurna base camp trek starts at Kimche, a short drive of 3 hours from Pokhara and one hour trek to Ghandruk village. The trail takes you through forests and fascinating traditional villages of Ghandurk and Chhomrong Gurung village. After reaching Chhomrong Gurung village, we follow the Modi Khola and passes through stands of rhododendron trees and bamboo. By the time you reach the large rock overhanging, known as Hinku Cave, you will have noticed that the vegetation has thinned and the gorge narrowed to be only a few hundred meters wide. Steep snow-clad ridges falling from Hiunchuli on the left and Machhapuchhre on the right from the sanctuary.</p>
                 <div><Link to="/Anapurna"><button className="readmore" type="button">Read More!</button></Link></div>
             </div>
             <div className="columneve">
                 <img src={process.env.PUBLIC_URL + "/images/trip/mustang.jpg"} alt="mustang" width="100%" />
                 <h1>Mustang Village Camp</h1>
                 <p>Mustang is actually a district in the western part of Nepal. It is divided into two parts by the Himalayas. The lower part towards the south is called lower Mustang and the upper part towards the north is called Upper Mustang. Mustang Village isn’t really a single village, rather, it is a cluster of villages in the Mustang district. Mustang Village is one of the ideal destinations for you to spend your vacation, as it offers different kinds of experiences to the tourists that make it a point to take a tour here. Mustang Nepal is full of not just natural spectacles, but also religious and cultural heritages.</p>
                 <div><Link to="/Mustang"><button className="readmore" type="button">Read More!</button></Link></div>
             </div>
         </div>

     </div>
     <div className="container">
         <h1><center>Nature Trip</center></h1><br></br>
         <div className="row1">
             <div className="column1">
                 <img src={process.env.PUBLIC_URL+ "/images/trip/Lion.jpg"} alt="lion" width="100%" />
                 <h1>Chitwan National Park</h1>
                 <p>Nepal government will conduct Rhino census in March next year.  The government could not conduct planned Rhino census last year as the donor agencies failed to provide the funding they pledged for the same.  
				 Officials of the Department of National Parks and Wildlife Conservation (DNPWC) said that they have already allocated budget Rs 11 million for this purpose. Officials said that they will approach the donor agencies only if they fail to have enough budgets for the census.</p>
                 <div><Link to="/chitwan"><button className="readmore" type="button">Read More!</button></Link></div>
             </div>
             <div className="column1">
                 <img src={process.env.PUBLIC_URL + "/images/trip/Bungee.jpg"} alt="bungee" width="100%" />
                 <h1>Bungee Jumping</h1>
                 <p>Adrenaline junkies have been coming to Nepal to experience this breathtaking and heart-pounding thrill of plunging off a suspension bridge above a river canyon. If you've got the courage it's the ultimate thrill few other activities can match and it's something that will stay with you forever.The thrill of a bungee jump can be experienced either at The Last Resort along the Arniko Highway or in the fascinating city of Pokhara.The bungee jump at the Last Resort was designed by one of New Zealand’s leading bungee</p>
                 <div><Link to="/bungee"><button className="readmore" type="button">Read More!</button></Link></div>
             </div>
             <div className="column1">
                 <img src={process.env.PUBLIC_URL + "/images/trip/patanphoto.jpg"} alt="patan" width="100%" />
                 <h1>Full Day Sightseeing in kathmandu</h1>
                 <p>Kathmandu day tour include tours of UNESCO world heritage cultural sites of Kathmandu. The day tour in Kathmandu includes tour of Kathmandu durbar squire, Swayambhunath Stupa, Bouddanath stupa and Pasupatinath temple in a single day & suitable for all aged people.Our tour guide collect you from your hotel.</p>
                 <div><Link to="/kathmandu"><button className="readmore" type="button">Read More!</button></Link></div>
             </div>
         </div>

         </div>    
         </main>
         );
     };
}
export default Trip ;