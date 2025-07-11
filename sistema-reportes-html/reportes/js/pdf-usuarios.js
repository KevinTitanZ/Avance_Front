function exportarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Configurar fuentes y colores
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 40);
    
    // Título del reporte
    doc.text('UNIVERSIDAD DE LAS FUERZAS ARMADAS ESPE', 20, 20);
    doc.setFontSize(16);
    doc.text('REPORTE DE USUARIOS DEL SISTEMA', 20, 35);
    doc.setFontSize(12);
    doc.text('Sistema de Registro de Uso de Laboratorios', 20, 45);
    
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
    
    const data = mockData.usuarios;
    doc.text(`• Total de usuarios: ${data.totalUsuarios}`, 25, 85);
    doc.text(`• Usuarios activos: ${data.usuariosActivos}`, 25, 95);
    doc.text(`• Usuarios inactivos: ${data.usuariosInactivos}`, 25, 105);
    doc.text(`• Docentes: ${data.docentes}`, 25, 115);
    doc.text(`• Estudiantes: ${data.estudiantes}`, 25, 125);
    doc.text(`• Jefes de laboratorio: ${data.jefeLabor}`, 25, 135);
    
    // Tabla de usuarios
    const tableData = data.detalleUsuarios.map(usuario => [
        usuario.nombre,
        usuario.email,
        usuario.tipo,
        usuario.estado,
        usuario.ultimoAcceso,
        usuario.laboratorios.length > 0 ? usuario.laboratorios.join(', ') : 'Sin asignaciones'
    ]);
    
    doc.autoTable({
        head: [['Nombre', 'Email', 'Tipo', 'Estado', 'Último Acceso', 'Laboratorios']],
        body: tableData,
        startY: 150,
        styles: {
            fontSize: 8,
            cellPadding: 2
        },
        headStyles: {
            fillColor: [13, 110, 253], // Color azul Bootstrap primary
            textColor: 255,
            fontStyle: 'bold'
        },
        alternateRowStyles: {
            fillColor: [248, 249, 250] // Color gris claro
        },
        columnStyles: {
            0: { cellWidth: 35 }, // Nombre
            1: { cellWidth: 45 }, // Email
            2: { cellWidth: 25 }, // Tipo
            3: { cellWidth: 20 }, // Estado
            4: { cellWidth: 30 }, // Último Acceso
            5: { cellWidth: 35 }  // Laboratorios
        }
    });
    
    // Pie de página
    const finalY = doc.lastAutoTable.finalY + 20;
    doc.setFontSize(8);
    doc.text('Este reporte fue generado automáticamente por el Sistema de Registro de Uso de Laboratorios de la ESPE.', 20, finalY);
    doc.text('Para consultas o verificaciones, contactar al área de sistemas.', 20, finalY + 10);
    
    // Guardar el PDF
    doc.save(`Reporte_Usuarios_ESPE_${new Date().toISOString().split('T')[0]}.pdf`);
}
