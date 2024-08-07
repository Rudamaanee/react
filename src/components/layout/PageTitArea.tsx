type pageTitProps = {
  pageTitHeading: string;
  pageTitSubHeading: string
}

const PageTitArea = ({ pageTitHeading, pageTitSubHeading } : pageTitProps ) => {
  return (
    <div>
      <div className="page-tit-area">
        <div className="heading">{ pageTitHeading }</div>
        <div className="sub-heading">{ pageTitSubHeading }</div>
      </div>
    </div>
  );
}

export default PageTitArea;

