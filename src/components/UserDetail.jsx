export const UserDetail = ({ user }) => {
  return (
    <div>
      <h2>Detalles del Usuario</h2>
      <p>Nombre: {user.nombre}</p>
      <p>Edad: {user.edad}</p>
    </div>
  );
}