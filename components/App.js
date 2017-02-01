import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';
import Searchbar from './Searchbar/Searchbar';
import Breadcrumbs from './Breadcrumb/Breadcrumb';
import Propertydescription from './Propertydescription/Propertydescription';
import Featureproperties from './Featureproperties/Featureproperties';
class App extends Component {
    
    render() {
        return (
            <div>
                <Header/>
                <Searchbar/>
                <Breadcrumbs/>
                <Propertydescription/>
                <Featureproperties/>
            </div>
        );
    }
}

export default App;
