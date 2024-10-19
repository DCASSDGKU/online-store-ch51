import QuantityPicker from "./quantityPicker";
import "./styles/product.css";

function Product(props){   
    function add(){
        console.log("adding to cart");
    }

    return(
        <div className="product">
            <img src={"./img/"+props.data.image} alt="" />
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg" alt="" /> */}
            <h3>{props.data.title}</h3>
            <span>{props.key}</span>
            <label>$total</label>
            <label>${props.data.price}</label>

            <QuantityPicker></QuantityPicker>

            <button className="btn btn-sm btn-success" onClick={add}>Add</button>
        </div>
    );
}

export default Product;


