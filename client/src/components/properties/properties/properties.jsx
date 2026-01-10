import React, { useState } from "react";
import SearchBar from "../../common/searchbar/SearchBar";
import PropertyGrid from "../propertygrid/propertygrid";
import "./properties.css";


import img1 from '../../../assets/WhatsApp Image 2025-11-09 at 20.18.45_de9d3580.jpg';
import img2 from '../../../assets/WhatsApp Image 2025-11-09 at 20.24.34_bb97bdc6.jpg';

export default function Properties() {
  const [properties, setProperties] = useState([
    { id: 1, image: img1, location: "Ranirbazar, Comilla", bedrooms: 6, sqft: 1800, price: "85,00,000", type: "Luxury Home" },
    { id: 2, image: img2, location: "Ashoktala, Comilla", bedrooms: 4, sqft: 2500, price: "1,25,00,000", type: "Modern Villa" },
    { id: 3, image: img2, location: "Ashoktala, Comilla", bedrooms: 4, sqft: 2500, price: "1,25,00,000", type: "Modern Villa" }
  ]);


  const handleSearch = (query) => {
    console.log("Search query:", query);
    // backend fetch poroborti te
  };

  return (
    <div>
      <header className="properties-header">
        <h1>Browse Properties</h1>
        <p>Filter and explore our latest properties available for rent and sale.</p>
      </header>

      <SearchBar onSearch={handleSearch} />

      <PropertyGrid properties={properties} />
    </div>
  );
}


