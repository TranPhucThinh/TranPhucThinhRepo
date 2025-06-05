import { useNavigate, useParams } from 'react-router-dom'

import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { projects, tickets } from '@/mocks'

const DetailProject = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const project = projects.find((p) => p.id === Number(id))
  console.log(' DetailProject ~ project:', project)

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-4'>
      {tickets.map((ticket) => (
        <Card
          key={ticket.id}
          className='col-span-1 max-h-48 gap-1 hover:cursor-pointer'
          onClick={() => navigate(`/projects/${id}/detail/${ticket.id}/ticket`)}
        >
          <CardHeader>
            <CardDescription>{ticket.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-sm min-h-25 overflow-hidden line-clamp-3'>{ticket.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default DetailProject
