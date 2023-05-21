module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "Graphik", "sans-serif"],
      serif: ["Inter", "Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        "nft-primary-light": "rgb(120,82,243)",
        "nft-primary-dark": "rgb(96,66,196)",
        "nft-primary-transparent": "rgb(226,221,251)",
      },
      // backgroundImage: {
      //   "hero-left1": "url('./src/nftmarketplace/assets/nft1.jpg')",
      //   "hero-left2": "url('./src/nftmarketplace/assets/nft2.jpg')",
      //   "hero-left3": "url('./src/nftmarketplace/assets/nft4.jpg')",
      // },
    },
  },
};
