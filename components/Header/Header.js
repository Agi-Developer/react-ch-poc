import React, {Component} from 'react';

class Head extends Component {
    render() {
        return (
            <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-9">
                            <img  src="https://www.corporatehousing.com/images/logo.png" alt="Corporate Housing"/>
                            </div>
                            <div className="col-md-8 col-sm-8 col-xs-3">
                                <ul className="clearfix pull-right">
                                        <li><a href="/">Search</a></li>
                                        <li><a href="/">About Us</a></li>
                                        <li><a href="/">Blog</a></li>
                                        <li><a href="/">Advertise</a></li>
                                        <li><a href="/">Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Head;