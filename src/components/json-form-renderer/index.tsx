import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import type { AppDispatch, RootState } from '@/store'
import { useAppSelector } from '@/store/hooks'
import { loadFromStorage, resetForm, updateField, updateSchema } from '@/store/reducers/json-form'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import FormField from './form-field'
import type { FormState, JsonSchema, JsonSchemaProperty } from '@/types/utils'

const JsonFormRenderer = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data: formData, schema: jsonSchema } = useAppSelector((state: RootState) => state.jsonForm)

  const [parsedSchema, setParsedSchema] = useState<JsonSchema | null>(null)
  const [error, setError] = useState<string>('')

  const handleSchemaChange = (value: string): void => {
    dispatch(updateSchema(value))
  }

  const handleFieldChange = (fieldName: string, value: string | number | boolean): void => {
    dispatch(updateField({ fieldName, value }))
  }

  const handleResetForm = (): void => {
    dispatch(resetForm())
  }

  // Load from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem('formStore')
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState) as FormState
        dispatch(loadFromStorage(parsed))
      } catch (e) {
        console.error('Error loading saved form data:', e)
      }
    }
  }, [dispatch])

  // Parse schema whenever it changes
  useEffect(() => {
    try {
      const parsed = JSON.parse(jsonSchema) as JsonSchema
      setParsedSchema(parsed)
      setError('')
    } catch (e) {
      setError('Invalid JSON Schema: ' + (e as Error).message)
      setParsedSchema(null)
    }
  }, [jsonSchema])

  const renderForm = (): JSX.Element | null => {
    if (!parsedSchema || !parsedSchema.properties) return null
    return (
      <div className='space-y-4'>
        <h3 className='text-lg font-semibold text-gray-800'>{parsedSchema.title || 'Form'}</h3>

        {Object.entries(parsedSchema.properties).map(([fieldName, fieldSchema]: [string, JsonSchemaProperty]) => {
          return (
            <FormField
              key={fieldName}
              field={fieldSchema}
              value={formData[fieldName]}
              onChange={(value: string | number | boolean) => handleFieldChange(fieldName, value)}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className='max-w-6xl mx-auto p-6 bg-white min-h-screen'>
      <h1 className='text-2xl font-bold text-gray-800 mb-6'>JSON Form Renderer</h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Left Panel - JSON Schema Input */}
        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>JSON Schema Input</label>
            <Textarea
              value={jsonSchema}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleSchemaChange(e.target.value)}
              className='w-full h-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm'
              placeholder='Nhập JSON Schema...'
            />
            {error && <p className='text-red-600 text-sm mt-2'>{error}</p>}
          </div>

          {/* Form Data Preview */}
          <div>
            <h4 className='text-sm font-medium text-gray-700 mb-2'>Form Data (JSON)</h4>
            <pre className='bg-gray-50 p-3 rounded-md text-xs overflow-auto max-h-40'>
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>

          <Button
            onClick={handleResetForm}
            className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors'
            type='button'
          >
            Reset Form Data
          </Button>
        </div>

        {/* Right Panel - Rendered Form */}
        <div className='bg-gray-50 p-6 rounded-lg'>
          {error ? <p className='text-red-600'>Vui lòng sửa lỗi JSON Schema để hiển thị form</p> : renderForm()}
        </div>
      </div>
    </div>
  )
}

export default JsonFormRenderer
