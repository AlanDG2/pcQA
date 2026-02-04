import { Page } from '@playwright/test';
import { step } from '../utilities/decoators';

export interface AccountData {
  companyName: string;
  nit: string;
  representativeName: string;
  email: string;
  phone: string;
}

export interface AdminData {
  fullName: string;
  email: string;
  nit: string;
  phone: string;
}

export interface BillingData {
  companyName: string;
  businessName: string;
  nit: string;
  email: string;
  phone: string;
  address: string;
  managerName: string;
  position: string;
}

export class AccountCreationFlowPage {
  private readonly page: Page;

  private readonly emailInput = () => this.page.locator('input[type="email"]');
  private readonly passwordInput = () => this.page.locator('input[type="password"]');
  private readonly loginButton = () => this.page.getByRole('button', { name: 'Iniciar sesión' });

  private readonly createAccountButton = () => this.page.getByRole('button', { name: 'Crear cuenta' });
  private readonly institutionTypeSelector = () => this.page.locator('app-selector').filter({ hasText: 'Tipo de institución*' }).getByRole('button');
  private readonly currencySelector = () => this.page.locator('app-selector').filter({ hasText: 'Moneda* Seleccionar opciones' }).getByRole('button');
  private readonly timezoneSelector = () => this.page.getByRole('button', { name: 'Seleccionar opciones... ' });
  private readonly companyNameInput = () => this.page.locator('precredit-input').filter({ hasText: 'Razón social / Nombre' }).getByPlaceholder('Ingresar');
  private readonly nitInput = () => this.page.locator('precredit-input').filter({ hasText: 'NIT*' }).getByPlaceholder('Ingresar');
  private readonly representativeInput = () => this.page.getByRole('textbox', { name: 'Ingresar' }).nth(3);
  private readonly phoneInput = () => this.page.getByRole('textbox', { name: 'Teléfono*' });
  private readonly continueButton = () => this.page.getByRole('button', { name: 'Continuar' });

  private readonly addAdminButton = () => this.page.getByRole('button', { name: 'Agregar administrador' });
  private readonly adminFullNameInput = () => this.page.locator('precredit-input').filter({ hasText: 'Nombre completo* Este campo' }).getByPlaceholder('Ingresar');
  private readonly adminNitInput = () => this.page.getByRole('spinbutton');
  private readonly saveAdminButton = () => this.page.getByRole('button', { name: 'Agregar', exact: true });

  private readonly checkboxInput = (index: number) => this.page.locator('app-checkbox input').nth(index);
  private readonly saveButton = () => this.page.getByRole('button', { name: 'Guardar' });

  private readonly precreditResourcesCard = () => this.page.locator('card-with-checkbox').filter({ hasText: 'Recursos PRECREDIT' }).locator('label');
  private readonly modalContinueButton = () => this.page.locator('src-dynamic-modal-form-checkbox').getByRole('button', { name: 'Continuar' });

  private readonly appSelector = (index?: number) => index !== undefined ? this.page.locator('app-selector').nth(index) : this.page.locator('app-selector');
  private readonly tab = (name: string) => this.page.getByRole('tab', { name });
  private readonly appSelectorButton = (index: number) => this.page.locator('app-selector button').nth(index);
  private readonly connectionInput = (id: string) => this.page.locator(`[id="${id}"]`).getByRole('textbox', { name: 'Ingresar' });

  private readonly billingDayInput = () => this.page.getByRole('textbox', { name: 'DD' });
  private readonly naturalPersonRadio = () => this.page.locator('#natural-person').nth(0);
  private readonly businessNameInput = () => this.page.locator('precredit-input').filter({ hasText: 'Nombre comercial' }).getByPlaceholder('Ingresar');
  private readonly billingNitInput = () => this.page.locator('precredit-input').filter({ hasText: 'NIT* Este campo es obligatorio' }).getByPlaceholder('Ingresar');
  private readonly economicActivitySelector = () => this.page.locator('app-selector').filter({ hasText: 'Actividad económica/giro*' }).getByRole('button');
  private readonly taxRegimeSelector = () => this.page.locator('app-selector').filter({ hasText: 'Régimen tributario*' }).getByRole('button');
  private readonly departmentSelector = () => this.page.locator('app-selector[label="Departamento*"]');
  private readonly citySelector = () => this.page.locator('app-selector[label="Ciudad*"]');
  private readonly addressInput = () => this.page.locator('precredit-input').filter({ hasText: 'Dirección* Este campo es' }).getByRole('textbox');
  private readonly emailInputBilling = () => this.page.getByRole('textbox', { name: 'Ingresar' }).nth(4);
  private readonly managerNameInput = () => this.page.getByRole('textbox', { name: 'Ingresar' }).nth(5);
  private readonly positionInput = () => this.page.locator('precredit-input[label="Cargo"] input');
  private readonly managerEmailInput = () => this.page.locator('precredit-input').filter({ hasText: 'Correo electrónico* Este' }).locator('input[type="email"]');
  private readonly confirmCheckbox = () => this.page.getByLabel('');
  private readonly billingCurrencyButton = () => this.page.getByText('Moneda* Seleccionar opciones');

  constructor(page: Page) {
    this.page = page;
  }

  @step('ir a la página de login')
  async goto() {
    await this.page.goto('https://qa.bo.pre-credit.com/auth/login');
  }

  @step('Iniciar sesión con credenciales')
  async login(email: string, password: string) {
    await this.emailInput().fill(email);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
  }

  @step('Hacer clic en Crear cuenta')
  async clickCreateAccount() {
    await this.createAccountButton().click();
  }

  @step('Seleccionar tipo de institución: {0}')
  async selectInstitutionType(type: string) {
    await this.institutionTypeSelector().click();
    await this.page.getByText(type).click();
  }

  @step('Seleccionar moneda: {0}')
  async selectCurrency(currency: string) {
    await this.currencySelector().click();
    await this.page.getByText(currency).click();
  }

  @step('Seleccionar zona horaria: {0}')
  async selectTimezone(timezone: string) {
    await this.timezoneSelector().click();
    await this.page.getByRole('listitem').filter({ hasText: timezone }).click();
  }

  @step('Completar información básica de la cuenta')
  async fillAccountBasicInfo(data: AccountData) {
    await this.companyNameInput().fill(data.companyName);
    await this.nitInput().fill(data.nit);
    await this.representativeInput().fill(data.representativeName);
    await this.emailInput().fill(data.email);
    await this.phoneInput().fill(data.phone);
  }

  @step('Continuar al siguiente paso')
  async continueStep() {
    await this.page.waitForTimeout(2000);
    await this.continueButton().scrollIntoViewIfNeeded();
    await this.continueButton().click();
    await this.page.waitForTimeout(2000);
  }

  @step('Hacer clic en Continuar')
  async clickContinue() {
    await this.continueButton().click();
  }

  @step('Esperar botón de agregar administrador')
  async waitForAddAdminButton() {
    await this.addAdminButton().isVisible({ timeout: 5000 });
  }

  @step('Hacer clic en Agregar administrador')
  async clickAddAdmin() {
    await this.addAdminButton().click();
  }

  @step('Completar información del administrador')
  async fillAdminInfo(data: AdminData) {
    await this.adminFullNameInput().fill(data.fullName);
    await this.emailInput().fill(data.email);
    await this.adminNitInput().fill(data.nit);
    await this.phoneInput().fill(data.phone);
  }

  @step('Guardar administrador')
  async saveAdmin() {
    await this.saveAdminButton().click();
  }

  @step('Configurar módulo de Equipos')
  async configureTeamsModule() {
    await this.checkboxInput(0).click();
    await this.page.getByText('Equipos ilimitados').click();
    await this.saveButton().click();
  }

  @step('Configurar módulo de Listas')
  async configureListsModule() {
    await this.checkboxInput(2).click();
    await this.page.getByText('Listas ilimitadas').click();
    await this.page.getByText('Listas propias PRECREDIT').click();
    await this.saveButton().click();
  }

  @step('Configurar módulo de Conexiones')
  async configureConnectionsModule() {
    await this.checkboxInput(4).click();
    await this.page.getByText('Conexiones ilimitadas').click();
    await this.page.getByText('Conexiones propias PRECREDIT').click();
    await this.saveButton().click();
  }

  @step('Configurar módulo de Productos')
  async configureProductsModule() {
    await this.checkboxInput(1).click();
    await this.page.getByText('Productos ilimitados').click();
    await this.page.locator('div:nth-child(2) > .space-y-3 > div').first().click();
    await this.page.locator('.ng-untouched > .checkbox-wrapper > div > .flex').first().click();
    await this.saveButton().click();
  }

  @step('Configurar módulo de Workflows')
  async configureWorkflowsModule() {
    await this.checkboxInput(3).click();
    await this.page.getByText('Workflows ilimitados').click();
    await this.saveButton().click();
  }

  @step('Configurar recursos ({0} recursos)')
  async configureMultipleResources(resourceCount: number) {
    await this.checkboxInput(0).click();
    await this.checkboxInput(1).click();
    await this.checkboxInput(2).click();

    await this.precreditResourcesCard().click();
    await this.modalContinueButton().click();

    await this.checkboxInput(3).click();
    await this.precreditResourcesCard().click();
    await this.modalContinueButton().click();

    await this.checkboxInput(4).click();
    await this.precreditResourcesCard().click();
    await this.modalContinueButton().click();
  }

  @step('Continuar después de configurar recursos')
  async continueAfterResources() {
    await this.continueButton().click();
  }

  @step('Seleccionar plan ilimitado para Equipos')
  async selectUnlimitedForTeams() {
    await this.appSelector().click();
    await this.page.getByText('Ilimitado').click();
  }

  @step('Configurar planes de Listas')
  async configureListsTab() {
    await this.tab('Listas').click();
    await this.appSelector(0).click();
    await this.page.getByLabel('Listas').getByText('Ilimitado').click();
    await this.appSelector(1).click();
    await this.page.locator('ul').getByText('Ilimitado').click();
  }

  @step('Configurar planes de Conexiones')
  async configureConnectionsTab(values: string[] = ['100', '100', '100']) {
    await this.tab('Conexiones').click();
    await this.appSelector(0).click();
    await this.page.getByText('Paquete').click();
    await this.page.getByPlaceholder('Ingresar').nth(1).click();
    await this.page.getByRole('button', { name: 'Paquete ' }).click();
    await this.page.getByText('A demanda').click();

    for (let i = 0; i < values.length; i++) {
      await this.connectionInput(i.toString()).fill(values[i]);
    }
  }

  @step('Configurar planes de Notificaciones')
  async configureNotificationsTab() {
    await this.tab('Notificaciones').click();
    await this.appSelectorButton(0).click();
    await this.page.getByLabel('Notificaciones').getByText('Ilimitado').click();
    await this.appSelectorButton(1).click();
    await this.page.locator('ul').getByText('Ilimitado').click();
    await this.appSelectorButton(2).click();
    await this.page.locator('ul').getByText('Ilimitado').click();
  }

  @step('Configurar planes de Almacenamiento')
  async configureStorageTab() {
    await this.tab('Almacenamiento').click();
    await this.appSelectorButton(0).click();
    await this.page.getByLabel('Almacenamiento').getByText('Ilimitado').click();
  }

  @step('Establecer día de facturación: {0}')
  async setBillingDay(day: string) {
    await this.billingDayInput().fill(day);
  }

  @step('Aceptar términos y condiciones')
  async checkTermsAndConditions() {
    await this.checkboxInput(0).click();
  }

  @step('Seleccionar tipo de persona natural')
  async selectNaturalPerson() {
    await this.naturalPersonRadio().click();
  }

  @step('Completar información de la empresa')
  async fillCompanyInfo(data: BillingData) {
    await this.companyNameInput().fill(data.companyName);
    await this.businessNameInput().fill(data.businessName);
    await this.billingNitInput().fill(data.nit);
  }

  @step('Seleccionar actividad económica: {0}')
  async selectEconomicActivity(activity: string) {
    await this.economicActivitySelector().click();
    await this.page.getByText(activity).click();
  }

  @step('Seleccionar régimen tributario: {0}')
  async selectTaxRegime(regime: string) {
    await this.taxRegimeSelector().click();
    await this.page.getByText(regime).click();
  }

  @step('Seleccionar moneda en facturación: {0}')
  async selectCurrencyInBilling(currency: string) {
    await this.billingCurrencyButton().click();
    await this.page.getByText(currency).click();
  }

  @step('Seleccionar ubicación: {0}, {1}')
  async selectLocation(department: string, city: string) {
    await this.departmentSelector().click();
    await this.page.getByRole('listitem').filter({ hasText: department }).click();
    await this.citySelector().click();
    await this.page.getByText(city).click();
  }

  @step('Completar información de contacto')
  async fillContactInfo(data: BillingData) {
    await this.addressInput().fill(data.address);
    await this.emailInputBilling().fill(data.email);
    await this.phoneInput().fill(data.phone);
  }

  @step('Completar información del gerente')
  async fillManagerInfo(data: BillingData) {
    await this.managerNameInput().fill(data.managerName);
    await this.positionInput().fill(data.position);
    await this.managerEmailInput().fill(data.email);
  }

  @step('Confirmar información')
  async confirmInformation() {
    await this.page.getByText('Confirmo que la información').click();
    await this.confirmCheckbox().check();
  }

  @step('Enviar formulario')
  async submit() {
    await this.continueButton().click();
  }

  @step('Crear cuenta - Información básica completa')
  async createAccountWithBasicInfo(
    accountData: AccountData,
    institutionType: string,
    currency: string,
    timezone: string
  ) {
    await this.clickCreateAccount();
    await this.selectInstitutionType(institutionType);
    await this.selectCurrency(currency);
    await this.selectTimezone(timezone);
    await this.fillAccountBasicInfo(accountData);
    await this.continueStep();
  }

  @step('Agregar y configurar administrador')
  async addAndConfigureAdministrator(adminData: AdminData) {
    await this.waitForAddAdminButton();
    await this.clickAddAdmin();
    await this.fillAdminInfo(adminData);
    await this.saveAdmin();
    await this.continueStep();
  }

  @step('Configurar todos los módulos')
  async configureAllModules() {
    await this.configureTeamsModule();
    await this.configureListsModule();
    await this.configureConnectionsModule();
    await this.configureProductsModule();
    await this.configureWorkflowsModule();
    await this.continueStep();
  }

  @step('Configurar todos los recursos')
  async configureAllResources(resourceCount: number = 5) {
    await this.configureMultipleResources(resourceCount);
    await this.continueAfterResources();
  }

  @step('Configurar todos los planes')
  async configureAllPlans(connectionValues?: string[]) {
    await this.selectUnlimitedForTeams();
    await this.configureListsTab();
    await this.configureConnectionsTab(connectionValues);
    await this.configureNotificationsTab();
    await this.configureStorageTab();
    await this.clickContinue();
  }

  @step('Completar información de facturación')
  async completeBillingInformation(
    billingData: BillingData,
    billingDay: string,
    economicActivity: string,
    taxRegime: string,
    currency: string,
    department: string,
    city: string
  ) {
    await this.setBillingDay(billingDay);
    await this.checkTermsAndConditions();
    await this.selectNaturalPerson();
    await this.fillCompanyInfo(billingData);
    await this.selectEconomicActivity(economicActivity);
    await this.selectTaxRegime(taxRegime);
    await this.selectCurrencyInBilling(currency);
    await this.selectLocation(department, city);
    await this.fillContactInfo(billingData);
    await this.fillManagerInfo(billingData);
    await this.clickContinue();
    await this.confirmInformation();
    await this.submit();
  }
}
