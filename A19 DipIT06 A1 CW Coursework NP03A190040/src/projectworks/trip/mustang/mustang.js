import React,{Component} from 'react';
import '../everestbasecamp/Everest_Base_Camp.css';
import '../everestbasecamp/res.css';
class Mustang extends Component{
    render(){
        return(
<main>
	   	<div className="container">
	   		<div className="heroslider">
	   			<img src={process.env.PUBLIC_URL + "/images/everest/everest.jpg"} alt="mount" width="100%" />
	   			<div className="everest"><p>Mustang Village Trip</p></div>
	   		</div>
	   	</div>
	   	<div className="container">
	   		<div className="row">
	   			<div className="columndetail">
	   				<h1>About Trip</h1>
	   				<p>Mustang is actually a district in the western part of Nepal. It is divided into two parts by the Himalayas. The lower part towards the south is called lower Mustang and the upper part towards the north is called Upper Mustang. Mustang Village isn’t really a single village, rather, it is a cluster of villages in the Mustang district. Mustang Village is one of the ideal destinations for you to spend your vacation, as it offers different kinds of experiences to the tourists that make it a point to take a tour here. Mustang Nepal is full of not just natural spectacles, but also religious and cultural heritages. Mustang Nepal is influenced mostly by Buddhism, but since Mustang Village is located so closely to Tibet, you’ll also get to witness an influence of Tibetan Buddhism and Bon religion here, which is a faith that originated in Tibet. Mustang Village is located around the Himalayas, and so, you’ll come across numerous Mustang Valley Nepal. The Mustang Valley Nepal is home to not just people but different species of wildlife and flora.</p><br />
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
       );
       };
       }
       export default Mustang;