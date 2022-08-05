import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Column } from "../../StyledComponents";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 5;
`;

interface Props {
  labels: any;
  tab: string;
  handleClick: () => void;
}

// const FilterSingleSelect = ({ labels, tab, handleClick }: Props) => {
//   return (
//     <ul className="dropdown">
//       {labels[tab].map(
//         (
//           filter:
//             | boolean
//             | React.Key
//             | React.ReactElement<any, string | React.JSXElementConstructor<any>>
//             | React.ReactFragment
//             | null
//             | undefined
//         ) => (
//           <li key={filter} onClick={() => handleClick(filter)}>
//             {filter}
//           </li>
//         )
//       )}
//     </ul>
//   );
// };
// export default FilterSingleSelect;
