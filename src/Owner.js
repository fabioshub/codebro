import React, { Component } from 'react';

export default class extends Component {
    render() {
        const { name, title, text } = this.props.owner;
        return (
            <div className="swiper-slide text-center">
                <div className="row">
                    <div className="offset-lg-1 col-lg-10">
                        <div className="test-img" data-aos="fade-up" data-aos-delay="0" data-aos-offset="0"><img
                            src="assets/images/test1.png" alt="Testimonial 1" /></div>
                        <h5 data-aos="fade-up" data-aos-delay="200" data-aos-duration="600"
                            data-aos-offset="0">{name}</h5>
                        <span data-aos="fade-up" data-aos-delay="400" data-aos-duration="600"
                            data-aos-offset="0">{title}</span>
                        <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="600"
                            data-aos-offset="0">{text}</p>
                    </div>
                </div>
            </div>
        );
    }
}