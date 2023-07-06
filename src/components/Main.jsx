import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';
import homeimage1 from '../components/images/home-galaxy-z-flip5.jpeg';
import homeimage2 from '../components/images/samsung-fold5.jpeg';
import homeimage3 from '../components/images/galaxy_s23.jpg';

function Main() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 mt-5 pt-2 rounded-3"
                    src={homeimage1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Samsung Partner</h3>
                    <p>Get our Samsung products in authorized partners</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 mt-5 pt-2 rounded-3"
                    src={homeimage2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Samsung Official Services</h3>
                    <p>Get our Samsung products in authorized partners</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 mt-5 pt-2 rounded-3"
                    src={homeimage3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Samsung S23 ULTRA</h3>
                    <p>Get our Samsung products in authorized partners</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Main;