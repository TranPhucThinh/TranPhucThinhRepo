import { Checkbox } from '../ui/checkbox'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import VietnameseAddressInput from './address-input'

export type JsonSchemaProperty = {
  type: string
  title: string
  description?: string
  enum?: string[]
  required?: string[]
}

type FormFieldProps = {
  field: JsonSchemaProperty
  value: string | number | boolean
  onChange: (value: string | number | boolean) => void
}

const FormField: React.FC<FormFieldProps> = ({ field, value, onChange }) => {
  const { type, title, description, enum: enumValues } = field

  if (type === 'vietnamese-address') {
    return <VietnameseAddressInput label={title} value={(value as string) || ''} onChange={onChange} />
  }

  const baseClasses =
    'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'

  switch (type) {
    case 'string':
      if (enumValues) {
        return (
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>{title}</label>
            <Select value={(value as string) || ''} onValueChange={onChange}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Chọn' />
              </SelectTrigger>
              <SelectContent>
                {enumValues.map((option: string, idx: number) => (
                  <SelectItem key={idx} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {description && <p className='text-xs text-gray-500 mt-1'>{description}</p>}
          </div>
        )
      }

      return (
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>{title}</label>
          <Input
            type='text'
            value={(value as string) || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
            className={baseClasses}
            placeholder={description}
          />
          {description && <p className='text-xs text-gray-500 mt-1'>{description}</p>}
        </div>
      )

    case 'number':
    case 'integer':
      return (
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>{title}</label>
          <Input
            type='number'
            value={(value as number) || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(Number(e.target.value))}
            className={baseClasses}
            placeholder={description}
          />
          {description && <p className='text-xs text-gray-500 mt-1'>{description}</p>}
        </div>
      )

    case 'boolean':
      return (
        <div className='flex items-center space-x-2'>
          <Checkbox
            checked={(value as boolean) || false}
            onCheckedChange={onChange}
            className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
          />
          <label className='text-sm font-medium text-gray-700'>{title}</label>
          {description && <p className='text-xs text-gray-500'>{description}</p>}
        </div>
      )

    default:
      return (
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>{title}</label>
          <Input
            type='text'
            value={(value as string) || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
            className={baseClasses}
            placeholder={description}
          />
        </div>
      )
  }
}

export default FormField
