// import React from "react";
// import "./propertyApproval.css";

// export default function PropertyApprovalCard({ property, onApprove, onReject }) {
//   return (
//     <div className="admin-property-card">
//       <h3>{property.title}</h3>

//       <p><b>Owner:</b> {property.owner?.name}</p>
//       <p><b>Location:</b> {property.location}</p>
//       <p><b>Price:</b> ৳{property.price}</p>
//       <p><b>Description:</b> {property.description}</p>

//       {property.images?.length > 0 && (
//         <div className="admin-image-preview">
//           {property.images.map((img, i) => (
//             <img key={i} src={img} alt="property" />
//           ))}
//         </div>
//       )}

//       <div className="admin-actions">
//         <button
//           className="approve-btn"
//           onClick={() => onApprove(property._id)}
//         >
//           Approve
//         </button>

//         <button
//           className="reject-btn"
//           onClick={() => onReject(property._id)}
//         >
//           Reject
//         </button>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./propertyApproval.css";

export default function PropertyApprovalCard({ property, onApprove, onReject }) {
  return (
    <div className="property-card-container">
      {/* Images */}
      <div className="property-image-gallery">
        {property.images?.length > 0 ? (
          property.images.map((img, i) => (
            <div key={i} className="img-wrapper">
              <img src={img} alt={`Property ${i}`} />
            </div>
          ))
        ) : (
          <div className="no-image">No Image Available</div>
        )}
      </div>

      {/* Details */}
      <div className="property-details">
        <h3 className="property-title">{property.title}</h3>

        <div className="info-grid">
          <p><span>Owner:</span> {property.owner?.name}</p>
          <p><span>Location:</span> {property.location}</p>
          <p><span>Price:</span> ৳{property.price}</p>
        </div>

        <p className="description">
          <span>Description:</span> {property.description}
        </p>

        {/* ✅ DOCUMENTS SECTION */}
        {property.documents?.length > 0 && (
          <div className="document-section">
            <h4>Property Documents</h4>
            <ul>
              {property.documents.map((doc, idx) => (
                <li key={idx}>
                  📄{" "}
                  <a href={doc} target="_blank" rel="noreferrer">
                    Document {idx + 1}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="admin-actions">
          <button
            className="btn approve-btn"
            onClick={() => onApprove(property._id)}
          >
            Approve
          </button>
          <button
            className="btn reject-btn"
            onClick={() => onReject(property._id)}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
