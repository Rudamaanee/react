import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import exporting from 'highcharts/modules/exporting';
// import export_data from 'highcharts/modules/export-data';
import accessibility from 'highcharts/modules/accessibility';
exporting(Highcharts);
// export_data(Highcharts);
accessibility(Highcharts);

const SingleLineSeries = () => {
  const data =[
    [1657719000000,145.49],[1657805400000,148.47],[1657891800000,150.17],[1658151000000,147.07],[1658237400000,151],[1658323800000,153.04],[1658410200000,155.35],[1658496600000,154.09],[1658755800000,152.95],[1658842200000,151.6],[1658928600000,156.79],[1659015000000,157.35],[1659101400000,162.51],[1659360600000,161.51],[1659447000000,160.01],[1659533400000,166.13],[1659619800000,165.81],[1659706200000,165.35],[1659965400000,164.87],[1660051800000,164.92],[1660138200000,169.24],[1660224600000,168.49],[1660311000000,172.1],[1660570200000,173.19],[1660656600000,173.03],[1660743000000,174.55],[1660829400000,174.15],[1660915800000,171.52],[1661175000000,167.57],[1661261400000,167.23],[1661347800000,167.53],[1661434200000,170.03],[1661520600000,163.62],[1661779800000,161.38],[1661866200000,158.91],[1661952600000,157.22],[1662039000000,157.96],[1662125400000,155.81],[1662471000000,154.53],[1662557400000,155.96],[1662643800000,154.46],[1662730200000,157.37],[1662989400000,163.43],[1663075800000,153.84],[1663162200000,155.31],[1663248600000,152.37],[1663335000000,150.7],[1663594200000,154.48],[1663680600000,156.9],[1663767000000,153.72],[1663853400000,152.74],[1663939800000,150.43],[1664199000000,150.77],[1664285400000,151.76],[1664371800000,149.84],[1664458200000,142.48],[1664544600000,138.2],[1664803800000,142.45],[1664890200000,146.1],[1664976600000,146.4],[1665063000000,145.43],[1665149400000,140.09],[1665408600000,140.42],[1665495000000,138.98],[1665581400000,138.34],[1665667800000,142.99],[1665754200000,138.38],[1666013400000,142.41],[1666099800000,143.75],[1666186200000,143.86],[1666272600000,143.39],[1666359000000,147.27],[1666618200000,149.45],[1666704600000,152.34],[1666791000000,149.35],[1666877400000,144.8],[1666963800000,155.74],[1667223000000,153.34],[1667309400000,150.65],[1667395800000,145.03],[1667482200000,138.88],[1667568600000,138.38],[1667831400000,138.92],[1667917800000,139.5],[1668004200000,134.87],[1668090600000,146.87],[1668177000000,149.7],[1668436200000,148.28],[1668522600000,150.04],[1668609000000,148.79],[1668695400000,150.72],[1668781800000,151.29],[1669041000000,148.01],[1669127400000,150.18],[1669213800000,151.07],[1669386600000,148.11],[1669645800000,144.22],[1669732200000,141.17],[1669818600000,148.03],[1669905000000,148.31],[1669991400000,147.81],[1670250600000,146.63],[1670337000000,142.91],[1670423400000,140.94],[1670509800000,142.65],[1670596200000,142.16],[1670855400000,144.49],[1670941800000,145.47],[1671028200000,143.21],[1671114600000,136.5],[1671201000000,134.51],[1671460200000,132.37],[1671546600000,132.3],[1671633000000,135.45],[1671719400000,132.23],[1671805800000,131.86],[1672151400000,130.03],[1672237800000,126.04],[1672324200000,129.61],[1672410600000,129.93],[1672756200000,125.07],[1672842600000,126.36],[1672929000000,125.02],[1673015400000,129.62],[1673274600000,130.15],[1673361000000,130.73],[1673447400000,133.49],[1673533800000,133.41],[1673620200000,134.76],[1673965800000,135.94],[1674052200000,135.21],[1674138600000,135.27],[1674225000000,137.87],[1674484200000,141.11],[1674570600000,142.53],[1674657000000,141.86],[1674743400000,143.96],[1674829800000,145.93],[1675089000000,143],[1675175400000,144.29],[1675261800000,145.43],[1675348200000,150.82],[1675434600000,154.5],[1675693800000,151.73],[1675780200000,154.65],[1675866600000,151.92],[1675953000000,150.87],[1676039400000,151.01],[1676298600000,153.85],[1676385000000,153.2],[1676471400000,155.33],[1676557800000,153.71],[1676644200000,152.55],[1676989800000,148.48],[1677076200000,148.91],[1677162600000,149.4],[1677249000000,146.71],[1677508200000,147.92],[1677594600000,147.41],[1677681000000,145.31],[1677767400000,145.91],[1677853800000,151.03],[1678113000000,153.83],[1678199400000,151.6],[1678285800000,152.87],[1678372200000,150.59],[1678458600000,148.5],[1678714200000,150.47],[1678800600000,152.59],[1678887000000,152.99],[1678973400000,155.85],[1679059800000,155],[1679319000000,157.4],[1679405400000,159.28],[1679491800000,157.83],[1679578200000,158.93],[1679664600000,160.25],[1679923800000,158.28],[1680010200000,157.65],[1680096600000,160.77],[1680183000000,162.36],[1680269400000,164.9],[1680528600000,166.17],[1680615000000,165.63],[1680701400000,163.76],[1680787800000,164.66],[1681133400000,162.03],[1681219800000,160.8],[1681306200000,160.1],[1681392600000,165.56],[1681479000000,165.21],[1681738200000,165.23],[1681824600000,166.47],[1681911000000,167.63],[1681997400000,166.65],[1682083800000,165.02],[1682343000000,165.33],[1682429400000,163.77],[1682515800000,163.76],[1682602200000,168.41],[1682688600000,169.68],[1682947800000,169.59],[1683034200000,168.54],[1683120600000,167.45],[1683207000000,165.79],[1683293400000,173.57],[1683552600000,173.5],[1683639000000,171.77],[1683725400000,173.56],[1683811800000,173.75],[1683898200000,172.57],[1684157400000,172.07],[1684243800000,172.07],[1684330200000,172.69],[1684416600000,175.05],[1684503000000,175.16],[1684762200000,174.2],[1684848600000,171.56],[1684935000000,171.84],[1685021400000,172.99],[1685107800000,175.43],[1685453400000,177.3],[1685539800000,177.25],[1685626200000,180.09],[1685712600000,180.95],[1685971800000,179.58],[1686058200000,179.21],[1686144600000,177.82],[1686231000000,180.57],[1686317400000,180.96],[1686576600000,183.79],[1686663000000,183.31],[1686749400000,183.95],[1686835800000,186.01],[1686922200000,184.92],[1687267800000,185.01],[1687354200000,183.96],[1687440600000,187],[1687527000000,186.68],[1687786200000,185.27],[1687872600000,188.06],[1687959000000,189.25],[1688045400000,189.59],[1688131800000,193.97],[1688391000000,192.46],[1688563800000,191.33],[1688650200000,191.81],[1688736600000,190.68],[1688995800000,188.61],[1689082200000,188.08],[1689168600000,189.77],[1689255000000,190.54],[1689341400000,190.69],[1689600600000,193.99],[1689687000000,193.73],[1689773400000,195.1],[1689859800000,193.13],[1689946200000,191.94],[1690205400000,192.75],[1690291800000,193.62],[1690378200000,194.5],[1690464600000,193.22],[1690551000000,195.83],[1690810200000,196.45],[1690896600000,195.61],[1690983000000,192.58],[1691069400000,191.17],[1691155800000,181.99],[1691415000000,178.85],[1691501400000,179.8],[1691587800000,178.19],[1691674200000,177.97],[1691760600000,177.79],[1692019800000,179.46],[1692106200000,177.45],[1692192600000,176.57],[1692279000000,174],[1692365400000,174.49],[1692624600000,175.84],[1692711000000,177.23],[1692797400000,181.12],[1692883800000,176.38],[1692970200000,178.61],[1693229400000,180.19],[1693315800000,184.12],[1693402200000,187.65],[1693488600000,187.87],[1693575000000,189.46],[1693920600000,189.7],[1694007000000,182.91],[1694093400000,177.56],[1694179800000,178.18],[1694439000000,179.36],[1694525400000,176.3],[1694611800000,174.21],[1694698200000,175.74],[1694784600000,175.01],[1695043800000,177.97],[1695130200000,179.07],[1695216600000,175.49],[1695303000000,173.93],[1695389400000,174.79],[1695648600000,176.08],[1695735000000,171.96],[1695821400000,170.43],[1695907800000,170.69],[1695994200000,171.21],[1696253400000,173.75],[1696339800000,172.4],[1696426200000,173.66],[1696512600000,174.91],[1696599000000,177.49],[1696858200000,178.99],[1696944600000,178.39],[1697031000000,179.8],[1697117400000,180.71],[1697203800000,178.85],[1697463000000,178.72],[1697549400000,177.15],[1697635800000,175.84],[1697722200000,175.46],[1697808600000,172.88],[1698067800000,173],[1698154200000,173.44],[1698240600000,171.1],[1698327000000,166.89],[1698413400000,168.22],[1698672600000,170.29],[1698759000000,170.77],[1698845400000,173.97],[1698931800000,177.57],[1699018200000,176.65],[1699281000000,179.23],[1699367400000,181.82],[1699453800000,182.89],[1699540200000,182.41],[1699626600000,186.4],[1699885800000,184.8],[1699972200000,187.44],[1700058600000,188.01],[1700145000000,189.71],[1700231400000,189.69],[1700490600000,191.45],[1700577000000,190.64],[1700663400000,191.31],[1700836200000,189.97],[1701095400000,189.79],[1701181800000,190.4],[1701268200000,189.37],[1701354600000,189.95],[1701441000000,191.24],[1701700200000,189.43],[1701786600000,193.42],[1701873000000,192.32],[1701959400000,194.27],[1702045800000,195.71],[1702305000000,193.18],[1702391400000,194.71],[1702477800000,197.96],[1702564200000,198.11],[1702650600000,197.57],[1702909800000,195.89],[1702996200000,196.94],[1703082600000,194.83],[1703169000000,194.68],[1703255400000,193.6],[1703601000000,193.05],[1703687400000,193.15],[1703773800000,193.58],[1703860200000,192.53],[1704205800000,185.64],[1704292200000,184.25],[1704378600000,181.91],[1704465000000,181.18],[1704724200000,185.56],[1704810600000,185.14],[1704897000000,186.19],[1704983400000,185.59],[1705069800000,185.92],[1705415400000,183.63],[1705501800000,182.68],[1705588200000,188.63],[1705674600000,191.56],[1705933800000,193.89],[1706020200000,195.18],[1706106600000,194.5],[1706193000000,194.17],[1706279400000,192.42],[1706538600000,191.73],[1706625000000,188.04],[1706711400000,184.4],[1706797800000,186.86],[1706884200000,185.85],[1707143400000,187.68],[1707229800000,189.3],[1707316200000,189.41],[1707402600000,188.32],[1707489000000,188.85],[1707748200000,187.15],[1707834600000,185.04],[1707921000000,184.15],[1708007400000,183.86],[1708093800000,182.31],[1708439400000,181.56],[1708525800000,182.32],[1708612200000,184.37],[1708698600000,182.52],[1708957800000,181.16],[1709044200000,182.63],[1709130600000,181.42],[1709217000000,180.75],[1709303400000,179.66],[1709562600000,175.1],[1709649000000,170.12],[1709735400000,169.12],[1709821800000,169],[1709908200000,170.73],[1710163800000,172.75],[1710250200000,173.23],[1710336600000,171.13],[1710423000000,173],[1710509400000,172.62],[1710768600000,173.72],[1710855000000,176.08],[1710941400000,178.67],[1711027800000,171.37],[1711114200000,172.28],[1711373400000,170.85],[1711459800000,169.71],[1711546200000,173.31],[1711632600000,171.48],[1711978200000,170.03],[1712064600000,168.84],[1712151000000,169.65],[1712237400000,168.82],[1712323800000,169.58],[1712583000000,168.45],[1712669400000,169.67],[1712755800000,167.78],[1712842200000,175.04],[1712928600000,176.55],[1713187800000,172.69],[1713274200000,169.38],[1713360600000,168],[1713447000000,167.04],[1713533400000,165],[1713792600000,165.84],[1713879000000,166.9],[1713965400000,169.02],[1714051800000,169.89],[1714138200000,169.3],[1714397400000,173.5],[1714483800000,170.33],[1714570200000,169.3],[1714656600000,173.03],[1714743000000,183.38],[1715002200000,181.71],[1715088600000,182.4],[1715175000000,182.74],[1715261400000,184.57],[1715347800000,183.05],[1715607000000,186.28],[1715693400000,187.43],[1715779800000,189.72],[1715866200000,189.84],[1715952600000,189.87],[1716211800000,191.04],[1716298200000,192.35],[1716384600000,190.9],[1716471000000,186.88],[1716557400000,189.98],[1716903000000,189.99],[1716989400000,190.29],[1717075800000,191.29],[1717162200000,192.25],[1717421400000,194.03],[1717507800000,194.35],[1717594200000,195.87],[1717680600000,194.48],[1717767000000,196.89],[1718026200000,193.12],[1718112600000,207.15],[1718199000000,213.07],[1718285400000,214.24],[1718371800000,212.49],[1718631000000,216.67],[1718717400000,214.29],[1718890200000,209.68],[1718976600000,207.49],[1719235800000,208.14],[1719322200000,209.07],[1719408600000,213.25],[1719495000000,214.1],[1719581400000,210.62],[1719840600000,216.75],[1719927000000,220.27],[1720013400000,221.55],[1720186200000,226.34],[1720445400000,227.82],[1720531800000,228.68],[1720618200000,232.98],[1720704600000,227.57],[1720791000000,230.54]
  ]

  const options = {
    rangeSelector: {
      selected: 1
    },

    title: {
      text: 'AAPL Stock Price'
    },

    series: [{
      name: 'AAPL',
      data: data,
      tooltip: {
        valueDecimals: 2
      }
    }]
  }; //options

  return <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options} />;
}
export default SingleLineSeries;