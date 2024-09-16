import React, { useState, useMemo, useEffect } from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '../style.css' // For any custom styling

const pdfFiles = [
  {
    title: 'Dental Equipment 1',
    file: '/image/part1/1.pdf',
    category: 'Dental Equipments',
  },
  {
    title: 'Dental Equipment 2',
    file: '/image/part1/2.pdf',
    category: 'Dental Equipments',
  },
  {
    title: 'Dental Equipment 3',
    file: '/image/part1/3.pdf',
    category: 'Dental Equipments',
  },
  {
    title: 'Dental Equipment 4',
    file: '/image/part1/4.pdf',
    category: 'Dental Equipments',
  },
  {
    title: 'Dental Equipment 5',
    file: '/image/part1/5.pdf',
    category: 'Dental Equipments',
  },
  {
    title: 'Others 1',
    file: '/image/part2/1.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 2',
    file: '/image/part2/2.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 3',
    file: '/image/part2/3.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 4',
    file: '/image/part2/4.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 5',
    file: '/image/part2/5.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 6',
    file: '/image/part2/6.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 7',
    file: '/image/part2/7.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 8',
    file: '/image/part2/8.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 9',
    file: '/image/part2/9.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 10',
    file: '/image/part2/10.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 11',
    file: '/image/part2/11.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 12',
    file: '/image/part2/12.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 13',
    file: '/image/part2/13.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 14',
    file: '/image/part2/14.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 15',
    file: '/image/part2/15.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 16',
    file: '/image/part2/16.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 17',
    file: '/image/part2/17.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 18',
    file: '/image/part2/18.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 19',
    file: '/image/part2/19.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 20',
    file: '/image/part2/20.pdf',
    category: 'Surgical Equipments',
  },
  {
    title: 'Others 21',
    file: '/image/part2/21.pdf',
    category: 'Surgical Equipments',
  },
]

// Memoized PdfViewer component

const OurCatalogues = ({ category }) => {
  const [filter, setFilter] = useState([]) // State to manage the selected filter
  const [selectPdf, setSelectPdf] = useState(null) // State to manage the selected pdf

  // Function to handle filter changes

  const PdfViewer = React.memo(
    ({ file }) => (
      <div className="pdf-viewer">
        <Viewer fileUrl={file} />
      </div>
    ),
    [filter, selectPdf],
  )

  useEffect(() => {
    if (category) {
      const data = pdfFiles.filter(
        (pdf) =>
          pdf.category.toLowerCase() ===
          category.split('-').join(' ').toLowerCase(),
      )

      setFilter(data)
    }
  }, [category])

  return (
    <>
      {selectPdf && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.7)',
            zIndex: 999999,
          }}
        >
          <div
            style={{
              width: 'auto',
              height: '100vh',
              borderRadius: '10px',
              padding: '20px',
              position: 'relative',
              top: '50%',
              //  center the modal horizontally so that it looks good on all devices
              left: '50%',
              transform: 'translate(-50%, -50%)',

              zIndex: 999999,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer',
                padding: '5px 10px',
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '5px',
                zIndex: 999999,
              }}
              onClick={() => setSelectPdf(null)}
            >
              Close
            </div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer
                fileUrl={selectPdf.file}
                viewMode="singlePage"
                defaultScale="ActualSize"
              />
            </Worker>
          </div>
        </div>
      )}
      <section
        id="catalogue"
        className="design-section py-5 bg-primary-light design-home"
      >
        <div className="container pt-4">
          <div className="row wow fadeInUp pt-4">
            <div className="col-12 mx-lg-auto mb-4">
              <div className="text-center text-justify">
                <div className="cta-content mb-4">
                  <div className="heading-default wow fadeInUp">
                    <h2 className="text-orange mb-5">
                      Catalogue{' '}
                      <span className="text-secondary text-shadow-black">
                        Overview
                      </span>
                    </h2>
                  </div>
                  {/* Filter buttons */}
                </div>

                <div className="catalogue-container">
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    {filter.map((pdf, index) => (
                      <div
                        key={index}
                        className="pdf-item"
                        onClick={() => setSelectPdf(pdf)}
                      >
                        <h3 className="pdf-title">{pdf.title}</h3>
                        <PdfViewer file={pdf.file} />
                      </div>
                    ))}
                  </Worker>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurCatalogues
