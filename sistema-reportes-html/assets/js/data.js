// Datos mock para los reportes
const mockData = {
    usuarios: {
        totalUsuarios: 45,
        usuariosActivos: 38,
        usuariosInactivos: 7,
        docentes: 15,
        estudiantes: 28,
        jefeLabor: 2,
        detalleUsuarios: [
            {
                id: 1,
                nombre: "Dr. Juan Pérez",
                email: "juan.perez@universidad.edu",
                tipo: "Jefe Laboratorio",
                estado: "Activo",
                ultimoAcceso: "2024-01-15 10:30",
                laboratorios: ["Lab. Química", "Lab. Física"]
            },
            {
                id: 2,
                nombre: "Prof. María González",
                email: "maria.gonzalez@universidad.edu",
                tipo: "Docente",
                estado: "Activo",
                ultimoAcceso: "2024-01-14 14:20",
                laboratorios: ["Lab. Biología"]
            },
            {
                id: 3,
                nombre: "Carlos Rodríguez",
                email: "carlos.rodriguez@estudiante.edu",
                tipo: "Estudiante",
                estado: "Activo",
                ultimoAcceso: "2024-01-13 09:15",
                laboratorios: []
            },
            {
                id: 4,
                nombre: "Ana López",
                email: "ana.lopez@universidad.edu",
                tipo: "Docente",
                estado: "Activo",
                ultimoAcceso: "2024-01-12 16:45",
                laboratorios: ["Lab. Física"]
            },
            {
                id: 5,
                nombre: "Pedro Martínez",
                email: "pedro.martinez@estudiante.edu",
                tipo: "Estudiante",
                estado: "Inactivo",
                ultimoAcceso: "2024-01-10 11:20",
                laboratorios: []
            }
        ]
    },
    
    laboratorios: {
        totalLaboratorios: 8,
        laboratoriosActivos: 7,
        laboratoriosMantenimiento: 1,
        ocupacionPromedio: 65.5,
        detalleLaboratorios: [
            {
                id: 1,
                nombre: "Laboratorio de Química",
                ubicacion: "Edificio A - Piso 2",
                capacidad: 30,
                equipos: 25,
                estado: "Activo",
                responsable: "Dr. Juan Pérez"
            },
            {
                id: 2,
                nombre: "Laboratorio de Física",
                ubicacion: "Edificio B - Piso 1",
                capacidad: 25,
                equipos: 20,
                estado: "Activo",
                responsable: "Dr. Ana López"
            },
            {
                id: 3,
                nombre: "Laboratorio de Biología",
                ubicacion: "Edificio C - Piso 3",
                capacidad: 35,
                equipos: 30,
                estado: "Mantenimiento",
                responsable: "Prof. María González"
            }
        ]
    },
    
    asignaturas: {
        totalAsignaturas: 12,
        asignaturasActivas: 10,
        asignaturasInactivas: 2,
        horasLaboratorioTotal: 180,
        detalleAsignaturas: [
            {
                id: 1,
                nombre: "Química Orgánica",
                codigo: "QUI-301",
                docente: "Dr. Juan Pérez",
                estudiantes: 25,
                horasLaboratorio: 4,
                estado: "Activa"
            },
            {
                id: 2,
                nombre: "Física Experimental",
                codigo: "FIS-201",
                docente: "Dr. Ana López",
                estudiantes: 20,
                horasLaboratorio: 3,
                estado: "Activa"
            },
            {
                id: 3,
                nombre: "Biología Molecular",
                codigo: "BIO-401",
                docente: "Prof. María González",
                estudiantes: 18,
                horasLaboratorio: 5,
                estado: "Suspendida"
            }
        ]
    },
    
    usos: {
        totalRegistros: 156,
        horasTotalesUso: 420,
        equiposUtilizados: 85,
        promedioUsoSemanal: 35.5,
        detalleUsos: [
            {
                id: 1,
                fecha: "2024-01-15",
                laboratorio: "Laboratorio de Química",
                asignatura: "Química Orgánica",
                docente: "Dr. Juan Pérez",
                estudiantes: 25,
                horaInicio: "08:00",
                horaFin: "12:00",
                duracion: 4
            },
            {
                id: 2,
                fecha: "2024-01-14",
                laboratorio: "Laboratorio de Física",
                asignatura: "Física Experimental",
                docente: "Dr. Ana López",
                estudiantes: 20,
                horaInicio: "14:00",
                horaFin: "17:00",
                duracion: 3
            },
            {
                id: 3,
                fecha: "2024-01-13",
                laboratorio: "Laboratorio de Biología",
                asignatura: "Biología Molecular",
                docente: "Prof. María González",
                estudiantes: 18,
                horaInicio: "09:00",
                horaFin: "14:00",
                duracion: 5
            }
        ]
    }
};

// Función para simular carga de datos
function loadData(callback, delay = 1000) {
    setTimeout(callback, delay);
}

// Función para mostrar loading
function showLoading() {
    document.body.classList.add('loading');
}

// Función para ocultar loading
function hideLoading() {
    document.body.classList.remove('loading');
}