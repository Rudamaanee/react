

const Typography = () => {
  return (
    <div className="guideWrap">
      <h2>Typography</h2>
      <div>
        <span>H1</span> <div className="tit-h1">타이틀 Noto Sans KR 400 30px</div>
        <span>H2</span> <div className="tit-h2">타이틀 Noto Sans KR 400 24px</div>
        <span>H3</span> <div className="tit-h3">타이틀 Noto Sans KR 400 18px</div>
        <span>H4</span> <div className="tit-h4">타이틀 Noto Sans KR 400 14px</div>
      </div>
      <div className="mt-5">
        <div className="tit-h3">환율의 정의</div>
        <div className="tit-h4">환율의 정의 : 환율은 두 통화간의 교환비율을 의미</div>
        <p>환율(exchange rate)이란 외국 통화 한 단위를 받기 위해 자국 통화를 몇 단위 지불해야 하는가를 나타내는 것으로 자국 통화와 외국 통화간의 교환비율을 의미하며 두 나라 통화의 상대적 가치를 말한다</p>

        <div className="tit-h3">환율의 변동요인</div>
        <div className="tit-h4">환율의 변동요인 : 환율은 외환시장의 수요와 공급에 따라 결정 <br/>각국의 물가수준, 생산성 등 경제여건의 변화는 장기적으로 통화의 가치에 영향을 미친다.</div>
        <p>환율을 결정하는 가장 근본적인 요인으로는 해당국가와 상대국의 물가수준 변동을 들 수 있다. 통화가치는 재화, 서비스, 자본 등에 대한 구매력의 척도이므로 결국 환율은 상대 물가수준으로 가늠되는 상대적 구매력에 의해 결정되기 때문이다.</p>
        <p>장기적으로 환율에 영향을 미치는 또 다른 요소로 생산성의 변화를 들 수 있다. 예를 들어 한나라의 생산성이 다른 나라보다 더 빠른 속도로 향상(악화)될 경우 자국통화는 절상(절하)된다. 이는 생산성이 개선될 경우 재화생산에 필요한 비용이 절감되어 더 싼 값에 재화를 공급할 수 있게 되어 물가가 하락하고 통화가치는 올라가게 된다.</p>
        <div className="tit-h4">중기적 관점에서 보면 환율에 영향을 미치는 요인으로 대외거래, 거시경제정책 등을 들 수 있다.</div>
        <p>대외거래 결과 국제수지가 흑자를 보이면 외환의 공급이 늘어나므로 환율은 하락하고, 국제수지가 적자를 보여 외환의 초과수요가 지속되면 환율은 상승하게 된다. 통화정책 등 거시경제정책도 환율에 영향을 미친다. 통화정책을 긴축적으로 운용하면 통화공급이 감소하여 외국의 통화량에 변화가 없다면 원화의 상대적인 공급이 줄어들어 환율이 하락(원화절상)한다.</p>
      </div>
    </div>
  );
};

export default Typography;
