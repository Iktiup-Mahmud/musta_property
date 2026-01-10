import React from "react";
import PropertyCard from "../../common/propertycard/PropertyCard";
import "./propertygrid.css";

export default function PropertyGrid({ properties }) {
  return (
    <section className="propertygrid">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </section>
  );
}

