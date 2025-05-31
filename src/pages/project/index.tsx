import { useNavigate } from 'react-router-dom'

import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'

const Project = () => {
  const navigate = useNavigate()

  return (
    <div className='grid grid-cols-4 gap-2 mt-4'>
      <Card className='max-h-48 gap-1 hover:cursor-pointer' onClick={() => navigate('/projects/1/detail')}>
        <CardHeader>
          <CardDescription>UrapidLoan Project</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-sm min-h-25 overflow-hidden line-clamp-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus qui recusandae dolores, rem distinctio quia
            totam excepturi odio reiciendis quasi sunt facilis commodi, similique a suscipit dicta itaque? Quibusdam,
            optio.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Project
