import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '../style.css'; // For any custom styling

const pdfFiles = [
    { title: "Diagnostics", file: "/path/to/diagnostics.pdf" },
    { title: "Forceps", file: "/path/to/forceps.pdf" },
    { title: "Anaesthesia", file: "/path/to/anaesthesia.pdf" },
    { title: "Clamp Forceps", file: "/path/to/clamp_forceps.pdf" },
];

const OurCatalogues = () => {
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
                            </div>
                            <div className="catalogue-container">
                                {pdfFiles.map((pdf, index) => (
                                    <div key={index} className="pdf-item">
                                        <h3 className="pdf-title">{pdf.title}</h3>
                                        <div className="pdf-viewer">
                                        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                                             <Viewer fileUrl="/PDFS/1.pdf" />
                                        </Worker>
                                        </div>
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
