import React,{Component} from 'react';
import '../everestbasecamp/Everest_Base_Camp.css';
import '../everestbasecamp/res.css';
class Chitwan extends Component{
    render(){
        return(
<main>
	   	<div className="container">
	   		<div className="heroslider">
	   			<img src={process.env.PUBLIC_URL + "/images/trip/Lion.jpg"} alt="mount" width="100%" />
	   			<div className="everest"><p>Beautyful Chitwan</p></div>
	   		</div>
	   	</div>
	   	<div className="container">
	   		<div className="row">
	   			<div className="columndetail">
	   				<h1>About Trip</h1>
	   				<p>Nepal government will conduct Rhino census in March next year.  The government could not conduct planned Rhino census last year as the donor agencies failed to provide the funding they pledged for the same.  
					Officials of the Department of National Parks and Wildlife Conservation (DNPWC) said that they have already allocated budget Rs 11 million for this purpose. Officials said that they will approach the donor agencies only if they fail to have enough budgets for the census.Rhinos are found in Chitwan, Parsa, Bardiya and Shuklaphanta national parks. The census would be carried out in these national parks simultaneously. DNPWC deputy director-general Ram Chandra Kandel said they have started preparations to conduct the rhino census beginning from March 14, 2020.Officials said that separate task forces will be formed at the national parks under the coordination of the chief conservation officer of the park concerned as part of the Rhino census.According to him, a separate committee would also be formed at the Department to this effect.

					Kandel said a budget of around Rs 15 million is expected to be required for conducting the census in all the four national parks.The Department had not earmarked the budget under this heading last year. He said the rhino counting will take about one month in Chitwan national park while it may take for about a week to 10 days in other national parks.The highest number of rhinos is found in Chitwan. As per the census held in 2015, there were 645 rhinos throughout the country. Of the total number, 605 rhinos were counted in Chitwan national park alone. Many rhinos were swept away by the flood in Chitwan two years back while some of these pachyderms were found dead.</p><br />
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
       export default Chitwan;