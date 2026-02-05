# Proyecto de Pruebas Automatizadas con Playwright

Proyecto de automatización de pruebas E2E para el flujo de creación de cuentas utilizando Playwright y TypeScript.

## 📋 Descripción

Este proyecto automatiza el proceso completo de creación de una cuenta con configuración completa, incluyendo:

- Inicio de sesión
- Creación de cuenta con información básica
- Configuración de administrador
- Configuración de todos los módulos
- Configuración de recursos
- Configuración de planes
- Información de facturación completa

## 🛠️ Tecnologías

- **Playwright** - Framework de testing E2E
- **TypeScript** - Lenguaje de programación
- **Faker.js** - Generación de datos de prueba
- **Node.js** - Entorno de ejecución

## 📁 Estructura del Proyecto

```
prueba-2/
├── tests/                      # Tests de automatización
│   └── accountCreation.spec.ts # Test principal de creación de cuenta
├── pages/                      # Page Object Model
│   └── AccountCreationFlowPage.ts
├── helpers/                    # Utilidades y helpers
│   └── TestDataHelper.ts      # Generador de datos de prueba
├── test-data/                  # Datos generados durante tests
│   └── generated-email.txt    # Último correo generado exitosamente
├── utilities/                  # Utilidades adicionales
│   └── decoators.ts
├── playwright.config.ts        # Configuración de Playwright
├── tsconfig.json              # Configuración de TypeScript
└── package.json               # Dependencias del proyecto
```

## 🚀 Instalación

### Prerrequisitos

- **Node.js** versión 18 o superior
- **npm** o **yarn**

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd "prueba 2"
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Instalar navegadores de Playwright**
   ```bash
   npx playwright install
   ```

## ▶️ Ejecución de Tests

### Comandos Disponibles

```bash
# Ejecutar todos los tests en modo headless
npm test

# Ejecutar tests en modo UI (interfaz gráfica)
npm run test:ui

# Ejecutar tests con navegador visible
npm run test:headed

# Ejecutar tests en modo debug
npm run test:debug

# Ver reporte de resultados
npm run report
```

### Ejecución Específica

```bash
# Ejecutar solo tests en Chromium
npx playwright test --project=chromium

# Ejecutar un archivo específico
npx playwright test tests/accountCreation.spec.ts

# Ejecutar con múltiples workers
npx playwright test --workers=4
```

## 📊 Características Especiales

### Generación de Datos de Prueba

El proyecto utiliza **Faker.js** para generar datos aleatorios en cada ejecución:
- Nombres de empresa
- NITs
- Correos electrónicos
- Teléfonos
- Direcciones
- Nombres de personas

### Guardado de Correos Exitosos

Cada vez que un test se ejecuta exitosamente, el correo generado se guarda en:
```
test-data/generated-email.txt
```

Este archivo contiene:
- El último correo generado exitosamente
- Fecha y hora de generación
- Solo se actualiza si el test completa sin errores

### Configuración de Timeouts

- **Timeout global por test**: 120 segundos
- **Timeout para expect**: 10 segundos
- **Timeout para acciones**: 15 segundos
- **Timeout para navegación**: 30 segundos

## 🎯 Navegadores Configurados

El proyecto está configurado para ejecutarse en:
- ✅ **Chromium** (Chrome) - Activo por defecto
- ⚠️ Firefox - Comentado
- ⚠️ WebKit (Safari) - Comentado

## 📝 Configuración del Test

Los datos de configuración se encuentran centralizados en `TestDataHelper.ts`:

```typescript
config: {
  institutionType: 'Cooperativa',
  currency: 'Peso colombiano (COP)',
  timezone: '(UTC-01:00) Azores',
  billingDay: '25',
  economicActivity: 'Agricultura, ganadería, caza',
  taxRegime: 'Responsable Inscripto',
  department: 'Baja Verapaz',
  city: 'Salamá',
  resourceCount: 5
}
```

## 📸 Capturas y Videos

En caso de fallo:
- Se generan **capturas de pantalla** automáticamente
- Se graban **videos** del test
- Se crea un **trace** para debugging

## 📄 Reportes

Después de ejecutar los tests, se genera un reporte HTML automáticamente en:
```
playwright-report/index.html
```

Para visualizarlo:
```bash
npm run report
```

## 🔧 Troubleshooting

### Error: Los tests se ejecutan 3 veces
- Verifica que solo Chromium esté activo en `playwright.config.ts`
- O ejecuta con: `npx playwright test --project=chromium`

### Error: Timeout en acciones
- Aumenta los timeouts en `playwright.config.ts`
- Verifica la conectividad de red
- Asegúrate de que los selectores sean correctos

### Error: No se instalan los navegadores
- Ejecuta: `npx playwright install --with-deps`

## 👥 Contribución

Para contribuir al proyecto:
1. Crea una rama nueva
2. Realiza tus cambios
3. Crea un Pull Request

## 📧 Contacto

Para preguntas o soporte, contacta al equipo de desarrollo.

---

**Última actualización**: Febrero 2026
