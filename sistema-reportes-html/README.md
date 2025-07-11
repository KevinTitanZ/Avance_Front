# Sprint 1 - Sistema de Reportes de Laboratorios ESPE

## Introducción
Este documento describe el Sprint 1 del proyecto "Sistema de Registro de Uso de Laboratorios" de la Universidad ESPE. El enfoque de este sprint fue desarrollar una interfaz funcional de reportes con datos mockados realistas, debido a que otros grupos del proyecto no proporcionaron APIs ni avances necesarios para la integración inicial.

**Equipo de Desarrollo - Metodología SCRUM:**
- **Scrum Master:** Jhon Steeven Guaman Tobar
- **Product Owner:** Melany Moreira
- **Development Team 1:** Kevin Ordoñez
- **Development Team 2:** Elvis Ramirez

## Tecnologías Utilizadas
- HTML5 - Estructura semántica
- CSS3 - Estilos personalizados
- Bootstrap 5.3.0 - Framework UI responsivo
- Bootstrap Icons - Iconografía
- JavaScript (Vanilla) - Lógica del cliente
- jsPDF 2.5.1 - Biblioteca de generación de PDFs
- jsPDF-autotable 3.5.31 - Plugin para tablas en PDFs
- Live Server - Servidor de desarrollo local

## Estructura del Proyecto

```
sistema-reportes-html/
├── index.html                     # Dashboard principal
├── README.md                      # Documentación del proyecto
├── reportes/                      # Módulo de reportes
│   ├── usuarios.html              # Reporte de usuarios del sistema
│   ├── laboratorios.html          # Reporte de laboratorios
│   ├── asignaturas.html           # Reporte de asignaturas académicas
│   ├── usos.html                  # Reporte de uso de laboratorios
│   ├── coherencia-guias.html      # Validación de coherencia de guías
│   └── js/                        # Lógica de exportación PDF
│       ├── pdf-usuarios.js        # Generación PDF usuarios
│       ├── pdf-laboratorios.js    # Generación PDF laboratorios
│       ├── pdf-asignaturas.js     # Generación PDF asignaturas
│       ├── pdf-usos.js            # Generación PDF usos
│       └── pdf-coherencia-guias.js # Generación PDF coherencia
└── assets/
    ├── css/
    │   └── style.css              # Estilos personalizados
    └── js/
        └── data.js                # Datos mockados realistas de ESPE
```

## Instrucciones de Ejecución

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/KevinTitanZ/Avance_Front.git
   cd Avance_Front/sistema-reportes-html
   ```

2. **Ejecutar con Live Server**
   - Abrir VS Code
   - Instalar extensión "Live Server"
   - Click derecho en `index.html` → "Open with Live Server"
   - O navegar a `http://localhost:5500`

3. **Ejecutar directamente**
   - Abrir `index.html` en cualquier navegador web moderno

4. **Ejecutar con servidor Python (alternativo)**
   ```bash
   python -m http.server 8000
   ```

5. **Probar las funcionalidades**
   - Navegar por los 5 reportes disponibles
   - Probar la exportación PDF de cada reporte
   - Verificar la responsividad del diseño

## Nuevas Funcionalidades

- Sistema de reportes completamente funcional con 5 módulos
- Exportación PDF profesional de todos los reportes
- Dashboard interactivo con navegación intuitiva
- Datos mockados realistas de la Universidad ESPE
- Diseño responsivo compatible con dispositivos móviles
- Arquitectura modular preparada para integración futura
- Loading spinners y feedback visual
- Navegación fluida entre reportes

## Capturas de Pantalla

![Vista general](https://imgur.com/AIo95T4.png)
*Vista principal del sistema con acceso a todos los reportes*

![Imgur](https://imgur.com/IjhdFuj.png)
*Detalle del reporte de usuarios con exportación PDF*

![Imgur](https://imgur.com/zhaqmXF.png)
*Estado y ocupación de laboratorios*

![Imgur](https://imgur.com/23RzNnB.png)
*Reporte de asignaturas*

* ![Imgur](https://imgur.com/uX1i5wP.png)
  *Reporte de uso de laboratorio*
  ![Imgur](https://imgur.com/jZbKhkP.png)
  *Validacion de Coherencia de guias*
  
**Seccion De reportes Pdf
  ![Imgur][(https://imgur.com/a/3mv2LQf)](https://imgur.com/a/yEydZMR)
   *Pdf de Reporte de Usuarios*
  ![Imgur][(https://imgur.com/a/gh7mBhW)](https://imgur.com/a/ptbu3Mq)
   *Pdf de Reporte de Laboratorios*
  ![Imgur][(https://imgur.com/a/vOqSzkk)](https://imgur.com/a/6XbatRM)
   *Pdf de Reporte de Asignaturas*
  ![Imgur][(https://imgur.com/JKaoiLF.png)](https://imgur.com/a/45p9TOt)
   *Pdf de Reporte de uso de Laboratorio*
  ![Imgur][(https://imgur.com/JKaoiLF.png)](https://imgur.com/a/Z4cowjx)
   *Pdf de Reporte de Seguimiento de Guías*
   
## Conclusiones

Este Sprint 1 permitió consolidar conocimientos sobre desarrollo frontend, arquitectura modular y generación de PDFs, además de demostrar la capacidad del equipo para adaptarse a limitaciones externas y entregar un producto funcional de calidad profesional. El sistema desarrollado sirve como base sólida para la integración de componentes distribuidos en sprints posteriores.

## Referencias

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [jsPDF Documentation](https://github.com/parallax/jsPDF)
- [JavaScript Modern Practices](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [CSS3 Flexbox Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
