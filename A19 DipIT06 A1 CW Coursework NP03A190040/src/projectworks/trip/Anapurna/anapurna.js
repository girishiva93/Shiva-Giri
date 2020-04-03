import React, {Component} from 'react';
import '../Anapurna/anapurna.css';
import '../Anapurna/anapurnares.css';
class Anapurna extends Component{
    render(){
        return(
            <React.Fragment>
                <main>
	   	<div className="container">
	   		<div className="heroslider">
	   			<img src={process.env.PUBLIC_URL + "/images/everest/everest.jpg"} alt='anapurna' width="100%" />
	   			<div className="everesttext"><p>Anapurna Base Camp</p></div>
	   		</div>
	   	</div>
	   	<div className="container">
	   		<div className="row">
	   			<div className="columndetail">
	   				<h1>About Trip</h1>
	   				<p>7 Days Annapurna base camp trek starts at Kimche, a short drive of 3 hours from Pokhara and one hour trek to Ghandruk village. The trail takes you through forests and fascinating traditional villages of Ghandurk and Chhomrong Gurung village. After reaching Chhomrong Gurung village, we follow the Modi Khola and passes through stands of rhododendron trees and bamboo. By the time you reach the large rock overhanging, known as Hinku Cave, you will have noticed that the vegetation has thinned and the gorge narrowed to be only a few hundred meters wide. Steep snow-clad ridges falling from Hiunchuli on the left and Machhapuchhre on the right from the sanctuary. As we enter the sanctuary, you find yourself in a huge Amphitheatre enclosed by a solid wall of snow-capped peaks. We get to Annapurna base camp hardly. You will see Himchuli, Annapurna South, Barahi Shikhar, Annapurna I, Tent Peak, Singachuli, Glacier Dom, Gangapurna, Annapurna III and Machhapuchhre snow-capped mountains around the Annapurna base camp which makes you worthwhile and happy. After this imaging view, you will trek down to Pokhara via Jhinu Hot Spring.
						Nepal Hidden Treks and Expedition organize 7 Days ABC Trek from Kathmandu or Pokhara.
						7 Days Annapurna Base Camp Trek Highlights
						Highest Point Annapurna Base Camp (4130m)
						Very popular Gurung village Ghandruk and Chhomrong
						Jhinu Natural Hot Spring
						Himchuli, Annapurna South, Barahi Shikhar, Annapurna I, Glacier Dom, Gangapurna, Annapurna III and Machhapuchhre
						Annapurna conservation area project (ACAP)
						Trek Starting Point: Kathmandu or Pokhara

							Option I: If you start ABC  Trek from Pokhara, you will drive from your Hotel in Pokhara to Kimche and start the trek.
							Option II: If you start ABC trek from Kathmandu, you will take an early (first) flight from Kathmandu to Pokhara and drive to Kimche then start the trek on the same day.

							Duration of Trek: If you want to include Ghorepani and Poonhill on this trek, it takes 09 days ( 2 extra days).
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
	   			<button className="btnbookt" type="button">Book Now</button><br />
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
            </React.Fragment>
        );
    }
}
export default Anapurna; 