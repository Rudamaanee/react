import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import exporting from 'highcharts/modules/exporting';
import export_data from 'highcharts/modules/export-data';
import accessibility from 'highcharts/modules/accessibility';
exporting(Highcharts);
export_data(Highcharts);
accessibility(Highcharts);

const Column = () => {
  const data = [
    [1657719000000,71185600],[1657805400000,78140700],[1657891800000,76259900],[1658151000000,81420900],[1658237400000,82982400],[1658323800000,64823400],[1658410200000,65086600],[1658496600000,66675400],[1658755800000,53623900],[1658842200000,55138700],[1658928600000,78620700],[1659015000000,81378700],[1659101400000,101786900],[1659360600000,67829400],[1659447000000,59907000],[1659533400000,82507500],[1659619800000,55474100],[1659706200000,56697000],[1659965400000,60276900],[1660051800000,63135500],[1660138200000,70170500],[1660224600000,57149200],[1660311000000,68039400],[1660570200000,54091700],[1660656600000,56377100],[1660743000000,79542000],[1660829400000,62290100],[1660915800000,70346300],[1661175000000,69026800],[1661261400000,54147100],[1661347800000,53841500],[1661434200000,51218200],[1661520600000,78961000],[1661779800000,73314000],[1661866200000,77906200],[1661952600000,87991100],[1662039000000,74229900],[1662125400000,76957800],[1662471000000,73714800],[1662557400000,87449600],[1662643800000,84923800],[1662730200000,68028800],[1662989400000,104956000],[1663075800000,122656600],[1663162200000,87965400],[1663248600000,90481100],[1663335000000,162278800],[1663594200000,81474200],[1663680600000,107689800],[1663767000000,101696800],[1663853400000,86652500],[1663939800000,96029900],[1664199000000,93339400],[1664285400000,84442700],[1664371800000,146691400],[1664458200000,128138200],[1664544600000,124925300],[1664803800000,114311700],[1664890200000,87830100],[1664976600000,79471000],[1665063000000,68402200],[1665149400000,85925600],[1665408600000,74899000],[1665495000000,77033700],[1665581400000,70433700],[1665667800000,113224000],[1665754200000,88598000],[1666013400000,85250900],[1666099800000,99136600],[1666186200000,61758300],[1666272600000,64522000],[1666359000000,86548600],[1666618200000,75981900],[1666704600000,74732300],[1666791000000,88194300],[1666877400000,109180200],[1666963800000,164762400],[1667223000000,97943200],[1667309400000,80379300],[1667395800000,93604600],[1667482200000,97918500],[1667568600000,140814800],[1667831400000,83374600],[1667917800000,89908500],[1668004200000,74917800],[1668090600000,118854000],[1668177000000,93979700],[1668436200000,73374100],[1668522600000,89868300],[1668609000000,64218300],[1668695400000,80389400],[1668781800000,74829600],[1669041000000,58724100],[1669127400000,51804100],[1669213800000,58301400],[1669386600000,35195900],[1669645800000,69246000],[1669732200000,83763800],[1669818600000,111380900],[1669905000000,71250400],[1669991400000,65447400],[1670250600000,68826400],[1670337000000,64727200],[1670423400000,69721100],[1670509800000,62128300],[1670596200000,76097000],[1670855400000,70462700],[1670941800000,93886200],[1671028200000,82291200],[1671114600000,98931900],[1671201000000,160156900],[1671460200000,79592600],[1671546600000,77432800],[1671633000000,85928000],[1671719400000,77852100],[1671805800000,63814900],[1672151400000,69007800],[1672237800000,85438400],[1672324200000,75703700],[1672410600000,77034200],[1672756200000,112117500],[1672842600000,89113600],[1672929000000,80962700],[1673015400000,87754700],[1673274600000,70790800],[1673361000000,63896200],[1673447400000,69458900],[1673533800000,71379600],[1673620200000,57809700],[1673965800000,63646600],[1674052200000,69672800],[1674138600000,58280400],[1674225000000,80223600],[1674484200000,81760300],[1674570600000,66435100],[1674657000000,65799300],[1674743400000,54105100],[1674829800000,70555800],[1675089000000,64015300],[1675175400000,65874500],[1675261800000,77663600],[1675348200000,118339000],[1675434600000,154357300],[1675693800000,69858300],[1675780200000,83322600],[1675866600000,64120100],[1675953000000,56007100],[1676039400000,57450700],[1676298600000,62199000],[1676385000000,61707600],[1676471400000,65573800],[1676557800000,68167900],[1676644200000,59144100],[1676989800000,58867200],[1677076200000,51011300],[1677162600000,48394200],[1677249000000,55469600],[1677508200000,44998500],[1677594600000,50547000],[1677681000000,55479000],[1677767400000,52238100],[1677853800000,70732300],[1678113000000,87558000],[1678199400000,56182000],[1678285800000,47204800],[1678372200000,53833600],[1678458600000,68572400],[1678714200000,84457100],[1678800600000,73695900],[1678887000000,77167900],[1678973400000,76161100],[1679059800000,98944600],[1679319000000,73641400],[1679405400000,73938300],[1679491800000,75701800],[1679578200000,67622100],[1679664600000,59196500],[1679923800000,52390300],[1680010200000,45992200],[1680096600000,51305700],[1680183000000,49501700],[1680269400000,68749800],[1680528600000,56976200],[1680615000000,46278300],[1680701400000,51511700],[1680787800000,45390100],[1681133400000,47716900],[1681219800000,47644200],[1681306200000,50133100],[1681392600000,68445600],[1681479000000,49386500],[1681738200000,41516200],[1681824600000,49923000],[1681911000000,47720200],[1681997400000,52456400],[1682083800000,58337300],[1682343000000,41949600],[1682429400000,48714100],[1682515800000,45498800],[1682602200000,64902300],[1682688600000,55209200],[1682947800000,52472900],[1683034200000,48425700],[1683120600000,65136000],[1683207000000,81235400],[1683293400000,113316400],[1683552600000,55962800],[1683639000000,45326900],[1683725400000,53724500],[1683811800000,49514700],[1683898200000,45497800],[1684157400000,37266700],[1684243800000,42110300],[1684330200000,57951600],[1684416600000,65496700],[1684503000000,55772400],[1684762200000,43570900],[1684848600000,50747300],[1684935000000,45143500],[1685021400000,56058300],[1685107800000,54835000],[1685453400000,55964400],[1685539800000,99625300],[1685626200000,68901800],[1685712600000,61945900],[1685971800000,121946500],[1686058200000,64848400],[1686144600000,61944600],[1686231000000,50214900],[1686317400000,48870700],[1686576600000,54274900],[1686663000000,54929100],[1686749400000,57462900],[1686835800000,65433200],[1686922200000,101235600],[1687267800000,49799100],[1687354200000,49515700],[1687440600000,51245300],[1687527000000,53079300],[1687786200000,48088700],[1687872600000,50730800],[1687959000000,51216800],[1688045400000,46347300],[1688131800000,85069600],[1688391000000,31458200],[1688563800000,46920300],[1688650200000,45094300],[1688736600000,46778000],[1688995800000,59922200],[1689082200000,46638100],[1689168600000,60750200],[1689255000000,41342300],[1689341400000,41573900],[1689600600000,50520200],[1689687000000,48353800],[1689773400000,80507300],[1689859800000,59581200],[1689946200000,71917800],[1690205400000,45377800],[1690291800000,37283200],[1690378200000,47471900],[1690464600000,47460200],[1690551000000,48291400],[1690810200000,38824100],[1690896600000,35175100],[1690983000000,50389300],[1691069400000,61235200],[1691155800000,115799700],[1691415000000,97576100],[1691501400000,67823000],[1691587800000,60378500],[1691674200000,54686900],[1691760600000,51988100],[1692019800000,43675600],[1692106200000,43622600],[1692192600000,46964900],[1692279000000,66062900],[1692365400000,61114200],[1692624600000,46311900],[1692711000000,42084200],[1692797400000,52722800],[1692883800000,54945800],[1692970200000,51449600],[1693229400000,43820700],[1693315800000,53003900],[1693402200000,60813900],[1693488600000,60794500],[1693575000000,45732600],[1693920600000,45280000],[1694007000000,81755800],[1694093400000,112488800],[1694179800000,65551300],[1694439000000,58953100],[1694525400000,90370200],[1694611800000,84267900],[1694698200000,60895800],[1694784600000,109205100],[1695043800000,67257600],[1695130200000,51826900],[1695216600000,58436200],[1695303000000,63047900],[1695389400000,56725400],[1695648600000,46172700],[1695735000000,64588900],[1695821400000,66921800],[1695907800000,56294400],[1695994200000,51814200],[1696253400000,52164500],[1696339800000,49594600],[1696426200000,53020300],[1696512600000,48527900],[1696599000000,57224100],[1696858200000,42390800],[1696944600000,43698000],[1697031000000,47551100],[1697117400000,56743100],[1697203800000,51427100],[1697463000000,52517000],[1697549400000,57549400],[1697635800000,54764400],[1697722200000,59302900],[1697808600000,64189300],[1698067800000,55980100],[1698154200000,43816600],[1698240600000,57157000],[1698327000000,70625300],[1698413400000,58499100],[1698672600000,51131000],[1698759000000,44846000],[1698845400000,56934900],[1698931800000,77334800],[1699018200000,79763700],[1699281000000,63841300],[1699367400000,70530000],[1699453800000,49340300],[1699540200000,53763500],[1699626600000,66133400],[1699885800000,43627500],[1699972200000,60108400],[1700058600000,53790500],[1700145000000,54412900],[1700231400000,50922700],[1700490600000,46505100],[1700577000000,38134500],[1700663400000,39617700],[1700836200000,24048300],[1701095400000,40552600],[1701181800000,38415400],[1701268200000,43014200],[1701354600000,48794400],[1701441000000,45679300],[1701700200000,43389500],[1701786600000,66628400],[1701873000000,41089700],[1701959400000,47477700],[1702045800000,53377300],[1702305000000,60943700],[1702391400000,52696900],[1702477800000,70404200],[1702564200000,66831600],[1702650600000,128256700],[1702909800000,55751900],[1702996200000,40714100],[1703082600000,52242800],[1703169000000,46482500],[1703255400000,37122800],[1703601000000,28919300],[1703687400000,48087700],[1703773800000,34049900],[1703860200000,42628800],[1704205800000,82488700],[1704292200000,58414500],[1704378600000,71983600],[1704465000000,62303300],[1704724200000,59144500],[1704810600000,42841800],[1704897000000,46792900],[1704983400000,49128400],[1705069800000,40444700],[1705415400000,65603000],[1705501800000,47317400],[1705588200000,78005800],[1705674600000,68741000],[1705933800000,60133900],[1706020200000,42355600],[1706106600000,53631300],[1706193000000,54822100],[1706279400000,44594000],[1706538600000,47145600],[1706625000000,55859400],[1706711400000,55467800],[1706797800000,64885400],[1706884200000,102518000],[1707143400000,69668800],[1707229800000,43490800],[1707316200000,53439000],[1707402600000,40962000],[1707489000000,45155200],[1707748200000,41781900],[1707834600000,56529500],[1707921000000,54630500],[1708007400000,65434500],[1708093800000,49701400],[1708439400000,53665600],[1708525800000,41529700],[1708612200000,52292200],[1708698600000,45119700],[1708957800000,40867400],[1709044200000,54318900],[1709130600000,48953900],[1709217000000,136682600],[1709303400000,73488000],[1709562600000,81510100],[1709649000000,95132400],[1709735400000,68587700],[1709821800000,71765100],[1709908200000,76114600],[1710163800000,60139500],[1710250200000,59825400],[1710336600000,52488700],[1710423000000,72913500],[1710509400000,121664700],[1710768600000,75604200],[1710855000000,55215200],[1710941400000,53423100],[1711027800000,106181300],[1711114200000,71106600],[1711373400000,54288300],[1711459800000,57388400],[1711546200000,60273300],[1711632600000,65672700],[1711978200000,46240500],[1712064600000,49329500],[1712151000000,47691700],[1712237400000,53704400],[1712323800000,42055200],[1712583000000,37425500],[1712669400000,42451200],[1712755800000,49709300],[1712842200000,91070300],[1712928600000,101593300],[1713187800000,73531800],[1713274200000,73711200],[1713360600000,50901200],[1713447000000,43122900],[1713533400000,67772100],[1713792600000,48116400],[1713879000000,49537800],[1713965400000,48251800],[1714051800000,50558300],[1714138200000,44838400],[1714397400000,68169400],[1714483800000,65934800],[1714570200000,50383100],[1714656600000,94214900],[1714743000000,163224100],[1715002200000,78569700],[1715088600000,77305800],[1715175000000,45057100],[1715261400000,48983000],[1715347800000,50759500],[1715607000000,72044800],[1715693400000,52393600],[1715779800000,70400000],[1715866200000,52845200],[1715952600000,41282900],[1716211800000,44361300],[1716298200000,42309400],[1716384600000,34648500],[1716471000000,51005900],[1716557400000,36294600],[1716903000000,52280100],[1716989400000,53068000],[1717075800000,49947900],[1717162200000,75158300],[1717421400000,50080500],[1717507800000,47471400],[1717594200000,54156800],[1717680600000,41181800],[1717767000000,53103900],[1718026200000,97262100],[1718112600000,172373300],[1718199000000,198134300],[1718285400000,97862700],[1718371800000,70122700],[1718631000000,93728300],[1718717400000,79943300],[1718890200000,86172500],[1718976600000,246421400],[1719235800000,80727000],[1719322200000,56713900],[1719408600000,66213200],[1719495000000,49772700],[1719581400000,82542700],[1719840600000,60402900],[1719927000000,58046200],[1720013400000,37369800],[1720186200000,60412400],[1720445400000,59085900],[1720531800000,48076100],[1720618200000,62627700],[1720704600000,64710600],[1720791000000,53008200]
  ]

  const options = {
    chart: {
      alignTicks: false
    },

    rangeSelector: {
      selected: 1
    },

    title: {
      text: 'AAPL Stock Volume'
    },

    series: [{
      type: 'column',
      name: 'AAPL Stock Volume',
      data: data,
      dataGrouping: {
        units: [[
          'week', // unit name
          [1] // allowed multiples
        ], [
          'month',
          [1, 2, 3, 4, 6]
        ]]
      }
    }]
  }; //options

  return <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options} />;
}
export default Column;