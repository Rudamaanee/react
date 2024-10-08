import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const BokColor = () => {
  
  const [bok, setData] = useState([]);


  useEffect(() => {
    // fetch('json/bokcolor.json', {
    fetch('./react/json/bokcolor.json', { // deploy 시
      headers: {
        Accept: "application / json",
      },
      method: "GET",
    })
    .then(bokColor => bokColor.json())
    .then(bok => {
      setData(bok.bokColor);
    });
  }, []); //useEffect
  
  return (
    <div className="colorPalettes">
      <Row>
      {bok.map(bok => {
        const palette = bok.color_palette;
        return (
          <Col className="col-4" key={bok.color_name}>
            <div className="card btn-box mb-3">
              <div className="card-header" key={bok.color_name} style={{ backgroundColor: bok.default }}>
                {bok.color_name}
              </div>
              <div className={bok.class_name} id={bok.palette_name}>
                {palette.map(palette => {
                  return (
                  <div key={palette.num} className="item" style={{ backgroundColor: palette.hex }}>
                    <div className="num">{palette.num}</div>
                    <div className="hex">{palette.hex}</div>
                  </div>
                  ); //return
                })}
              </div>
            </div>
          </Col>
        ); //return
      })} {/* map */}
      </Row>
    </div>
  ); //return
}

export default BokColor;
