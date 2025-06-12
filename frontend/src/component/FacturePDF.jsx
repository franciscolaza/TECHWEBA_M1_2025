import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const FacturePDF = ({ client, produits }) => {
  const factureRef = useRef();

  const total = produits.reduce((sum, p) => sum + p.price * p.qty, 0);

  const handleDownload = () => {
    html2canvas(factureRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('facture.pdf');
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <div ref={factureRef} style={{ padding: 20, backgroundColor: '#fff', width: '600px', margin: 'auto' }}>
        <h2>Facture</h2>
        <p><strong>Client :</strong> {client.nom}</p>
        <p><strong>Date :</strong> {new Date().toLocaleDateString()}</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 20 }}>
          <thead>
            <tr>
              <th style={cellStyle}>Produit</th>
              <th style={cellStyle}>Quantité</th>
              <th style={cellStyle}>Prix Unitaire</th>
              <th style={cellStyle}>Total</th>
            </tr>
          </thead>
          <tbody>
            {produits.map((p, i) => (
              <tr key={i}>
                <td style={cellStyle}>{p.nom}</td>
                <td style={cellStyle}>{p.qty}</td>
                <td style={cellStyle}>{p.price} €</td>
                <td style={cellStyle}>{p.qty * p.price} €</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={{ marginTop: 20 }}>Total à payer : {total} €</h3>
      </div>

      <button onClick={handleDownload} style={buttonStyle}>
        Télécharger la facture PDF
      </button>
    </div>
  );
};

const cellStyle = {
  border: '1px solid #000',
  padding: '8px',
  textAlign: 'left'
};

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  cursor: 'pointer'
};

export default FacturePDF;
