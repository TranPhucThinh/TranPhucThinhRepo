import { useState } from 'react'

import { vietnamAddressData } from '@/constant/location'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

type AddressInputProps = {
  value: string
  label: string
  onChange: (value: string) => void
}

const VietnameseAddressInput: React.FC<AddressInputProps> = ({ value, onChange, label }) => {
  const [province, setProvince] = useState<string>('')
  const [district, setDistrict] = useState<string>('')
  const [street, setStreet] = useState<string>('')

  const handleProvinceChange = (newProvince: string) => {
    setProvince(newProvince)
    setDistrict('')
    updateFullAddress(street, '', newProvince)
  }

  const handleDistrictChange = (newDistrict: string) => {
    setDistrict(newDistrict)
    updateFullAddress(street, newDistrict, province)
  }

  const handleStreetChange = (newStreet: string) => {
    setStreet(newStreet)
    updateFullAddress(newStreet, district, province)
  }

  const updateFullAddress = (street: string, district: string, province: string) => {
    const fullAddress = [street, district, province].filter(Boolean).join(', ')
    onChange(fullAddress)
  }

  return (
    <div className='space-y-3'>
      <label className='block text-sm font-medium text-gray-700'>{label}</label>

      {/* Tỉnh/Thành phố */}
      <div>
        <label className='block text-xs text-gray-600 mb-1'>Tỉnh / Thành phố</label>
        <Select value={province} onValueChange={handleProvinceChange}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Chọn tỉnh/thành phố' />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(vietnamAddressData).map((prov) => (
              <SelectItem key={prov} value={prov}>
                {prov}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Phường/Xã */}
      <div>
        <label className='block text-xs text-gray-600 mb-1'>Phường / Xã</label>
        <Select value={district} onValueChange={handleDistrictChange} disabled={!province}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Chọn phường/xã' />
          </SelectTrigger>
          <SelectContent>
            {province &&
              vietnamAddressData[province]?.map((dist) => (
                <SelectItem key={dist} value={dist}>
                  {dist}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      {/* Đường và số nhà */}
      <div>
        <label className='block text-xs text-gray-600 mb-1'>Đường và số nhà</label>
        <Input
          type='text'
          value={street}
          onChange={(e) => handleStreetChange(e.target.value)}
          placeholder='Nhập số nhà và tên đường'
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>

      {/* Preview */}
      {value && (
        <div className='p-2 bg-gray-50 rounded text-sm text-gray-600'>
          <p className='font-semibold'>Địa chỉ đầy đủ:</p> {value}
        </div>
      )}
    </div>
  )
}

export default VietnameseAddressInput
