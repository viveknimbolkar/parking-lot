import { useEffect, useState } from "react";
import "./App.css";
import TableData from "./TableData";
const getVehicleDataFromLS = () => {
  const data = localStorage.getItem("vehicle");
  if (data) return JSON.parse(data);
  else return [];
};

function App() {
  const [vehicle, setVehicle] = useState(getVehicleDataFromLS());
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [driverName, setDriverName] = useState("");
  const [totalVehicle, setTotalVehicle] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    var time = new Date();
    var currentTime =
      time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    console.log(currentTime);
    var checkOut = "--";
    var carDetails = {
      vehicleNumber,
      driverName,
      currentTime,
      checkOut,
    };

    setVehicle([...vehicle, carDetails]);
    setVehicleNumber("");
    setDriverName("");

    // key = vehicleNumber , value = {drivername, checkin, checkout}
    localStorage.setItem(vehicleNumber, JSON.stringify(carDetails));

    setTotalVehicle(localStorage.length);
  }

  // unparked vehicle
  const unparkedVehicle = (vehicleNumber) => {
    const filteredVehicle = vehicle.filter((element, index) => {
      return element.vehicleNumber !== vehicleNumber;
    });
    setVehicle(filteredVehicle);
  };

  useEffect(() => {
    localStorage.setItem("vehicle", JSON.stringify(vehicle));
  }, [vehicle]);
  return (
    <>
      <header>
        <center>
          <h1 className="heading">Parking System</h1>
        </center>
      </header>
      <section id="user-section">
        <div className="vehicalForm">
          <label>Vehicle Number</label>
          <br></br>
          <input
            onChange={(e) => setVehicleNumber(e.target.value)}
            type="text"
          ></input>
          <br></br>
          <br></br>
          <label>Driver Name</label>
          <br></br>
          <input
            onChange={(e) => setDriverName(e.target.value)}
            type="text"
          ></input>
          <br></br> <br></br>
          <input
            onClick={handleSubmit}
            type="submit"
            className="saveBtn"
          ></input>
        </div>

        <div className="vehicle-section">
          <h4>Total Vehicles</h4>
          <p>{totalVehicle}</p>
        </div>
      </section>

      <section className="vehicle-list">
        {vehicle.length > 0 && (
          <>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <td>Vehicle Number</td>
                    <td>Driver Name</td>
                    <td>Check-in</td>
                    <td>Check-out</td>
                    <td>Unparked</td>
                  </tr>
                </thead>
                <tbody>
                  <TableData
                    vehicle={vehicle}
                    unparkedVehicle={unparkedVehicle}
                  />
                </tbody>
              </table>
            </div>
          </>
        )}
        {vehicle.length < 1 && (
          <div>
            <center>
              <h1 className="tableMsg">NO VEHICLE PARKED</h1>
            </center>
          </div>
        )}
      </section>

      {/* <section className="vehicle-list">
        <table>
          <thead>
            <td>Vehicle Number</td>
            <td>Driver Name</td>
            <td>Check-in</td>
            <td>Check-out</td>
          </thead>
          <tbody>
            
            {vehicle.length < 1 && <td>No vehicle parked</td>}
             <tr>
              <td>MH01AE8017</td>
              <td>John Doe</td>
              <td>4:55</td>
              <td>16:34</td>
            </tr> 
          </tbody>
        </table>
      </section> */}
    </>
  );
}

export default App;
