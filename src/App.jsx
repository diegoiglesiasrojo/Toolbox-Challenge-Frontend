import Spinner from "react-bootstrap/Spinner";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "./redux/dataFromApiSlice";
import { getDataServices } from "./services/getData.services";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TheToast from "./components/TheToast";
import TableWithData from "./components/TableWithData";

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const generateData = async () => {
      const response = await getDataServices();
      if (response.success) {
        dispatch(getData(response.response));
      } else {
        setShowToast(!showToast);
      }
    };
    generateData();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <>
        <TheToast showToast={showToast} setShowToast={setShowToast} />
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
      <TheToast showToast={showToast} setShowToast={setShowToast} />
      <Header />
      <TableWithData />
      <Footer />
    </>
  );
};

export default App;
