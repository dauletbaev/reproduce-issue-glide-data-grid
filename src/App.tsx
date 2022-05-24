import DataEditor, {
  DataEditorProps,
  GridCellKind,
} from '@glideapps/glide-data-grid'
import { useCallback } from 'react'
import { columns } from './dummy-data'
import './App.css'

function App() {
  const getData = useCallback<DataEditorProps['getCellContent']>((item) => {
    let d: string

    switch (item[0]) {
      case 0:
        d = 'ID set here for column 0'
        break

      case 1:
        d = 'Here fixed width for column 1'
        break

      default:
        d = item.join()
        break
    }

    return {
      kind: GridCellKind.Text,
      allowOverlay: false,
      data: d,
      displayData: d,
    }
  }, [])

  return (
    <div className="app">
      <DataEditor getCellContent={getData} columns={columns} rows={5} />
    </div>
  )
}

export default App
