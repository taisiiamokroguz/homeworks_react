import {useForm} from "react-hook-form"
import "bootstrap/dist/css/bootstrap.min.css"
import  { useState } from "react";
import "./FormDelivery.css"

function FormDelivery() {
    const { register, handleSubmit, formState: { errors }, getFieldState } = useForm({
      defaultValues: {
        pickup: false,
        pickupLocation: "Оберіть магазин",
        deliveryOption: "",
        deliveryOption1: "",
        deliveryOption2: "",
        deliveryOption3: "",
        deliveryOption4: "",
        deliveryOption5: ""

      },
      mode: 'onBlur'
    });
  
    const [isPickupChecked, setIsPickupChecked] = useState(false);
    const myHandler = (data) => console.log(data);
    const handleCheckboxChange = (e) => {
      setIsPickupChecked(e.target.checked);
    };
  
    return (
      <>
       <form onSubmit={handleSubmit(myHandler)}>
          <div className="form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="exampleCheck1" 
              {...register("pickup")} 
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Самовивіз з наших магазинів (безкоштовно)
            </label>
          </div>
          {isPickupChecked && (
            <div className="form-group">
              <label htmlFor="pickupLocation">Оберіть магазин:</label>
              <select className="form-control" id="pickupLocation" {...register("pickupLocation", { required: true })}>
                <option value="">Оберіть магазин</option>
                <option value="store1">Магазин 1</option>
                <option value="store2">Магазин 2</option>
                <option value="store3">Магазин 3</option>
              </select>
              {errors.pickupLocation && <span className="error">Будь ласка, оберіть магазин</span>}
            </div>
          )}
  
          <div className="form-group">
            <label>Оберіть спосіб доставки:</label>
            <div className="radio-group">
              <div className="form-check">
                <input 
                  type="radio" 
                  className="form-check-input" 
                  id="deliveryOption1" 
                  value="delivery1" 
                  {...register("deliveryOption", { required: true })}
                />
                <label className="form-check-label" htmlFor="deliveryOption1">Спосіб доставки 1</label>
                <span className="price">50 грн</span>
              </div>
              <div className="form-check">
                <input 
                  type="radio" 
                  className="form-check-input" 
                  id="deliveryOption2" 
                  value="delivery2" 
                  {...register("deliveryOption", { required: true })}
                />
                <label className="form-check-label" htmlFor="deliveryOption2">Спосіб доставки 2</label>
                <span className="price">75 грн</span>
              </div>
              <div className="form-check">
                <input 
                  type="radio" 
                  className="form-check-input" 
                  id="deliveryOption3" 
                  value="delivery3" 
                  {...register("deliveryOption", { required: true })}
                />
                <label className="form-check-label" htmlFor="deliveryOption3">Спосіб доставки 3</label>
                <span className="price">100 грн</span>
              </div>
              <div className="form-check">
                <input 
                  type="radio" 
                  className="form-check-input" 
                  id="deliveryOption4" 
                  value="delivery4" 
                  {...register("deliveryOption", { required: true })}
                />
                <label className="form-check-label" htmlFor="deliveryOption4">Спосіб доставки 4</label>
                <span className="price">125 грн</span>
              </div>
              <div className="form-check">
                <input 
                  type="radio" 
                  className="form-check-input" 
                  id="deliveryOption5" 
                  value="delivery5" 
                  {...register("deliveryOption", { required: true })}
                />
                <label className="form-check-label" htmlFor="deliveryOption5">Спосіб доставки 5</label>
                <span className="price">150 грн</span>
              </div>
              {errors.deliveryOption && <span className="error">Будь ласка, оберіть спосіб доставки</span>}
            </div>
          </div>
  
          <button type="submit" className="btn btn-primary">Отправить</button>
        </form>
      </>
    );
  }
  
  export default FormDelivery;
  