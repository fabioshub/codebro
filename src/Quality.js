import React, { Component } from 'react';

export default class extends Component {
    render() {
        const { title, text } = this.props.quality;
        return (
            <div className="col-sm-6 col-lg-4">
                <div className="media" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">
                    <img className="mr-4" src="assets/images/service1.png" alt="Web Development" />
                    <div className="media-body">
                        <h5>{title}</h5>
                        {text}
                    </div>
                </div>
            </div>
        );
    }
}