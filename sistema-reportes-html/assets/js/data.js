// Datos mock realistas para el Sistema de Registro de Uso de Laboratorio - ESPE
const mockData = {
    usuarios: {
        totalUsuarios: 156,
        usuariosActivos: 142,
        usuariosInactivos: 14,
        docentes: 28,
        estudiantes: 125,
        jefeLabor: 3,
        detalleUsuarios: [
            {
                id: 1,
                nombre: "Ing. Edwin Camino",
                email: "epcamino@espe.edu.ec",
                tipo: "Jefe Laboratorio",
                estado: "Activo",
                ultimoAcceso: "2025-07-10 08:30",
                laboratorios: ["Lab. Redes y Comunicaciones", "Lab. Sistemas Digitales"],
                area: "Ingeniería en Sistemas"
            },
            {
                id: 2,
                nombre: "Dr. María Belén Proaño",
                email: "mbproano@espe.edu.ec",
                tipo: "Docente",
                estado: "Activo",
                ultimoAcceso: "2025-07-10 07:45",
                laboratorios: ["Lab. Química Analítica"],
                area: "Ciencias Químicas"
            },
            {
                id: 3,
                nombre: "Kevin Ordoñez",
                email: "ksordonez@espe.edu.ec",
                tipo: "Estudiante",
                estado: "Activo",
                ultimoAcceso: "2025-07-09 16:15",
                laboratorios: [],
                carrera: "Ingeniería en Software"
            },
            {
                id: 4,
                nombre: "Ing. Carlos Vásquez",
                email: "cjvasquez@espe.edu.ec",
                tipo: "Docente",
                estado: "Activo",
                ultimoAcceso: "2025-07-09 14:30",
                laboratorios: ["Lab. Mecánica de Fluidos", "Lab. Termodinámica"],
                area: "Ingeniería Mecánica"
            },
            {
                id: 5,
                nombre: "Elvis Ramírez",
                email: "eramirez@espe.edu.ec",
                tipo: "Estudiante",
                estado: "Activo",
                ultimoAcceso: "2025-07-09 12:45",
                laboratorios: [],
                carrera: "Ingeniería en Software"
            },
            {
                id: 6,
                nombre: "Dra. Patricia Montenegro",
                email: "pmontenegro@espe.edu.ec",
                tipo: "Jefe Laboratorio",
                estado: "Activo",
                ultimoAcceso: "2025-07-09 11:20",
                laboratorios: ["Lab. Biotecnología", "Lab. Microbiología"],
                area: "Ciencias de la Vida"
            },
            {
                id: 7,
                nombre: "Jhon Steeven Guamán",
                email: "jsguaman@espe.edu.ec",
                tipo: "Estudiante",
                estado: "Activo",
                ultimoAcceso: "2025-07-08 18:30",
                laboratorios: [],
                carrera: "Ingeniería en Software"
            },
            {
                id: 8,
                nombre: "Ing. Roberto Flores",
                email: "raflores@espe.edu.ec",
                tipo: "Docente",
                estado: "Activo",
                ultimoAcceso: "2025-07-08 16:15",
                laboratorios: ["Lab. Automatización Industrial"],
                area: "Ingeniería Electrónica"
            },
            {
                id: 9,
                nombre: "Melany Moreira",
                email: "mmoreira@espe.edu.ec",
                tipo: "Estudiante",
                estado: "Activo",
                ultimoAcceso: "2025-07-08 14:45",
                laboratorios: [],
                carrera: "Ingeniería en Software"
            },
            {
                id: 10,
                nombre: "Dr. Fernando Sáenz",
                email: "fmsaenz@espe.edu.ec",
                tipo: "Docente",
                estado: "Inactivo",
                ultimoAcceso: "2025-06-28 10:20",
                laboratorios: ["Lab. Física Cuántica"],
                area: "Ciencias Físicas"
            }
        ]
    },
    
    laboratorios: {
        totalLaboratorios: 15,
        laboratoriosActivos: 13,
        laboratoriosMantenimiento: 2,
        ocupacionPromedio: 78.5,
        detalleLaboratorios: [
            {
                id: 1,
                nombre: "Lab. Redes y Comunicaciones",
                codigo: "LAB-RC-001",
                ubicacion: "Edificio de Sistemas - Piso 3",
                capacidad: 30,
                equipos: 28,
                estado: "Activo",
                responsable: "Ing. Edwin Camino",
                ocupacionSemanal: 85,
                ultimoMantenimiento: "2025-06-15"
            },
            {
                id: 2,
                nombre: "Lab. Sistemas Digitales",
                codigo: "LAB-SD-002",
                ubicacion: "Edificio de Sistemas - Piso 2",
                capacidad: 25,
                equipos: 24,
                estado: "Activo",
                responsable: "Ing. Edwin Camino",
                ocupacionSemanal: 72,
                ultimoMantenimiento: "2025-06-20"
            },
            {
                id: 3,
                nombre: "Lab. Química Analítica",
                codigo: "LAB-QA-003",
                ubicacion: "Edificio de Ciencias - Piso 1",
                capacidad: 20,
                equipos: 18,
                estado: "Activo",
                responsable: "Dr. María Belén Proaño",
                ocupacionSemanal: 90,
                ultimoMantenimiento: "2025-07-01"
            },
            {
                id: 4,
                nombre: "Lab. Mecánica de Fluidos",
                codigo: "LAB-MF-004",
                ubicacion: "Edificio de Mecánica - Piso 1",
                capacidad: 15,
                equipos: 12,
                estado: "Activo",
                responsable: "Ing. Carlos Vásquez",
                ocupacionSemanal: 65,
                ultimoMantenimiento: "2025-06-10"
            },
            {
                id: 5,
                nombre: "Lab. Biotecnología",
                codigo: "LAB-BT-005",
                ubicacion: "Edificio de Ciencias - Piso 3",
                capacidad: 18,
                equipos: 16,
                estado: "Mantenimiento",
                responsable: "Dra. Patricia Montenegro",
                ocupacionSemanal: 0,
                ultimoMantenimiento: "2025-07-08"
            },
            {
                id: 6,
                nombre: "Lab. Automatización Industrial",
                codigo: "LAB-AI-006",
                ubicacion: "Edificio de Electrónica - Piso 2",
                capacidad: 22,
                equipos: 20,
                estado: "Activo",
                responsable: "Ing. Roberto Flores",
                ocupacionSemanal: 88,
                ultimoMantenimiento: "2025-06-25"
            },
            {
                id: 7,
                nombre: "Lab. Microbiología",
                codigo: "LAB-MB-007",
                ubicacion: "Edificio de Ciencias - Piso 2",
                capacidad: 16,
                equipos: 14,
                estado: "Activo",
                responsable: "Dra. Patricia Montenegro",
                ocupacionSemanal: 75,
                ultimoMantenimiento: "2025-06-30"
            },
            {
                id: 8,
                nombre: "Lab. Física Cuántica",
                codigo: "LAB-FC-008",
                ubicacion: "Edificio de Física - Piso 4",
                capacidad: 12,
                equipos: 10,
                estado: "Mantenimiento",
                responsable: "Dr. Fernando Sáenz",
                ocupacionSemanal: 0,
                ultimoMantenimiento: "2025-07-05"
            }
        ]
    },
    
    asignaturas: {
        totalAsignaturas: 24,
        asignaturasActivas: 22,
        asignaturasInactivas: 2,
        horasLaboratorioTotal: 336,
        guiasTotal: 148,
        guiasEjecutadas: 112,
        porcentajeEjecucion: 75.7,
        detalleAsignaturas: [
            {
                id: 1,
                nombre: "Redes de Computadores",
                codigo: "SIS-501",
                docente: "Ing. Edwin Camino",
                estudiantes: 28,
                horasLaboratorio: 6,
                estado: "Activa",
                laboratorio: "Lab. Redes y Comunicaciones",
                guiasPlanificadas: 12,
                guiasEjecutadas: 9,
                porcentajeAvance: 75,
                proximaGuia: "Configuración de VLAN",
                coherenciaValidada: true
            },
            {
                id: 2,
                nombre: "Sistemas Digitales Avanzados",
                codigo: "ELE-401",
                docente: "Ing. Edwin Camino",
                estudiantes: 24,
                horasLaboratorio: 4,
                estado: "Activa",
                laboratorio: "Lab. Sistemas Digitales",
                guiasPlanificadas: 10,
                guiasEjecutadas: 8,
                porcentajeAvance: 80,
                proximaGuia: "Diseño de Circuitos Secuenciales",
                coherenciaValidada: true
            },
            {
                id: 3,
                nombre: "Análisis Químico Instrumental",
                codigo: "QUI-601",
                docente: "Dr. María Belén Proaño",
                estudiantes: 18,
                horasLaboratorio: 5,
                estado: "Activa",
                laboratorio: "Lab. Química Analítica",
                guiasPlanificadas: 15,
                guiasEjecutadas: 12,
                porcentajeAvance: 80,
                proximaGuia: "Espectroscopía UV-Vis",
                coherenciaValidada: true
            },
            {
                id: 4,
                nombre: "Mecánica de Fluidos Computacional",
                codigo: "MEC-502",
                docente: "Ing. Carlos Vásquez",
                estudiantes: 15,
                horasLaboratorio: 4,
                estado: "Activa",
                laboratorio: "Lab. Mecánica de Fluidos",
                guiasPlanificadas: 8,
                guiasEjecutadas: 5,
                porcentajeAvance: 62.5,
                proximaGuia: "Simulación CFD",
                coherenciaValidada: false
            },
            {
                id: 5,
                nombre: "Biotecnología Molecular",
                codigo: "BIO-701",
                docente: "Dra. Patricia Montenegro",
                estudiantes: 16,
                horasLaboratorio: 6,
                estado: "Suspendida",
                laboratorio: "Lab. Biotecnología",
                guiasPlanificadas: 18,
                guiasEjecutadas: 6,
                porcentajeAvance: 33.3,
                proximaGuia: "Pendiente por mantenimiento",
                coherenciaValidada: true
            },
            {
                id: 6,
                nombre: "Control Automático Industrial",
                codigo: "ELE-601",
                docente: "Ing. Roberto Flores",
                estudiantes: 20,
                horasLaboratorio: 5,
                estado: "Activa",
                laboratorio: "Lab. Automatización Industrial",
                guiasPlanificadas: 14,
                guiasEjecutadas: 11,
                porcentajeAvance: 78.6,
                proximaGuia: "Controladores PID",
                coherenciaValidada: true
            },
            {
                id: 7,
                nombre: "Microbiología Aplicada",
                codigo: "BIO-501",
                docente: "Dra. Patricia Montenegro",
                estudiantes: 14,
                horasLaboratorio: 4,
                estado: "Activa",
                laboratorio: "Lab. Microbiología",
                guiasPlanificadas: 12,
                guiasEjecutadas: 9,
                porcentajeAvance: 75,
                proximaGuia: "Cultivos Bacterianos",
                coherenciaValidada: true
            },
            {
                id: 8,
                nombre: "Física Cuántica Experimental",
                codigo: "FIS-801",
                docente: "Dr. Fernando Sáenz",
                estudiantes: 8,
                horasLaboratorio: 3,
                estado: "Suspendida",
                laboratorio: "Lab. Física Cuántica",
                guiasPlanificadas: 10,
                guiasEjecutadas: 3,
                porcentajeAvance: 30,
                proximaGuia: "Pendiente por mantenimiento",
                coherenciaValidada: false
            }
        ]
    },
    
    usos: {
        totalRegistros: 487,
        horasTotalesUso: 1264,
        equiposUtilizados: 142,
        promedioUsoSemanal: 52.3,
        semanasActuales: 14,
        laboratorioMasUsado: "Lab. Redes y Comunicaciones",
        docenteMasActivo: "Ing. Edwin Camino",
        detalleUsos: [
            {
                id: 1,
                fecha: "2025-07-10",
                laboratorio: "Lab. Redes y Comunicaciones",
                asignatura: "Redes de Computadores",
                docente: "Ing. Edwin Camino",
                estudiantes: 28,
                horaInicio: "08:00",
                horaFin: "14:00",
                duracion: 6,
                guia: "Configuración de Routers Cisco",
                equiposUsados: 14,
                estado: "Ejecutado",
                observaciones: "Práctica completada exitosamente"
            },
            {
                id: 2,
                fecha: "2025-07-10",
                laboratorio: "Lab. Química Analítica",
                asignatura: "Análisis Químico Instrumental",
                docente: "Dr. María Belén Proaño",
                estudiantes: 18,
                horaInicio: "14:00",
                horaFin: "19:00",
                duracion: 5,
                guia: "Cromatografía de Gases",
                equiposUsados: 9,
                estado: "Ejecutado",
                observaciones: "Análisis de muestras completado"
            },
            {
                id: 3,
                fecha: "2025-07-09",
                laboratorio: "Lab. Sistemas Digitales",
                asignatura: "Sistemas Digitales Avanzados",
                docente: "Ing. Edwin Camino",
                estudiantes: 24,
                horaInicio: "10:00",
                horaFin: "14:00",
                duracion: 4,
                guia: "Implementación de FSM",
                equiposUsados: 12,
                estado: "Ejecutado",
                observaciones: "Diseño de máquinas de estado finito"
            },
            {
                id: 4,
                fecha: "2025-07-09",
                laboratorio: "Lab. Automatización Industrial",
                asignatura: "Control Automático Industrial",
                docente: "Ing. Roberto Flores",
                estudiantes: 20,
                horaInicio: "08:00",
                horaFin: "13:00",
                duracion: 5,
                guia: "Programación de PLCs",
                equiposUsados: 10,
                estado: "Ejecutado",
                observaciones: "Control de procesos industriales"
            },
            {
                id: 5,
                fecha: "2025-07-08",
                laboratorio: "Lab. Mecánica de Fluidos",
                asignatura: "Mecánica de Fluidos Computacional",
                docente: "Ing. Carlos Vásquez",
                estudiantes: 15,
                horaInicio: "15:00",
                horaFin: "19:00",
                duracion: 4,
                guia: "Análisis de Flujo Turbulento",
                equiposUsados: 8,
                estado: "Ejecutado",
                observaciones: "Simulaciones CFD realizadas"
            },
            {
                id: 6,
                fecha: "2025-07-08",
                laboratorio: "Lab. Microbiología",
                asignatura: "Microbiología Aplicada",
                docente: "Dra. Patricia Montenegro",
                estudiantes: 14,
                horaInicio: "09:00",
                horaFin: "13:00",
                duracion: 4,
                guia: "Identificación Bacteriana",
                equiposUsados: 7,
                estado: "Ejecutado",
                observaciones: "Técnicas de tinción aplicadas"
            },
            {
                id: 7,
                fecha: "2025-07-05",
                laboratorio: "Lab. Biotecnología",
                asignatura: "Biotecnología Molecular",
                docente: "Dra. Patricia Montenegro",
                estudiantes: 16,
                horaInicio: "10:00",
                horaFin: "15:00",
                duracion: 5,
                guia: "PCR y Electroforesis",
                equiposUsados: 8,
                estado: "Planificado",
                observaciones: "Suspendido por mantenimiento de equipos"
            },
            {
                id: 8,
                fecha: "2025-07-03",
                laboratorio: "Lab. Física Cuántica",
                asignatura: "Física Cuántica Experimental",
                docente: "Dr. Fernando Sáenz",
                estudiantes: 8,
                horaInicio: "14:00",
                horaFin: "17:00",
                duracion: 3,
                guia: "Experimento de Doble Rendija",
                equiposUsados: 4,
                estado: "Cerrado",
                observaciones: "Laboratorio en mantenimiento preventivo"
            }
        ]
    },

    // Nuevos datos para funcionalidades específicas del proyecto
    coherenciaGuias: {
        totalGuias: 148,
        guiasCoherentes: 132,
        guiasIncoherentes: 16,
        porcentajeCoherencia: 89.2,
        alertas: [
            {
                id: 1,
                asignatura: "Mecánica de Fluidos Computacional",
                docente: "Ing. Carlos Vásquez",
                guia: "Simulación CFD",
                problema: "La guía no incluye objetivos específicos de la asignatura",
                prioridad: "Media",
                fecha: "2025-07-08"
            },
            {
                id: 2,
                asignatura: "Física Cuántica Experimental",
                docente: "Dr. Fernando Sáenz",
                guia: "Experimento de Doble Rendija",
                problema: "Contenido no alineado con el sílabo actualizado",
                prioridad: "Alta",
                fecha: "2025-07-05"
            }
        ]
    },

    estadisticasGenerales: {
        ocupacionLaboratorios: {
            semanal: 78.5,
            mensual: 82.3,
            semestral: 85.1
        },
        rendimientoAcademico: {
            promedioCalificaciones: 8.4,
            estudiantesAprobados: 89.2,
            guiasCompletadas: 75.7
        },
        recursos: {
            equiposFuncionando: 89.4,
            equiposMantenimiento: 8.1,
            equiposDanados: 2.5
        }
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