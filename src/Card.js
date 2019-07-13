import React, { Component } from 'react';

export default class extends Component {
    render() {
        const { title, price, text, size } = this.props.packageObject;
        return (
            <div className={`col-md-4`}>
                <div className="single-pricing text-center" data-aos="fade-up" data-aos-delay="300"
                    data-aos-duration="600">
                    <span>Maandelijks</span>
                    <h2>{title}</h2>
                    <p className="desc"></p>
                    <p className="price">{price}</p>
                    <p style={{ padding: '20px' }}>{text}</p>
                    <a href="#" className="btn btn-primary">Buy Now</a>
                    <svg viewBox="0 0 170 193">
                        <path fillRule="evenodd" fill="rgb(238, 21, 21)"
                            d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z" />
                    </svg>
                </div>
            </div>
        );
    }
}