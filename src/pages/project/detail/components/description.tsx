import { BookText } from 'lucide-react'

const Description = () => {
  return (
    <>
      <div className='flex items-center gap-2 text-primary-gray pt-2 pb-2 border-b border-secondary-gray'>
        <BookText className='w-4 h-5' />
        <span>Description</span>
      </div>
      <div className='mt-2'>
        <ul className='list-disc pl-5 text-primary-gray text-sm/[22px]'>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </li>
        </ul>
      </div>
      <div className='mt-4 text-primary-blue'>
        <span className='text-sm/[22px] hover:cursor-pointer'>+ Add sub-tickets</span>
      </div>
    </>
  )
}

export default Description
