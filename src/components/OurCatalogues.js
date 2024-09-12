import React, { useState, useMemo } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '../style.css'; // For any custom styling

const pdfFiles = [
    { title: "Dental Equipment 1", file: "/image/part1/1.pdf", category: "Dental Equipment" },
    { title: "Dental Equipment 2", file: "/image/part1/2.pdf", category: "Dental Equipment" },
    { title: "Dental Equipment 3", file: "/image/part1/3.pdf", category: "Dental Equipment" },
    { title: "Dental Equipment 4", file: "/image/part1/4.pdf", category: "Dental Equipment" },
    { title: "Dental Equipment 5", file: "/image/part1/5.pdf", category: "Dental Equipment" },
    { title: "Others 1", file: "/image/part2/1.pdf", category: "Others" },
    { title: "Others 2", file: "/image/part2/2.pdf", category: "Others" },
    { title: "Others 3", file: "/image/part2/3.pdf", category: "Others" },
    { title: "Others 4", file: "/image/part2/4.pdf", category: "Others" },
    { title: "Others 5", file: "/image/part2/5.pdf", category: "Others" },
    { title: "Others 6", file: "/image/part2/6.pdf", category: "Others" },
    { title: "Others 7", file: "/image/part2/7.pdf", category: "Others" },
    { title: "Others 8", file: "/image/part2/8.pdf", category: "Others" },
    { title: "Others 9", file: "/image/part2/9.pdf", category: "Others" },
    { title: "Others 10", file: "/image/part2/10.pdf", category: "Others" },
    { title: "Others 11", file: "/image/part2/11.pdf", category: "Others" },
    { title: "Others 12", file: "/image/part2/12.pdf", category: "Others" },
    { title: "Others 13", file: "/image/part2/13.pdf", category: "Others" },
    { title: "Others 14", file: "/image/part2/14.pdf", category: "Others" },
    { title: "Others 15", file: "/image/part2/15.pdf", category: "Others" },
    { title: "Others 16", file: "/image/part2/16.pdf", category: "Others" },
    { title: "Others 17", file: "/image/part2/17.pdf", category: "Others" },
    { title: "Others 18", file: "/image/part2/18.pdf", category: "Others" },
    { title: "Others 19", file: "/image/part2/19.pdf", category: "Others" },
    { title: "Others 20", file: "/image/part2/20.pdf", category: "Others" },
    { title: "Others 21", file: "/image/part2/21.pdf", category: "Others" },
];

// Memoized PdfViewer component
const PdfViewer = React.memo(({ file }) => (
    <div className="pdf-viewer">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={file} />
        </Worker>
    </div>
));

const OurCatalogues = () => {
    const [filter, setFilter] = useState('ALL'); // State to manage the selected filter

    // Memoize filtered PDF files
    const filteredPdfFiles = useMemo(() => 
        filter === 'ALL'
            ? pdfFiles
            : pdfFiles.filter(pdf => pdf.category === filter),
        [filter] // Recompute only when `filter` changes
    );

    // Function to handle filter changes
    const handleFilterChange = (category) => {
        setFilter(category);
    };

    return (
        <section id="catalogue" className="design-section py-5 bg-primary-light design-home">
            <div className="container pt-4">
                <div className="row wow fadeInUp pt-4">
                    <div className="col-12 mx-lg-auto mb-4">
                        <div className="text-center text-justify">
                            <div className="cta-content mb-4">
                                <div className="heading-default wow fadeInUp">
                                    <h2 className="text-orange mb-5">
                                        Catalogue <span className="text-secondary text-shadow-black">Overview</span>
                                    </h2>
                                </div>
                                {/* Filter buttons */}
                                <div className="filter-buttons mb-4">
                                    <button
                                        className={`filter-button ${filter === 'ALL' ? 'active' : ''}`}
                                        onClick={() => handleFilterChange('ALL')}
                                    >
                                        ALL
                                    </button>
                                    <button
                                        className={`filter-button ${filter === 'Dental Equipment' ? 'active' : ''}`}
                                        onClick={() => handleFilterChange('Dental Equipment')}
                                    >
                                        Dental Equipment
                                    </button>
                                    <button
                                        className={`filter-button ${filter === 'Others' ? 'active' : ''}`}
                                        onClick={() => handleFilterChange('Others')}
                                    >
                                        Others
                                    </button>
                                </div>
                            </div>
                            <div className="catalogue-container">
                                {filteredPdfFiles.map((pdf, index) => (
                                    <div key={index} className="pdf-item">
                                        <h3 className="pdf-title">{pdf.title}</h3>
                                        <PdfViewer file={pdf.file} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCatalogues;
