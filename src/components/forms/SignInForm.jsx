import { Box } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { object, string } from "yup";
import sprite from "../../img/sprite.svg";
import { Button } from "../Button";
import {
  PasswordEyesBtnStyle,
  PasswordInputBoxStyle,
  SignFormDescTextStyle,
  SignFormInputStyle,
  SignFormStyle,
  SignFormTitleStyle,
} from "./SignForm.style";

const validationSchema = object().shape({
  email: string().email().required(),
  password: string().min(6).required(),
});

const initialValues = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <>
      <SignFormTitleStyle>Log In</SignFormTitleStyle>
      <SignFormDescTextStyle>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </SignFormDescTextStyle>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={SignFormStyle}
        autoFocus={true}
        autoComplete="off"
      >
        <SignFormInputStyle
          name="email"
          value={formik.values.email}
          label="Email"
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
          autoComplete="off"
        />
        <PasswordInputBoxStyle>
          <SignFormInputStyle
            type={showPassword ? "text" : "password"}
            name="password"
            value={formik.values.password}
            label="Password"
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />
          <PasswordEyesBtnStyle
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            type="button"
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
          text="Log In"
          width="100%"
          tv_p="16px"
          br_c="transparent"
        />
      </Box>
    </>
  );
};
