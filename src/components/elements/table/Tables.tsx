import Table from 'react-bootstrap/Table';

import PageTitArea from '../../layout/PageTitArea';

const Tables = () => {
    
  return (
    <>
      <PageTitArea pageTitHeading="Tables" pageTitSubHeading="" />

      <h2>Table Basic</h2>
      <Table responsive="sm" className='tbl' style={{width: '1576px'}}>
        <colgroup>
          <col style={{width: '100px'}}/>
          <col />
          <col />
          <col style={{width: '120px'}}/>
          <col style={{width: '120px'}}/>
          <col />
          <col />
          <col />
          <col style={{width: '100px'}}/>
        </colgroup>
        <thead>
          <tr>
            <th>순번</th>
            <th>기관</th>
            <th>데이터</th>
            <th>등록일</th>
            <th>최종<br/>수집일</th>
            <th>최종<br/>수집 건수</th>
            <th>수집 횟수</th>
            <th>오류 횟수</th>
            <th>사용여부</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">1</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">2</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">3</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">4</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">5</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">6</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">7</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">8</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">9</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">10</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">11</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">12</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">13</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">14</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">15</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
        </tbody>
      </Table>

      <h2>Table even</h2>
      <Table responsive="sm" className='tbl even' style={{width: '1576px'}}>
        <colgroup>
          <col style={{width: '100px'}}/>
          <col />
          <col />
          <col style={{width: '120px'}}/>
          <col style={{width: '120px'}}/>
          <col />
          <col />
          <col />
          <col style={{width: '100px'}}/>
        </colgroup>
        <thead>
          <tr>
            <th>순번</th>
            <th>기관</th>
            <th>데이터</th>
            <th>등록일</th>
            <th>최종<br/>수집일</th>
            <th>최종<br/>수집 건수</th>
            <th>수집 횟수</th>
            <th>오류 횟수</th>
            <th>사용여부</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">1</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">2</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">3</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">4</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">5</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">6</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">7</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">8</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">9</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">10</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">11</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">12</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">13</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">14</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
          <tr>
            <td className="text-center">15</td>
            <td>AAA</td>
            <td>BBB</td>
            <td className="text-center">2024.05.11</td>
            <td className="text-center">2024.05.15</td>
            <td className="text-center">10,000</td>
            <td className="text-center">10</td>
            <td className="text-center">0</td>
            <td className="text-center">사용</td>
          </tr>
        </tbody>
      </Table>

      <h2>Table</h2>
      <Table responsive="sm" className='tbl' style={{width: '1576px'}}>
        <colgroup>
          <col style={{width: '120px'}}/>
          <col style={{width: 'calc(50% - 120px)'}}/>
          <col style={{width: '120px'}}/>
          <col style={{width: 'calc(50% - 120px)'}}/>
        </colgroup>
        <tbody>
          <tr>
            <th>기관명</th>
            <td>AAA</td>
            <th>테이터명</th>
            <td>데이터...</td>
          </tr>
          <tr>
            <th>연동 URL</th>
            <td>https://연동IP:연동PORT</td>
            <th>배치 주기</th>
            <td></td>
          </tr>
          <tr>
            <th>수정일시</th>
            <td>2024.05.15 10:15:11</td>
            <th>수정자ID</th>
            <td>admin</td>
          </tr>
          <tr>
            <th>등록일시</th>
            <td>2024.05.15 10:15:11</td>
            <th>등록ID</th>
            <td>admin</td>
          </tr>
          <tr>
            <th>수집 횟수</th>
            <td>10</td>
            <th>장애 횟수</th>
            <td>0</td>
          </tr>
        </tbody>
      </Table>

      <h2>Table Basic</h2>
      <Table responsive="sm" className='tbl' style={{width: '1576px'}}>
        <colgroup>
          <col style={{width: '100px'}}/>
          <col />
          <col style={{width: '120px'}}/>
          <col style={{width: '120px'}}/>
          <col style={{width: '120px'}}/>
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>순번</th>
            <th>시작일시</th>
            <th>소요시간</th>
            <th>처리 상태</th>
            <th>수집 건수</th>
            <th>입수망 종료시각</th>
            <th>업무앙 종료시각</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>1</td>
            <td><a href="http://naver.comn" className='link'>2024.05.11 10:10:01</a></td>
            <td>00:10:00</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>2</td>
            <td>2024.05.11 10:10:01</td>
            <td>00:10:00</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>3</td>
            <td>2024.05.11 10:10:01</td>
            <td>00:10:00</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>4</td>
            <td>2024.05.11 10:10:01</td>
            <td>00:10:00</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>5</td>
            <td>2024.05.11 10:10:01</td>
            <td>00:10:00</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>6</td>
            <td>2024.05.11 10:10:01</td>
            <td>00:10:00</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>7</td>
            <td>2024.05.11 10:10:01</td>
            <td>00:10:00</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>8</td>
            <td>2024.05.11 10:10:01</td>
            <td>00:10:00</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>9</td>
            <td>2024.05.11 10:10:01</td>
            <td>00:10:00</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>10</td>
            <td>2024.05.11 10:10:01</td>
            <td>00:10:00</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>11</td>
            <td>2024.05.11 10:10:01</td>
            <td>00:10:00</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>12</td>
            <td>2024.05.11 10:10:01</td>
            <td>00:10:00</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>13</td>
            <td>2024.05.11 10:10:01</td>
            <td>00:10:00</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>14</td>
            <td>2024.05.11 10:10:01</td>
            <td>00:10:00</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
        </tbody>
      </Table>

      <h2>Table Basic</h2>
      <Table responsive="sm" className='tbl' style={{width: '1136px'}}>
        <colgroup>
          <col style={{width: '100px'}}/>
          <col />
          <col style={{width: '120px'}}/>
          <col style={{width: '120px'}}/>
          <col style={{width: '120px'}}/>
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>순번</th>
            <th>레시피명</th>
            <th>수행시간</th>
            <th>구간</th>
            <th>상태</th>
            <th>처리건수</th>
            <th>처리크기</th>
            <th>작업시작일시</th>
            <th>작업종료일시</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>1</td>
            <td>A</td>
            <td>00:10:00</td>
            <td>입수망</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2048</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>2</td>
            <td>A</td>
            <td>00:10:00</td>
            <td>입수망</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2048</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>3</td>
            <td>A</td>
            <td>00:10:00</td>
            <td>입수망</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2048</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>4</td>
            <td>A</td>
            <td>00:10:00</td>
            <td>입수망</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2048</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>5</td>
            <td>A</td>
            <td>00:10:00</td>
            <td>입수망</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2048</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
          <tr className="text-center">
            <td>6</td>
            <td>A</td>
            <td>00:10:00</td>
            <td>입수망</td>
            <td>정상</td>
            <td>10,000</td>
            <td>2048</td>
            <td>2024.05.11 10:10:01</td>
            <td>2024.05.11 10:10:01</td>
          </tr>
        </tbody>
      </Table>

      <h2>데이터셋</h2>
      <Table responsive="sm" className='tbl' style={{width: '1576px'}}>
        <colgroup>
          <col />
          <col />
          <col style={{width: '80px'}}/>
          <col style={{width: '120px'}}/>
          <col />
          <col style={{width: '120px'}}/>
          <col style={{width: '100px'}}/>
        </colgroup>
        <thead>
          <tr>
            <th>데이터셋 코드</th>
            <th>데이터셋 명칭</th>
            <th>유형</th>
            <th>접근권한</th>
            <th>데이터 위치</th>
            <th>제공기관</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>TEST_DATASET_01</td>
            <td>Test Data 1</td>
            <td>파일</td>
            <td>접근 권한자</td>
            <td>-</td>
            <td>Test 1</td>
            <td className='text-info'>게시중</td>
          </tr>
          <tr className="text-center">
            <td>TEST_DATASET_02</td>
            <td>Test Data 2</td>
            <td>파일</td>
            <td>접근 권한자</td>
            <td>-</td>
            <td>Test 2</td>
            <td className='text-info'>게시중</td>
          </tr>
          <tr className="text-center">
            <td>TEST_DATASET_03</td>
            <td>Test Data 3</td>
            <td>파일</td>
            <td>접근 권한자</td>
            <td>-</td>
            <td>Test 3</td>
            <td className='text-success'>작성중</td>
          </tr>
          <tr className="text-center">
            <td>TEST_DATASET_04</td>
            <td>Test Data 4</td>
            <td>파일</td>
            <td>접근 권한자</td>
            <td>-</td>
            <td>Test 4</td>
            <td className='text-info'>게시중</td>
          </tr>
          <tr className="text-center">
            <td>TEST_DATASET_05</td>
            <td>Test Data 5</td>
            <td>파일</td>
            <td>접근 권한자</td>
            <td>-</td>
            <td>Test 5</td>
            <td className='text-info'>게시중</td>
          </tr>
          <tr className="text-center">
            <td>TEST_DATASET_06</td>
            <td>Test Data 6</td>
            <td>파일</td>
            <td>접근 권한자</td>
            <td>-</td>
            <td>Test 6</td>
            <td className='text-info'>게시중</td>
          </tr>
          <tr className="text-center">
            <td>TEST_DATASET_07</td>
            <td>Test Data 7</td>
            <td>파일</td>
            <td>접근 권한자</td>
            <td>-</td>
            <td>Test 7</td>
            <td className='text-info'>게시중</td>
          </tr>
          <tr className="text-center">
            <td>TEST_DATASET_08</td>
            <td>Test Data 8</td>
            <td>파일</td>
            <td>접근 권한자</td>
            <td>-</td>
            <td>Test 8</td>
            <td className='text-info'>게시중</td>
          </tr>
          <tr className="text-center">
            <td>TEST_DATASET_09</td>
            <td>Test Data 9</td>
            <td>파일</td>
            <td>접근 권한자</td>
            <td>-</td>
            <td>Test 9</td>
            <td className='text-info'>게시중</td>
          </tr>
          <tr className="text-center">
            <td>TEST_DATASET_10</td>
            <td>Test Data 10</td>
            <td>파일</td>
            <td>접근 권한자</td>
            <td>-</td>
            <td>Test 10</td>
            <td className='text-info'>게시중</td>
          </tr>
        </tbody>
      </Table>

      <h2>공통코드</h2>
      <Table responsive="sm" className='tbl' style={{width: '1576px'}}>
        <colgroup>
          <col style={{width: '120px'}}/>
          <col />
          <col style={{width: '120px'}}/>
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>공통코드</th>
            <td colSpan={3}><input type="text" className='w-100' placeholder='ERRCOND'/></td>
          </tr>
          <tr>
            <th>공통코드 명</th>
            <td colSpan={3}><input type="text" className='w-100' placeholder='알림 조건 Keyword 코드'/></td>
          </tr>
          <tr>
            <th>설명</th>
            <td colSpan={3}><textarea name="" id="" rows={10} className='w-100' placeholder='알림 조건에 사용할 Keyword 등록'></textarea></td>
          </tr>
          <tr>
            <th>등록자</th>
            <td>홍길동</td>
            <th>등록일시</th>
            <td>2023-08-09 13:21</td>
          </tr>
        </tbody>
      </Table>

      <h2>상세코드</h2>
      <Table responsive="sm" className='tbl' style={{width: '1576px'}}>
        <colgroup>
          <col style={{width: '40px'}}/>
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th><input type="checkbox" name="" id="all" className='chk-input' /><label htmlFor="all" className='chk-label'></label></th>
            <th>상세코드</th>
            <th>상세코드명</th>
            <th>설명</th>
            <th>정렬</th>
            <th>옵션1</th>
            <th>옵션2</th>
            <th>옵션3</th>
            <th>옵션4</th>
            <th>옵션5</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-center'>
            <td><input type="checkbox" name="" id="n1" className='chk-input' /><label htmlFor="n1" className='chk-label'></label></td>
            <td>1</td>
            <td>ERR1</td>
            <td>에러</td>
            <td>1</td>
            <td>connect</td>
            <td>refuse</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className='text-center'>
            <td><input type="checkbox" name="" id="n2" className='chk-input' /><label htmlFor="n2" className='chk-label'></label></td>
            <td>2</td>
            <td>ERR1</td>
            <td>에러</td>
            <td>2</td>
            <td>connect</td>
            <td>refuse</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  ); //return
};

export default Tables;
