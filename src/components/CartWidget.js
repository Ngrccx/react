import { FaShoppingCart } from "react-icons/fa";

const CartWidget = (props) => {
    return (  
      <>
        <div>
            <FaShoppingCart />
            <span>{4}</span>
        </div>
      </>
    );
}

export default CartWidget;