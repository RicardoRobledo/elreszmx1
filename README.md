# El Resz MX — Sitio web

Sitio one-page de El Resz MX, comunidad de fighting games en México. Incluye presentación, equipo, archivo de YouTube, servicios, sponsors, eventos online, próximos proyectos, merch conceptual y contacto.

## Stack

- Vite 8
- React 19
- TypeScript
- Tailwind CSS 4
- `vite-react-ssg` para prerender estático (SEO/GEO)
- FormSubmit para el formulario
- Netlify como destino de despliegue

## Comandos

```bash
npm install
npm run dev        # desarrollo
npm run build      # build + prerender
npm run preview    # ver el build
npm run typecheck  # TypeScript
npm run lint       # ESLint
```

## Estructura

```text
src/
  components/
    layout/        Navbar y Footer
    sections/      Hero, About, Team, Work, Services, Sponsors, Events,
                   Upcoming, Merch, Contact y ContactForm
    ui/            Botones, logo, modal, marquee, tags, mockups, SEO...
  content/         Todo el contenido editable
  hooks/           Scroll, sección activa, countdown, media query y mount
  lib/             Utilidades de fecha, contacto y JSON-LD
  styles/          Tailwind + sistema de diseño
  types/           Tipos compartidos
public/
  brand/           Logo y variantes
  icons/           Favicons
  images/team/     Fotos o placeholders del equipo
  images/work/     Miniaturas de Nuestro trabajo
  media/           Video hero y poster
  llms.txt         Resumen para motores generativos
  robots.txt
  sitemap.xml
```

## Contenido editable

| Qué | Archivo |
|---|---|
| Nombre, correo, redes, navegación, hero y stats | `src/content/site.ts` |
| Historia, misión, visión y filosofía | `src/content/about.ts` |
| Equipo y biografías | `src/content/team.ts` |
| Playlists de YouTube y miniaturas | `src/content/work.ts` |
| Servicios y entregables | `src/content/services.ts` |
| SNK, propuesta para marcas, fases e historial | `src/content/sponsors.ts` |
| Eventos semanales y horarios | `src/content/events.ts` |
| Próximos proyectos y avance | `src/content/upcoming.ts` |
| Conceptos de merch | `src/content/merch.ts` |
| Preguntas frecuentes | `src/content/faq.ts` |

### Playlists de YouTube

En `src/content/work.ts`, pega el ID de la playlist en `youtubePlaylistId`. Si la URL es:

```text
https://www.youtube.com/playlist?list=PL123456789
```

el ID es `PL123456789`. Mientras esté vacío, la tarjeta muestra un estado de “próximamente” y no carga iframes.

### Imágenes del equipo

Las imágenes actuales en `public/images/team/` corresponden a los tres integrantes. Si cambian las fotos oficiales, reemplaza estos archivos manteniendo el mismo nombre y una proporción 16:9:

- `resz.png`
- `chavorruco.png`
- `afa2b.png`

Recomendado: 1600 × 900 px y menos de 200 KB por imagen (idealmente WebP; si cambias de formato, actualiza las rutas en `src/content/team.ts`).

### Video del hero

- `public/media/hero.mp4`: versión optimizada de 9.4 segundos, sin audio (4.7 MB).
- `public/media/hero-poster.jpg`: poster de carga.
- `hero.mp4` en la raíz: video original sin modificar.

El corte evita el primer plano final del video original para que el rostro de Resz aparezca únicamente en la sección Equipo. Si reemplazas el video, actualiza también el poster y conserva `preload="metadata"` para no penalizar la carga.

### SNK y torneos

`src/content/sponsors.ts` incluye el bloque de SNK y un historial editable. Reemplaza los nombres, juegos, formatos y agrega las URLs de VOD cuando estén disponibles. Evita publicar cifras o resultados que no puedan comprobarse.

## Formulario (FormSubmit)

El formulario hace POST a:

```text
https://formsubmit.co/ajax/reszmx1@gmail.com
```

Pasos para activarlo:

1. Publica el sitio o ejecútalo en local.
2. Envía un mensaje de prueba.
3. Revisa la bandeja de `reszmx1@gmail.com` y confirma el correo de activación de FormSubmit.
4. Vuelve a enviar una prueba.

No se necesitan API keys. Si cambia el correo, actualiza `site.email` en `src/content/site.ts`; el endpoint se construye con ese valor. El formulario tiene honeypot y fallback por `mailto:` si el envío falla.

## Netlify

El proyecto incluye `netlify.toml`:

- Build: `npm run build`
- Publish: `dist`
- Node: 22

También incluye `public/_headers` con cabeceras de seguridad y caché. Conecta el repositorio en Netlify y despliega; no requiere configuración adicional.

## Dominio y SEO

El dominio de ejemplo es `https://elreszmx.com`. Antes de publicar, cámbialo en:

- `src/content/site.ts` → `site.url`
- `index.html` → canonical, Open Graph y Twitter
- `public/robots.txt`
- `public/sitemap.xml`
- `public/llms.txt`

El sitio genera HTML estático con el contenido real, incluye JSON-LD (`Organization`, `WebSite`, `Service`, `FAQPage` y `EventSeries`), metadatos sociales, `robots.txt`, `sitemap.xml` y `llms.txt`.

## Pendientes de contenido real

Estos puntos están listos para reemplazarse, pero hoy usan placeholders:

- Enlaces reales de YouTube, Twitch, X, Instagram, TikTok y Discord en `src/content/site.ts`.
- IDs de playlists en `src/content/work.ts`.
- Fotografías reales de Resz y del equipo en `public/images/team/`.
- Historial y VODs de los torneos SNK en `src/content/sponsors.ts`.
- Horarios, juegos y links de inscripción de eventos en `src/content/events.ts`.
- Proyectos y porcentajes de avance en `src/content/upcoming.ts`.
- Conceptos de merch en `src/content/merch.ts`.

## Accesibilidad y rendimiento

- Navegación por teclado, skip link, foco visible y menú móvil con bloqueo de scroll.
- Soporte para `prefers-reduced-motion`.
- Video comprimido, poster, fuentes autoalojadas y miniaturas ligeras.
- YouTube se carga solo al abrir el modal.
- Imágenes con dimensiones declaradas y `loading="lazy"` fuera del primer viewport.
