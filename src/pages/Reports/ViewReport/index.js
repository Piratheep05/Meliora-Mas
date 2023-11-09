import React from 'react'
import { AutoResizer, PDFViewer } from '../../../components'
import { documents } from '../../../constants'

const ViewReport = () => {
    const url = documents.ReportPDF
    return (
        <>
            <AutoResizer>
                <PDFViewer pdfUrl={url} />
            </AutoResizer>
        </>
    )
}

export default ViewReport
