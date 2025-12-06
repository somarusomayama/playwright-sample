import {test, expect} from '@playwright/test'

test('ページの表示テスト', async ({page}) => {
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle(/Google/)
})