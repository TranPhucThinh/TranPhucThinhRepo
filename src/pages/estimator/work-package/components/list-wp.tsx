import { ChevronRight, Search, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const wpData = [
  {
    id: 1,
    title: 'Work Package 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    title: 'Work Package 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 3,
    title: 'Work Package 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 4,
    title: 'Work Package 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 5,
    title: 'Work Package 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 6,
    title: 'Work Package 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 7,
    title: 'Work Package 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 8,
    title: 'Work Package 8',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 9,
    title: 'Work Package 9',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

const ListWorkPackages = () => {
  const [inputValue, setInputValue] = useState<string>('')

  return (
    <div className='flex flex-col gap-4'>
      <div className='relative'>
        <Input className='pl-4' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        {!inputValue && <Search className='absolute left-4 top-[10px] text-primary-gray' size={16} />}
      </div>
      <div className='grid md:grid-cols-4 xl:grid-cols-3 gap-x-6 gap-y-4'>
        {wpData.map((wp) => (
          <Card key={wp.id} className='md:col-span-2 xl:col-span-1 gap-[14px] py-3'>
            <CardHeader className='flex items-center justify-between px-3 hover:cursor-pointer'>
              <CardTitle className='text-lg/[26px] font-medium'>{wp.title}</CardTitle>
              <ChevronRight size={20} />
            </CardHeader>
            <CardContent className='px-3'>
              <CardDescription className='text-sm text-primary-gray line-clamp-2'>{wp.description}</CardDescription>
              <div className='mt-4 flex items-center gap-2'>
                <div className='w-6 h-6 bg-[#E2F5F9] border-1 border-secondary-gray flex items-center justify-center'>
                  <ChevronRight className='text-primary-gray' size={20} />
                </div>
                <div className='w-6 h-6 bg-[#E2F5F9] border-1 border-secondary-gray flex items-center justify-center'>
                  <ChevronRight className='text-primary-gray' size={20} />
                </div>
              </div>
            </CardContent>
            <CardFooter className='px-3 flex items-center justify-between'>
              <Button className='bg-[#F3F4F6] text-primary-blue font-medium text-base/[24px] hover:cursor-pointer hover:bg-[#F3F4F6] hover:shadow-lg transition-shadow duration-200 py-1'>
                View Detail
              </Button>
              <ShoppingCart size={20} className='text-primary-blue hover:cursor-pointer' />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ListWorkPackages
