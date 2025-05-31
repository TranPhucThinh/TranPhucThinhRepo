import { Bell, ChevronDown, CircleUserRound, House, Settings } from 'lucide-react'

const Header = () => {
  return (
    <div className='flex h-[60px] bg-[#294172]'>
      <div className='w-[253px] flex items-center justify-center'>
        <h3 className='text-base text-[#00B25C]'>COMPANY LOGO XXX</h3>
      </div>
      <div className='flex-1 p-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-5'>
            <House color='white' />
            <div className='px-5 py-1 bg-[#DAE6EF] rounded-[5px]'>
              <p className='text-[#294172] text-xs'>Module</p>
              <p className='text-[#294172] text-xs font-bold uppercase'>USER management</p>
            </div>
          </div>
          <div className='flex items-center gap-5 pr-12'>
            <Bell cursor='pointer' color='white' />
            <Settings cursor='pointer' color='white' />
            <CircleUserRound cursor='pointer' color='white' />
            <div className='text-white'>
              <p className='font-bold text-sm/[26px]'>Mr. David Nguyen</p>
              <p className='text-xs'>Home Company</p>
            </div>
            <ChevronDown cursor='pointer' color='white' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
