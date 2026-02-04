import { test } from '@playwright/test';
import { AccountCreationFlowPage } from '../pages/AccountCreationFlowPage';
import { TestDataHelper } from '../helpers/TestDataHelper';
import * as fs from 'fs';
import * as path from 'path';

test('Create new account with complete configuration', async ({ page }) => {
  const testData = TestDataHelper.generateTestData();
  const accountFlow = new AccountCreationFlowPage(page);
  
  await accountFlow.goto();
  await accountFlow.login(testData.login.email, testData.login.password);
  await accountFlow.createAccountWithBasicInfo(testData.account, testData.config.institutionType, testData.config.currency, testData.config.timezone);
  await accountFlow.addAndConfigureAdministrator(testData.admin);
  await accountFlow.configureAllModules();
  await accountFlow.configureAllResources(testData.config.resourceCount);
  await accountFlow.configureAllPlans();
  await accountFlow.completeBillingInformation(testData.billing, testData.config.billingDay, testData.config.economicActivity, testData.config.taxRegime, testData.config.currency, testData.config.department, testData.config.city);
  
  const emailFilePath = path.join(__dirname, '../test-data/generated-email.txt');
  const emailData = `Correo generado exitosamente: ${testData.account.email}\nFecha: ${new Date().toISOString()}\n`;
  fs.writeFileSync(emailFilePath, emailData, 'utf-8');
});
