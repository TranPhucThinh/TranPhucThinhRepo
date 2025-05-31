import { ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react'

import { Checkbox } from '@/components/ui/checkbox'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink
} from '@/components/ui/pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const USERS = [
  {
    userId: 'LO00001',
    name: 'Mr. David Nguyen',
    contact: 'david.nguyen@gmail.com',
    type: 'Loan Officer',
    phone: '(322) 243-3452',
    experience: '5 years',
    status: 'ACTIVE'
  },
  {
    userId: 'UW00001',
    name: 'Ms. Jennie Pink',
    contact: 'jenniepink@gmail.com',
    type: 'Underwriter',
    phone: '(322) 243-3452',
    experience: '5 years',
    status: 'ACTIVE'
  },
  {
    userId: 'LP00001',
    name: 'Mr. Pep Guardiola',
    contact: 'pepguardiola@gmail.com',
    type: 'Loan Processor',
    phone: '(322) 243-3452',
    experience: '5 years',
    status: 'ACTIVE'
  },
  {
    userId: 'AD00001',
    name: 'Mr. Bruno Mars',
    contact: 'brunomars@gmail.com',
    type: 'Admin',
    phone: '(322) 243-3452',
    experience: '5 years',
    status: 'ACTIVE'
  },
  {
    userId: 'ME00001',
    name: 'Mr. David Beckham',
    contact: 'davidbeckham@gmail.com',
    type: 'Member',
    phone: '(322) 243-3452',
    experience: '5 years',
    status: 'ACTIVE'
  }
]

const TableUser = () => {
  return (
    <div className='flex flex-col h-full justify-between'>
      <div>
        <div className='flex items-center gap-[10px] p-4'>
          <h1 className='font-bold text-xl/[24px] text-[#294172]'>43 USERS</h1>
          <RefreshCw cursor='pointer' color='#294172' size={16} />
        </div>
        <Table>
          <TableHeader className='bg-[#DAE6EF] border-1 border-[#D9D9D9]'>
            <TableRow className='text-sm'>
              <TableHead className='px-0'>
                <div className='px-2'>
                  <Checkbox className='bg-white' />
                </div>
              </TableHead>
              <TableHead>
                User Name <br /> User ID
              </TableHead>
              <TableHead>Contact Info</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='border-b border-[#D9D9D9]'>
            {USERS.map((user) => (
              <TableRow key={user.userId}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <p className='font-medium text-sm text-[#111928]'>{user.name}</p>
                  <p className='font-medium size-sm text-[#637381]'>{user.userId}</p>
                </TableCell>
                <TableCell>
                  <p className='font-medium text-sm text-[#111928]'>{user.phone}</p>
                  <p className='font-medium size-sm text-[#111928]'>{user.contact}</p>
                </TableCell>
                <TableCell className='font-medium'>{user.type}</TableCell>
                <TableCell className='font-medium'>{user.experience}</TableCell>
                <TableCell>
                  <div className='flex items-center justify-center bg-[#F6FFED] rounded-sm px-[3px] py-[10px]'>
                    <p className='text-[#43A047] font-medium text-xs/[14px]'>{user.status}</p>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-between border-t border-secondary-gray p-4'>
        <Pagination className='justify-start'>
          <PaginationContent>
            <PaginationItem>
              <div className='border border-[#EDEFF1] flex items-center justify-center rounded-md w-[35px] h-[35px] hover:cursor-pointer'>
                <ChevronLeft color='#637381' size={16} />
              </div>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className='hover:cursor-pointer' isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className='hover:cursor-pointer'>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className='hover:cursor-pointer'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className='hover:cursor-pointer'>10</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <div className='border border-[#EDEFF1] flex items-center justify-center rounded-md w-[35px] h-[35px] hover:cursor-pointer'>
                <ChevronRight color='#637381' size={16} />
              </div>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <Select defaultValue='05'>
          <SelectTrigger className='w-24 text-[#637381]'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='05'>05 items</SelectItem>
            <SelectItem value='10'>10 items</SelectItem>
            <SelectItem value='25'>25 items</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default TableUser
