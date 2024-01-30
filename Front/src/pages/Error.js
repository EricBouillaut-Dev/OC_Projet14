import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

//Composant de la page d'erreur
function Error() {
  return (
    <div className="home-container">
      <Header />
      <main className="home-body">
        <div className="error">
          <h2>Erreur 404</h2>
          <p>La page que vous demandez n'existe pas.</p>
          <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Error;
