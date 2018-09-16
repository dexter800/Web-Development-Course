import  React, {Component} from 'react'; 
import Cardlist from '../companiant/Cardlist';
//import { robots } from './robots'; 
import SearchBox from '../companiant/SearchBox';
import './App.css';
import Scroll from '../companiant/Scroll'; 

class App extends Component {

    constructor () {
        super()
        this.state = {
            robots:[], 
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));

    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value })
       
    }

    render () {
        const { robots, searchfield} = this.state;
         const filteredRobots = robots.filter(robots => {
             return robots.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
         })

        return (
            
            <div className = 'tc'>

                <h1> RoboFriends </h1>  
                <SearchBox searchChange = {this.onSearchChange}/>
               <Scroll>
                    <Cardlist robots = {filteredRobots} /> 
         </Scroll>
            </div>
        );

        
    }

}

export default App; 