// import "./styles.css";
import React, { useState } from "react";

// function Filter({ label, count, handleSubtract, handleAdd }) {
//   return (
//     <div>
//       {label} <button onClick={handleAdd}>+</button> {count}
//       <button onClick={handleSubtract}>-</button>
//     </div>
//   );
// }

// export default function App() {
//   const [filters, setFilters] = useState({
//     Travelers: 0,
//     BagsTwo: 0,
//     PassportsThree: 0,
//   });

//   const handleSubtract = (filterKey) => {
//     if (filters[filterKey] > 0) {
//       setFilters({ ...filters, [filterKey]: filters[filterKey] - 1 });
//     }
//   };

//   const handleAdd = (filterKey) => {
//     setFilters({ ...filters, [filterKey]: filters[filterKey] + 1 });
//   };

//   return (
//     <div className="App">
//       <h1>
//         {Object.entries(filters)
//           .map((filter) => filter[0] + " = " + filter[1])
//           .join("  ")}
//       </h1>
//       {Object.entries(filters).map((filter) => {
//         return (
//           <Filter
//             label={filter[0]}
//             handleSubtract={() => handleSubtract(filter[0])}
//             handleAdd={() => handleAdd(filter[0])}
//             count={filter[1]}
//           />
//         );
//       })}
//     </div>
//   );
// }
