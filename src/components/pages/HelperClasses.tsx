import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageTitArea from "../layout/PageTitArea";

const HelperClasses = () => {

  return (
  <>
    <PageTitArea pageTitHeading="Helper Classes" pageTitSubHeading="" />
    <Row>
      <Col className='col-12'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Text / Bg Color Classes</div>
          </div>
          <div className="card-body text-center">
            <table className='table tbl did guide'>
              <colgroup>
                <col style={{width: '160px'}}/>
                <col />
                <col style={{width: '160px'}}/>
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Description</th>
                  <th>Class</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-muted'><code>.text-muted</code></td>
                  <td className='text-muted'>비활성화 text</td>
                  <td className='bg-muted text-white'><code>.bg-muted</code></td>
                  <td className='bg-muted text-white'>비활성화 text</td>
                </tr>
                <tr>
                  <td className='text-primary'><code>.text-primary</code></td>
                  <td className='text-primary'>bokDarkBlue</td>
                  <td className='bg-primary text-white'><code>.bg-primary</code></td>
                  <td className='bg-primary text-white'>bokDarkBlue</td>
                </tr>
                <tr>
                  <td className='text-success'><code>.text-success</code></td>
                  <td className='text-success'>성공</td>
                  <td className='bg-success text-white'><code>.bg-success</code></td>
                  <td className='bg-success text-white'>성공</td>
                </tr>
                <tr>
                  <td className='text-info'><code>.text-info</code></td>
                  <td className='text-info'>정보</td>
                  <td className='bg-info text-white'><code>.bg-info</code></td>
                  <td className='bg-info text-white'>정보</td>
                </tr>
                <tr>
                  <td className='text-warning'><code>.text-warning</code></td>
                  <td className='text-warning'>경고</td>
                  <td className='bg-warning text-white'><code>.bg-warning</code></td>
                  <td className='bg-warning text-white'>경고</td>
                </tr>
                <tr>
                  <td className='text-danger'><code>.text-danger</code></td>
                  <td className='text-danger'>위험 / error</td>
                  <td className='bg-danger text-white'><code>.bg-danger</code></td>
                  <td className='bg-danger text-white'>위험 / error</td>
                </tr>
              </tbody>
            </table>
          </div> {/* card-body */}
        </div> {/* card */}
      </Col>
    </Row>
  
    <Row>
      <Col className='col-12'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Font Weight</div>
          </div>
          <div className="card-body">
            <table className='table tbl did guide'>
              <colgroup>
                <col style={{width: '160px'}}/>
                <col />
                <col style={{width: '160px'}}/>
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Description</th>
                  <th>Class</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='fw-lighter'><code>.fw-lighter</code></td>
                  <td className='fw-lighter'>font-weight: lighter</td>
                  <td className='fw-light'><code>.fw-light</code></td>
                  <td className='fw-light'>font-weight: 300</td>
                </tr>
                <tr>
                  <td className='fst-normal'><code>.fst-normal</code></td>
                  <td className='fst-normal'>font-weight: normal</td>
                  <td className='fw-normal'><code>.fw-normal</code></td>
                  <td className='fw-normal'>font-weight: 400</td>
                </tr>
                <tr>
                  <td className='fw-medium'><code>.fw-medium</code></td>
                  <td className='fw-medium'>font-weight: 600</td>
                  <td className='fw-semibold'><code>.fw-semibold</code></td>
                  <td className='fw-semibold'>font-weight: 600</td>
                </tr>
                <tr>
                  <td className='fw-bolder'><code>.fw-bolder</code></td>
                  <td className='fw-bolder'>font-weight: bolder</td>
                  <td className='fw-bold'><code>.fw-bold</code></td>
                  <td className='fw-bold'>font-weight: 700</td>
                </tr>
              </tbody>
            </table>
          </div> {/* card-body */}
        </div> {/* card */}
      </Col>
    </Row>
  
    <Row className='mt-3'>
      <h5>Padding / Margin Classes</h5>
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Padding Classes</div>
          </div>
          <div className="card-body">
            <table className='table tbl did guide'>
              <colgroup>
                <col style={{width: '160px'}}/>
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-0'><code>.p-0</code></td>
                  <td><div className='border p-0'>padding: 0</div></td>
                </tr>
                <tr>
                  <td className='p-1'><code>.p-1</code></td>
                  <td><div className='border p-1'>padding: 0.25rem</div></td>
                </tr>
                <tr>
                  <td className='p-2'><code>.p-2</code></td>
                  <td><div className='border p-2'>padding: 0.5rem</div></td>
                </tr>
                <tr>
                  <td className='p-3'><code>.p-3</code></td>
                  <td><div className='border p-3'>padding: 1rem</div></td>
                </tr>
                <tr>
                  <td className='p-4'><code>.p-4</code></td>
                  <td><div className='border p-4'>padding: 1.5rem</div></td>
                </tr>
                <tr>
                  <td className='p-5'><code>.p-5</code></td>
                  <td><div className='border p-5'>padding: 3rem</div></td>
                </tr>
              </tbody>
            </table>
          </div> {/* card-body */}
        </div> {/* card */}
      </Col> {/* padding */}
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Margin Classes</div>
          </div>
          <div className="card-body">
            <table className='table tbl did guide'>
              <colgroup>
                <col style={{width: '160px'}}/>
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='m-0'><code>.m-0</code></td>
                  <td><div className='border m-0'>margin: 0</div></td>
                </tr>
                <tr>
                  <td className='m-1'><code>.m-1</code></td>
                  <td><div className='border m-1'>margin: 0.25rem</div></td>
                </tr>
                <tr>
                  <td className='m-2'><code>.m-2</code></td>
                  <td><div className='border m-2'>margin: 0.5rem</div></td>
                </tr>
                <tr>
                  <td className='m-3'><code>.m-3</code></td>
                  <td><div className='border m-3'>margin: 1rem</div></td>
                </tr>
                <tr>
                  <td className='m-4'><code>.m-4</code></td>
                  <td><div className='border m-4'>margin: 1.5rem</div></td>
                </tr>
                <tr>
                  <td className='m-5'><code>.m-5</code></td>
                  <td><div className='border m-5'>margin: 3rem</div></td>
                </tr>
              </tbody>
            </table>
          </div> {/* card-body */}
        </div> {/* card */}
      </Col> {/* margin */}
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Padding Left Classes</div>
          </div>
          <div className="card-body">
            <table className='table tbl did guide'>
              <colgroup>
                <col style={{width: '160px'}}/>
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='ps-0'><code>.ps-0</code></td>
                  <td><div className='border ps-0'>padding-left: 0</div></td>
                </tr>
                <tr>
                  <td className='ps-2'><code>.ps-2</code></td>
                  <td><div className='border ps-2'>padding-left: 0.5rem</div></td>
                </tr>
                <tr>
                  <td className='ps-3'><code>.ps-3</code></td>
                  <td><div className='border ps-3'>padding-left: 1rem</div></td>
                </tr>
                <tr>
                  <td className='ps-4'><code>.ps-4</code></td>
                  <td><div className='border ps-4'>padding-left: 1.5rem</div></td>
                </tr>
                <tr>
                  <td className='ps-5'><code>.ps-5</code></td>
                  <td><div className='border ps-5'>padding-left: 3rem</div></td>
                </tr>
              </tbody>
            </table>
          </div> {/* card-body */}
        </div> {/* card */}
      </Col> {/* padding-left */}
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Margin Left Classes</div>
          </div>
          <div className="card-body">
            <table className='table tbl did guide'>
              <colgroup>
                <col style={{width: '160px'}}/>
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='ms-0'><code>.ms-0</code></td>
                  <td><div className='border ms-0'>margin-left: 0</div></td>
                </tr>
                <tr>
                  <td className='ms-2'><code>.ms-2</code></td>
                  <td><div className='border ms-2'>margin-left: 0.5rem</div></td>
                </tr>
                <tr>
                  <td className='ms-3'><code>.ms-3</code></td>
                  <td><div className='border ms-3'>margin-left: 1rem</div></td>
                </tr>
                <tr>
                  <td className='ms-4'><code>.ms-4</code></td>
                  <td><div className='border ms-4'>margin-left: 1.5rem</div></td>
                </tr>
                <tr>
                  <td className='ms-5'><code>.ms-5</code></td>
                  <td><div className='border ms-5'>margin-left: 3rem</div></td>
                </tr>
              </tbody>
            </table>
          </div> {/* card-body */}
        </div> {/* card */}
      </Col> {/* margin-left */}
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Padding right Classes</div>
          </div>
          <div className="card-body">
            <table className='table tbl did guide'>
              <colgroup>
                <col style={{width: '160px'}}/>
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody className='text-right'>
                <tr>
                  <td className='pe-0'><code>.pe-0</code></td>
                  <td><div className='border pe-0'>padding-right: 0</div></td>
                </tr>
                <tr>
                  <td className='pe-2'><code>.pe-2</code></td>
                  <td><div className='border pe-2'>padding-right: 0.5rem</div></td>
                </tr>
                <tr>
                  <td className='pe-3'><code>.pe-3</code></td>
                  <td><div className='border pe-3'>padding-right: 1rem</div></td>
                </tr>
                <tr>
                  <td className='pe-4'><code>.pe-4</code></td>
                  <td><div className='border pe-4'>padding-right: 1.5rem</div></td>
                </tr>
                <tr>
                  <td className='pe-5'><code>.pe-5</code></td>
                  <td><div className='border pe-5'>padding-right: 3rem</div></td>
                </tr>
              </tbody>
            </table>
          </div> {/* card-body */}
        </div> {/* card */}
      </Col> {/* padding-right */}
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Margin right Classes</div>
          </div>
          <div className="card-body">
            <table className='table tbl did guide'>
              <colgroup>
                <col style={{width: '160px'}}/>
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody className='text-right'>
                <tr>
                  <td className='me-0'><code>.me-0</code></td>
                  <td><div className='border me-0'>margin-right: 0</div></td>
                </tr>
                <tr>
                  <td className='me-2'><code>.me-2</code></td>
                  <td><div className='border me-2'>margin-right: 0.5rem</div></td>
                </tr>
                <tr>
                  <td className='me-3'><code>.me-3</code></td>
                  <td><div className='border me-3'>margin-right: 1rem</div></td>
                </tr>
                <tr>
                  <td className='me-4'><code>.me-4</code></td>
                  <td><div className='border me-4'>margin-right: 1.5rem</div></td>
                </tr>
                <tr>
                  <td className='me-5'><code>.me-5</code></td>
                  <td><div className='border me-5'>margin-right: 3rem</div></td>
                </tr>
              </tbody>
            </table>
          </div> {/* card-body */}
        </div> {/* card */}
      </Col> {/* margin-right */}
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Padding top Classes</div>
          </div>
          <div className="card-body">
            <table className='table tbl did guide'>
              <colgroup>
                <col style={{width: '160px'}}/>
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='pt-0'><code>.pt-0</code></td>
                  <td><div className='border pt-0'>padding-top: 0</div></td>
                </tr>
                <tr>
                  <td className='pt-2'><code>.pt-2</code></td>
                  <td><div className='border pt-2'>padding-top: 0.5rem</div></td>
                </tr>
                <tr>
                  <td className='pt-3'><code>.pt-3</code></td>
                  <td><div className='border pt-3'>padding-top: 1rem</div></td>
                </tr>
                <tr>
                  <td className='pt-4'><code>.pt-4</code></td>
                  <td><div className='border pt-4'>padding-top: 1.5rem</div></td>
                </tr>
                <tr>
                  <td className='pt-5'><code>.pt-5</code></td>
                  <td><div className='border pt-5'>padding-top: 3rem</div></td>
                </tr>
              </tbody>
            </table>
          </div> {/* card-body */}
        </div> {/* card */}
      </Col> {/* padding-top */}
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Margin top Classes</div>
          </div>
          <div className="card-body">
            <table className='table tbl did guide'>
              <colgroup>
                <col style={{width: '160px'}}/>
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='mt-0'><code>.mt-0</code></td>
                  <td><div className='border mt-0'>margin-top: 0</div></td>
                </tr>
                <tr>
                  <td className='mt-2'><code>.mt-2</code></td>
                  <td><div className='border mt-2'>margin-top: 0.5rem</div></td>
                </tr>
                <tr>
                  <td className='mt-3'><code>.mt-3</code></td>
                  <td><div className='border mt-3'>margin-top: 1rem</div></td>
                </tr>
                <tr>
                  <td className='mt-4'><code>.mt-4</code></td>
                  <td><div className='border mt-4'>margin-top: 1.5rem</div></td>
                </tr>
                <tr>
                  <td className='mt-5'><code>.mt-5</code></td>
                  <td><div className='border mt-5'>margin-top: 3rem</div></td>
                </tr>
              </tbody>
            </table>
          </div> {/* card-body */}
        </div> {/* card */}
      </Col> {/* margin-top */}
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Padding bottom Classes</div>
          </div>
          <div className="card-body">
            <table className='table tbl did guide'>
              <colgroup>
                <col style={{width: '160px'}}/>
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='pb-0'><code>.pb-0</code></td>
                  <td><div className='border pb-0'>padding-bottom: 0</div></td>
                </tr>
                <tr>
                  <td className='pb-2'><code>.pb-2</code></td>
                  <td><div className='border pb-2'>padding-bottom: 0.5rem</div></td>
                </tr>
                <tr>
                  <td className='pb-3'><code>.pb-3</code></td>
                  <td><div className='border pb-3'>padding-bottom: 1rem</div></td>
                </tr>
                <tr>
                  <td className='pb-4'><code>.pb-4</code></td>
                  <td><div className='border pb-4'>padding-bottom: 1.5rem</div></td>
                </tr>
                <tr>
                  <td className='pb-5'><code>.pb-5</code></td>
                  <td><div className='border pb-5'>padding-bottom: 3rem</div></td>
                </tr>
              </tbody>
            </table>
          </div> {/* card-body */}
        </div> {/* card */}
      </Col> {/* padding-bottom */}
      <Col className='col-6'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Margin bottom Classes</div>
          </div>
          <div className="card-body">
            <table className='table tbl did guide'>
              <colgroup>
                <col style={{width: '160px'}}/>
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='mb-0'><code>.mb-0</code></td>
                  <td><div className='border mb-0'>margin-bottom: 0</div></td>
                </tr>
                <tr>
                  <td className='mb-2'><code>.mb-2</code></td>
                  <td><div className='border mb-2'>margin-bottom: 0.5rem</div></td>
                </tr>
                <tr>
                  <td className='mb-3'><code>.mb-3</code></td>
                  <td><div className='border mb-3'>margin-bottom: 1rem</div></td>
                </tr>
                <tr>
                  <td className='mb-4'><code>.mb-4</code></td>
                  <td><div className='border mb-4'>margin-bottom: 1.5rem</div></td>
                </tr>
                <tr>
                  <td className='mb-5'><code>.mb-5</code></td>
                  <td><div className='border mb-5'>margin-bottom: 3rem</div></td>
                </tr>
              </tbody>
            </table>
          </div> {/* card-body */}
        </div> {/* card */}
      </Col> {/* margin-bottom */}
    </Row>
  
    <Row>
      <Col className='col-12'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Border</div>
          </div>
          <div className="card-body">
            <table className='table tbl did guide'>
              <colgroup>
                <col style={{width: '160px'}}/>
                <col />
                <col style={{width: '160px'}}/>
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Use</th>
                  <th>Class</th>
                  <th>Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>.border</code></td>
                  <td><div className='border p-1'>border: 1px solid #dee2e6</div></td>
                  <td><code>.no-border</code></td>
                  <td><div className='border no-border p-1'>border: 1px solid #dee2e6</div></td>
                </tr>
                <tr>
                  <td><code>.border-top</code></td>
                  <td><div className='border-top p-1'>border-top: 1px solid #dee2e6</div></td>
                  <td><code>.border-top-0</code></td>
                  <td><div className='border border-top-0 p-1'>border-top: 0</div></td>
                </tr>
                <tr>
                  <td><code>.border-bottom</code></td>
                  <td><div className='border-bottom p-1'>border-bottom: 1px solid #dee2e6</div></td>
                  <td><code>.border-bottom-0</code></td>
                  <td><div className='border border-bottom-0 p-1'>border-bottom: 0</div></td>
                </tr>
                <tr>
                  <td><code>.border-left</code></td>
                  <td><div className='border-left p-1'>border-left: 1px solid #dee2e6</div></td>
                  <td><code>.border-left-0</code></td>
                  <td><div className='border border-left-0 p-1'>border-left: 0</div></td>
                </tr>
                <tr>
                  <td><code>.border-end</code></td>
                  <td><div className='border border-end p-1'>border-right: 0</div></td>
                  <td><code>.border-end</code></td>
                  <td><div className='border border-end-0 p-1'>border-right: 0</div></td>
                </tr>
              </tbody>
            </table>
          </div> {/* card-body */}
        </div> {/* card */}
      </Col>
    </Row>

    <Row>
      <Col className='col-12'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Border color</div>
          </div>
          <div className="card-body text-center">
            <table className='table tbl did guide'>
              <colgroup>
                <col style={{width: '160px'}}/>
                <col />
                <col style={{width: '160px'}}/>
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Use</th>
                  <th>Class</th>
                  <th>Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>.border-primary</code></td>
                  <td><div className="border border-primary p-1">border-color: $color-primary</div></td>
                  <td><code>.all-primary</code></td>
                  <td><div className="all-primary p-1">text-color border-color background-color</div></td>
                </tr>
                <tr>
                  <td><code>.border-success</code></td>
                  <td><div className="border border-success p-1">border-color: $color-success</div></td>
                  <td><code>.all-success</code></td>
                  <td><div className="all-success p-1">text-color border-color background-color</div></td>
                </tr>
                <tr>
                  <td><code>.border-info</code></td>
                  <td><div className="border border-info p-1">border-color: $color-info</div></td>
                  <td><code>.all-info</code></td>
                  <td><div className="all-info p-1">text-color border-color background-color</div></td>
                </tr>
                <tr>
                  <td><code>.border-warning</code></td>
                  <td><div className="border border-warning p-1">border-color: $color-warning</div></td>
                  <td><code>.all-warning</code></td>
                  <td><div className="all-warning p-1">text-color border-color background-color</div></td>
                </tr>
                <tr>
                  <td><code>.border-danger</code></td>
                  <td><div className="border border-danger p-1">border-color: $color-danger</div></td>
                  <td><code>.all-danger</code></td>
                  <td><div className="all-danger p-1">text-color border-color background-color</div></td>
                </tr>
              </tbody>
            </table>
          </div> {/* card-body */}
        </div> {/* card */}
      </Col>
    </Row>
  
    <Row>
      <Col className='col-12'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Border-radius</div>
          </div>
          <div className="card-body text-center">
            <table className='table tbl did guide'>
              <colgroup>
                <col style={{width: '160px'}}/>
                <col />
                <col style={{width: '160px'}}/>
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Use</th>
                  <th>Class</th>
                  <th>Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>.rounded</code></td>
                  <td><div className="border rounded p-1">border-radius: 0.375rem</div></td>
                  <td><code>.rounded-0</code></td>
                  <td><div className="border rounded-0 p-1">border-radius: 0</div></td>
                </tr>
                <tr>
                  <td><code>.rounded-top</code></td>
                  <td><div className="border rounded-top p-1">border-top-left-radius<br /> border-top-right-radius</div></td>
                  <td><code>.rounded-bottom</code></td>
                  <td><div className="border rounded-bottom p-1">border-bottom-left-radius<br /> border-bottom-right-radius</div></td>
                </tr>
                <tr>
                  <td><code>.rounded-left</code></td>
                  <td><div className="border rounded-left p-1">border-top-left-radius<br /> border-bottom-left-radius</div></td>
                  <td><code>.rounded-right</code></td>
                  <td><div className="border rounded-right p-1">border-top-right-radius<br /> border-bottom-right-radius</div></td>
                </tr>
                <tr>
                  <td><code>.rounded-circle</code></td>
                  <td><div className="border rounded-circle p-1" style={{display: 'inline-block', width: '20px', height: '20px'}}></div> &nbsp;&nbsp; border-radius: 50px</td>
                </tr>
              </tbody>
            </table>
          </div> {/* card-body */}
        </div> {/* card */}
      </Col>
    </Row>
  
  
    <Row>
      <Col className='col-12'>
        <div className="card btn-box mb-3">
          <div className="card-header">
            <div className="card-title">Display property</div>
          </div>
          <div className="card-body text-center">
            <table className='table tbl did guide'>
              <colgroup>
                <col style={{width: '160px'}}/>
                <col />
                <col style={{width: '160px'}}/>
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Use</th>
                  <th>Class</th>
                  <th>Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>.d-none</code></td>
                  <td><div className="all-primary p-1 d-none ">display: none</div></td>
                  <td><code>.d-inline</code></td>
                  <td><div className="all-primary p-1 d-inline">display: inline</div></td>
                </tr>
                <tr>
                  <td><code>.d-inline-block</code></td>
                  <td><div className="all-primary p-1 d-inline-block">display: inline-block</div></td>
                  <td><code>.d-block</code></td>
                  <td><div className="all-primary p-1 d-block">display: block</div></td>
                </tr>
                <tr>
                  <td><code>.d-table</code></td>
                  <td><div className="all-primary p-1 d-table">display: table</div></td>
                  <td><code>.d-table-cell</code></td>
                  <td><div className="all-primary p-1 d-table-cell">display: table-cell</div></td>
                </tr>
                <tr>
                  <td><code>.d-flex</code></td>
                  <td><div className="all-primary p-1 d-flex">display: flex</div></td>
                  <td><code>.d-inline-flex</code></td>
                  <td><div className="all-primary p-1 d-inline-flex">display: inline-flex</div></td>
                </tr>
              </tbody>
            </table>
          </div> {/* card-body */}
        </div> {/* card */}
      </Col>
    </Row>
  </>
  );
};

export default HelperClasses;
