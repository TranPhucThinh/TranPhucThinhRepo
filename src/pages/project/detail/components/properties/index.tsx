import { ChevronDown, ChevronRight } from 'lucide-react'

const properties = [
  {
    title: 'Status',
    value: 'In-Progress',
    color: 'text-[#007AFF]'
  },
  {
    title: 'Priority',
    value: 'Critical',
    color: 'text-[#E10E0E]'
  },
  {
    title: 'Assignee',
    value: 'Trangntt'
  },
  {
    title: 'Type',
    value: 'Bug'
  },
  {
    title: 'Stated date:',
    value: '2025-04-04'
  },
  {
    title: 'Target date:',
    value: '2025-04-04'
  }
]

const Properties = () => {
  return (
    <>
      <div className='flex items-center justify-between text-primary-gray pt-2 pb-2 pl-2 pr-6 border-b border-secondary-gray'>
        <div className='flex items-center gap-2'>
          <span>Properties</span>
          <ChevronDown size={16} />
        </div>
        <ChevronRight />
      </div>
      <div className='pt-1 pl-4 pr-4'>
        <div className='grid gap-4 text-primary-gray text-sm/[22px]'>
          {properties.map((property, index) => (
            <div key={index} className='grid grid-cols-2'>
              <span>{property.title}</span>
              <div className='flex items-center gap-2'>
                <ChevronDown size={16} />
                <span className={property.color ? property.color : ''}>{property.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Properties
