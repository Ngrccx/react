const Productos = (props) => {
    return (  
      <>
      <hr></hr>
      <h2>{props.name}</h2>
      <div>Precio: $  {props.value}</div>
      </>
    );
}
    // destructuring
    // const Productos = ({name, value}) => {
    //   return (  
    //     <>
    //     <hr></hr>
    //     <h2>{name}</h2>
    //     <div>Precio: $  {value}</div>
    //     </>
    //   );
    //  }


  export default Productos;