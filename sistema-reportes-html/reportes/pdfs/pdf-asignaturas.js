function exportarPDFAsignaturas() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Configurar fuentes y colores
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 40);
    
    // Título del reporte
    doc.text('UNIVERSIDAD DE LAS FUERZAS ARMADAS ESPE', 20, 20);
    doc.setFontSize(16);
    doc.text('REPORTE DE ASIGNATURAS', 20, 35);
    doc.setFontSize(12);
    doc.text('Ejecución de Guías y Avance Académico', 20, 45);
    
    // Fecha de generación
    const fechaActual = new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    doc.text(`Fecha de generación: ${fechaActual}`, 20, 55);
    
    // Estadísticas generales
    doc.setFontSize(14);
    doc.text('ESTADÍSTICAS GENERALES', 20, 75);
    doc.setFontSize(10);
    
    const data = mockData.asignaturas;
    doc.text(`• Total de asignaturas: ${data.totalAsignaturas}`, 25, 85);
    doc.text(`• Asignaturas activas: ${data.asignaturasActivas}`, 25, 95);
    doc.text(`• Guías ejecutadas: ${data.guiasEjecutadas}`, 25, 105);
    doc.text(`• Porcentaje de ejecución: ${data.porcentajeEjecucion}%`, 25, 115);
    
    // Tabla de asignaturas
    const tableData = data.detalleAsignaturas.map(asignatura => [
        asignatura.nombre,
        asignatura.docente,
        asignatura.laboratorio,
        asignatura.estudiantes.toString(),
        `${asignatura.porcentajeAvance}%`,
        asignatura.estado
    ]);
    
    doc.autoTable({
        head: [['Asignatura', 'Docente', 'Laboratorio', 'Estudiantes', 'Avance', 'Estado']],
        body: tableData,
        startY: 130,
        styles: {
            fontSize: 8,
            cellPadding: 2
        },
        headStyles: {
            fillColor: [255, 193, 7], // Color amarillo Bootstrap warning
            textColor: 0,
            fontStyle: 'bold'
        },
        alternateRowStyles: {
            fillColor: [248, 249, 250]
        },
        columnStyles: {
            0: { cellWidth: 40 }, // Asignatura
            1: { cellWidth: 35 }, // Docente
            2: { cellWidth: 35 }, // Laboratorio
            3: { cellWidth: 20 }, // Estudiantes
            4: { cellWidth: 20 }, // Avance
            5: { cellWidth: 20 }  // Estado
        }
    });
    
    // Pie de página
    const finalY = doc.lastAutoTable.finalY + 20;
    doc.setFontSize(8);
    doc.text('Este reporte fue generado automáticamente por el Sistema de Registro de Uso de Laboratorios de la ESPE.', 20, finalY);
    doc.text('Para información académica detallada, contactar al coordinador de área correspondiente.', 20, finalY + 10);
    
    // Guardar el PDF
    doc.save(`Reporte_Asignaturas_ESPE_${new Date().toISOString().split('T')[0]}.pdf`);
}
