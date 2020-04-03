import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../everestbasecamp/Everest_Base_Camp.css';
import '../everestbasecamp/res.css';
class Kathmandu extends Component{
    render(){
        return(
<main>
	   	<div className="container">
	   		<div className="heroslider">
	   			<img src={process.env.PUBLIC_URL + "/images/everest/everest.jpg"} alt="mount" width="100%" />
	   			<div className="everest"><p>Kathmandu Sightseeing</p></div>
	   		</div>
	   	</div>
	   	<div className="container">
	   		<div className="row">
	   			<div className="columndetail">
	   				<h1>About Trip</h1>
	   				<p>Kathmandu day tour include tours of UNESCO world heritage cultural sites of Kathmandu. The day tour in Kathmandu includes tour of Kathmandu durbar squire, Swayambhunath Stupa, Bouddanath stupa and Pasupatinath temple in a single day & suitable for all aged people.Our tour guide collect you from your hotel (from your hotel you stay in Kathmandu) from 9:00 am to 9:30 am in the morning and you will be proceed Kathmandu tour with expert local tour guide and private vehicle.Kathmandu day tour starts from Swayambhunath Stupa commonly known as Monkey Temple. Legends say that Swayambhu was conceived out of a lotus blossom that sprouted amidst a lake that once spread over the Kathmandu valley. The biggest picture of the Sakyamuni Buddha in Nepal sits on a pedestal on the western limit of Swayambhu. Behind the ridge is a temple committed to Manjusri or Saraswati - the Goddess of learning. Chaityas, statues, and holy places of Buddhist and Hindu divinities fill the stupa complex, the Swayambhunath stupa is one of the UNESCO cultural heritage in Nepal.Kathmandu day tour then goes to visit Kathmandu durbar squire. The Kathmandu Durbar Square is one of the UNESCO World Heritage Sites also known as Hanuman Dhoka Square/Basantapur is one of the main attractions in Kathmandu valley. The name Hanuman Dhoka Durbar is originated from the statue of Hanuman set up by the King Pratap Malla at the passage of the regal royal residence in 1672 A.D. There are several temples, shrines, courtyards, and a palace inside the Durbar square that reflects the art and architecture of the medieval time.Kathmandu day tour then procced to Bouddhanath Stupa. Located 8 km toward the east of downtown Kathmandu, Boudhanath is a standout amongst the most imposing tourist spots in Kathmandu. The 36-meter-high stupa of Boudhanath is one of the biggest stupas in South Asia. With incalculable religious communities encompassing it, Boudhanath is the focal point of Tibetan Buddhism in Nepal. Bouddhanath Stupa is another UNESCO cultural heritage sites. You have lunch in restaurant in Bouddhanath.The day tour in Kathmandu then goes to visit the Pasupatinath temple and this heritage is the last place to visit on our day tour for today. The Pasupatinath Temple is devoted to Lord Shiva, Pashupatinath is one of the four most vital religious sites in Asia for devotees of Shiva. Built in the fifth century, and later redesigned by Malla rulers, the site itself is said to have existed from the earliest starting point of the thousand years when a Shiva lingam was found here. The biggest temple complex in Nepal, it extends on the two sides of the Bagmati River which is viewed as heavenly by Hindus and you see the cremation in this site as well.After visiting Pasupatinath temple, the Kathmandu day tour is complete and our guide drop you to your hotel in Kathmandu..</p><br />
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
       export default Kathmandu;