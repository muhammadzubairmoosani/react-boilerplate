import React from "react";
import { FormattedMessage } from "react-intl";

const Home = () => {
  console.log(process.env);
  return (
    <div className="home_container">
      <h1>
        <FormattedMessage id="general.firstName" defaultMessage="Hello world" />
      </h1>
      <p>{process.env.REACT_APP_BASE_URL}</p>
    </div>
  );
};

export default Home;
