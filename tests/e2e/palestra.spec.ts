import { test, expect } from '@playwright/test';

test.describe('Cadastro de Palestra', () => {

  test.beforeEach(async ({ page }): Promise<void> => {
    await page.goto('http://localhost:4200');
    await page.fill('input[name="username"]', 'elder');
    await page.fill('input[name="password"]', '123456');
    await page.click('[data-pw="btnLogin"]');
  });

  test('deve cadastrar uma nova palestra', async ({ page }): Promise<void> => {
    await page.click('text=Palestras');
    await page.waitForTimeout(2000);
    await page.click('text=Nova Palestra');
    await page.waitForTimeout(2000);
    await page.fill('input[name="nome"]', 'Palestra Teste 1');
    await page.fill('textarea[name="descricao"]', 'Descrição da Palestra Teste 1');
    await page.fill('input[name="horario"]', '23/11/2023');
    await page.waitForTimeout(2000);
    await page.click('[data-pw="btnSalvar"]');
    await page.waitForTimeout(2000);
    await expect(page.locator("#swal2-title"))
      .toHaveText('Palestra criada com sucesso!');
  });
});
