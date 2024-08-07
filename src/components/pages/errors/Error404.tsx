import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="error-wrap">
      <h1 className='error-tit'>404</h1>
      <div className="text-info">Not Found</div>
      <button type="button" className="btn primary" onClick={() => navigate(-1)}>돌아가기</button>
    </div>
  );
}
export default Error404;