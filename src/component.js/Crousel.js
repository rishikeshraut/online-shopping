import Carousel from 'react-bootstrap/Carousel';
import './crousel.css'

function Crousel() {
  return (
    <Carousel className='crow'>
      <Carousel.Item>
        <img
          className="crow1"
          src="https://ik.imagekit.io/ldqsn9vvwgg/image/mens-wear/img/mens-wear-wedding-sherwani.jpg"
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
          src="https://imagescdn.planetfashion.in/img/app/shopmedia/production/1/10-56-11314.jpg?w=992&auto=format"
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
          src="https://jade-media.jadeblue.com/media/wysiwyg/jadeblue/category/JadeBlue-Wedding-Wear.jpg"
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