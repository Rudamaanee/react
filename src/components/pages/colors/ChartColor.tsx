import React from "react";
import { useState, useEffect } from 'react';

const ChartColor = () => {

  const [chart, setData] = useState([]);

  useEffect(() => {
    // fetch('./json/chartcolor.json', {
    fetch('./react/json/chartcolor.json', { // deploy 시
      headers: {
        Accept: "application / json",
      },
      method: "GET",
    })
    .then(chartColor => chartColor.json())
    .then(chart => {
      setData(chart.chartColor);
    });
  }, []); //useEffect  

  return (
    <div className="chartColor-grp">
      {chart.map(chart => {
        const lighten = chart.color_lighten;
        const darken = chart.color_darken;
        const accent = chart.color_accent;
        return (
          <div className="item" key={chart.color_name}>
            <dl>
              <dt style={{ color: chart.f_color, backgroundColor: chart.default }}>{chart.color_name}</dt>
                {lighten.map(lighten => {
                  return (
                    <dd key={chart.color_name}>
                      <div className="subTit" style={{ color: chart.f_color, backgroundColor: chart.default }}>lighten</div>
                      <div className='color'>
                        <div style={{ backgroundColor: lighten.hex1 }}><span>{lighten.hex1}</span></div>
                        <div style={{ backgroundColor: lighten.hex2 }}><span>{lighten.hex2}</span></div>
                        <div style={{ backgroundColor: lighten.hex3 }}><span>{lighten.hex3}</span></div>
                        <div style={{ backgroundColor: lighten.hex4 }}><span>{lighten.hex4}</span></div>
                      </div>
                    </dd>
                  ); //return
                })}
                {darken.map(darken => {
                  return (
                    <dd key={chart.color_name}>
                      <div className="subTit" style={{ color: chart.f_color, backgroundColor: chart.default }}>darken</div>
                      <div className='color'>
                        <div style={{ backgroundColor: darken.hex1 }}><span>{darken.hex1}</span></div>
                        <div style={{ backgroundColor: darken.hex2 }}><span>{darken.hex2}</span></div>
                        <div style={{ backgroundColor: darken.hex3 }}><span>{darken.hex3}</span></div>
                        <div style={{ backgroundColor: darken.hex4 }}><span>{darken.hex4}</span></div>
                      </div>
                    </dd>
                  ); //return
                })}
                {accent.map(accent => {
                  return (
                    <dd key={chart.color_name}>
                      <div className="subTit" style={{ color: chart.f_color, backgroundColor: chart.default }}>accent</div>
                      <div className='color'>
                        <div style={{ backgroundColor: accent.hex1 }}><span>{accent.hex1}</span></div>
                        <div style={{ backgroundColor: accent.hex2 }}><span>{accent.hex2}</span></div>
                        <div style={{ backgroundColor: accent.hex3 }}><span>{accent.hex3}</span></div>
                        <div style={{ backgroundColor: accent.hex4 }}><span>{accent.hex4}</span></div>
                      </div>
                    </dd>
                  ); //return
                })}
            </dl>
          </div>
        ); //return
      })}
    </div>
  );
};

export default ChartColor;