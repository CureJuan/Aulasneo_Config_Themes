import "../../App.scss";
import Box from "../Box";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import ListSites from "../../componentes Internos/ListSites"

const Sites = ({ signOut, user }) => {

  return (
    <>
      <Header signOut={signOut} user={user} />
      <div className="boxcenter">
        <Box title='Nombre de la organización: ' /> {user.username}
      </div>
      <hr />
      <ListSites user={user} />
      <hr />
      <Footer />
    </>
  );
};

export default Sites;
