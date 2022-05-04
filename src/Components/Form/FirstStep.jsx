import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Box,
  Container,
  CssBaseline,
  Avatar,
  Grid,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your First Name")
    .max(10, "First Name shouldn't be more than 10 characters")
    .required("First Name is required"),
  lastName: yup
    .string("Enter your Last Name")
    .required("Last Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const FirstStep = ({ updateUser }) => {
  const navigate = useNavigate();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        updateUser(values);
        navigate("/second");
      },
    });

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Typography
                sx={{ fontSize: 20, color: "#09279a", fontWeight: "bold" }}
                gutterBottom
              >
                2 step Verification Challenge
              </Typography>
      <Container component="main"  maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Box sx={{ mt: 3, mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  error={Boolean(touched.firstName && errors.firstName)}
                  fullWidth
                  helperText={touched.firstName && errors.firstName}
                  label="First name"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  variant="outlined"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  label="Last name"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  variant="outlined"
                  required
                  autoComplete="lastname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                  required
                  autoComplete="email"
                />
              </Grid>
            </Grid>
            <Button
              sx={{ mt: 3, background: "#dc2f00" }}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Continue
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default FirstStep;
