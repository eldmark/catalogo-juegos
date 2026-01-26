Board Game Catalog
Un catálogo interactivo de juegos de mesa desarrollado con Next.js 16, que permite a los usuarios explorar, filtrar y descubrir juegos de mesa únicos de desarrolladores independientes.
Características

Catálogo completo con sistema de filtros avanzados (categoría, edad, precio, rating)
Sistema de patrocinio con juegos destacados y banners publicitarios
Página de exploración con categorías, edades recomendadas y juegos mejor puntuados
Páginas de detalle con información completa de cada juego (reglas, descripción, juegos relacionados)
Búsqueda en tiempo real con debounce para mejor rendimiento
Slider de héroe en la página principal con rotación automática
Modal de bienvenida para sponsors
Sistema de ratings con badges visuales
Diseño responsive optimizado para móviles, tablets y escritorio
Simulación de carga para simular llamadas API reales
Navegación fluida con estados de carga personalizados

🛠️ Tecnologías

Framework: Next.js 16.1.4 (App Router)
UI: React 19.2.3
Estilos: Tailwind CSS 4
Lenguaje: TypeScript 5
Gestión de estado: React Hooks (useState, useEffect)
Navegación: Next.js Navigation (useRouter, useSearchParams)
Imágenes: Next.js Image Optimization

Instalación
bash# Clonar el repositorio
git clone <tu-repositorio>

# Instalar dependencias
npm install
# o
yarn install
# o
npm install
Uso
Desarrollo
bashnpm run dev
Abre http://localhost:3000 en tu navegador.
Producción
bash# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
Linting
bashnpm run lint
📁 Estructura del Proyecto
├── app/                      # App Router de Next.js
│   ├── catalog/             # Página del catálogo
│   ├── explore/             # Página de exploración
│   ├── game/[id]/           # Página dinámica de detalle del juego
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página de inicio
│   ├── globals.css          # Estilos globales
│   ├── error.tsx            # Página de error global
│   └── not-found.tsx        # Página 404
├── components/              # Componentes reutilizables
│   ├── algorithm/           # Algoritmo de inyección de sponsors
│   ├── catalog/             # Componentes del catálogo
│   ├── explore/             # Componentes de exploración
│   ├── game/                # Componentes de juegos
│   ├── home/                # Componentes del home
│   ├── layout/              # Componentes de layout (Navbar, Footer)
│   └── navigation/          # Componentes de navegación
├── data/                    # Datos estáticos
│   ├── games.ts             # Array de juegos
│   └── sponsors.ts          # Marcas patrocinadoras
├── lib/                     # Utilidades y servicios
│   ├── gamesService.ts      # Servicio de juegos (simula API)
│   ├── getSponsoredGames.ts # Obtener juegos patrocinados
│   ├── helpers.tsx          # Funciones auxiliares (filtros)
│   └── fetchSimulated.tsx   # Simulación de fetch con delay
└── public/                  # Archivos estáticos
    └── images/              # Imágenes del proyecto
🎮 Funcionalidades Principales
Sistema de Filtros
El catálogo incluye múltiples filtros que se pueden combinar:

Búsqueda por nombre
Categoría (Estrategia, Familiar, Aventura, Misterio)
Edad recomendada
Precio máximo
Rating mínimo
Ordenamiento (precio ascendente/descendente, mejor puntuados)

Sistema de Patrocinio

Juegos patrocinados destacados en diferentes secciones
Banners de marcas patrocinadoras inyectados en el catálogo
Modal de bienvenida con imagen de sponsor principal
Algoritmo de distribución inteligente de sponsors cada N juegos

Experiencia de Usuario

Estados de carga aleatorios para simular latencia real
Transiciones suaves entre páginas
Efectos hover interactivos
Sistema de navegación sticky
Scroll suave a secciones específicas

Paleta de Colores

Primario: #2563EB (Azul)
Secundario: #005271 (Azul oscuro)
Terciario: #091829 (Azul muy oscuro)
Acento: #FACC15 (Amarillo/Dorado) 
Neutros: Escala de grises de Tailwind
Backgrounds: #F8FAFC (Gris muy claro)

Datos
Los juegos incluyen:

12 juegos de mesa populares
3 juegos patrocinados (Catan, Carcassonne, Splendor)
Información detallada: precio, jugadores, duración, rating, reglas
3 marcas patrocinadoras (Asmodee, Ravensburger, Hasbro)

Configuración
Tailwind CSS
Configurado con la versión 4, usando PostCSS. Los estilos se importan desde app/globals.css.
TypeScript
Configuración estricta habilitada para mayor seguridad de tipos.
ESLint
Configurado con las reglas recomendadas de Next.js y TypeScript.
Deployment
Este proyecto está optimizado para ser desplegado en Vercel:

Conecta tu repositorio a Vercel
Vercel detectará automáticamente Next.js
El proyecto se construirá y desplegará automáticamente

Autor
Marco Díaz - Desarrollador y Diseñador
Licencia
© 2025 Catálogo de Juegos de Mesa - Todos los derechos reservados.