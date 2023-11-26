import React, { useState, useEffect } from "react";
import Header from "../../components/Shared/Layout/Header";
import API from "../../services/API";
import moment from "moment";
import { Bar } from "react-chartjs-2"; // Import Bar from react-chartjs-2

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    // "#884A39",
    // "#C38154",
    "#FFC26F",
    "#FFC26F",
    "#FFC26F",
    "#FFC26F",
    "#FFC26F",
    "#FFC26F",
    "#FFC26F",
    "#FFC26F",
    // "#4F709C",
    // "#4942E4",
    // "#0079FF",
    // "#FF0060",
    // "#22A699",
  ];
  const handlePrint = () => {
    window.print(); // Trigger the print dialog
  };

  // GET BLOOD GROUP DATA
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodGroupData();
  }, []);

  // Create a function to prepare data for the bar chart
  const prepareBarChartData = () => {
    if (data && data.length > 0) {
      // Extract labels from data
      const labels = data.map((record) => record.bloodGroup);
  
      // Extract data values (availableBlood) from data
      const dataValues = data.map((record) => record.availableBlood);
  
      // Return data in the format required for the bar chart
      return {
        labels: labels,
        datasets: [
          {
            label: "Available Blood (ML)",
            data: dataValues,
            backgroundColor: colors,
          },
        ],
      };
    } else {
      // If there is no data, return an empty dataset
      return {
        labels: [],
        datasets: [
          {
            label: "Available Blood (ML)",
            data: [],
            backgroundColor: colors,
          },
        ],
      };
    }
  };

  // Static data for the bar graph
  const staticBarChartData = {
    labels: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
    datasets: [
      {
        label: "Available Blood (ML)",
        data: [150, 0, 700, 0, 0, 0, 0, 350],
        backgroundColor: colors,
      },
    ],
  };

  return (
    <>
      <Header />
      <div className="container my-3">
        {/* <h2>Blood Group Availability (Bar Chart)</h2>
        <div style={{ maxWidth: "600px" }}>
          <Bar
            data={prepareBarChartData()}
            options={{
              scales: {
                y: {
                  type: "linear", // Use the "linear" scale type
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: "Available Blood (ML)",
                  },
                },
                x: {
                  title: {
                    display: true,
                    text: "Blood Group",
                  },
                },
              },
            }}
          />
        </div> */}
      </div>
      {/* Static Bar Graph */}
      {/* <div className="container my-3">
        <h2>Blood Group Availability (Bar Chart)</h2>
        <div style={{ maxWidth: "600px" }}>
          <Bar data={staticBarChartData} />
        </div>
      </div> */}
      <div className="d-flex flex-row flex-wrap">
        {data?.map((record, i) => (
          <div
            className="card m-2 p-1"
            key={i}
            style={{ width: "18rem", backgroundColor: `${colors[i]}` }}
          >
            <div className="card-body">
              <h1 className="card-title bg-light text-dark text-center mb-3">
                {record.bloodGroup}
              </h1>
              <p className="card-text">
                Total In : <b>{record.totalIn}</b> (ML)
              </p>
              <p className="card-text">
                Total Out : <b>{record.totalOut}</b> (ML)
              </p>
            </div>
            <div className="card-footer text-light bg-dark text-center">
              Total Available : <b>{record.availabeBlood}</b> (ML)
            </div>
          </div>
        ))}
      </div>
      {/* <div className="container my-3">
        <h1 className="my-3">Recent Blood Transactions</h1>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Donar Email</th>
              <th scope="col">TIme & Date</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity} (ML)</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div> */}
      <div className="container my-3">
      <button
          className="btn btn-primary"
          onClick={handlePrint}
          style={{ margin: "20px 0" }}
        >
          Print
        </button>
        </div>
    </>
  );
};

export default Analytics;
