import React from "react";
import { useForm } from "../../hooks/useForm";
import Modals from "../FormSubsc/Modals";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const valitacionsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El Nombre solo acepta letras y espacios";
  } else if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El e-mail es incorrecto ";
  } else if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto' es requerido";
  } else if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El comentario no debe exceder los 255 caracteres";
  }

  return errors;
};

let styles = {
  display: "inline-block",
  fontWeight: "bold",
  color: "#dc3545",
};

const FormLogin = () => {
  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialForm,
    valitacionsForm
  );

  return (
    <div>
      <h2 className="h2_form">INGRESAR</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe su usuario"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="text"
          name="email"
          placeholder="Escribe su email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <Modals />
        <input className="enviar" type="submit" value="Enviar" />

      </form>
    </div>
  );
};

export default FormLogin;
