export default {
  // PostCSS에 Tailwind CSS와 autoprefixer 플러그인을 적용
  plugins: {
    tailwindcss: {
      config: './tailwind.build.config.ts'
    },
    autoprefixer: {},
  },
}
