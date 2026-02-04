# Proyecto de Pruebas Automatizadas - PRECREDIT

## 📁 Estructura del Proyecto

```
prueba 2/
├── pages/                          # Page Objects (POM)
│   ├── LoginPage.ts               # Página de login
│   ├── AccountCreationPage.ts     # Creación de cuenta
│   ├── AdminPage.ts               # Gestión de administradores
│   ├── ModulesConfigPage.ts       # Configuración de módulos
│   ├── ResourcesConfigPage.ts     # Configuración de recursos
│   ├── PlansConfigPage.ts         # Configuración de planes
│   └── BillingInfoPage.ts         # Información de facturación
├── helpers/
│   └── TestDataHelper.ts          # Generador de datos de prueba
├── tests/
│   ├── accountCreation.spec.ts    # Test refactorizado (NUEVO)
│   └── test-2.spec.ts             # Test original
└── playwright.config.ts
```

## ✨ Refactorización Aplicada

### **Patrón Page Object Model (POM)**

Se ha implementado el patrón POM para:
- ✅ Separar la lógica de interacción con la UI
- ✅ Mejorar la mantenibilidad del código
- ✅ Reutilizar componentes en múltiples tests
- ✅ Facilitar actualizaciones cuando cambie la UI

### **Mejoras Implementadas**

#### 1. **Page Objects Creados**
- `LoginPage`: Manejo del inicio de sesión
- `AccountCreationPage`: Formulario inicial de creación de cuenta
- `AdminPage`: Gestión de administradores
- `ModulesConfigPage`: Configuración de módulos (Equipos, Listas, Conexiones, Productos, Workflows)
- `ResourcesConfigPage`: Configuración de recursos y credenciales
- `PlansConfigPage`: Configuración de planes por tabs
- `BillingInfoPage`: Información de facturación y datos de empresa

#### 2. **Helper de Datos**
- `TestDataHelper`: Genera datos aleatorios con Faker
- Datos estructurados por sección
- Mantiene consistencia del email entre secciones

#### 3. **Test Refactorizado**
El nuevo archivo `accountCreation.spec.ts` contiene:
- ✅ **Cero lógica de Playwright en el test**
- ✅ Solo llamados a métodos descriptivos
- ✅ Código limpio y legible
- ✅ Fácil de entender el flujo del test
- ✅ Comentarios que dividen las secciones

## 🚀 Comparación Antes vs Después

### Antes (test-2.spec.ts)
```typescript
await page.locator('input[type="email"]').fill(adminEmail);
await page.locator('input[type="password"]').fill(password);
await page.getByRole('button', { name: 'Iniciar sesión' }).click();
```

### Después (accountCreation.spec.ts)
```typescript
await loginPage.login(testData.login.email, testData.login.password);
```

## 📊 Beneficios

1. **Mantenibilidad**: Si cambia un selector, solo se actualiza en un lugar
2. **Legibilidad**: El test es autodocumentado
3. **Reutilización**: Los Page Objects se pueden usar en otros tests
4. **Escalabilidad**: Fácil agregar nuevos tests
5. **Datos Dinámicos**: Cada ejecución usa datos diferentes
6. **Tipado**: TypeScript brinda seguridad de tipos

## 🎯 Uso

### Ejecutar el test refactorizado:
```bash
npx playwright test accountCreation.spec.ts
```

### Ejecutar con UI mode:
```bash
npx playwright test accountCreation.spec.ts --ui
```

### Ejecutar con headed mode:
```bash
npx playwright test accountCreation.spec.ts --headed
```

## 📝 Notas

- El archivo `test-2.spec.ts` se mantiene como referencia
- El nuevo test `accountCreation.spec.ts` es la versión optimizada
- Los Page Objects están listos para ser reutilizados en nuevos tests
- Todos los datos son generados dinámicamente con Faker
