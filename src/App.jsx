import "./App.css";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "./redux/dataFromApiSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getData({
        test: "test",
      })
    );
  }, []);

  const data = useSelector((state) => state.dataFromApi.data);

  console.log(data);
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
