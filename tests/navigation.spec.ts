import { test, expect } from '@playwright/test';

test.describe('Navegação do Toolbar', () => {

  test.beforeEach(async ({ page }): Promise<void> => {
    await page.goto('http://localhost:4200');
    await page.fill('input[name="username"]', 'elder');
    await page.fill('input[name="password"]', '123456');
    await page.click('[data-pw="btnLogin"]');
  });

  test('deve navegar para a página inicial', async ({ page }): Promise<void> => {
    await page.click('text=Secomp');
    await expect(page.url()).toContain('/');
  });

  test('deve navegar para a página de Palestras', async ({ page }): Promise<void> => {
    await page.click('text=Palestras');
    await expect(page.url()).toContain('/palestras');
  });

  test('deve navegar para a página de Alunos', async ({ page }): Promise<void> => {
    await page.click('text=Alunos');
    await expect(page.url()).toContain('/alunos');
  });
});
