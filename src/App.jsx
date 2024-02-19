import "./App.css";
import Button from "react-bootstrap/Button";

const App = () => {
  return (
    <main>
      <h1>toolbox challenge frontend</h1>
      <Button
        variant='success'
        onClick={() => {
          console.log("holaa");
        }}
      >
        hola
      </Button>
    </main>
  );
};

export default App;
