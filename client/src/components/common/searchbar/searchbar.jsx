import React from 'react';
import { FiMapPin, FiHome, FiDollarSign } from 'react-icons/fi';
import Button from '../button/button';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <form className="searchbar">
      <div className="searchbar_group">

        <div className="searchbar_field">
          <FiMapPin className="searchbar_icon" />
          <input
            type="text"
            placeholder="Location"
            className="searchbar_input"
          />
        </div>

        <div className="searchbar_divider"></div>

        <div className="searchbar_field">
          <FiHome className="searchbar_icon" />
          <input
            type="text"
            placeholder="Type"
            className="searchbar_input"
          />
        </div>

        <div className="searchbar_divider"></div>

        <div className="searchbar_field">
          <FiDollarSign className="searchbar_icon" />
          <input
            type="text"
            placeholder="Price Range"
            className="searchbar_input"
          />
        </div>
      </div>

      <Button type="button" variant="primary" size="large">
        Search
      </Button>
    </form>
  );
}















// import React, { useState } from 'react';
// import { FiMapPin, FiHome, FiDollarSign } from 'react-icons/fi';
// import Button from '../button/button';
// import './SearchBar.css';

// export default function SearchBar({ onSearch }) {
//   const [searchData, setSearchData] = useState({
//     location: '',
//     type: '',
//     priceRange: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSearchData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (onSearch) {
//       onSearch(searchData);
//     }
//   };

//   return (
//     <form className="search-bar" onSubmit={handleSubmit}>
//       <div className="search-bar__group">
//         <div className="search-bar__field">
//           <FiMapPin className="search-bar__icon" />
//           <select
//             name="location"
//             value={searchData.location}
//             onChange={handleChange}
//             className="search-bar__select"
//           >
//             <option value="">Location</option>
//             <option value="san-francisco">San Francisco</option>
//             <option value="los-angeles">Los Angeles</option>
//             <option value="palo-alto">Palo Alto</option>
//             <option value="oakland">Oakland</option>
//           </select>
//         </div>

//         <div className="search-bar__divider"></div>

//         <div className="search-bar__field">
//           <FiHome className="search-bar__icon" />
//           <select
//             name="type"
//             value={searchData.type}
//             onChange={handleChange}
//             className="search-bar__select"
//           >
//             <option value="">Type</option>
//             <option value="villa">Villa</option>
//             <option value="apartment">Apartment</option>
//             <option value="house">House</option>
//           </select>
//         </div>

//         <div className="search-bar__divider"></div>

//         <div className="search-bar__field">
//           <FiDollarSign className="search-bar__icon" />
//           <input
//             type="text"
//             name="priceRange"
//             value={searchData.priceRange}
//             onChange={handleChange}
//             placeholder="Price Range"
//             className="search-bar__input"
//           />
//         </div>
//       </div>

//       <Button type="submit" variant="primary" size="large">
//         Sign up
//       </Button>
//     </form>
//   );
// }
