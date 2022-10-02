export default function TableData({ vehicle,unparkedVehicle }) {
  return vehicle.map((vehicle) => (
    <tr key={vehicle.vehicleNumber}>
      <td>{vehicle.vehicleNumber}</td>
      <td>{vehicle.driverName}</td>
      <td>{vehicle.currentTime}</td>
      <td>{vehicle.checkOut}</td>
      <td onClick={() => unparkedVehicle(vehicle.vehicleNumber)}><button>Unpark</button></td>
    </tr>
  ));
}
