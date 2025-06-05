import Categories from './components/categories'
import ListWorkPackages from './components/list-wp'

const WorkPackage = () => {
  return (
    <div className='pt-4 md:pl-4 lg:pl-10 xl:pl-16 md:pr-4 lg:pr-10 xl:pr-[132px] pb-4'>
      <p className='font-medium text-xl/[30px] text-[#343434]'>Work Packages (WP)</p>
      <div className='grid md:grid-cols-6 xl:grid-cols-4 mt-8'>
        <div className='md:col-span-2 xl:col-span-1 md:pr-2 xl:pr-9'>
          <Categories />
        </div>
        <div className='md:col-span-4 xl:col-span-3'>
          <ListWorkPackages />
        </div>
      </div>
    </div>
  )
}

export default WorkPackage
