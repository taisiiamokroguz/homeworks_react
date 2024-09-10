import {useForm} from "react-hook-form"
import "bootstrap/dist/css/bootstrap.min.css"
import  { useState } from "react";
import "./FormCustomer.css"
import InputField from './InputField.jsx';

function FormCustomer() {
    const { register, handleSubmit, formState: { errors }, getFieldState } = useForm({
      defaultValues: {
        surname: "",
        name: "",
        phone: "",
        patronymic: ""
      },
      mode: 'onBlur'
    });
  
    const myHandler = (data) => console.log(data);
  
    return (
      <>
        <form className="form-customer" onSubmit={handleSubmit(myHandler)}>
          <div className="inputs-container">
            <InputField
              label="Прізвище"
              name="surname"
              register={register}
              validation={{ required: "Це поле обов'язкове" }}
              errors={errors}
              getFieldState={getFieldState}
            />
            <InputField
              label="Ім'я"
              name="name"
              register={register}
              validation={{ required: "Це поле обов'язкове" }}
              errors={errors}
              getFieldState={getFieldState}
            />
            <InputField
              label="Побатькове"
              name="patronymic"
              register={register}
              validation={{ required: "Це поле обов'язкове" }}
              errors={errors}
              getFieldState={getFieldState}
            />
            <InputField
              label="Номер телефону"
              name="phone"
              register={register}
              validation={{
                required: "Це поле обов'язкове",
                pattern: {
                  value: /^\+380\d{9}$/,
                  message: "Неправильний формат номера."
                }
              }}
              errors={errors}
              getFieldState={getFieldState}
            />
          </div>
  
          <button type="submit" className="btn btn-primary">Отправить</button>
        </form>
      </>
    );
  }
  
  export default FormCustomer;
  
