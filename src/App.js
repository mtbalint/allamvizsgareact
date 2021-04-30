import React from "react";
import "./App.css";
import Team from "./components/Team";
import { useState, useEffect } from "react";

const App = () => {
  const url = "api/teams";
  const [data, setData] = useState(null);
  const [response, setResponse] = useState(null);
  // get data
  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setResponse(false);
    }
  };
  // load all stuff
  useEffect(() => {
    getData();
  }, []);
  //
  return (
    <div>
      <h1>NBA teams - all star voting</h1>
      {response === false ? (
        <p>Oops, something happened</p>
      ) : (
        <div>
          {data ? (
            <div>
              {data.map((item, index) => (
                <div>
                  <Team key={index} item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p>Loading...</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
