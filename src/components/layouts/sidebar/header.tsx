import Logo from '@/assets/images/logoABC.png'

export const Header = () => {
  return (
    <div className='flex pt-7 pl-4 pr-5 gap-4'>
      <img src={Logo} alt='logo menu' />
      <div>
        <p className='text-xl font-semibold text-primary-blue'>ABC Company</p>
        <p className='text-xl font-normal text-primary-blue'>Lisa Rose</p>
      </div>
    </div>
  )
}
