import Carousel from 'react-bootstrap/Carousel';
import './crousel.css'

function Crousel() {
  return (
    <Carousel className='crow'>
      <Carousel.Item>
        <img
          className="crow1"
          src="https://img.freepik.com/premium-vector/christmas-gadget-sale-social-media-instagram-web-banner-facebook-cover-template-premium-vector_511734-352.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="crow2"
          src="https://www.shutterstock.com/image-vector/mobile-application-shopping-online-on-260nw-1379237159.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="crow3"
          src="https://www.shutterstock.com/image-vector/mobile-application-shopping-online-on-260nw-1379237159.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Crousel;