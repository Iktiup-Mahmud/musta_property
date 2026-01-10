// import React, { useState } from "react";
// import {
//   uploadPropertyImage,
//   uploadDocument
// } from "../../../../../../Api/property.api";

// export default function PropertiesTab({
//   properties,
//   addProperty,
//   deleteProperty,
//   updateProperty,
// }) {
//   const [formData, setFormData] = useState({
//     _id: null,
//     title: "",
//     description: "",
//     location: "",
//     price: "",
//     images: [],
//     documents: [],
//   });

//   const isEditMode = !!formData._id;

//   /* ---------------- FORM HANDLERS ---------------- */
//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleImagesChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       images: [...prev.images, ...Array.from(e.target.files)],
//     }));
//     e.target.value = null;
//   };

//   const handleDocumentsChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       documents: [...prev.documents, ...Array.from(e.target.files)],
//     }));
//     e.target.value = null;
//   };

//   const resetForm = () => {
//     setFormData({
//       _id: null,
//       title: "",
//       description: "",
//       location: "",
//       price: "",
//       images: [],
//       documents: [],
//     });
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   if (isEditMode) {
//   //     updateProperty(formData); // backend PUT later
//   //   } else {
//   //     addProperty(formData);
//   //   }

//   //   resetForm();
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // 1️⃣ create property
//       const res = await addProperty({
//         title: formData.title,
//         description: formData.description,
//         location: formData.location,
//         price: formData.price,
//       });

//       const propertyId = res._id;

//       // 2️⃣ upload images
//       for (let img of formData.images) {
//         await uploadPropertyImage(propertyId, img);
//       }

//       // 3️⃣ upload documents
//       for (let doc of formData.documents) {
//         await uploadDocument(propertyId, doc, "Other");
//       }

//       resetForm();
//       alert("Property submitted for approval");
//     } catch (err) {
//       alert("Failed to submit property");
//     }
//   };


//   const handleEdit = (property) => {
//     setFormData({
//       _id: property._id,
//       title: property.title,
//       description: property.description,
//       location: property.location,
//       price: property.price,
//       images: [],
//       documents: [],
//     });
//   };

//   /* ---------------- UI ---------------- */
//   return (
//     <div className="properties-tab">
//       <h3>
//         {isEditMode ? "Edit Property" : "Add New Property"} (Admin Approval Required)
//       </h3>

//       {/* ================= FORM ================= */}
//       <form onSubmit={handleSubmit} className="property-form">
//         <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
//         <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
//         <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
//         <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />

//         {/* IMAGES */}
//         <label>
//           Property Images
//           <input type="file" multiple accept="image/*" onChange={handleImagesChange} />
//         </label>

//         {formData.images.length > 0 && (
//           <div className="image-preview">
//             {formData.images.map((file, i) => (
//               <img key={i} src={URL.createObjectURL(file)} alt="preview" width={100} />
//             ))}
//           </div>
//         )}

//         {/* DOCUMENTS */}
//         <label>
//           Property Documents
//           <input type="file" multiple accept="application/pdf,image/*" onChange={handleDocumentsChange} />
//         </label>

//         {formData.documents.length > 0 && (
//           <ul>
//             {formData.documents.map((f, i) => <li key={i}>📄 {f.name}</li>)}
//           </ul>
//         )}

//         <button type="submit">
//           {isEditMode ? "Update Property" : "Submit for Approval"}
//         </button>

//         {isEditMode && (
//           <button type="button" onClick={resetForm}>
//             Cancel Edit
//           </button>
//         )}
//       </form>

//       <hr />

//       {/* ================= LIST ================= */}
//       <h3>Your Submitted Properties</h3>

//       <ul className="property-list">
//         {properties.map(p => (
//           <li key={p._id} className="property-card">
//             <h4>{p.title}</h4>
//             <p>{p.location}</p>
//             <p>৳ {p.price}</p>
//             <p>Status: <b>{p.status}</b></p>

//             {/* IMAGES */}
//             {p.images?.length > 0 && (
//               <div>
//                 {p.images.map((img, i) => (
//                   <img key={i} src={img} alt="property" width={120} />
//                 ))}
//               </div>
//             )}

//             {/* DOCUMENTS */}
//             {p.documents?.length > 0 && (
//               <ul>
//                 {p.documents.map((doc, i) => (
//                   <li key={i}>
//                     <a href={doc} target="_blank" rel="noreferrer">
//                       Document {i + 1}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             )}

//             {/* ACTIONS */}
//             {(p.status === "Pending" || p.status === "Rejected") && (
//               <div>
//                 <button onClick={() => handleEdit(p)}>Edit</button>
//                 <button onClick={() => deleteProperty(p._id)}>Delete</button>
//               </div>
//             )}

//             {p.status === "Approved" && (
//               <p style={{ color: "green" }}>
//                 ✔ Approved — Editing Disabled
//               </p>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }




// import React, { useState } from "react";
// import { uploadPropertyImage, uploadDocument } from "../../../../../../Api/property.api";

// export default function PropertiesTab({ properties, addProperty, deleteProperty, updateProperty }) {
//   const [formData, setFormData] = useState({
//     _id: null,
//     title: "",
//     description: "",
//     location: "",
//     price: "",
//     images: [],
//     documents: [],
//   });

//   const isEditMode = !!formData._id;

//   /* ---------------- FORM HANDLERS ---------------- */
//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleImagesChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       images: [...prev.images, ...Array.from(e.target.files)],
//     }));
//     e.target.value = null;
//   };

//   const handleDocumentsChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       documents: [...prev.documents, ...Array.from(e.target.files)],
//     }));
//     e.target.value = null;
//   };

//   const resetForm = () => {
//     setFormData({
//       _id: null,
//       title: "",
//       description: "",
//       location: "",
//       price: "",
//       images: [],
//       documents: [],
//     });
//   };

//   /* ---------------- SUBMIT ---------------- */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // 1️⃣ create property
//       const property = await addProperty({
//         title: formData.title,
//         description: formData.description,
//         location: formData.location,
//         price: formData.price,
//       });

//       const propertyId = property._id;

//       // 2️⃣ upload images
//       for (let img of formData.images) {
//         await uploadPropertyImage(propertyId, img);
//       }

//       // 3️⃣ upload documents
//       for (let doc of formData.documents) {
//         await uploadDocument(propertyId, doc, "Other");
//       }

//       resetForm();
//       alert("Property submitted for approval. Uploaded " + formData.images.length + " images and " + formData.documents.length + " documents.");
//     } catch (err) {
//       console.error(err);
//       alert("Failed to submit property");
//     }
//   };

//   const handleEdit = (property) => {
//     setFormData({
//       _id: property._id,
//       title: property.title,
//       description: property.description,
//       location: property.location,
//       price: property.price,
//       images: [],
//       documents: [],
//     });
//   };

//   /* ---------------- UI ---------------- */
//   return (
//     <div className="properties-tab">
//       <h3>{isEditMode ? "Edit Property" : "Add New Property"} (Admin Approval Required)</h3>

//       <form onSubmit={handleSubmit} className="property-form">
//         <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
//         <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
//         <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
//         <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />

//         {/* IMAGES */}
//         <label>
//           Property Images ({formData.images.length} selected)
//           <input type="file" multiple accept="image/*" onChange={handleImagesChange} />
//         </label>

//         {formData.images.length > 0 && (
//           <div className="image-preview">
//             {formData.images.map((file, i) => (
//               <img key={i} src={URL.createObjectURL(file)} alt="preview" width={100} />
//             ))}
//           </div>
//         )}

//         {/* DOCUMENTS */}
//         <label>
//           Property Documents ({formData.documents.length} selected)
//           <input type="file" multiple accept="application/pdf,image/*" onChange={handleDocumentsChange} />
//         </label>

//         {formData.documents.length > 0 && (
//           <ul>
//             {formData.documents.map((f, i) => (
//               <li key={i}>📄 {f.name}</li>
//             ))}
//           </ul>
//         )}

//         <button type="submit">{isEditMode ? "Update Property" : "Submit for Approval"}</button>
//         {isEditMode && <button type="button" onClick={resetForm}>Cancel Edit</button>}
//       </form>

//       <hr />

//       <h3>Your Submitted Properties</h3>
//       <ul className="property-list">
//         {properties.map(p => (
//           <li key={p._id} className="property-card">
//             <h4>{p.title}</h4>
//             <p>{p.location}</p>
//             <p>৳ {p.price}</p>
//             <p>Status: <b>{p.status}</b></p>

//             {/* IMAGES */}
//             {p.images?.length > 0 && (
//               <div>
//                 {p.images.map((img, i) => (
//                   <img key={i} src={img} alt="property" width={120} />
//                 ))}
//               </div>
//             )}

//             {/* DOCUMENTS */}
//             {p.documents?.length > 0 && (
//               <ul>
//                 {p.documents.map((doc, i) => (
//                   <li key={i}>
//                     <a href={doc} target="_blank" rel="noreferrer">Document {i + 1}</a>
//                   </li>
//                 ))}
//               </ul>
//             )}

//             {/* ACTIONS */}
//             {(p.status === "Pending" || p.status === "Rejected") && (
//               <div>
//                 <button onClick={() => handleEdit(p)}>Edit</button>
//                 <button onClick={() => deleteProperty(p._id)}>Delete</button>
//               </div>
//             )}

//             {p.status === "Approved" && <p style={{ color: "green" }}>✔ Approved — Editing Disabled</p>}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import React, { useState } from "react";
import { uploadPropertyImage, uploadDocument } from "../../../../../../Api/property.api";

export default function PropertiesTab({ properties, refreshProperties, addProperty, deleteProperty, updateProperty }) {
  const [formData, setFormData] = useState({
    _id: null,
    title: "",
    description: "",
    location: "",
    price: "",
    images: [],
    documents: [],
  });

  const isEditMode = !!formData._id;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImagesChange = (e) => {
    setFormData(prev => ({ ...prev, images: [...prev.images, ...Array.from(e.target.files)] }));
    e.target.value = null;
  };

  const handleDocumentsChange = (e) => {
    setFormData(prev => ({ ...prev, documents: [...prev.documents, ...Array.from(e.target.files)] }));
    e.target.value = null;
  };

  const resetForm = () => {
    setFormData({ _id: null, title: "", description: "", location: "", price: "", images: [], documents: [] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ create property
      const property = await addProperty({
        title: formData.title,
        description: formData.description,
        location: formData.location,
        price: formData.price,
      });
      const propertyId = property._id;

      // 2️⃣ upload images
      for (let img of formData.images) {
        await uploadPropertyImage(propertyId, img);
      }

      // 3️⃣ upload documents
      for (let doc of formData.documents) {
        await uploadDocument(propertyId, doc, "Other");
      }

      resetForm();

      // 🔄 Refresh properties from backend so images/docs show in UI
      await refreshProperties();

      alert(`Property submitted for approval. Uploaded ${formData.images.length} images and ${formData.documents.length} documents.`);
    } catch (err) {
      console.error(err);
      alert("Failed to submit property");
    }
  };

  const handleEdit = (property) => {
    setFormData({
      _id: property._id,
      title: property.title,
      description: property.description,
      location: property.location,
      price: property.price,
      images: [],
      documents: [],
    });
  };

  return (
    <div className="properties-tab">
      <h3>{isEditMode ? "Edit Property" : "Add New Property"} (Admin Approval Required)</h3>

      <form onSubmit={handleSubmit} className="property-form">
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />

        <label>
          Property Images ({formData.images.length} selected)
          <input type="file" multiple accept="image/*" onChange={handleImagesChange} />
        </label>

        {formData.images.length > 0 && (
          <div className="image-preview">
            {formData.images.map((file, i) => (
              <img key={i} src={URL.createObjectURL(file)} alt="preview" width={100} />
            ))}
          </div>
        )}

        <label>
          Property Documents ({formData.documents.length} selected)
          <input type="file" multiple accept="application/pdf,image/*" onChange={handleDocumentsChange} />
        </label>

        {formData.documents.length > 0 && (
          <ul>
            {formData.documents.map((f, i) => (
              <li key={i}>📄 {f.name}</li>
            ))}
          </ul>
        )}

        <button type="submit">{isEditMode ? "Update Property" : "Submit for Approval"}</button>
        {isEditMode && <button type="button" onClick={resetForm}>Cancel Edit</button>}
      </form>

      <hr />

      <h3>Your Submitted Properties</h3>
      <ul className="property-list">
        {properties.map(p => (
          <li key={p._id} className="property-card">
            <h4>{p.title}</h4>
            <p>{p.location}</p>
            <p>৳ {p.price}</p>
            <p>Status: <b>{p.status}</b></p>

            {p.images?.length > 0 && (
              <div>
                {p.images.map((img, i) => <img key={i} src={img} alt="property" width={120} />)}
              </div>
            )}

            {p.documents?.length > 0 && (
              <ul>
                {p.documents.map((doc, i) => (
                  <li key={i}><a href={doc} target="_blank" rel="noreferrer">Document {i + 1}</a></li>
                ))}
              </ul>
            )}

            {(p.status === "Pending" || p.status === "Rejected") && (
              <div>
                <button onClick={() => handleEdit(p)}>Edit</button>
                <button onClick={() => deleteProperty(p._id)}>Delete</button>
              </div>
            )}

            {p.status === "Approved" && <p style={{ color: "green" }}>✔ Approved — Editing Disabled</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}









// import React, { useState } from "react";

// export default function PropertiesTab({ properties, addProperty, deleteProperty }) {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     location: "",
//     price: "",
//     images: [],
//     documents: [],
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleImagesChange = (e) => {
//     const newImages = Array.from(e.target.files);

//     setFormData((prev) => ({
//       ...prev,
//       images: [...prev.images, ...newImages],
//     }));

//     e.target.value = null;
//   };

//   const handleDocumentsChange = (e) => {
//     const newDocs = Array.from(e.target.files);

//     setFormData((prev) => ({
//       ...prev,
//       documents: [...prev.documents, ...newDocs],
//     }));

//     e.target.value = null;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addProperty(formData);

//     setFormData({
//       title: "",
//       description: "",
//       location: "",
//       price: "",
//       images: [],
//       documents: [],
//     });
//   };

//   return (
//     <div className="properties-tab">
//       <h3>Add New Property (Pending Admin Approval)</h3>

//       <form onSubmit={handleSubmit} className="property-form">
//         <input
//           type="text"
//           name="title"
//           placeholder="Property Title"
//           value={formData.title}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="location"
//           placeholder="Property Location"
//           value={formData.location}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="number"
//           name="price"
//           placeholder="Price (BDT)"
//           value={formData.price}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Property Description"
//           value={formData.description}
//           onChange={handleChange}
//           required
//         />

//         {/* IMAGES */}
//         <label>
//           Property Images
//           <input
//             type="file"
//             accept="image/*"
//             multiple
//             onChange={handleImagesChange}
//           />
//         </label>

//         {/* 🔥 IMAGE PREVIEW */}
//         {formData.images.length > 0 && (
//           <div className="image-preview">
//             {formData.images.map((file, idx) => (
//               <img
//                 key={idx}
//                 src={URL.createObjectURL(file)}
//                 alt="preview"
//                 style={{ width: "120px", marginRight: "8px" }}
//               />
//             ))}
//           </div>
//         )}

//         {/* DOCUMENTS */}
//         <label>
//           Property Documents
//           <input
//             type="file"
//             accept="application/pdf,image/*"
//             multiple
//             onChange={handleDocumentsChange}
//           />
//         </label>

//         {/* 🔥 DOCUMENT LIST */}
//         {formData.documents.length > 0 && (
//           <ul>
//             {formData.documents.map((file, idx) => (
//               <li key={idx}>
//                 📄 {file.name}
//               </li>
//             ))}
//           </ul>
//         )}

//         <button type="submit">Submit for Approval</button>
//       </form>

//       <hr />

//       <h3>Your Submitted Properties</h3>

//       <ul className="property-list">
//         {properties.map((p) => (
//           <li key={p._id} className="property-card">
//             <h4>{p.title}</h4>
//             <p>{p.location}</p>
//             <p>Price: {p.price}</p>
//             <p>Status: <b>{p.status}</b></p>

//             {p.images?.length > 0 && (
//               <div>
//                 {p.images.map((img, idx) => (
//                   <img
//                     key={idx}
//                     src={img}
//                     alt="property"
//                     style={{ width: "150px", marginRight: "8px" }}
//                   />
//                 ))}
//               </div>
//             )}

//             {p.documents?.length > 0 && (
//               <ul>
//                 {p.documents.map((doc, idx) => (
//                   <li key={idx}>
//                     <a href={doc} target="_blank" rel="noreferrer">
//                       Document {idx + 1}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             )}

//             {p.status === "Pending" && (
//               <p style={{ color: "orange" }}>Waiting for admin approval</p>
//             )}

//             <button onClick={() => deleteProperty(p._id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

