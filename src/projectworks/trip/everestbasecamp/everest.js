import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../everestbasecamp/Everest_Base_Camp.css';
import '../everestbasecamp/res.css';
class Everest extends Component{
    render(){
        return(
<main>
	   	<div className="container">
	   		<div className="heroslider">
	   			<img src={process.env.PUBLIC_URL + "/images/everest/everest.jpg"} alt="everest" width="100%" />
	   			<div className="everest"><p>Everest Base Camp</p></div>
	   		</div>
	   	</div>
	   	<div className="container">
	   		<div className="row">
	   			<div className="columndetail">
	   				<h1>About Trip</h1>
	   				<p>Everest Base Camp trek is quite simply the classic trek in Nepal. High in the priority list of trekkers, the Everest Base Camp is one of the most visited regions in the Himalaya. The two week trek starts and finishes at Lukla, an airstrip to the south of the region also known as the ‘Gateway to Everest’. Most trekkers fly to Lukla, to begin the trek.

					Starting from Lukla, a gentle two-day trek up the Dudh Koshi valley leads to the famous Namche Bazaar. The route has an abundance of tea houses. Phakding and Monjo are the popular stopovers on the first day and just beyond Monjo is the entrance to the Sagarmatha National Park at Jorsale check point where permits are checked. The trail that followed the Dudh Koshi River starts going uphill from the suspension bridge just a few minutes from Jorsale and Namche Bazaar is reached after a 3 hour hike. 

					It is good to halt here for a few days to acclimatize by walking in the surroundings of Namche as it can’t be done in a hurry. A visit to Syangboche or some Sherpa villages such as Thame, Khumjung and Khunde just a few hours walk from Namche are good options for a hike to while away your time. 

					Leaving Namche Bazaar, the trail follows the valley of Imja Khola with spectacular views of Thamserku, Kangtega and Ama Dablam mountains, while dominating the skyline ahead are the giants, Lhotse and Everest. The most common night halt after Namche is at the top of a steep climb from the Imja Khola at Tengboche. The Tengboche Monastery is one of the most famous monasteries, probably because of its unrivalled backdrop, Mt. Ama Dablam.

					Following the Imja Khola from Tengboche, the trail ascends through Pangboche until Pheriche or Dingboche is reached, where the day’s trek ends. Another day of acclimatization follows with a fascinating side trip to Chhukung which is about a 3 hour walk from Dingboche. 

					From Dingboche or Pheriche a 6 hour walk leads to Lobuche which sits on the lateral moraine of the Khumbu glacier. What follows is a roughly 3 hour hike from Lobuche to the last settlement on the trail known as Gorak Shep. The few tea houses at this place provide shelter for the night before one undertakes the final leg of the trek over the glacier to Everest Base Camp.

					Above Gorak Shep is seen the popular view point known as Kala Patthar, from where many a trekker has captured the image of the world’s highest mountain and gazed up in awe. The trek along the glacier to base camp can take up to five hours. This is treacherous ground and one must walk through this area cautiously, as finding a route can be tricky and there’s always the risk of falling on the slippery ice. Being at Everest Base Camp is an out of this world experience.
					<br></br>
					Short Itinerary
				Day 01: Kathmandu or Pokhara - Nayapul - Ghandruk
				<br></br>
				Day 02: Ghandruk - Chhomrong - Sinuwa
				<br></br>
				Day 03: Sinuwa - Bamboo - Dovan - Himalayan - Deurali
				<br></br>
				Day 04: Deurali - MBC - Annapurna Base Camp
				<br></br>
				Day 05: Annapurna Base Camp - MBC- Deurali - Himalayan - Dovan -Bamboo
				<br></br>
				Day 06: Bamboo - Sinuwa - Chhomrong - Jhinu - Kyumi
				<br></br>
				Day 07: Kyumi - Siwai - Nayapul – Pokhara or Kathmandu</p><br />
				<Link to='/contact-us'><button className="btnbookt" type="button">Book Now</button><br /></Link>
	   			</div>
	   			<div className="columnservice">
	   				<h1>Service</h1>
	   				<ul>
	   					<li>Food</li>
	   					<li>Food</li>
	   					<li>Food</li>
	   					<li>Food</li>
	   					<li>Food</li>
	   					<li>Food</li>
	   					<li>Food</li>
	   					<li>Food</li>
	   					<li>Food</li>
	   					<li>Food</li>
	   				</ul>
	   			</div>
	   			</div>
	   			</div>
	   </main>
       );
       };
       }
       export default Everest;