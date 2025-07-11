function exportarPDFUsos() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Configurar fuentes y colores
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 40);
    
    // Título del reporte
    doc.text('UNIVERSIDAD DE LAS FUERZAS ARMADAS ESPE', 20, 20);
    doc.setFontSize(16);
    doc.text('REPORTE DE USO DE LABORATORIOS', 20, 35);
    doc.setFontSize(12);
    doc.text('Registro de Equipos y Tiempos de Uso', 20, 45);
    
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
    doc.text('ESTADÍSTICAS DE USO', 20, 75);
    doc.setFontSize(10);
    
    const data = mockData.usos;
    doc.text(`• Total de sesiones: ${data.totalSesiones}`, 25, 85);
    doc.text(`• Horas acumuladas: ${data.horasAcumuladas}`, 25, 95);
    doc.text(`• Promedio por sesión: ${data.promedioSesion} horas`, 25, 105);
    doc.text(`• Equipos utilizados: ${data.equiposUtilizados}`, 25, 115);
    
    // Tabla de usos
    const tableData = data.detalleUsos.map(uso => [
        uso.fecha,
        uso.laboratorio,
        uso.asignatura,
        uso.docente,
        uso.equipoUtilizado,
        uso.tiempoUso
    ]);
    
    doc.autoTable({
        head: [['Fecha', 'Laboratorio', 'Asignatura', 'Docente', 'Equipo', 'Tiempo']],
        body: tableData,
        startY: 130,
        styles: {
            fontSize: 8,
            cellPadding: 2
        },
        headStyles: {
            fillColor: [13, 202, 240], // Color cyan Bootstrap info
            textColor: 0,
            fontStyle: 'bold'
        },
        alternateRowStyles: {
            fillColor: [248, 249, 250]
        },
        columnStyles: {
            0: { cellWidth: 25 }, // Fecha
            1: { cellWidth: 35 }, // Laboratorio
            2: { cellWidth: 35 }, // Asignatura
            3: { cellWidth: 30 }, // Docente
            4: { cellWidth: 35 }, // Equipo
            5: { cellWidth: 20 }  // Tiempo
        }
    });
    
    // Pie de página
    const finalY = doc.lastAutoTable.finalY + 20;
    doc.setFontSize(8);
    doc.text('Este reporte fue generado automáticamente por el Sistema de Registro de Uso de Laboratorios de la ESPE.', 20, finalY);
    doc.text('Para auditorías o verificaciones de uso, contactar al área de control académico.', 20, finalY + 10);
    
    // Guardar el PDF
    doc.save(`Reporte_Uso_Laboratorios_ESPE_${new Date().toISOString().split('T')[0]}.pdf`);
}
