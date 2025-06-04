import { tickets } from '@/mocks'
import Activity from '../detail/components/activity'
import Description from '../detail/components/description'
import Properties from '../detail/components/properties'
import { useParams } from 'react-router-dom'

const Ticket = () => {
  const { ticketId } = useParams()

  const ticket = tickets.find((t) => t.id === Number(ticketId))
  console.log(' DetailProject ~ ticket:', ticket)

  return (
    <div className='grid grid-cols-4 h-full'>
      {/* Left side */}
      <div className='col-span-3 border-r border-secondary-gray min-h-full pr-3'>
        <Description />
        <Activity />
      </div>

      {/* Right side */}
      <div className='col-span-1 min-h-full'>
        <Properties />
      </div>
    </div>
  )
}

export default Ticket
