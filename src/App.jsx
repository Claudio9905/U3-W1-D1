import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="box">
        <ButtonComponent text="Premi il bottone" />
        <div className="box-animal">
          <ImageComponent
            src="https://placecats.com/300/300?fit=contain&position=top"
            alt="immagine di un gatto"
          />
          <ImageComponent
            src="https://placedog.net/300/300?fit=contain&position=top"
            alt="immagine di un cane"
          />
          <ImageComponent
            src="https://placebear.com/300/300?fit=contain&position=top"
            alt="immagine di un orso"
          />
        </div>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  );
}

export default App;
