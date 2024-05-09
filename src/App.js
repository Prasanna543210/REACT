import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './Sidebar';
import Home from './Home';

function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2" />}
        <div className="col">
          <Home toggle={handleToggle} />
        </div>
      </div>
    </div>
  );
}

export default App;