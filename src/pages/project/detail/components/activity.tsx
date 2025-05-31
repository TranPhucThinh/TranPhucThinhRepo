import { Textarea } from '@/components/ui/textarea'
import { ArrowUp, BookText, Clock5 } from 'lucide-react'

const activities = [
  {
    date: '2025-04-04 13:00:38',
    title: 'RFX David Nguyen Submitted to underwriting'
  },
  {
    date: '2025-04-04 11:10:38',
    title: 'ABC  Lisa Rose approval'
  },
  {
    date: '2025-04-04 08:00:00',
    title: 'RFX David Nguyen Submitted to underwriting'
  },
  {
    date: '2025-04-03 17:10:38',
    title: 'ABC Lisa Rose create an issue'
  }
]

const Activity = () => {
  return (
    <div className='mt-11'>
      <div className='flex items-center gap-2 text-primary-gray pb-2 border-b border-secondary-gray'>
        <BookText className='w-4 h-5' />
        <span>Activity</span>
      </div>
      <div className='relative mt-4'>
        {activities.map((activity, index) => {
          const isLast = index === activities.length - 1
          const dotColor = index % 2 === 0 ? 'bg-[#22AD5C]' : 'bg-[#005A86]'

          return (
            <div key={index} className={`relative pl-6 ${!isLast ? 'pb-4' : ''}`}>
              <div
                className={`absolute top-1 left-0 size-3 rounded-full flex items-center justify-center ${dotColor}`}
              />
              {!isLast && <div className='absolute left-[6px] top-[18px] h-5 border-l border-[#6F6F6F]' />}
              <div className='flex items-center gap-2'>
                <p className='text-sm text-primary-gray'>{activity.title}</p>
                <Clock5 size={12} />
                <p className='text-sm text-primary-gray'>{activity.date}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className='relative mt-6'>
        <Textarea placeholder='Leave a comment ...' className='bg-[#ECECEC] resize-none border-0 pr-6' />
        <ArrowUp className='absolute bottom-3 right-3 text-primary-blue hover:cursor-pointer' size={16} />
      </div>
    </div>
  )
}

export default Activity
