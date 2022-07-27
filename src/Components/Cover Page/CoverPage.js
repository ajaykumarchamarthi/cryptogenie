import React, { useState } from "react";

import LandingPage from "./Landing Page/LandingPage";
import Product from "./Product/Product";
import Footer from "./Footer/Footer";

function CoverPage() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <LandingPage
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <Product show={show} handleClose={handleClose} handleShow={handleShow} />
      <Footer />
    </>
  );
}

export default CoverPage;
