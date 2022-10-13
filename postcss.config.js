module.exports = {
    "plugins": [
      "postcss-flexbugs-fixes",
      [
        "postcss-preset-env",
        {
          "autoprefixer": {
            "flexbox": "no-2009"
          },
          "stage": 3,
          "features": {
            "custom-properties": false
          }
        }
      ],
      [
        '@fullhuman/postcss-purgecss',
        {
          content: [
              './pages/**/*.{js,jsx,ts,tsx}',
              './components/**/*.{js,jsx,ts,tsx}'
          ],
          css:['./styles/css/style.css'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          safelist: {
            standard: [/accordion/,/transition/,/collap/,/transform/,/carousel/]
          }
        }
      ],
    ]
  }