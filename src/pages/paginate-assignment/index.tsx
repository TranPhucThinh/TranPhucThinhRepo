import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import type { RootState } from '@/store'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { clearFilters, setDataTable, setFilter, setPage, setSort } from '@/store/reducers/table'
import csvToJson from '@/utils/convert'
import { MoveDown, MoveUp } from 'lucide-react'

const PaginateAssignment = () => {
  const dispatch = useAppDispatch()
  const { data, sort, filters, currentPage } = useAppSelector((state: RootState) => state.table)

  const itemsPerPage = 10

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      try {
        const jsonData = await csvToJson(file)
        dispatch(setDataTable(jsonData))
      } catch (error) {
        console.error('Error parsing CSV:', error)
      }
    }
  }

  const filteredData = data.filter((item) =>
    Object.entries(filters).every(([column, value]) => item[column]?.toLowerCase()?.includes(value.toLowerCase()))
  )

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sort.column) return 0

    const aValue = a[sort.column] || ''
    const bValue = b[sort.column] || ''
    return sort.order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
  })

  const totalPages = Math.ceil(sortedData.length / itemsPerPage)
  const paginatedData = sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleSort = (column: string) => {
    dispatch(
      setSort({
        column,
        order: sort.column === column && sort.order === 'asc' ? 'desc' : 'asc'
      })
    )
  }

  const handleFilter = (column: string, value: string) => {
    dispatch(setFilter({ column, value }))
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setPage(page))
    }
  }

  const handleResetFilters = () => {
    dispatch(clearFilters())
  }

  const headers = data.length > 0 ? Object.keys(data[0]) : []

  return (
    <div className='py-4 max-w-full mx-auto'>
      <Input
        type='file'
        accept='.csv'
        onChange={handleFileUpload}
        className='mb-4 max-w-[200px] hover:cursor-pointer'
      />

      {data.length > 0 ? (
        <div className='mt-4'>
          <div className='overflow-x-auto'>
            <Table className='min-w-full'>
              <TableHeader>
                <TableRow>
                  {headers.map((header) => (
                    <TableHead key={header}>
                      <div className='cursor-pointer flex items-center gap-1' onClick={() => handleSort(header)}>
                        {header}
                        {sort.column === header && (
                          <span>{sort.order === 'asc' ? <MoveUp size={14} /> : <MoveDown size={14} />}</span>
                        )}
                      </div>
                      <Input
                        type='text'
                        placeholder={`Filter ${header}`}
                        value={filters[header] || ''}
                        onChange={(e) => handleFilter(header, e.target.value)}
                        className='my-2'
                      />
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedData.map((item, index) => (
                  <TableRow key={index}>
                    {headers.map((header) => (
                      <TableCell key={header}>{item[header]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className='flex justify-between items-center mt-4'>
            <Button
              className='hover:cursor-pointer'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              className='hover:cursor-pointer'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>

            <Button className='hover:cursor-pointer mt-4' onClick={handleResetFilters}>
              Reset Filters
            </Button>
          </div>
        </div>
      ) : (
        <p>No data available. Please upload a CSV file.</p>
      )}
    </div>
  )
}

export default PaginateAssignment
