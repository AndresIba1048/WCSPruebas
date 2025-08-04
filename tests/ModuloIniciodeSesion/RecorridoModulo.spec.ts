import { test, expect } from '@playwright/test';

test('IniciodeSesionRecorrido', async ({ page }) => {
  await page.goto('https://llanosdemoxos.bits.bo/auth/login?redirect=%2Fhome');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.goto('https://llanosdemoxos.bits.bo/home');
  await page.locator('a').filter({ hasText: /^Usuarios$/ }).click();
  await page.getByRole('link', { name: ' Administración de Usuarios' }).click();
  await page.getByRole('tab', { name: 'POR REVISAR' }).click();
  await page.getByRole('tab', { name: 'RECHAZADOS' }).click();
  await page.getByRole('tab', { name: 'DESHABILITADOS' }).click();
  await page.getByRole('tab', { name: 'APROBADOS' }).click();
  await page.getByRole('link', { name: ' Administración de Roles' }).click();
  await page.getByRole('link', { name: ' Administración de Permisos' }).click();
  await page.getByRole('link', { name: ' Registro de Actividades' }).click();
  await page.getByRole('link', { name: ' Administración de Usuarios' }).click();
  await page.getByRole('button', { name: '' }).click();
});