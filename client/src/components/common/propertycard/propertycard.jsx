import React from 'react';
import { FiMapPin, FiHome, FiMaximize2 } from 'react-icons/fi';
import Button from '../button/button';
import Card from '../card/card';
import './PropertyCard.css';


export default function PropertyCard({ property }) {
  const { image, location, bedrooms, sqft, price, type } = property;

  return (
    <Card hoverable className="propertycard">
      <Card.Image src={image} alt={type} />

      <Card.Body>
        <div className="propertycard_location">
          <FiMapPin className="propertycard_icon" />
          <span>{location}</span>
        </div>
        <div className="propertycard_details">
          <div className="propertycard_detail">
            <FiHome className="propertycard_icon" />
            <span>{bedrooms} Rooms</span>
          </div>
          <div className="propertycard_detail">
            <FiMaximize2 className="propertycard_icon" />
            <span>{sqft} sq ft</span>
          </div>
        </div>
      </Card.Body>

      <Card.Footer>
        <div className="propertycard_footer">
          <Button variant="primary" size="small">
            sign up
          </Button>
          <span className="propertycard_price">৳{price}</span>
        </div>
      </Card.Footer>
    </Card>
  );
}
