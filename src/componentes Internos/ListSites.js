import "../App.scss";
import Box from "../components/Box";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const ListSites = ({ user }) => {

  console.log(user)
  return (
    <>
      <Box title={"Mis sitios"} />
      <hr />
      <p className="sub">Para configurar tu sitio, haz click en el nombre del mismo</p>
      <hr />
      <Table striped bordered hover className="table-sites">
        <thead>
          <tr>
            <th>Nombre del Sitio</th>
            <th>Nombre</th>
            <th>e-mail</th>
            <th>Tema</th>
          </tr>
        </thead>
        <tbody>
          {/* {user?.map((user) => { */}
          {/* return ( */}
          <tr >
            <td>
              <Link
                to="/general"
                className="link__item"
              >
                {user.preferredMFA}
              </Link>
            </td>
            <td>{user.attributes.name}</td>
            <td>{user.attributes.email}</td>
            <td>Dark</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ListSites;
