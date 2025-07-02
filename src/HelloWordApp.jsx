import { Fragment } from "react";
import PropTypes from "prop-types";
import { Title } from "./components/Title";
import { UserDetail } from "./components/UserDetail";
import { Contenido } from "./components/Contenido";

export const HelloWordApp = (props) => {

  return (
    <Fragment>
      <Title titulo={props.titulo} />
      <UserDetail user={props.user} />
      <Contenido contenido={props.contenido} />
    </Fragment>
  );
}

HelloWordApp.defaultProps = {
  titulo: "Titulo por defecto",
  contenido: "Contenido por defecto",
};

HelloWordApp.propTypes = {
  contenido: PropTypes.string.isRequired,
  user: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired
  }).isRequired,
  titulo: PropTypes.string
};