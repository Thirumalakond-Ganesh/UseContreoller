import React from "react";
import { useForm,useController } from "react-hook-form";
import './App.css';
function Input(props) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </div>
  );
}

export default function App() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      FirstName: "",
      LastName:""
    },
    mode: "onChange"
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>useController</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} name="FirstName" rules={{ required: true }} />
        <Input control={control} name="LastName" rules={{ required: true }} />
        <input type="submit" />
      </form>
    </div>
  );
}
