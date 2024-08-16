import { Card, Flex, Typography } from "antd";
import FixAssets from "../assets/fix.png";
import Trace from "../assets/trace.png";
import Loct from "../assets/LOCT.png";
import Sga from "../assets/SGA.png";
import Sun from "../assets/Sun.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherIcon from "../assets/weather.png";
import Covid from "../assets/covid.png";
import Appmenu from "../menunames/Appmenu";
import Clock from "../assets/clock.svg";
import Moon from "../assets/moon.png";

function SecondContent() {
  const [time, setTime] = useState(new Date());
  const [covidData, setCovidData] = useState([]);

  async function getData(key) {
    if (key == "covid") {
      const response = await axios.get(
        "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all"
      );
      setCovidData(response.data);
    }
  }
  useEffect(() => {
    getData("covid");
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div>
        <Flex gap="10px">
          <Card
            className="smallCard"
            title={
              <span style={{ display: "flex", alignItems: "center" }}>
                Time{" "}
                <img
                  src={Clock}
                  alt="Clock Icon"
                  style={{ width: "30px", height: "30px", marginLeft: "8px" }}
                />
              </span>
            }
          >
            <Flex gap="10px">
              {time.toLocaleTimeString()}
              <img
                src={time.getHours() > 18 ? Moon : Sun}
                style={{ width: "50px", height: "50px", marginTop: 5 }}
                className="spin"
              />
            </Flex>

            <p
              style={{
                fontSize: "10px",
                color: "gray",
                fontWeight: "none",
                marginLeft: "8px",
                marginBottom: "5px",
              }}
            >
              {time.toLocaleDateString()}
            </p>
          </Card>
          <Card
            className="smallCard"
            style={{ maxWidth: 300, width: 300, height: 150 }}
            title={
              <span>
                <span style={{ display: "flex", alignItems: "center" }}>
                  Weather
                  <img
                    src={WeatherIcon}
                    style={{ width: "20px", height: "20px", marginLeft: "8px" }}
                    alt="Weather icon"
                  />
                </span>
              </span>
            }
          ></Card>
         <Card
            className="smallCard"
            title={
              <span style={{ display: "flex", alignItems: "center" }}>
                Covod Check
                <img
                  src={Covid}
                  style={{ width: "30px", height: "30px", marginLeft: "8px" }}
                />
              </span>
            }
          >
            <Flex gap="10px">
              {/* {console.log(covidData)} */}
              <h4 style={{color:'red',marginLeft:20}}>
                {covidData.map((item) => item.new_case)}
          
              </h4>
              {/* <img
                src={time.getHours() > 18 ? Moon : Sun}
                style={{ width: "50px", height: "50px", marginTop: 5 }}
                className="spin"
              /> */}
            
            </Flex>

            <p
              style={{
                fontSize: "10px",
                color: "gray",
                fontWeight: "none",
                marginLeft: "8px",
                marginBottom: "5px",
              }}
            >
              Total Case : {covidData.map((item) => item.total_case)}
            </p>
          </Card>
          <Card className="smallCard" style={{ maxWidth: 300, width: 300, height: 150 }}></Card>
        </Flex>
        <br />
        <Flex gap="10px">
          <Card style={{  width: 1230, maxHeight: "auto" ,boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px'}} >
            <Appmenu />
          </Card>
        </Flex>
      </div>
    </>
  );
}

export default SecondContent;
