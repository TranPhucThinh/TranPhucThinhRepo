import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import { useNavigate } from 'react-router-dom'

const Assignments = () => {
  const navigate = useNavigate()

  return (
    <div className='grid grid-cols-4 gap-2 mt-4'>
      <Card className='max-h-48 py-2 gap-1 hover:cursor-pointer' onClick={() => navigate('/assignments/json-form')}>
        <CardHeader className='px-4 font-semibold'>
          <CardDescription>Assignment 2</CardDescription>
        </CardHeader>
      </Card>
      <Card className='max-h-48 py-2 gap-1 hover:cursor-pointer' onClick={() => navigate('/assignments/paginate')}>
        <CardHeader className='px-4 font-semibold'>
          <CardDescription>Assignment 3</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

export default Assignments
