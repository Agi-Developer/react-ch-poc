import React, {Component} from 'react';
import "./Breadcrumb.css";

class Breadcrumb extends Component {
    render() {
        return (
            <div className="bread-crumbs" >
                <div className="container">
                    <ol className="breadcrumb">
                        <li><a href="#">Corporate Housing</a></li>&nbsp;&nbsp;<span>></span>
                    </ol>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;