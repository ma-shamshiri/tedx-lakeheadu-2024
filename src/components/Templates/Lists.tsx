// const Lists = () => {
//   return (
//     <ul className="list list--tick">
//       <li className="list__item">Item 1</li>
//       <li className="list__item">Item 2</li>
//       <li className="list__item">Item 3</li>
//     </ul>
//   );
// };

// export default Lists;

import { List, ListItem } from "@chakra-ui/react";
// import tickImage from "../assets/images/tick.svg";

// export default Lists;

// ************* list *************
const Lists = () => {
  return (
    <List className="list" color="var(--color-headings)" paddingLeft="0">
      <ListItem className="list__item">Item 1</ListItem>
      <ListItem className="list__item">Item 2</ListItem>
      <ListItem className="list__item">Item 3</ListItem>
    </List>
  );
};

// ************* list--inline *************
// const Lists = () => {
//   return (
//     <List
//       className="list list--inline"
//       color="var(--color-headings)"
//       padding={0}
//       style={{
//         display: "flex", // Set display to flex
//         flexDirection: "row", // Arrange items in a row
//       }}
//     >
//       <ListItem className="list__item" marginRight={"2rem"}>
//         Item 1
//       </ListItem>
//       <ListItem className="list__item" marginRight={"2rem"}>
//         Item 2
//       </ListItem>
//       <ListItem className="list__item" marginRight={"2rem"}>
//         Item 3
//       </ListItem>
//     </List>
//   );
// };

// ************* list--tick *************
// const Lists = () => {
//   return (
//     <List
//       className="list list--tick"
//       color="var(--color-headings)"
//       padding={0}
//       paddingLeft={"3rem"}
//       style={{
//         listStyleImage: `url(${tickImage})`,
//       }}
//     >
//       {/* Chakra UI ListItem with custom styling */}
//       <ListItem
//         className="list__item"
//         paddingLeft={{ base: "0.5rem", lg: "0" }}
//         marginBottom={"1rem"}
//       >
//         Item 1
//       </ListItem>
//       <ListItem
//         className="list__item"
//         paddingLeft={{ base: "0.5rem", lg: "0" }}
//         marginBottom={"1rem"}
//       >
//         Item 2
//       </ListItem>
//       <ListItem
//         className="list__item"
//         paddingLeft={{ base: "0.5rem", lg: "0" }}
//         marginBottom={"1rem"}
//       >
//         Item 3
//       </ListItem>
//     </List>
//   );
// };

export default Lists;
