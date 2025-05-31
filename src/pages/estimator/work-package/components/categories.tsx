import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CustomWpTab from './custom-wp-tab'
import RfxWpTab from './rfx-wp-tab'

const Categories = () => {
  return (
    <Tabs defaultValue='rfx'>
      <TabsList className='bg-transparent border-1 border-secondary-gray rounded-sm'>
        <TabsTrigger
          className='hover:cursor-pointer pt-0 pb-0 data-[state=active]:bg-[#E2F5F9] rounded-sm data-[state=active]:text-primary-blue text-primary-gray text-sm/[22px]'
          value='rfx'
        >
          RFX WPs
        </TabsTrigger>
        <TabsTrigger
          className='hover:cursor-pointer pt-0 pb-0 data-[state=active]:bg-[#E2F5F9] rounded-sm data-[state=active]:text-primary-blue text-primary-gray text-sm/[22px]'
          value='custom'
        >
          Custom WPs
        </TabsTrigger>
      </TabsList>
      <TabsContent value='rfx'>
        <RfxWpTab />
      </TabsContent>
      <TabsContent value='custom'>
        <CustomWpTab />
      </TabsContent>
    </Tabs>
  )
}

export default Categories
