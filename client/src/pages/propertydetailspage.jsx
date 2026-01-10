// import { useParams, Link } from "react-router-dom";
// import Navbar from "../components/layout/navbar/navbar";
// import Footer from "../components/layout/footer/footer";

// import { useNavigate } from "react-router-dom";
// import axios from "../Api/axios.js";


// import { FiArrowLeft, FiMapPin, FiHome, FiMaximize2 } from 'react-icons/fi';

// import img1 from '../assets/WhatsApp Image 2025-11-09 at 20.18.45_de9d3580.jpg';
// import img2 from '../assets/WhatsApp Image 2025-11-09 at 20.24.34_bb97bdc6.jpg';

// function PropertyDetailsPage() {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleMessageOwner = async () => {
//     if (!user) {
//       navigate("/auth");
//       return;
//     }

//     console.log("Sending conversation data:", {
//       property_id: property._id,
//       owner_id: property.owner_id,
//       buyer_id: user._id
//     });

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/conversations",
//         {
//           property_id: property._id, // must exist
//           owner_id: property.owner_id, // must exist
//           buyer_id: user._id // backend expect korte pare
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         }
//       );

//       const conversation = res.data;

//       navigate("/buyer/dashboard", {
//         state: { openConversationId: conversation._id },
//       });
//     } catch (err) {
//       console.error("Failed to start conversation", err);
//     }
//   };


//   // const handleMessageOwner = async () => {
//   //   if (!user) {
//   //     navigate("/auth"); // not logged in
//   //     return;
//   //   }

//   //   try {
//   //     const res = await axios.post(
//   //       "http://localhost:5000/api/conversations",
//   //       {
//   //         property_id: property._id,   // snake_case
//   //         owner_id: property.owner_id   // snake_case
//   //       },
//   //       {
//   //         headers: {
//   //           Authorization: `Bearer ${user.token}`,
//   //         },
//   //       }
//   //     );


//   //     const conversation = res.data;

//   //     // 🔥 redirect buyer dashboard → messages tab
//   //     navigate("/buyer/dashboard", {
//   //       state: {
//   //         openConversationId: conversation._id,
//   //       },
//   //     });
//   //   } catch (err) {
//   //     console.error("Failed to start conversation", err);
//   //   }
//   // };


//   const dummyProperties = [
//     {
//       _id: "64fabc1234567890abcdef12", // 🔑 add _id
//       owner_id: "6930b85f36799bc60cec662c", // 🔑 add owner_id
//       id: 1,
//       image: img1,
//       title: "Luxury Home in Ranirbazar",
//       location: "Ranirbazar, comilla",
//       bedrooms: 6,
//       sqft: 1800,
//       price: "৳85,00,000",
//       type: "Luxury Home",
//       description: "This stunning luxury home features 6 spacious bedrooms across 1800 sq ft. Located in the heart of Ranirbazar, Comilla, this property offers modern amenities, beautiful architecture, and a peaceful neighborhood."
//     },
//     {
//       _id: "64fabc1234567890abcdef13", // 🔑 add _id
//       owner_id: "6930b85f36799bc60cec663", // 🔑 add owner_id
//       id: 2,
//       image: img2,
//       title: "Modern Villa in Ashoktala",
//       location: "Ashoktala, comilla",
//       bedrooms: 4,
//       sqft: 2500,
//       price: "৳1,25,00,000",
//       type: "Modern Villa",
//       description: "A magnificent modern villa spanning 2500 sq ft with 4 luxurious bedrooms. Situated in the prestigious Ashoktala area of Comilla, this villa boasts contemporary design and high-end fixtures."
//     }
//   ];

//   const { id } = useParams();
//   const property = dummyProperties.find((p) => String(p.id) === id);

//   if (!property) {
//     return (
//       <div>
//         <Navbar />
//         <main className="max-w-4xl mx-auto px-4 py-16 text-center">
//           <h1 className="text-2xl font-bold mb-4">Property not found</h1>
//           <Link to="/properties" className="text-brown-600 hover:underline">
//             ← Back to Properties
//           </Link>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Navbar />

//       <main className="max-w-6xl mx-auto px-4 py-10">
//         <Link to="/properties" className="inline-flex items-center text-brown-600 hover:underline mb-6">
//           <FiArrowLeft className="mr-2" />
//           Back to Properties
//         </Link>

//         <div className="grid lg:grid-cols-3 gap-10">
//           <section className="lg:col-span-2 space-y-6">
//             <img
//               src={property.image}
//               alt={property.title}
//               className="w-full h-96 object-cover rounded-xl shadow-lg"
//             />

//             <div>
//               <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
//               <div className="flex items-center text-gray-600 mb-4">
//                 <FiMapPin className="mr-2" />
//                 <span>{property.location}</span>
//               </div>
//               <p className="text-brown-700 font-bold text-3xl mb-6">{property.price}</p>
//             </div>

//             <div className="bg-gray-50 rounded-lg p-6">
//               <h2 className="text-xl font-semibold mb-4">Property Features</h2>
//               <div className="grid md:grid-cols-3 gap-4">
//                 <div className="flex items-center">
//                   <FiHome className="text-brown-600 mr-3 text-xl" />
//                   <div>
//                     <p className="text-sm text-gray-500">Bedrooms</p>
//                     <p className="font-semibold">{property.bedrooms} Rooms</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <FiMaximize2 className="text-brown-600 mr-3 text-xl" />
//                   <div>
//                     <p className="text-sm text-gray-500">Area</p>
//                     <p className="font-semibold">{property.sqft} sq ft</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <FiHome className="text-brown-600 mr-3 text-xl" />
//                   <div>
//                     <p className="text-sm text-gray-500">Type</p>
//                     <p className="font-semibold">{property.type}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Description</h2>
//               <p className="text-gray-700 leading-relaxed">{property.description}</p>
//             </div>
//           </section>

//           <aside className="space-y-4 bg-white shadow-lg rounded-xl p-6 h-fit sticky top-4">
//             <h2 className="font-semibold text-xl mb-4">Interested?</h2>

//             <button className="w-full bg-brown-600 hover:bg-brown-700 text-white rounded-lg py-3 text-sm font-medium transition">
//               Request Visit
//             </button>

//             <button
//               onClick={handleMessageOwner}
//               className="w-full border-2 border-brown-600 text-brown-700 hover:bg-brown-50 rounded-lg py-3 text-sm font-medium transition">
//               Message Owner
//             </button>

//             <button className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg py-3 text-sm font-medium transition">
//               Save Property
//             </button>

//             <div className="pt-4 border-t mt-6">
//               <p className="text-xs text-gray-500 text-center">
//                 📞 Need help? Contact our support team
//               </p>
//             </div>
//           </aside>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default PropertyDetailsPage;


import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/navbar/navbar";
import Footer from "../components/layout/footer/footer";
import { useNavigate } from "react-router-dom";
import axios from "../Api/axios.js";
import { FiArrowLeft, FiMapPin, FiHome, FiMaximize2 } from 'react-icons/fi';
import img1 from '../assets/WhatsApp Image 2025-11-09 at 20.18.45_de9d3580.jpg';
import img2 from '../assets/WhatsApp Image 2025-11-09 at 20.24.34_bb97bdc6.jpg';

function PropertyDetailsPage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();

  const dummyProperties = [
    {
      _id: "64fabc1234567890abcdef12",
      //owner_id: "6930b85f36799bc60cec662c",
      owner_id: "69597357b4115a9f8a4ac00c",  //Aties
      id: 1,
      image: img1,
      title: "Luxury Home in Ranirbazar",
      location: "Ranirbazar, comilla",
      bedrooms: 6,
      sqft: 1800,
      price: "৳85,00,000",
      type: "Luxury Home",
      description: "This stunning luxury home features 6 spacious bedrooms across 1800 sq ft. Located in the heart of Ranirbazar, Comilla, this property offers modern amenities, beautiful architecture, and a peaceful neighborhood."
    },
    {
      _id: "64fabc1234567890abcdef13",
      // owner_id: "6930b85f36799bc60cec663",
      owner_id: "695d1c7178a20bb70a0c6bce",
      id: 2,
      image: img2,
      title: "Modern Villa in Ashoktala",
      location: "Ashoktala, comilla",
      bedrooms: 4,
      sqft: 2500,
      price: "৳1,25,00,000",
      type: "Modern Villa",
      description: "A magnificent modern villa spanning 2500 sq ft with 4 luxurious bedrooms. Situated in the prestigious Ashoktala area of Comilla, this villa boasts contemporary design and high-end fixtures."
    },
    {
      _id: "64fabc1234567890abcdef13",
      // owner_id: "6930b85f36799bc60cec663",
      owner_id: "695fe0d49d43774a69e57174",
      id: 3,
      image: img2,
      title: "Modern Villa in Ashoktala",
      location: "Ashoktala, comilla",
      bedrooms: 4,
      sqft: 2500,
      price: "৳1,25,00,000",
      type: "Modern Villa",
      description: "A magnificent modern villa spanning 2500 sq ft with 4 luxurious bedrooms. Situated in the prestigious Ashoktala area of Comilla, this villa boasts contemporary design and high-end fixtures."
    },
  ];

  const property = dummyProperties.find((p) => String(p.id) === id);

  // // 🔹 Start conversation handler
  // const handleMessageOwner = async () => {
  //   if (!user) {
  //     navigate("/auth");
  //     return;
  //   }

  //   if (!property?._id || !property?.owner_id) {
  //     console.error("Property ID or Owner ID is missing!");
  //     return;
  //   }

  //   const payload = {
  //     property_id: property._id,
  //     owner_id: property.owner_id,
  //     buyer_id: user._id,
  //   };

  //   console.log("Sending conversation data:", payload);

  //   try {
  //     const res = await axios.post("/conversations", payload, {
  //       headers: { Authorization: `Bearer ${user.token}` },
  //     });

  //     const conversation = res.data;

  //     navigate("/buyer/dashboard", {
  //       state: { openConversationId: conversation._id },
  //     });
  //   } catch (err) {
  //     console.error("Failed to start conversation", err.response?.data || err.message);
  //   }
  // };


  const handleMessageOwner = async () => {
  if (!user) {
    navigate("/auth");
    return;
  }

  if (!property?._id || !property?.owner_id) {
    console.error("Property ID or Owner ID is missing!");
    return;
  }

  const payload = {
    propertyId: property._id,
    ownerId: property.owner_id, 
  };

  console.log("Sending conversation data:", payload);

  try {
    const res = await axios.post("/conversations", payload, {
      headers: { Authorization: `Bearer ${user.token}` },
    });

    const conversation = res.data;

    // redirect buyer dashboard → messages tab
    navigate("/dashboard/buyer", {
      state: { openConversationId: conversation._id },
    });
  } catch (err) {
    console.error(
      "Failed to start conversation",
      err.response?.data || err.message
    );
  }
};


  if (!property) {
    return (
      <div>
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Property not found</h1>
          <Link to="/properties" className="text-brown-600 hover:underline">
            ← Back to Properties
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <Link to="/properties" className="inline-flex items-center text-brown-600 hover:underline mb-6">
          <FiArrowLeft className="mr-2" />
          Back to Properties
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          <section className="lg:col-span-2 space-y-6">
            <img src={property.image} alt={property.title} className="w-full h-96 object-cover rounded-xl shadow-lg" />

            <div>
              <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <FiMapPin className="mr-2" />
                <span>{property.location}</span>
              </div>
              <p className="text-brown-700 font-bold text-3xl mb-6">{property.price}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Property Features</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <FiHome className="text-brown-600 mr-3 text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Bedrooms</p>
                    <p className="font-semibold">{property.bedrooms} Rooms</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiMaximize2 className="text-brown-600 mr-3 text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Area</p>
                    <p className="font-semibold">{property.sqft} sq ft</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiHome className="text-brown-600 mr-3 text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Type</p>
                    <p className="font-semibold">{property.type}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>
          </section>

          <aside className="space-y-4 bg-white shadow-lg rounded-xl p-6 h-fit sticky top-4">
            <h2 className="font-semibold text-xl mb-4">Interested?</h2>
            <button className="w-full bg-brown-600 hover:bg-brown-700 text-white rounded-lg py-3 text-sm font-medium transition">
              Request Visit
            </button>
            <button
              onClick={handleMessageOwner}
              className="w-full border-2 border-brown-600 text-brown-700 hover:bg-brown-50 rounded-lg py-3 text-sm font-medium transition"
            >
              Message Owner
            </button>
            <button className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg py-3 text-sm font-medium transition">
              Save Property
            </button>
            <div className="pt-4 border-t mt-6">
              <p className="text-xs text-gray-500 text-center">📞 Need help? Contact our support team</p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PropertyDetailsPage;
