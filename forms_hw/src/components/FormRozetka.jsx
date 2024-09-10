import FormDelivery from "./FormDelivery";
import {useForm} from "react-hook-form"
import "bootstrap/dist/css/bootstrap.min.css"
import  { useState } from "react";
import FormCustomer from "./FormCustomer";
import "./FormRozetka.css"

function FormRozetka() {

    return (
      <div className="form-div">
      <div className="delivery-div">
      <FormDelivery></FormDelivery>
      </div>
      <div className="customer-div">
        <FormCustomer></FormCustomer>
      </div>
        
      </div>
    )
  }

export default FormRozetka;