import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "../Error";
import "normalize.css";
import "../App.css";
import { Link } from "react-router-dom";

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Too Short!")
    .max(255, "Too Long!")
    .required("Required"),

  pass: Yup.string()
    .min(1, "Too Short!")
    .max(255, "Too Long!")
    .required("Required"),

  email: Yup.string()
    .email("Must be an email address")
    .max(255, "Too Long!")
    .required("Required")
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        pass: "",
        email: ""
      }}
      validationSchema={ValidationSchema}
      validate={values => {
        let errors = {};

        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        console.log("submit: ", values);

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue
      }) => (
        <form onSubmit={handleSubmit}>
          <h2>Create an Account</h2>

          <div className="input-row">
            <label className="FormikLabel">Username</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={touched.name && errors.name ? "has-error" : null}
            />
            <Error touched={touched.name} message={errors.name} />
          </div>

          <div className="input-row">
            <label className="FormikLabel">Password</label>
            <input
              type="text"
              name="pass"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.pass}
              className={touched.pass && errors.pass ? "has-error" : null}
            />
            <Error touched={touched.pass} message={errors.pass} />
          </div>

          <div className="input-row">
            <label className="FormikLabel">Email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "has-error" : null}
            />
            <Error touched={touched.email} message={errors.email} />
          </div>

          {}

          <div className="input-row">
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
          <div>
            <Link to="/login">
              <a>Already have an account?</a>
            </Link>
          </div>
        </form>
      )}
    </Formik>
  );
}
