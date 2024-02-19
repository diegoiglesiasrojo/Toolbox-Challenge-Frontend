import Toast from "react-bootstrap/Toast";

const TheToast = ({ showToast, setShowToast }) => {
  console.log(showToast);
  return (
    <Toast
      style={{
        backgroundColor: "#d82020de",
        position: "absolute",
        right: "10px",
        top: "10px",
        width: "250px",
        zIndex: "10",
      }}
      show={showToast}
      onClose={() => {
        setShowToast(!showToast);
      }}
      delay={3000}
      autohide
    >
      <Toast.Header style={{ backgroundColor: "#d82020de" }}>
        <strong className='me-auto text-light'>Error</strong>
      </Toast.Header>
      <Toast.Body
        style={{ backgroundColor: "#d82020de" }}
        className='me-auto text-light'
      >
        Error to load data. Please try later.
      </Toast.Body>
    </Toast>
  );
};

export default TheToast;
