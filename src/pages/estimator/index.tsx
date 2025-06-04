import { useNavigate } from 'react-router-dom'

const Estimator = () => {
  const navigate = useNavigate()

  return (
    <p
      className='hover:cursor-pointer hover:text-primary-blue mt-4 inline-block'
      onClick={() => navigate('/estimator/work-packages')}
    >
      Go to Work Packages
    </p>
  )
}

export default Estimator
