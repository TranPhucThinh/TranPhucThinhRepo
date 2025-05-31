import { Filter } from 'lucide-react'

import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import TableUser from './table-users'

const checkboxData = [
  { label: 'All', value: 'ALL' },
  { label: 'Active', value: 'ACTIVE' },
  { label: 'Inactive', value: 'INACTIVE' }
]

const UserListPanel = () => {
  return (
    <div className='flex w-[55%]'>
      <div className='w-[253px] border-r border-secondary-gray px-4 py-5 flex flex-col justify-between'>
        <div>
          <div className='flex items-center justify-between border-b border-secondary-gray pb-2'>
            <p className='uppercase text-primary-gray'>FILTER</p>
            <Filter color='#CFCFCF' size={16} />
          </div>
          <div className='flex flex-col mt-4 gap-4'>
            {/* User name */}
            <div className='flex flex-col gap-1 w-full'>
              <p className='font-semibold text-sm/[24px]'>User name</p>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='light'>Light</SelectItem>
                  <SelectItem value='dark'>Dark</SelectItem>
                  <SelectItem value='system'>System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* User ID */}
            <div className='flex flex-col gap-1 w-full'>
              <p className='font-semibold text-sm/[24px]'>User ID</p>
              <Input placeholder='Input' />
            </div>

            {/* User type */}
            <div className='flex flex-col gap-1 w-full'>
              <p className='font-semibold text-sm/[24px]'>User type</p>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='light'>Light</SelectItem>
                  <SelectItem value='dark'>Dark</SelectItem>
                  <SelectItem value='system'>System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Phone number */}
            <div className='flex flex-col gap-1 w-full'>
              <p className='font-semibold text-sm/[24px]'>Phone number</p>
              <Input placeholder='Input' />
            </div>

            {/* Email address */}
            <div className='flex flex-col gap-1 w-full'>
              <p className='font-semibold text-sm/[24px]'>Email address</p>
              <Input placeholder='Input' />
            </div>

            {/* Status */}
            <div className='flex flex-col gap-1 w-full'>
              <p className='font-semibold text-sm/[24px]'>Status</p>
              {checkboxData.map((item, idx) => (
                <div className='flex items-center gap-4'>
                  <Checkbox key={idx} />
                  <p className='text-[#4A4B57] text-sm'>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='border-1 border-[#DFE4EA] rounded-md flex items-center justify-center py-[5px] hover:cursor-pointer ease-in duration-100 hover:shadow-md'>
          <p className='text-sm font-medium text-[#4A4B57]'>Export Data</p>
        </div>
      </div>
      <div className='flex-1 border-r border-secondary-gray'>
        <TableUser />
      </div>
    </div>
  )
}

export default UserListPanel
