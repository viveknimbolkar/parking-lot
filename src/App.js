import "./App.css";

function App() {
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
          <input type="text"></input>
          <br></br>
          <br></br>
          <label>Driver Name</label>
          <br></br>
          <input type="text"></input>
          <br></br> <br></br>
          <input type="submit" className="saveBtn"></input>
        </div>

        <div className="vehicle-section">
          <h4>Total Vehicles</h4>
          <p>456</p>
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
