function exportarValidacion() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Configurar fuentes y colores
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 40);
    
    // Título del reporte
    doc.text('UNIVERSIDAD DE LAS FUERZAS ARMADAS ESPE', 20, 20);
    doc.setFontSize(16);
    doc.text('REPORTE DE VALIDACIÓN DE COHERENCIA DE GUÍAS', 20, 35);
    doc.setFontSize(12);
    doc.text('Verificación de Alineación entre Guías y Contenidos Académicos', 20, 45);
    
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
    doc.text('ESTADÍSTICAS DE COHERENCIA', 20, 75);
    doc.setFontSize(10);
    
    const coherenciaData = mockData.coherenciaGuias;
    doc.text(`• Total de guías evaluadas: ${coherenciaData.totalGuias}`, 25, 85);
    doc.text(`• Guías coherentes: ${coherenciaData.guiasCoherentes}`, 25, 95);
    doc.text(`• Guías incoherentes: ${coherenciaData.guiasIncoherentes}`, 25, 105);
    doc.text(`• Porcentaje de coherencia: ${coherenciaData.porcentajeCoherencia}%`, 25, 115);
    
    // Inicializar yPosition
    let yPosition = 135;
    
    // Alertas detectadas
    if (coherenciaData.alertas.length > 0) {
        doc.setFontSize(14);
        doc.text('ALERTAS DE INCOHERENCIA DETECTADAS', 20, yPosition);
        doc.setFontSize(9);
        
        yPosition = 145;
        coherenciaData.alertas.forEach((alerta, index) => {
            doc.text(`${index + 1}. ${alerta.asignatura} - ${alerta.docente}`, 25, yPosition);
            doc.text(`   Problema: ${alerta.problema}`, 25, yPosition + 8);
            doc.text(`   Prioridad: ${alerta.prioridad} | Fecha: ${alerta.fecha}`, 25, yPosition + 16);
            yPosition += 25;
        });
    } else {
        yPosition = 135;
    }
    
    // Tabla de coherencia por asignatura
    const asignaturasData = mockData.asignaturas;
    const tableData = asignaturasData.detalleAsignaturas.map(asignatura => [
        asignatura.nombre,
        asignatura.docente,
        asignatura.guiasPlanificadas.toString(),
        asignatura.coherenciaValidada ? '100%' : '60%',
        asignatura.coherenciaValidada ? 'Validada' : 'Incoherente'
    ]);
    
    doc.autoTable({
        head: [['Asignatura', 'Docente', 'Guías', 'Coherencia', 'Estado']],
        body: tableData,
        startY: yPosition + 10,
        styles: {
            fontSize: 8,
            cellPadding: 2
        },
        headStyles: {
            fillColor: [52, 58, 64], // Color dark Bootstrap
            textColor: 255,
            fontStyle: 'bold'
        },
        alternateRowStyles: {
            fillColor: [248, 249, 250]
        }
    });
    
    // Pie de página
    const finalY = doc.lastAutoTable.finalY + 20;
    doc.setFontSize(8);
    doc.text('Este reporte fue generado automáticamente por el Sistema de Registro de Uso de Laboratorios de la ESPE.', 20, finalY);
    doc.text('Las validaciones se realizan según los parámetros establecidos por cada coordinación académica.', 20, finalY + 10);
    
    // Guardar el PDF
    doc.save(`Reporte_Coherencia_Guias_ESPE_${new Date().toISOString().split('T')[0]}.pdf`);
}

// Hacer la función disponible globalmente
window.exportarValidacion = exportarValidacion;
