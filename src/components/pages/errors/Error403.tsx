import { useNavigate } from 'react-router-dom';

const Error403 = () => {
  const navigate = useNavigate();
  return (
    <div className="error-wrap">
      <h1 className='error-tit'>403</h1>
      <div className="text-info">Forbidden</div>
      <button type="button" className="btn primary" onClick={() => navigate(-1)}>돌아가기</button>
    </div>
  );
}
export default Error403;