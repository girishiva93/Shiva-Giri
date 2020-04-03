import React, { Component } from 'react'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

class Search extends Component {
    state={
        search:''
    }

    onChange = (event) => {
        this.setState({search: event.target.value});
        console.log(this.state.search);
    }

    onSearch = (event) => {
        event.preventDefault();

        if(this.state.search.length>0)
        {
        axios.get(`http://localhost:8000/${this.state.search}`)
        .then(
            response => {
                let data = response.data;
                
                console.log(data);

                let container1 = document.querySelector('.container1')

                let html = ''

                data.forEach(element => {
                    html += 
                    `
                    <div>
                        <img src="images/everest/${element.image}"/>
                        <h1>${element.title}</h1>
                        <p>${element.Name}</P>
                        <p>${element.rating}</p>
                        <p>${element.Description}</p>   
                    </div>
                    `
                });
                container1.innerHTML = html;
            
            }
        )
        .catch(
            error=>{
                let container1 = document.querySelector('.container1')

                let html = "";

                html += 
                `
                <h1>The ${this.state.search} was not found.</h1>
                `

                container1.innerHTML = html;
            }
        )
    }  
    }

    render() {
        return(
            <React.Fragment>
        <div className="heroimg">
            <img src={process.env.PUBLIC_URL + "/images/patan.jpg"} alt='mount' width='100%'/>
        </div>
     <form>
          <div>
         <input type="Search name" onChange={this.onChange} className="herobtnsearch"  name="text" target="_blank" placeholder="What are you looking for ?"></input>
       </div>
       <Link to="/search">
       <div>
    <button onClick={this.onSearch} className="herobtn" target="_blank" type="submit">Search</button>
    </div>
    </Link>
     </form>
    <div><br></br>
    <h1><center>Best Place To Travel </center></h1>
    </div>
    </React.Fragment>
        );
    }
}
export default Search;