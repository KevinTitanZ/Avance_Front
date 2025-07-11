function exportarPDFLaboratorios() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Configurar fuentes y colores
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 40);
    
    // Título del reporte
    doc.text('UNIVERSIDAD DE LAS FUERZAS ARMADAS ESPE', 20, 20);
    doc.setFontSize(16);
    doc.text('REPORTE DE LABORATORIOS', 20, 35);
    doc.setFontSize(12);
    doc.text('Estado y Ocupación de Laboratorios', 20, 45);
    
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
    
    const data = mockData.laboratorios;
    doc.text(`• Total de laboratorios: ${data.totalLaboratorios}`, 25, 85);
    doc.text(`• Laboratorios activos: ${data.laboratoriosActivos}`, 25, 95);
    doc.text(`• Laboratorios en mantenimiento: ${data.laboratoriosMantenimiento}`, 25, 105);
    doc.text(`• Capacidad total: ${data.capacidadTotal} estudiantes`, 25, 115);
    doc.text(`• Ocupación promedio: ${data.ocupacionPromedio}%`, 25, 125);
    
    // Tabla de laboratorios
    const tableData = data.detalleLaboratorios.map(lab => [
        lab.nombre,
        lab.ubicacion,
        lab.capacidad.toString(),
        lab.equipos.toString(),
        `${lab.ocupacion}%`,
        lab.estado
    ]);
    
    doc.autoTable({
        head: [['Laboratorio', 'Ubicación', 'Capacidad', 'Equipos', 'Ocupación', 'Estado']],
        body: tableData,
        startY: 140,
        styles: {
            fontSize: 8,
            cellPadding: 2
        },
        headStyles: {
            fillColor: [25, 135, 84], // Color verde Bootstrap success
            textColor: 255,
            fontStyle: 'bold'
        },
        alternateRowStyles: {
            fillColor: [248, 249, 250]
        },
        columnStyles: {
            0: { cellWidth: 35 }, // Laboratorio
            1: { cellWidth: 40 }, // Ubicación
            2: { cellWidth: 25 }, // Capacidad
            3: { cellWidth: 20 }, // Equipos
            4: { cellWidth: 25 }, // Ocupación
            5: { cellWidth: 25 }  // Estado
        }
    });
    
    // Pie de página
    const finalY = doc.lastAutoTable.finalY + 20;
    doc.setFontSize(8);
    doc.text('Este reporte fue generado automáticamente por el Sistema de Registro de Uso de Laboratorios de la ESPE.', 20, finalY);
    doc.text('Para mantenimiento o reservas, contactar al jefe de laboratorio correspondiente.', 20, finalY + 10);
    
    // Guardar el PDF
    doc.save(`Reporte_Laboratorios_ESPE_${new Date().toISOString().split('T')[0]}.pdf`);
}
