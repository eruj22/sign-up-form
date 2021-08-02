// custom hook
import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
  };

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isChecked) {
      console.log("your form is submitted");
    }
  }, [errors]);

  return {
    handleChange,
    values,
    handleSubmit,
    handleCheckbox,
    errors,
  };
};

export default useForm;
