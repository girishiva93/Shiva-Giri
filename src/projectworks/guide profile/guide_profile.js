import React,{Component} from 'react';
// import axios from "axios";
import '../guide profile/guide.css';
import '../guide profile/guideres.css';
class Guide_profile extends Component{
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		Guide_Profile: []
	// 	}
	// }
	// componentDidMount(){
	// 	axios.get('http://localhost:8000/Guide_Profile')
	// 	.then(response => {
	// 		return response.data;
	// 	})
	// 	.then(data => {
	// 		console.log(data)
	// 		this.setState({
	// 			Guide_Profile: data.slice(0,10)
	// 		});
	// 	})
	// }
	// render(){
	// 	const Guide_Profile = this.state.Guide_Profile;
	// 	const Guide_Profilelist = Guide_Profile.length ? (
	// 		<>
	// 					 {Guide_Profile.map(Guide_Profile => (
	// 						 <div className="columnjohn" key={Math.random()}>
	// 							 <img src={"images/"+ Guide_Profile.image} alt="guide" width="100%" ></img> 
	// 							<div className="Name"><h1>{Guide_Profile.Name}</h1></div>
	// 							<div className="Description">{Guide_Profile.Description}</div>
	// 							</div>
	// 					   ))}
	// 		</>
	// 	):(
	// 		<div className="center">No post to Show</div>
	// 	);
	// 	return(
	// 		<>
 	// <div className="heroimg">
	// <img src={process.env.PUBLIC_URL + "/images/guide profile/team.jpg"} alt="group" width="100%" />
	// <div className="row">
	// 	{Guide_Profilelist}
	// </div>
	// 	</div>
	// 	</>
	// 	);
	//    json server bata link gareko 
	



	
	    render(){
        return(
		<>
		<div className="container">
	<div className="heroimg">
	<img src={process.env.PUBLIC_URL + "/images/guide profile/team.jpg"} alt="group" width="100%" />
</div>
<div className="row">
	<div className="columnimg">
		<img className="guideimg" src={process.env.PUBLIC_URL + "/images/guide profile/john.jpg"} alt="Johnson" width="100%" /><br />
	</div>	
	<div className="columnjohn">
		<h1>Name:johnson</h1>
		<p>Sherpa, also called Sharwa, group of some 150,000 mountain-dwelling people of Nepal; Sikkim state, India; and Tibet (China); they are related to the Bhutia. Small groups of Sherpas also live in parts of North America, Australia, and Europe. Sherpas are of Tibetan culture and descent and speak a language called Sherpa, which is closely related to the form of Tibetan spoken in Tibet. Sherpa is predominately a spoken language, although it is occasionally written in the Tibetan or Devanagari script. The greatest number of Sherpas live in Nepal and speak Nepali in addition to their own language. Those educated in Tibet or in Tibetan Buddhist monasteries may speak Tibetan. Most of those whose livelihood depends on mountaineering also speak one or several of the languages of climbers and tourists.</p>
	</div>
	</div>
	{/* <!-- Guide profile of johnson --> */}
	<div className="row1">
	<div className="columnimg1">
		<img className="guideimg1" src={process.env.PUBLIC_URL +"/images/guide profile/aasis.jpg"} alt="Johnson" width="100%" /><br />
	</div>	
	<div className="columnshiva">
		<h1>Name:Shiva</h1>
		<p>Sherpa, also called Sharwa, group of some 150,000 mountain-dwelling people of Nepal; Sikkim state, India; and Tibet (China); they are related to the Bhutia. Small groups of Sherpas also live in parts of North America, Australia, and Europe. Sherpas are of Tibetan culture and descent and speak a language called Sherpa, which is closely related to the form of Tibetan spoken in Tibet. Sherpa is predominately a spoken language, although it is occasionally written in the Tibetan or Devanagari script. The greatest number of Sherpas live in Nepal and speak Nepali in addition to their own language. Those educated in Tibet or in Tibetan Buddhist monasteries may speak Tibetan. Most of those whose livelihood depends on mountaineering also speak one or several of the languages of climbers and tourists.</p>
	</div>
	</div>
	{/* <!-- profile of shiva  --> */}
	<div className="row2">
	<div className="columnimg2">
		<img class="guideimg2" src={process.env.PUBLIC_URL +"/images/guide profile/pramod.jpg"} alt="Johnson" width="100%" /><br />
	</div>	
	<div className="columnpramod">
		<h1>Name:Pramod</h1>
		<p>Sherpa, also called Sharwa, group of some 150,000 mountain-dwelling people of Nepal; Sikkim state, India; and Tibet (China); they are related to the Bhutia. Small groups of Sherpas also live in parts of North America, Australia, and Europe. Sherpas are of Tibetan culture and descent and speak a language called Sherpa, which is closely related to the form of Tibetan spoken in Tibet. Sherpa is predominately a spoken language, although it is occasionally written in the Tibetan or Devanagari script. The greatest number of Sherpas live in Nepal and speak Nepali in addition to their own language. Those educated in Tibet or in Tibetan Buddhist monasteries may speak Tibetan. Most of those whose livelihood depends on mountaineering also speak one or several of the languages of climbers and tourists.</p>
	</div>
	</div>
	{/* <!-- profile of pramod --> */}
	<div className="row3">
	<div className="columnimg3">
		<img className="guideimg3" src={process.env.PUBLIC_URL + "/images/guide profile/yogi.jpg"} alt="Johnson" width="100%" /><br />
	</div>	
	<div className="columnyogi">
		<h1>Name:Yogesh</h1>
		<p>Sherpa, also called Sharwa, group of some 150,000 mountain-dwelling people of Nepal; Sikkim state, India; and Tibet (China); they are related to the Bhutia. Small groups of Sherpas also live in parts of North America, Australia, and Europe. Sherpas are of Tibetan culture and descent and speak a language called Sherpa, which is closely related to the form of Tibetan spoken in Tibet. Sherpa is predominately a spoken language, although it is occasionally written in the Tibetan or Devanagari script. The greatest number of Sherpas live in Nepal and speak Nepali in addition to their own language. Those educated in Tibet or in Tibetan Buddhist monasteries may speak Tibetan. Most of those whose livelihood depends on mountaineering also speak one or several of the languages of climbers and tourists.</p>
	</div>
	</div>
</div>
</>
        );
    }
}


export default Guide_profile;