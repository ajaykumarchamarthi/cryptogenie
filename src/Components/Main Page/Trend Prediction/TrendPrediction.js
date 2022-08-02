import React from "react";
import Prediction from "./Individul Prediction/Prediction";

import Warning from "./assets/Warning.svg";

function TrendPrediction() {
  return (
    <section className="my-5 p-2 p-sm-5">
      <div className="my-5 d-flex justify-content-between">
        <h3>Trend Predictions</h3>
        <h3>Filter</h3>
      </div>

      <Prediction />
      <Prediction />
      <Prediction />

      <div className="mt-5 border border-2 border-dark d-flex p-4">
        <img src={Warning} className="me-4" alt="Warning" />
        <p className="fw-bold lh-md">
          This Site and the content therein is for information purposes only and
          is not intended to and does not provide tax, legal, insurance or
          investment advice, and nothing on the Site should be construed as an
          offer to sell, a solicitation of an offer to buy, or a recommendation
          for any security by Yantraka or any third party. You should consult an
          attorney or tax professional regarding your specific legal or tax
          situation. In no event shall Yantraka be liable for any damages,
          costs, expenses, legal fees, or losses (including lost income or lost
          profit and opportunity costs) in connection with any use of the Site
          and the content therein. A reference to a particular investment or
          security, a rating or any observation concerning an investment that is
          part of the Site is not a recommendation to buy, sell or hold such
          investment or security, does not address the suitability of an
          investment or security and should not be relied on as investment
          advice.
        </p>
      </div>
    </section>
  );
}

export default TrendPrediction;
