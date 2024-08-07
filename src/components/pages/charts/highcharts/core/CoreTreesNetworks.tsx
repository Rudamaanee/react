import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OrganizationChart from './treesNetworks/OrganizationChart';
import TreegraphChart from './treesNetworks/TreegraphChart';
import SankeyDiagram from './treesNetworks/SankeyDiagram';
import InvertedTreegraph from './treesNetworks/InvertedTreegraph';
import TreegraphBoxLayout from './treesNetworks/TreegraphBoxLayout';
import Sunburst from './treesNetworks/Sunburst';

const CoreTreesNetworks = () => {
  return (
    <Row>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Organization chart</code></div>
          </div>
          <div className="card-body row">
            <OrganizationChart />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Inverted treegraph</code></div>
          </div>
          <div className="card-body row">
            <InvertedTreegraph />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Treegraph chart</code></div>
          </div>
          <div className="card-body row">
            <TreegraphChart />
          </div>
        </div>
      </Col>
      <Col className="col-12 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Sankey diagram</code></div>
          </div>
          <div className="card-body row">
            <SankeyDiagram />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Treegraph box layout</code></div>
          </div>
          <div className="card-body row">
            <TreegraphBoxLayout />
          </div>
        </div>
      </Col>
      <Col className="col-6 mb-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><code>Sunburst</code></div>
          </div>
          <div className="card-body row">
            <Sunburst />
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default CoreTreesNetworks;