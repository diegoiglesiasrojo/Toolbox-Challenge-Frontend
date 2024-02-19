import "./App.css";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
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

  if (!isLoading) {
    return (
      <>
        <Header />
        <main
          style={{
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "25px", color: "#9290C3" }}>Loading ...</h1>
          <Spinner
            animation='grow'
            style={{ color: "#9290C3", width: "80px", height: "80px" }}
          />
          ;
        </main>
        <Footer />
      </>
    );
  }

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
