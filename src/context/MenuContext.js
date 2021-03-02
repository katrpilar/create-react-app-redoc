// export default ({ element }) => (
//   <Provider>
//     {element}
//   </Provider>
// ); 

  
  
// export const Provider = props => {
//   const [activeItem, setActiveItem] = useState(props.activeItem);
//   const handleItemClick = (name) => setActiveItem(name);  
//   return (
//     <MenuContext.Provider value={activeItem, handleItemClick}>
//       {props.children}
//       </MenuContext.Provider>
//   )
// };