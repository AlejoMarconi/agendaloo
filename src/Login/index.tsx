import { Field, Form, Formik } from "formik"
import * as Yup from "yup"

export default function Login() {
  const initialValues = { email: "", password: "" }
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Debe ser un email valido")
      .required("Debes ingresar un correo electronico"),
    password: Yup.string()
      .min(6, "debe tener mas de 6 caracteres")
      .max(100, "debe tener menos de 100 caracteres")
      .required("Debes ingresar una contraseña"),
  })
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={(values, actions) => {
        console.log({ values, actions })
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="email">Email:</label>
          <Field type="text" id="email" name="email"></Field>
          {errors.email && touched.email && <p>{errors.email}</p>}
          <label htmlFor="password">Contraseña:</label>
          <Field type="password" id="password" name="password"></Field>
          {errors.password && touched.password && <p>{errors.password}</p>}
          <button type="submit">Guardar</button>
        </Form>
      )}
    </Formik>
  )
}
