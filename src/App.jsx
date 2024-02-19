import "./App.css";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "./redux/dataFromApiSlice";
import { getDataServices } from "./services/getData.services";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const generateData = async () => {
      const response = await getDataServices();
      if (response.success) {
        dispatch(getData(response.response));
      } else {
        console.log("error"); //REVISAR
      }
    };
    generateData();
    setIsLoading(false);
  }, []);

  // import { useSelector, useDispatch } from "react-redux";
  // const data = useSelector((state) => state.dataFromApi.data);
  //console.log(isLoading);
  return (
    <>
      <Header />
      <main style={{ minHeight: "70vh" }}>
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
      <Footer />
    </>
  );
};

export default App;
