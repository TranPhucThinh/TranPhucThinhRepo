const csvToJson = (file: File): Promise<Record<string, string>[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = (event) => {
      const csvText = event.target?.result as string | null

      if (!csvText) {
        reject(new Error('Failed to read file or file is empty'))
        return
      }

      // Tách các dòng của file CSV
      const lines = csvText.split('\n').filter((line) => line.trim() !== '')
      // Lấy tiêu đề (headers) từ dòng đầu tiên
      const headers = lines[0].split(',').map((header) => header.trim())

      // Chuyển các dòng dữ liệu thành JSON
      const json = lines.slice(1).map((line) => {
        const values = line.split(',').map((value) => value.trim())

        // Tạo đối tượng JSON cho mỗi dòng
        const obj: Record<string, string> = {}
        headers.forEach((header, index) => {
          obj[header] = values[index] || ''
        })
        return obj
      })

      resolve(json)
    }

    reader.onerror = (error) => {
      reject(new Error(`Error reading file: ${error}`))
    }
    reader.readAsText(file)
  })
}

export default csvToJson
