import {
  ChartSpline,
  ClipboardMinus,
  ExternalLink,
  FileMinus,
  FileText,
  LibraryBig,
  Percent,
  SquarePen
} from 'lucide-react'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Checkbox } from '@/components/ui/checkbox'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Progress } from '@/components/ui/progress'

const USER = {
  id: 'LO00001',
  name: 'Mr. David Nguyen',
  firstName: 'David',
  lastName: 'Nguyen',
  experience: '5 years',
  website: 'david.com',
  email: 'david.nguyen@gmail.com',
  phone: '(322) 243-3452',
  type: 'Loan Officer',
  status: 'ACTIVE'
}

const DOCUMENTS = [
  {
    index: '01',
    borrowerName: 'Ms. Hang Nguyen',
    loanId: 'LA00001',
    interestRate: '6% (16168% APR)',
    process: 66,
    status: 'IN PROGRESS',
    lender: 'AD Mortgage',
    action: '...'
  },
  {
    index: '02',
    borrowerName: 'Ms. Hang Nguyen',
    loanId: 'LA00001',
    interestRate: '6% (16168% APR)',
    process: 68,
    status: 'IN PROGRESS',
    lender: 'AD Mortgage',
    action: '...'
  }
]

const UserDetailsPanel = () => {
  return (
    <div className='flex flex-col gap-6 flex-1'>
      {/* General Information */}
      <div className='px-4 pt-4'>
        <div className='flex items-center gap-2 border-b border-secondary-gray pb-[10px]'>
          <LibraryBig color='#767676' size={16} />
          <h2 className='text-base font-medium text-primary-gray uppercase'>GENERAL INFORMATION</h2>
        </div>
        <div className='pt-4 flex flex-col gap-4'>
          <div className='grid grid-cols-4'>
            <div className='col-span-1'>
              <div className='flex flex-col gap-2'>
                <div className='text-sm font-medium text-[#0C0C0D]'>First Name</div>
                <div className='text-sm text-[#4A4B57]'>{USER.firstName}</div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='flex flex-col gap-2'>
                <div className='text-sm font-medium text-[#0C0C0D]'>Last Name</div>
                <div className='text-sm text-[#4A4B57]'>{USER.lastName}</div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='flex flex-col gap-2'>
                <div className='text-sm font-medium text-[#0C0C0D]'>Experience</div>
                <div className='text-sm text-[#4A4B57]'>{USER.experience}</div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='flex flex-col gap-2'>
                <div className='text-sm font-medium text-[#0C0C0D]'>Personal Website</div>
                <div className='text-sm text-[#4A4B57]'>{USER.website}</div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-4'>
            <div className='col-span-1'>
              <div className='flex flex-col gap-2'>
                <div className='text-sm font-medium text-[#0C0C0D]'>First Name</div>
                <div className='text-sm text-[#4A4B57]'>{USER.firstName}</div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='flex flex-col gap-2'>
                <div className='text-sm font-medium text-[#0C0C0D]'>Last Name</div>
                <div className='text-sm text-[#4A4B57]'>{USER.lastName}</div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='flex flex-col gap-2'>
                <div className='text-sm font-medium text-[#0C0C0D]'>Experience</div>
                <div className='text-sm text-[#4A4B57]'>{USER.experience}</div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='flex flex-col gap-2'>
                <div className='text-sm font-medium text-[#0C0C0D]'>Personal Website</div>
                <div className='text-sm text-[#4A4B57]'>{USER.website}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COMMISSION STRUCTURES */}
      <div className='px-4'>
        <div className='flex items-center justify-between border-b border-secondary-gray pb-[10px]'>
          <div className='flex items-center gap-1'>
            <Percent color='#767676' size={16} />
            <h2 className='text-base font-medium text-primary-gray uppercase'>COMMISSION STRUCTURES</h2>
          </div>
          <Tooltip>
            <TooltipTrigger>
              <ExternalLink color='#767676' size={16} />
            </TooltipTrigger>
            <TooltipContent side='left'>
              <p>You don’t have permission to open this link</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* CRECRUITMENT DOCUMENTS */}
      <div className='px-4'>
        <div className='flex items-center justify-between border-b border-secondary-gray pb-[10px]'>
          <div className='flex items-center gap-1'>
            <ClipboardMinus color='#767676' size={16} />
            <h2 className='text-base font-medium text-primary-gray uppercase'>COMMISSION STRUCTURES</h2>
          </div>
          <Tooltip>
            <TooltipTrigger>
              <ExternalLink color='#2979FF' size={16} />
            </TooltipTrigger>
            <TooltipContent side='left'>
              <p>You don’t have permission to open this link</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* RELATED CLIENTS & LOAN DOCUMENTS */}
      <div className='px-4'>
        <div className='flex gap-1 items-center border-b border-secondary-gray pb-[10px]'>
          <FileText color='#767676' size={16} />
          <h2 className='text-base font-medium text-primary-gray uppercase'>RELATED CLIENTS & LOAN DOCUMENTS</h2>
        </div>
        <div className='mt-4'>
          <Table>
            <TableHeader className='bg-[#DAE6EF] border-1 border-[#D9D9D9]'>
              <TableRow className='text-sm'>
                <TableHead>Index</TableHead>
                <TableHead>
                  Borrower Name <br /> Loan ID
                </TableHead>
                <TableHead>
                  Lender <br /> Interest Rate
                </TableHead>
                <TableHead>Process</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='border-b border-l border-r border-[#D9D9D9]'>
              {DOCUMENTS.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell className='font-medium'>{item.index}</TableCell>
                  <TableCell>
                    <p className='font-medium text-sm text-[#111928]'>{item.borrowerName}</p>
                    <p className='font-medium size-sm text-[#637381]'>{`#${item.loanId}`}</p>
                  </TableCell>
                  <TableCell>
                    <p className='font-medium text-sm text-[#111928]'>{item.lender}</p>
                    <p className='font-medium size-sm text-[#637381]'>{item.interestRate}</p>
                  </TableCell>
                  <TableCell className='font-medium'>
                    <div className='flex items-center gap-2'>
                      <Progress indicatorColor='bg-[#294172]!' className='h-[5px]' value={item.process} />
                      <p className='text-[#294172]'>{`${item.process}%`}</p>
                    </div>
                  </TableCell>
                  <TableCell className='font-medium'>
                    <div className='flex items-center justify-center bg-[#E6F7FF] rounded-sm px-[3px] py-[10px]'>
                      <p className='text-[#2979FF] font-medium text-xs/[14px]'>{item.status}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <FileMinus color='#2979FF' size={10} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* PERFORMANCE */}
      <div className='px-4'>
        <div className='flex gap-1 items-center border-b border-secondary-gray pb-[10px]'>
          <ChartSpline color='#767676' size={16} />
          <h2 className='text-base font-medium text-primary-gray uppercase'>PERFORMANCE</h2>
        </div>
      </div>

      {/* TO-DO */}
      <div className='px-4'>
        <div className='flex gap-1 items-center border-b border-secondary-gray pb-[10px]'>
          <SquarePen color='#767676' size={16} />
          <h2 className='text-base font-medium text-primary-gray uppercase'>TO-DO</h2>
        </div>
        <div className='mt-2 flex flex-col gap-2'>
          <div className='flex items-center gap-4'>
            <Checkbox />
            <p className='font-medium text-[#111928] text-base'>Review Loan Applications</p>
            <ExternalLink color='#4D69FF' size={12} />
          </div>
          <div className='flex items-center gap-4'>
            <Checkbox />
            <p className='font-medium text-[#111928] text-base'>Contact to Borrower</p>
            <ExternalLink color='#4D69FF' size={12} />
          </div>
          <div className='flex items-center gap-4'>
            <Checkbox disabled />
            <p className='font-medium text-[#D9D9D9] text-base hover:cursor-pointer'>Click to add new todo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetailsPanel
