import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BasicBar from './columnBar/BasicBar';
import StackedAndGroupedColumn from './columnBar/StackedAndGroupedColumn';
import ColumnRange from './columnBar/ColumnRange';
import ColumnWithNegativeValues from './columnBar/ColumnWithNegativeValues';
import FixedPlacementColumns from './columnBar/FixedPlacementColumns';
import ColumnWithDrilldown from './columnBar/ColumnWithDrilldown';
import StackedColumn from './columnBar/StackedColumn';
import ColumnWithRotatedLabels from './columnBar/ColumnWithRotatedLabels';
import DataDefinedInAHTMLTable from './columnBar/DataDefinedInAHTMLTable';
import RadialBarChart from './columnBar/RadialBarChart';
import StackedBar from './columnBar/StackedBar';
import StackedPercentageColumn from './columnBar/StackedPercentageColumn';
import BarWithNegativeStack from './columnBar/BarWithNegativeStack';

const CoreColumnBar = () => {
  return (
    <Row>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Basic bar</code></div>
          </div>
          <div className="card-body row">
            <BasicBar />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Stacked and grouped column</code></div>
          </div>
          <div className="card-body row">
            <StackedAndGroupedColumn />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Column range</code></div>
          </div>
          <div className="card-body row">
            <ColumnRange />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Column with negative values</code></div>
          </div>
          <div className="card-body row">
            <ColumnWithNegativeValues />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Fixed placement columns</code></div>
          </div>
          <div className="card-body row">
            <FixedPlacementColumns />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Column with drilldown</code></div>
          </div>
          <div className="card-body row">
            <ColumnWithDrilldown />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Stacked column</code></div>
          </div>
          <div className="card-body row">
            <StackedColumn />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Column with rotated labels</code></div>
          </div>
          <div className="card-body row">
            <ColumnWithRotatedLabels />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Data defined in a HTML table</code></div>
          </div>
          <div className="card-body row">
            <DataDefinedInAHTMLTable />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Radial bar chart</code></div>
          </div>
          <div className="card-body row">
            <RadialBarChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Stacked bar</code></div>
          </div>
          <div className="card-body row">
            <StackedBar />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Stacked percentage column</code></div>
          </div>
          <div className="card-body row">
            <StackedPercentageColumn />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Bar with negative stack</code></div>
          </div>
          <div className="card-body row">
            <BarWithNegativeStack />
          </div>
        </div>
      </Col>
    </Row>
  )
}
export default CoreColumnBar;