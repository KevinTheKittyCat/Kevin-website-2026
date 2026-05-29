import { createSystem, defaultConfig } from "@chakra-ui/react"
import { buttonRecipe } from "./theme/button.recipe"
import { linkRecipe } from "./theme/link.recipe"
import layerStyles from "./theme/combinedLayerStyles"

export const system = createSystem(defaultConfig, {
  globalCss: {
    html: {
      fontSize: "16px",
    },
    body: {
      fontSize: "0.875rem",
      margin: 0,
      padding: 0,
      backgroundColor: "ui.background",
      color: "ui.text",
    },
    ".main-link": {
      color: "ui.main",
      fontWeight: "bold",
    },
    a: {
      color: "ui.main",
      textDecoration: "none",
      _hover: {
        textDecoration: "underline",
      },
    },
  },
  theme: {
    tokens: {
      colors: {
        ui: {
          main: { value: "#ff3269ff" },
          mainActive: { value: "hsl(344, 100%, 40%)" },
          secondary: { value: "#7E52A0" },
          accent: { value: "#F0F600" },
          background: { value: "#080808" },
          text: { value: "#ffffff" },
          mainText: { value: "#ffffff" },
        },
        card: {
          glassBackground: { value: "#ffffff09" },
          glassBorder: { value: "#ffffffc0" },
          glassText: { value: "#ffffff" },
        },
      },
    },
    layerStyles: layerStyles,
    recipes: {
      button: buttonRecipe,
      link: linkRecipe,
    },
  },
})
