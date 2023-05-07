import Carousel from 'react-bootstrap/Carousel';
const CarosalItem = ({image, title , description}) => {
    return (
        <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={image} alt="First slide"
        />
        <Carousel.Caption>
          <h3>{title}</h3>
          <p>{description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
}
export default CarosalItem;