# Colectivo Narrativas, Crítica y Educación Matemática

Sitio web del Colectivo Narrativas, Crítica y Educación Matemática de la
Universidad Pedagógica Nacional (Colombia), fundado en 2020 por las profesoras
Claudia Salazar Amaya y Elizabeth Torres Puentes.

Publicado en **[conacedum.com](https://conacedum.com)**.

## Contenido del sitio

Una sola página con seis pestañas: Inicio, Producción Académica, Proyectos,
Seminarios, Integrantes y Colaboradores.

## Estructura

```
index.html          Todo el contenido del sitio (una sola página)
css/styles.css      Estilos
js/main.js          Navegación por pestañas y menú móvil
index/img/          Imágenes
  ├── fundadores.jpg
  ├── proyect 3.png
  ├── INVITDOS/     Retratos de profesores colaboradores (inv1..inv10)
  └── SEMIN/        Memorias de los seminarios (SEM 1.x .. SEM 4.x)
CNAME               Dominio propio para GitHub Pages
```

Sin dependencias ni proceso de build: HTML, CSS y JavaScript planos. Las
tipografías (Inter y Outfit) se cargan desde Google Fonts.

## Desarrollo

Abrir `index.html` en el navegador. No hace falta servidor ni instalar nada.

## Publicación

GitHub Pages sirve la rama `main` automáticamente. Cada push a `main` actualiza
conacedum.com en un par de minutos.

## Cómo actualizar el contenido

Todo se edita en `index.html`, dentro de la sección correspondiente:

- **Integrantes** — duplicar un bloque `.integrante-card` dentro de
  `.integrantes-grid`. Lleva la etiqueta de línea, el nombre, el título de la
  tesis y los botones de Google Scholar y CvLAC. La segunda línea de
  investigación usa `style="background: var(--accent);"` en la etiqueta.
- **Colaboradores** — duplicar un bloque `.colab-card` y añadir el retrato en
  `index/img/INVITDOS/`.
- **Seminarios** — duplicar un bloque `.seminario-wrapper`: título, periodo,
  tarjetas de texto y galería de imágenes en `index/img/SEMIN/`.

### Convenciones

- Los enlaces de Google Scholar se guardan limpios, como
  `https://scholar.google.com/citations?user=ID&hl=es`. Hay que quitar los
  parámetros de sesión (`authuser`, `gmla`, `oi`) que aparecen al copiarlos
  desde el navegador: apuntan a la cuenta de quien copió el enlace y fallan
  para los visitantes.
- Todo enlace externo lleva `target="_blank" rel="noopener"`.
- Las imágenes llevan `alt` descriptivo y `loading="lazy"`.
