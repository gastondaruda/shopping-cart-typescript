import {Button, Card} from 'react-bootstrap/';
import { products } from '../utils';

const CardComponent = ({id,title,price, description, image, category }:products) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title} - {id}</Card.Title>
            <Card.Text>
                {description}
                <span>{category}</span>
            </Card.Text>
            <Button variant="primary">Buy {price}</Button>
        </Card.Body>
        </Card>
    );
}

export default CardComponent;
