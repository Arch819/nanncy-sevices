import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { object, string } from "yup";

const validationSchema = object().shape({
  address: string().required("Address is required"),
  phone: string().required("Phone is required"),
  childsAge: string().required("Child's age is required"),
  meetingTime: string().required("Meeting time is required"),
  email: string().email("Invalid email").required("Email is required"),
  parentsName: string().required("Mom or dad name is required"),
  comment: string(),
});

const initialValues = {
  address: "",
  phone: "",
  childsAge: "",
  meetingTime: "00:00",
  email: "",
  parentsName: "",
  comment: "",
};

const nanny = {
  avatar_url: "https://ftp.goit.study/img/avatars/23.jpg",
  name: "Anna Shevchenko",
};

export const OrderForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <div>
      <h2>Make an appointment with a babysitter </h2>
      <p>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>
      <div>
        <img src={nanny.avatar_url} alt="avatar your nanny" />
        <div>
          {" "}
          <p>Your nanny</p>
          <h3>{nanny.name}</h3>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="address"
          name="address"
          label="Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
        <TextField
          fullWidth
          id="phone"
          mask="(+380) 000-0000"
          name="phone"
          label="+380"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <TextField
          fullWidth
          id="childsAge"
          name="childsAge"
          label="Child's age"
          value={formik.values.childsAge}
          onChange={formik.handleChange}
          error={formik.touched.childsAge && Boolean(formik.errors.childsAge)}
          helperText={formik.touched.childsAge && formik.errors.childsAge}
        />
        {/* <FormControl fullWidth>
          {/* <InputLabel id="meeting-time-label">Meeting Time</InputLabel> */}
        {/* <Select
          labelId="meeting-time-label"
          id="meetingTime"
          name="meetingTime"
          value={formik.values.meetingTime}
          onChange={formik.handleChange}
          error={
            formik.touched.meetingTime && Boolean(formik.errors.meetingTime)
          }
        >
          <MenuItem value="">00:00</MenuItem>
          {Array.from({ length: 24 }, (_, index) => {
            const hour = index + 9;
            const time = `${hour < 10 ? "0" : ""}${hour}:00`;
            return (
              <MenuItem key={hour} value={time}>
                {time}
              </MenuItem>
            );
          })}
        </Select> */}
        {/* </FormControl> */}
        <TextField
          fullWidth
          id="meetingTime"
          name="meetingTime"
          // label="Meeting Time"
          type="time"
          InputProps={{
            min: "9:00",
            max: "20:00",
            step: 1800,
          }}
          value={formik.values.meetingTime}
          onChange={formik.handleChange}
          error={
            formik.touched.meetingTime && Boolean(formik.errors.meetingTime)
          }
          helperText={formik.touched.meetingTime && formik.errors.meetingTime}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="parentsName"
          name="parentsName"
          label="Father's or mother's name"
          value={formik.values.parentsName}
          onChange={formik.handleChange}
          error={
            formik.touched.parentsName && Boolean(formik.errors.parentsName)
          }
          helperText={formik.touched.parentsName && formik.errors.parentsName}
        />
        <TextField
          fullWidth
          id="comment"
          name="comment"
          label="Comment"
          multiline
          rows={4}
          value={formik.values.comment}
          onChange={formik.handleChange}
          error={formik.touched.comment && Boolean(formik.errors.comment)}
          helperText={formik.touched.comment && formik.errors.comment}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
