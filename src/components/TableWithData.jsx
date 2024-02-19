import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

const TableWithData = () => {
  const data = useSelector((state) => state.dataFromApi.data);
  console.log(data);
  return (
    <main style={{ minHeight: "70vh" }}>
      <section
        style={{
          height: "65vh",
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
            <tr>
              <td>1adad</td>
              <td>Mark</td>
              <td>Ottodaaaaaaaaaddadaddadadad</td>
              <td>
                @mdoddddddddddddddddaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccc
              </td>
            </tr>
            <tr>
              <td>1adad</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1adad</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1adad</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1adad</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1adad</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1adad</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1adad</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1adad</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1adad</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1adad</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1adad</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1adad</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1adad</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1adad</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1adad</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </main>
  );
};

export default TableWithData;
