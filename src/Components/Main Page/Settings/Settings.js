import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Profile from "./Profile/Profile";

function Settings() {
  const [key, setKey] = useState("profile");

  return (
    <section className="p-5 mt-5">
      <Container fluid className="pt-4">
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
          <Tab eventKey="upgradeplan" title="Upgrade Plan"></Tab>
        </Tabs>
      </Container>
    </section>
  );
}

export default Settings;
