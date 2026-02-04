import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';



test('test', async ({ page }) => {
  const adminEmail = 'admin1@yopmail.com';
  const password = 'Hola123*';
  const companyName = faker.company.name();
  const representativeName = faker.person.fullName();
  const companyEmail = `${faker.internet.username()}@yopmail.com`;
  const adminFullName = faker.person.fullName();
  const managerName = faker.person.firstName();
  const position = faker.person.jobTitle();
  const businessName = faker.company.buzzNoun();
  const nit = faker.string.numeric(8);
    const telefono = faker.string.numeric(8);
    const adminNit = faker.string.numeric(9);
    const adminTelefono = faker.string.numeric(8);
    const nit2 = faker.string.numeric(9);
    const direccion = faker.location.streetAddress();
    const telefono2 = faker.string.numeric(8);


  await page.goto('https://qa.bo.pre-credit.com/auth/login');
  await page.locator('input[type="email"]').fill(adminEmail);
  await page.locator('input[type="password"]').fill(password);
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('button', { name: '窱 Crear cuenta' }).click();
  await page.locator('app-selector').filter({ hasText: 'Tipo de institución*' }).getByRole('button').click();
  await page.getByText('Cooperativa').click();
  await page.locator('app-selector').filter({ hasText: 'Moneda* Seleccionar opciones' }).getByRole('button').click();
  await page.getByText('Peso colombiano (COP)').click();
  await page.getByRole('button', { name: 'Seleccionar opciones... ' }).click();
  await page.getByRole('listitem').filter({ hasText: '(UTC-01:00) Azores' }).click();
  await page.locator('precredit-input').filter({ hasText: 'Razón social / Nombre' }).getByPlaceholder('Ingresar').fill(companyName);
  await page.locator('precredit-input').filter({ hasText: 'NIT*' }).getByPlaceholder('Ingresar').fill(nit);
 
  await page.locator('precredit-input').filter({ hasText: 'NIT*' }).getByPlaceholder('Ingresar').fill(nit);
  await page.getByRole('textbox', { name: 'Ingresar' }).nth(3).click();
  await page.getByRole('textbox', { name: 'Ingresar' }).nth(3).fill(representativeName);
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill(companyEmail);
  await page.getByRole('textbox', { name: 'Teléfono*' }).fill(telefono);
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Continuar' }).scrollIntoViewIfNeeded(); 
    await page.getByRole('button', { name: 'Continuar' }).click();
await page.waitForTimeout(2000);

  await page.getByRole('button', { name: '窱 Agregar administrador' }).isVisible({ timeout: 5000 });
  await page.getByRole('button', { name: '窱 Agregar administrador' }).click();

  await page.locator('precredit-input').filter({ hasText: 'Nombre completo* Este campo' }).getByPlaceholder('Ingresar').fill(adminFullName);
  await page.locator('input[type="email"]').fill(companyEmail);
  await page.getByRole('spinbutton').fill(adminNit);
  await page.getByRole('textbox', { name: 'Teléfono*' }).fill(adminTelefono);
  await page.getByRole('button', { name: 'Agregar', exact: true }).click();
   await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Continuar' }).scrollIntoViewIfNeeded(); 
    await page.getByRole('button', { name: 'Continuar' }).click();
await page.waitForTimeout(2000);


  await page.locator('app-checkbox input').nth(0).click();
  await page.getByText('Equipos ilimitados').click();
  await page.getByRole('button', { name: 'Guardar' }).click();
  await page.locator('app-checkbox input').nth(2).click();
  await page.getByText('Listas ilimitadas').click();
  await page.getByText('Listas propias PRECREDIT').click();
  await page.getByRole('button', { name: 'Guardar' }).click();
 await page.locator('app-checkbox input').nth(4).click();
  await page.getByText('Conexiones ilimitadas').click();
  await page.getByText('Conexiones propias PRECREDIT').click();
  await page.getByRole('button', { name: 'Guardar' }).click();
 await page.locator('app-checkbox input').nth(1).click();
  await page.getByText('Productos ilimitados').click();
  await page.locator('div:nth-child(2) > .space-y-3 > div').first().click();
  await page.locator('.ng-untouched > .checkbox-wrapper > div > .flex').first().click();
  await page.getByRole('button', { name: 'Guardar' }).click();
  await page.locator('app-checkbox input').nth(3).click();
  await page.getByText('Workflows ilimitados').click();
  await page.getByRole('button', { name: 'Guardar' }).click();
    await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Continuar' }).scrollIntoViewIfNeeded(); 
    await page.getByRole('button', { name: 'Continuar' }).click();
await page.waitForTimeout(2000);


  await page.locator('app-checkbox input').nth(0).click()
   await page.locator('app-checkbox input').nth(1).click()
  await page.locator('app-checkbox input').nth(2).click();
  await page.locator('card-with-checkbox').filter({ hasText: 'Recursos PRECREDIT' }).locator('label').click();
  await page.locator('src-dynamic-modal-form-checkbox').getByRole('button', { name: 'Continuar' }).click();
  await page.locator('app-checkbox input').nth(3).click();
  await page.locator('card-with-checkbox').filter({ hasText: 'Recursos PRECREDIT' }).locator('label').click();
   await page.locator('src-dynamic-modal-form-checkbox').getByRole('button', { name: 'Continuar' }).click();
 await page.locator('app-checkbox input').nth(4).click() 
    await page.locator('card-with-checkbox').filter({ hasText: 'Recursos PRECREDIT' }).locator('label').click();
     await page.locator('src-dynamic-modal-form-checkbox').getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();


  await page.locator('app-selector').click();
  await page.getByText('Ilimitado').click();
  await page.getByRole('tab', { name: 'Listas' }).click();
  await page.locator('app-selector').nth(0).click();
  await page.getByLabel('Listas').getByText('Ilimitado').click();
  await page.locator('app-selector').nth(1).click();
  await page.locator('ul').getByText('Ilimitado').click();
  await page.getByRole('tab', { name: 'Conexiones' }).click();
  await page.locator('app-selector').nth(0).click();
  await page.getByText('Paquete').click();
  await page.getByPlaceholder('Ingresar').nth(1).click();
  await page.getByRole('button', { name: 'Paquete ' }).click();
  await page.getByText('A demanda').click();
  await page.locator('[id="0"]').getByRole('textbox', { name: 'Ingresar' }).fill('100');
  await page.locator('[id="1"]').getByRole('textbox', { name: 'Ingresar' }).fill('100');
  await page.locator('[id="2"]').getByRole('textbox', { name: 'Ingresar' }).fill('100');
  await page.getByRole('tab', { name: 'Notificaciones' }).click();
  await page.locator('app-selector button').nth(0).click();
  await page.getByLabel('Notificaciones').getByText('Ilimitado').click();
  await page.locator('app-selector button').nth(1).click();
  await page.locator('ul').getByText('Ilimitado').click();
  await page.locator('app-selector button').nth(2).click();
  await page.locator('ul').getByText('Ilimitado').click();
  await page.getByRole('tab', { name: 'Almacenamiento' }).click();
  await page.locator('app-selector button').nth(0).click();
  await page.getByLabel('Almacenamiento').getByText('Ilimitado').click();
  await page.getByRole('button', { name: 'Continuar' }).click();



  await page.getByRole('textbox', { name: 'DD' }).fill('25');
  await page.locator('app-checkbox input').nth(0).click()
  await page.locator('#natural-person').nth(0).click();
  await page.locator('precredit-input').filter({ hasText: 'Razón social / Nombre' }).getByPlaceholder('Ingresar').fill(companyName);
  await page.locator('precredit-input').filter({ hasText: 'Nombre comercial' }).getByPlaceholder('Ingresar').fill(businessName);
  await page.locator('precredit-input').filter({ hasText: 'NIT* Este campo es obligatorio' }).getByPlaceholder('Ingresar').fill(nit2);
  await page.locator('app-selector').filter({ hasText: 'Actividad económica/giro*' }).getByRole('button').click();
  await page.getByText('Agricultura, ganadería, caza').click();
  await page.locator('app-selector').filter({ hasText: 'Régimen tributario*' }).getByRole('button').click();
  await page.getByText('Responsable Inscripto').click();
  await page.getByText('Moneda* Seleccionar opciones').click();
  await page.getByText('Peso colombiano (COP)').click();
  await page.locator('app-selector[label="Departamento*"]').click();
  await page.getByRole('listitem').filter({ hasText: 'Baja Verapaz' }).click();
  await page.locator('app-selector[label="Ciudad*"]').click();
  await page.getByText('Salamá').click();
  await page.locator('precredit-input').filter({ hasText: 'Dirección* Este campo es' }).getByRole('textbox').fill(direccion);
  await page.getByRole('textbox', { name: 'Ingresar' }).nth(4).fill(companyEmail);
  await page.getByRole('textbox', { name: 'Teléfono*' }).fill(telefono2);
  await page.getByRole('textbox', { name: 'Ingresar' }).nth(5).fill(managerName);
  await page.locator('precredit-input[label="Cargo"] input').fill(position);
  await page.locator('precredit-input').filter({ hasText: 'Correo electrónico* Este' }).locator('input[type="email"]').fill(companyEmail);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByText('Confirmo que la información').click();
  await page.getByLabel('').check();
  await page.getByRole('button', { name: 'Continuar' }).click();
});