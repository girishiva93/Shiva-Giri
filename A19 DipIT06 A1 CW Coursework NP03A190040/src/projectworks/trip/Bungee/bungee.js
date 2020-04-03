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
	   			<img src={process.env.PUBLIC_URL + "/images/everest/everest.jpg"} alt="mount" width="100%" />
	   			<div className="everest"><p>Bungee Jumping</p></div>
	   		</div>
	   	</div>
	   	<div className="container">
	   		<div className="row">
	   			<div className="columndetail">
	   				<h1>About Trip</h1>
	   				<p>Adrenaline junkies have been coming to Nepal to experience this breathtaking and heart-pounding thrill of plunging off a suspension bridge above a river canyon. If you've got the courage it's the ultimate thrill few other activities can match and it's something that will stay with you forever.The thrill of a bungee jump can be experienced either at The Last Resort along the Arniko Highway or in the fascinating city of Pokhara.The bungee jump at the Last Resort was designed by one of New Zealand’s leading bungee consultants, and is operated by some of the most experienced jump masters in the business. The jump takes place from a 166 m wide steel suspension bridge that joins two sides of a deep valley over the raging Bhote Koshi River. The place has spectacular scenery with dense forests covering the top of the cliff. One can overnight here and go rafting canyoning and rock climbing as well.</p><br />
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