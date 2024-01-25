import ReactImageSrc from "../../assets/react-core-concepts.png";
const webDescriptions = ["Fundamental", "Crucial", "Core"];

import "./Header.scss";

function genRandomInt(max : any) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  let description = webDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={ReactImageSrc} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
