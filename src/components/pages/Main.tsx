import Table from 'react-bootstrap/Table';

const Main = () => {
  return (
    <div className="guideWrap">
      <h2>요약</h2>
      <div className="summary">
        <dl>
          <dt>퍼블리싱 환경</dt>
          <dd><code>Visual Studio Code</code></dd>
          <dd><code>React Typescript</code></dd>
          <dd><code>v2.10.2 (Bootstrap 5)</code></dd>
          <dd>SCSS</dd>
        </dl>
        <dl>
          <dt>기본 브라우저</dt>
          <dd><code>Microsoft Edge</code></dd>
        </dl>
        <dl>
          <dt>기본 해상도</dt>
          <dd><code>3440px × 1440px</code></dd>
          <dd><code>1980px × 1080px</code></dd>
        </dl>
        <dl>
          <dt>최소 해상도</dt>
          <dd><code>1280px × 720px</code></dd>
        </dl>

        <dl>
          <dt>레이아웃 중단점 (Layout Breakpoints)</dt>
          <dd>
            <Table responsive="sm" className='tbl'>
              <thead>
                <tr>
                  <th><code>Breakpoint</code></th>
                  <th><code>Class infix</code></th>
                  <th><code>Dimensions</code></th>
                  <th><code>Size</code></th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <th><code>X-Small</code></th>
                  <td><code>Nonec</code></td>
                  <td><code>&lt;576px</code></td>
                  <td>0</td>
                </tr>
                <tr>
                  <th><code>Small</code></th>
                  <td><code>sm</code></td>
                  <td><code>≥576px</code></td>
                  <td><code>576px</code></td>
                </tr>
                <tr>
                  <th><code>Medium</code></th>
                  <td><code>md</code></td>
                  <td><code>≥768px</code></td>
                  <td><code>768px</code></td>
                </tr>
                <tr>
                  <th><code>Large</code></th>
                  <td><code>lg</code></td>
                  <td><code>≥992px</code></td>
                  <td><code>992px</code></td>
                </tr>
                <tr>
                  <th><code>Extra large</code></th>
                  <td><code>xl</code></td>
                  <td><code>≥1200px</code></td>
                  <td><code>1200px</code></td>
                </tr>
                <tr>
                  <th><code>Extra extra large</code></th>
                  <td><code>xxl</code></td>
                  <td><code>≥1400px</code></td>
                  <td><code>1400px</code></td>
                </tr>
              </tbody>
            </Table>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Main;
