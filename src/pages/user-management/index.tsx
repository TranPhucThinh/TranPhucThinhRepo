import Header from '@/components/layouts/header'
import UserListPanel from './components/user-list-panel'
import UserDetailsPanel from './components/user-detail-panel'

const UserManagement = () => {
  return (
    <div>
      <Header />
      <div className='flex h-[calc(100vh-60px)]'>
        <UserListPanel />
        <UserDetailsPanel />
      </div>
    </div>
  )
}

export default UserManagement
