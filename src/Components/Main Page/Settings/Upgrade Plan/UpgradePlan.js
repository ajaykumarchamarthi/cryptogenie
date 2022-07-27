import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Monthly from "./Monthly";
import Yearly from "./Yearly";

function UpgradePlan() {
  const [key, setKey] = useState("monthly");
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="monthly" title="Monthly">
        <Monthly />
      </Tab>
      <Tab eventKey="yearly" title="Yearly">
        <Yearly />
      </Tab>
    </Tabs>
  );
}

export default UpgradePlan;
