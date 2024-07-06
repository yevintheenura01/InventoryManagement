import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Components/main/Main";

import ViewRice from "./Components/viewStockLevels/viewRice/ViewRice";

import RiceVarieties from "./Components/viewStockLevels/RiceVarieties/RiceVarieties";
import ViewPaddy from "./Components/viewStockLevels/viewPaddy/ViewPaddy";
import AddRice from "./Components/viewStockLevels/RiceVarieties/AddRiceV";
import UpdateRiceV from "./Components/viewStockLevels/RiceVarieties/UpdateVariety";
import UpdatePaddy from "./Components/viewStockLevels/viewPaddy/UpdatePaddy";
import Dashboard from "./Components/Dashboard/Dashboard";

import ManageLocation from "./Components/locations/ManageLoc";
import AddLocation from "./Components/locations/AddLocation";
import UpdateLocation from "./Components/locations/UpdateLocation";

import GenerateReports from "./Components/Reports/Reports";

import WorkersHome from "./Components//Workers/Home/wHome";
import AddPaddy from "./Components/Workers/Paddy/AddPaddy";

import Instructions from "./Components/instructions/Instructions";
import WorkerInstructions from "./Components/Workers/Instructions/wInstructions";
import Wdamages from "./Components/Workers/damages/Damages";

import HomeYevin from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <React.Fragment>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/yevin" element={<HomeYevin />} />
            <Route path="/manageLocation" element={<ManageLocation />} />
            <Route path="/addLocation" element={<AddLocation />} />
            <Route path="/manageLocation/:id" element={<UpdateLocation />} />
            {/*update location */}
            <Route path="/viewRice" element={<ViewRice />} />
            <Route path="/riceVarieties" element={<RiceVarieties />} />
            <Route path="/add-rice" element={<AddRice />} />
            <Route path="/riceVarieties/:id" element={<UpdateRiceV />} />
            {/*update rice variety */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/viewPaddy" element={<ViewPaddy />} />
            <Route path="/viewPaddy/:id" element={<UpdatePaddy />} />
            update paddy
            <Route path="/genReports" element={<GenerateReports />} />
            <Route path="/wHome" element={<WorkersHome />} />
            <Route path="/addPaddy" element={<AddPaddy />} />
            <Route path="/wInstructions" element={<WorkerInstructions />} />
            <Route path="/wdamages" element={<Wdamages />} />
            <Route path="/instructions" element={<Instructions />} />
          </Routes>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
