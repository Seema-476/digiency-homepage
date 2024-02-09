/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./ src/**/ *.{ html, js }"],
  theme: {
    extend: {
      fontFamily: {
        'worksans': "'work sans',sans-serif"
      },
    },
    plugins: [],
  }
}
