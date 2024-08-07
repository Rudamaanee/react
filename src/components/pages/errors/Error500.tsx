import { useNavigate } from 'react-router-dom';

const Error500 = () => {
  const navigate = useNavigate();
  return (
    <div className="error-wrap">
      <h1 className='error-tit'>500</h1>
      <div className="text-info">Internal Server Error</div>
      <button type="button" className="btn primary" onClick={() => navigate(-1)}>돌아가기</button>
    </div>
  );
}
export default Error500;