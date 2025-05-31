import { useNavigate } from 'react-router-dom'

const Estimator = () => {
  const navigate = useNavigate()

  return (
    <p className='hover:cursor-pointer mt-4' onClick={() => navigate('/estimator/work-packages')}>
      Go to Work Packages
    </p>
  )
}

export default Estimator
