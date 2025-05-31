import { cn } from '@/lib/utils'
import { useState } from 'react'

const categories = [
  { title: 'All Work Packages', id: 1 },
  { title: 'Architectural WPs', id: 2 },
  { title: 'Development WPs', id: 3 },
  { title: 'Operation WPs', id: 4 },
  { title: 'Basic', id: 5 },
  { title: 'Comprehensive', id: 6 },
  { title: 'Advanced', id: 7 }
]

const RfxWpTab = () => {
  const [activeCategory, setActiveCategory] = useState<number>(1)

  return (
    <div>
      <p className='font-medium text-[18px]/[26px] text-[#343434]'>Categories</p>
      <ul className='mt-[10px] flex flex-col gap-2'>
        {categories.map((category, index) => (
          <li
            key={index}
            className={cn(
              'text-sm/[22px] hover:cursor-pointer hover:text-primary-blue border-b-1 border-secondary-gray pb-1',
              category.id === activeCategory ? 'text-primary-blue' : 'text-primary-gray'
            )}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RfxWpTab
