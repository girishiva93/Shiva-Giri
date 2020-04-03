import React from 'react';
import { Switch,Route,BrowserRouter } from 'react-router-dom';
import Navbar from './projectworks/navbar';
import '../src/projectworks/home/home.css';
import Indexhome from './projectworks/indexhome';
import Aboutus from '../src/projectworks/About_us/about-us';
import Trip from './projectworks/trip/trip';
import Guide_profile from './projectworks/guide profile/guide_profile';
import Everest from '../src/projectworks/trip/everestbasecamp/everest';
import Anapurna from '../src/projectworks/trip/Anapurna/anapurna';
import Mustang from './projectworks/trip/mustang/mustang';
import Chitwan from './projectworks/trip/chitwan national park/chitwan';
import Bungee from './projectworks/trip/Bungee/bungee';
import Footer from './projectworks/footer';
import Kathmandu from './projectworks/trip/kathmanduseeing/kathmandu';
import FormDataComponent from './projectworks/Contact form/contact';
import Blog from './projectworks/blog/blog';

import Search from './projectworks/Search/search';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component ={Indexhome} />
        <Route path="/about-us" component={Aboutus} />
        <Route path="/trip" component={Trip} />
        <Route path="/blog" component={Blog} />
        <Route path="/guide-profile" component={Guide_profile} />
        <Route path="/contact-us" component={FormDataComponent} />
        {/* trip ko details */}
        <Route path="/Everest" component={Everest} />
        <Route path="/Anapurna" component={Anapurna} />
        <Route path="/mustang" component={Mustang} />
        <Route path="/chitwan" component={Chitwan} />
        <Route path="/bungee"  component={Bungee} />
        <Route path="/kathmandu"  component={Kathmandu} />
          {/* Search garna ko lagi path  */}
        <Route path="/search" component={Search} />

      </Switch>
      <Footer />
      </BrowserRouter>
  );
}
export default App;
