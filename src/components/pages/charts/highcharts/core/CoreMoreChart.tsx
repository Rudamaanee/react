import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LollipopSeries from './moreChart/LollipopSeries';
import ArcDiagram from './moreChart/ArcDiagram';
import HorizontalOrganizationChart from './moreChart/HorizontalOrganizationChart';
import PolarRadarChart from './moreChart/PolarRadarChart';
import NeuralNetwork from './moreChart/NeuralNetwork';
import VennDiagram from './moreChart/VennDiagram';
import GeneralDrawing from './moreChart/GeneralDrawing';
import ColumnPyramidChart from './moreChart/ColumnPyramidChart';
import PictorialChart from './moreChart/PictorialChart';
import Waterfall from './moreChart/Waterfall';
import XRangeSeries from './moreChart/XRangeSeries';
import PyramidChart from './moreChart/PyramidChart';
import VectorPlot from './moreChart/VectorPlot';
import PictorialBulbChart from './moreChart/PictorialBulbChart';
import PolygonSeries from './moreChart/PolygonSeries';
import ParetoChart from './moreChart/ParetoChart';
import DependencyWheel from './moreChart/DependencyWheel';
import EulerDiagram from './moreChart/EulerDiagram';
import WindBarb from './moreChart/WindBarb';
import BoxPlot from './moreChart/BoxPlot';
import VerticalSankeyChart from './moreChart/VerticalSankeyChart';
import ParallelCoordinates from './moreChart/ParallelCoordinates';
import FlameChart from './moreChart/FlameChart';
import BellCurve from './moreChart/BellCurve';
import LowerAndUpperDumbbellMarkers from './moreChart/LowerAndUpperDumbbellMarkers';
import ParliamentItemChart from './moreChart/ParliamentItemChart';
import Spiderweb from './moreChart/Spiderweb';
import WordCloud from './moreChart/WordCloud';
import ErrorBar from './moreChart/ErrorBar';
import Timeline from './moreChart/Timeline';
import FunnelChart from './moreChart/FunnelChart';
import Histogram from './moreChart/Histogram';
import DumbbellSeries from './moreChart/DumbbellSeries';

const CoreMoreChart = () => {
  return (
    <Row>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Lollipop series</code></div>
          </div>
          <div className="card-body row">
            <LollipopSeries />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Arc Diagram</code></div>
          </div>
          <div className="card-body row">
            <ArcDiagram />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Horizontal organization chart</code></div>
          </div>
          <div className="card-body row">
            <HorizontalOrganizationChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Polar (radar) chart</code></div>
          </div>
          <div className="card-body row">
            <PolarRadarChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Neural Network</code></div>
          </div>
          <div className="card-body row">
            <NeuralNetwork />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Venn diagram</code></div>
          </div>
          <div className="card-body row">
            <VennDiagram />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>General drawing</code></div>
          </div>
          <div className="card-body row">
            <GeneralDrawing />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Column pyramid chart</code></div>
          </div>
          <div className="card-body row">
            <ColumnPyramidChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Pictorial chart</code></div>
          </div>
          <div className="card-body row">
            <PictorialChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Waterfall</code></div>
          </div>
          <div className="card-body row">
            <Waterfall />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>X-range series</code></div>
          </div>
          <div className="card-body row">
            <XRangeSeries />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Pyramid chart</code></div>
          </div>
          <div className="card-body row">
            <PyramidChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Vector plot</code></div>
          </div>
          <div className="card-body row">
            <VectorPlot />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Pictorial bulb chart</code></div>
          </div>
          <div className="card-body row">
            <PictorialBulbChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Polygon series</code></div>
          </div>
          <div className="card-body row">
            <PolygonSeries />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Pareto chart</code></div>
          </div>
          <div className="card-body row">
            <ParetoChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Dependency wheel</code></div>
          </div>
          <div className="card-body row">
            <DependencyWheel />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Euler diagram</code></div>
          </div>
          <div className="card-body row">
            <EulerDiagram />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Wind barb</code></div>
          </div>
          <div className="card-body row">
            <WindBarb />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Box plot</code></div>
          </div>
          <div className="card-body row">
            <BoxPlot />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Vertical Sankey chart</code></div>
          </div>
          <div className="card-body row">
            <VerticalSankeyChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Parallel coordinates</code></div>
          </div>
          <div className="card-body row">
            <ParallelCoordinates />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Flame chart</code></div>
          </div>
          <div className="card-body row">
            <FlameChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Bell curve</code></div>
          </div>
          <div className="card-body row">
            <BellCurve />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Lower and upper dumbbell markers</code></div>
          </div>
          <div className="card-body row">
            <LowerAndUpperDumbbellMarkers />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Parliament (item) chart</code></div>
          </div>
          <div className="card-body row">
            <ParliamentItemChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Spiderweb</code></div>
          </div>
          <div className="card-body row">
            <Spiderweb />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Word cloud</code></div>
          </div>
          <div className="card-body row">
            <WordCloud />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Error bar</code></div>
          </div>
          <div className="card-body row">
            <ErrorBar />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Timeline</code></div>
          </div>
          <div className="card-body row">
            <Timeline />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Funnel chart</code></div>
          </div>
          <div className="card-body row">
            <FunnelChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Histogram</code></div>
          </div>
          <div className="card-body row">
            <Histogram />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Dumbbell series</code></div>
          </div>
          <div className="card-body row">
            <DumbbellSeries />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default CoreMoreChart;