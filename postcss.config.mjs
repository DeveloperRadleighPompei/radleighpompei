/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
  images: {
    domains: ['placehold.co'], // allow external images
  },
};

export default config;
