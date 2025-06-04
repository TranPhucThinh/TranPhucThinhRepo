import { useNavigate } from 'react-router-dom'

import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { projects } from '@/mocks'

const Project = () => {
  const navigate = useNavigate()

  return (
    <>
      <h2 className='mt-4 font-semibold text-xl'>Project List</h2>
      <div className='grid grid-cols-4 gap-2 mt-4'>
        {projects.map((project) => (
          <Card
            key={project.id}
            className='max-h-48 gap-1 hover:cursor-pointer'
            onClick={() => navigate(`/projects/${project.id}/detail`)}
          >
            <CardHeader>
              <CardDescription>{project.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm min-h-25 overflow-hidden line-clamp-3'>{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Project
