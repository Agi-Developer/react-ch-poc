import React, {Component} from 'react';
import './Searchbar.css';
class Searchbar extends Component {
    render() {
        return (
            <div className="search-bar">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4">
                            <form>
                                <input type="text" className="form-control"/>
                                    <a href="" className="search-icon-link">
                                        <span className="glyphicon glyphicon-search"></span>
                                    </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Searchbar;