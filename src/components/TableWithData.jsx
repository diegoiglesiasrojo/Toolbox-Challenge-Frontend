import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

const TableWithData = () => {
  const data = useSelector((state) => state.dataFromApi.data);

  const TrGenerator = () => {
    return (
      <>
        {data.map((fileObj) => {
          return (
            <React.Fragment key={fileObj.file}>
              {fileObj.lines.map((row, index) => {
                return (
                  <tr key={fileObj.file + index}>
                    <td>{fileObj.file}</td>
                    <td>{row.text}</td>
                    <td>{row.number}</td>
                    <td>{row.hex}</td>
                  </tr>
                );
              })}
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <main style={{ minHeight: "70vh" }}>
      <section
        style={{
          maxHeight: "65vh",
          width: "90vw",
          overflow: "auto",
          marginTop: "2.5vh",
        }}
      >
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Text</th>
              <th>Number</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody>
            <TrGenerator />
          </tbody>
        </Table>
      </section>
    </main>
  );
};

export default TableWithData;

{
  /* <tr>
  <td>1adad</td>
  <td>Mark</td>
  <td>Otto</td>
  <td>@mdo</td>
</tr>; */
}
