import { Link, useLocation, useNavigate } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

const AboutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("🚀 ~ file: index.jsx:5 ~ AboutPage ~ location:", location);

  const redirectHome = () => {
    console.log("Ahihi");
    navigate("/");
  };

  return (
    <div>
      <div>About Page</div>
      <Link to={ROUTES.HOME}>Home</Link>
      <div>
        <button onClick={() => redirectHome()}>Go to home and show log</button>
      </div>
    </div>
  );
};

export default AboutPage;
