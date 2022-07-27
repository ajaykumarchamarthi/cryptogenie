import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Profile from "./Profile/Profile";
import UpgradePlan from "./Upgrade Plan/UpgradePlan";

function Settings() {
  const [key, setKey] = useState("profile");

  return (
    <section className="py-5 mt-5">
      <Container className="pt-4">
        <h3 className="mb-4">Settings</h3>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="profile" title="Profile">
            <Profile />
          </Tab>
          <Tab eventKey="upgradeplan" title="Upgrade Plan">
            <UpgradePlan />
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
}

export default Settings;
