import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    axios
      .get("http://backend/workers")
      .then((response) => {
        setStaff(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get("http://backend").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div className="staff-list">
      <h1>Staff List</h1>
      {staff.map((worker) => {
        return (
          <div key={worker._id}>
            <h3>{worker.name}</h3>
            <p>{worker.department}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
