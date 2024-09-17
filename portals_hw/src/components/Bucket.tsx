import { Fragment, useState } from "react";
import Modal from "./Modal";
import Card from "./Card";
import filledHeart from '../assets/card_photo/filledHeart.png';
import emptyHeart from '../assets/card_photo/emptyHeart.png'; 
import photoProduct from "../assets/card_photo/Rowenta1.webp";
import cartPhoto from "../assets/card_photo/cart.png";
import "./Bucket.css"
const Bucket = () =>
{
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [finalPrice, setFinalPrice] = useState(0);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };
 
  const closeModal = () => setOpen(!open);
  const [isHeartFilled, setIsHeartFilled] = useState(false);

    const handleHeartClick = () => {
        setIsHeartFilled((prev) => !prev);
    };
 
  return (
    <Fragment>
      <h2>Open your cart!</h2>
      <button onClick={() => setOpen(!open)} className="button-cart"><img src = {cartPhoto} alt = "cart"></img></button>
      <Modal open={open} closeModal={closeModal}>
        <div className="bucket-div">
        <h2>Кошик</h2>
        <hr></hr>
        <div className="card-div">
        <Card  isHeartFilled={isHeartFilled}
          filledHeart={filledHeart} 
          emptyHeart={emptyHeart}   
          photo={photoProduct}     
          action={handleHeartClick}
          name="Product Name"
          exprice="$120.00"
          price="$100.00"
          updatePrice={setFinalPrice}></Card>
          </div>
          <div className="addition">
          <div className="list-header">
          <h3>Додаткові послуги</h3>
        <button onClick={toggleList}>
          {isOpen ? "Свернуть" : "Развернуть"}
        </button>
      </div>
      {isOpen && (
       <ul className="list-content">
       <li>
         <label>
           <input type="radio" name="service" value="service1" />
           Послуга 1
         </label>
       </li>
       <li>
         <label>
           <input type="radio" name="service" value="service2" />
           Послуга 2
         </label>
       </li>
     </ul>     
      )}
          </div>
          <div className="button-price-div">
            <div className="button-div">
                <button>Продовжити покупки</button>
            </div>
            <div className="finalPrice-div">
            <h3>${finalPrice.toFixed(2)}</h3> 
            </div>
          </div>
          </div>
      </Modal>
    </Fragment>
  );

}

export default Bucket;