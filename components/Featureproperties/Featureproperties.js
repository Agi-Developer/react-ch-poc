import React, {Component} from 'react';
import "./Featureproperties.css"
class Featureproperties extends Component {
    render() {
        return (
            <div className="feature-properties flex-container">
                <div className="container feature-heading">
                    <h3>Featured Properties</h3>
                </div>
                    <div className="container feature-slider-mx visible-xs-block col-xs-12">
                    <div className="im">
                        <img src="https://www.corporatehousing.com/images/sites/3644/thumb-photo-14065829450532-466026658657.jpg" alt=""/>
                        <img src="https://www.corporatehousing.com/images/sites/8939/thumb-photo-14725040397342-724294737912.jpg" alt=""/>
                        <img src="https://www.corporatehousing.com/images/sites/8282/thumb-photo-14192712422364-975205421447.jpg" alt=""/>
                    </div>
                    </div>
                    <div className="container feature-slider">
                    <div></div>
                </div>
                <div className="container feature-slider hidden-xs hidden-sm">
                    <div className="slider-wrapper">
                        <div className="module-slider">
                            <div className="slider-viewport _viewport">
                                <div className="_holder is-animate">
                                
                                </div>
                            </div>
                            <a className="slider-nav _next">
                                <span className="glyphicon glyphicon-menu-right"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featureproperties;