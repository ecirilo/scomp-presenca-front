module.exports = {
  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        headless: false,
      },
    }
  ],
  testDir: './tests/e2e',
};
