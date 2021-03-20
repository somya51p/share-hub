import React, {Component} from "react";
import {Container, Card, Button} from 'react-bootstrap';
class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/200/200" />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}<br />
            Shared by : {item.author.name}<br />
            Contact at : {item.author.phoneNumber}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Item;