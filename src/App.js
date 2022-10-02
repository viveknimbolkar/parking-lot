import { useEffect, useState } from "react";
import "./App.css";

function App() {

  
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [driverName, setDriverName] = useState("");
  const [totalVehicle, setTotalVehicle] = useState(0);

  useEffect(()=>{
    setTotalVehicle(localStorage.length);
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(vehicleNumber);
    console.log(driverName);

    var  time = new Date();
    var currentTime = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
    
    var carDetails = {
      driverName:driverName,
      checkIn: currentTime,
      checkOut:null
    };
    console.log(carDetails);

    // key = vehicleNumber , value = {drivername, checkin, checkout}
    localStorage.setItem(vehicleNumber,JSON.stringify(carDetails));

    setTotalVehicle(localStorage.length)

  }

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
          <input onChange={(e)=>setVehicleNumber(e.target.value)} type="text"></input>
          <br></br>
          <br></br>
          <label>Driver Name</label>
          <br></br>
          <input onChange={(e)=>setDriverName(e.target.value)} type="text"></input>
          <br></br> <br></br>
          <input onClick={handleSubmit} type="submit" className="saveBtn"></input>
        </div>

        <div className="vehicle-section">
          <h4>Total Vehicles</h4>
          <p>{totalVehicle}</p>
        </div>
      </section>

      <section className="vehicle-list">
        <table>
          <thead>
            <td>Vehicle Number</td>
            <td>Driver Name</td>
            <td>Check-in</td>
            <td>Check-out</td>
          </thead>
          <tbody>
            <tr>
              <td>MH01AE8017</td>
              <td>John Doe</td>
              <td>4:55</td>
              <td>16:34</td>
            </tr>
            <tr>
              <td>MH01AE8017</td>
              <td>John Doe</td>
              <td>4:55</td>
              <td>16:34</td>
            </tr>
            <tr>
              <td>MH01AE8017</td>
              <td>John Doe</td>
              <td>4:55</td>
              <td>16:34</td>
            </tr>
            <tr>
              <td>MH01AE8017</td>
              <td>John Doe</td>
              <td>4:55</td>
              <td>16:34</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default App;
