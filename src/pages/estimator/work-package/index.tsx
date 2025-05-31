import Categories from './components/categories'
import ListWorkPackages from './components/list-wp'

const WorkPackage = () => {
  return (
    <div className='pt-4 pl-16 pr-[132px] pb-4'>
      <p className='font-medium text-xl/[30px] text-[#343434]'>Work Packages (WP)</p>
      <div className='grid grid-cols-4 mt-8'>
        <div className='col-span-1 pr-9'>
          <Categories />
        </div>
        <div className='col-span-3'>
          <ListWorkPackages />
        </div>
      </div>
    </div>
  )
}

export default WorkPackage
