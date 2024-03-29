import { Box, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { object, string } from "yup";
import sprite from "../../img/sprite.svg";
import { useDispatch } from "react-redux";
import { signUpThunk } from "../../redux/auth/authThunk";
import {
  PasswordEyesBtnStyle,
  PasswordInputBoxStyle,
  SignFormDescTextStyle,
  SignFormInputStyle,
  SignFormStyle,
  SignFormTitleStyle,
} from "./SignForm.style";
import { Button } from "../Button";

const validationSchema = object().shape({
  name: string().required(),
  email: string().email().required(),
  password: string().min(6).required(),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      dispatch(signUpThunk(values));
      resetForm();
    },
  });
  return (
    <>
      <SignFormTitleStyle>Registration</SignFormTitleStyle>
      <SignFormDescTextStyle>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </SignFormDescTextStyle>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={SignFormStyle}
        autoFocus={true}
      >
        <SignFormInputStyle
          name="name"
          value={formik.values.name}
          label="Name"
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          onBlur={formik.handleBlur}
        />
        <SignFormInputStyle
          name="email"
          value={formik.values.email}
          label="Email"
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
        />
        <PasswordInputBoxStyle style={{ position: "relative" }}>
          <SignFormInputStyle
            type={showPassword ? "text" : "password"}
            name="password"
            value={formik.values.password}
            label="Password"
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
          />
          <PasswordEyesBtnStyle
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? (
              <svg width={22} height={22} stroke="currentColor">
                <use href={`${sprite}#icon-eye-off`}></use>
              </svg>
            ) : (
              <svg width={22} height={22} stroke="currentColor">
                <use href={`${sprite}#icon-eye-open`}></use>
              </svg>
            )}
          </PasswordEyesBtnStyle>
        </PasswordInputBoxStyle>
        <Button
          type="submit"
          text="Sign Up"
          width="100%"
          bg="#F03F3B"
          tv_p="16px"
          br_c="transparent"
        />
      </Box>
    </>
  );
};
