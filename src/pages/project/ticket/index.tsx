import Activity from '../detail/components/activity'
import Description from '../detail/components/description'
import Properties from '../detail/components/properties'

const Ticket = () => {
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
