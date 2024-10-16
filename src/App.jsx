import React from 'react'
import PDF from './components/PDF'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'

function App() {
  return (
    <div>
      <PDFDownloadLink document={<PDF/>} fileName='jeff.pdf'>
        {
          ({blob, url, loading, error}) => loading ? <button>
            loading document...
          </button> :<button>
            dowload document..
          </button>
        }
      </PDFDownloadLink>
      <PDFViewer >
        <PDF/>
      </PDFViewer>
    </div>
  )
}
export default App