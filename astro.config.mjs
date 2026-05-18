export default defineConfig({
  site: 'https://igortau.github.io',
  base: '/portfolio-site',

  vite: {
    plugins: [tailwindcss()]
  }
});