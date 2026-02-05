import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  
  // Timeout global para cada test (en milisegundos)
  timeout: 120000, // 120 segundos (default es 30000)
  
  // Timeout para expect assertions
  expect: {
    timeout: 10000, // 10 segundos (default es 5000)
  },
  
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    
    // Timeout para acciones individuales (click, fill, etc)
    actionTimeout: 15000, // 15 segundos (default es 0 = sin límite)
    
    // Timeout para navegación (goto, waitForURL, etc)
    navigationTimeout: 30000, // 30 segundos (default es 30000)
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },


  ],
});
