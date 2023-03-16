import { dark } from "../../themes/dark";
import { light } from "../../themes/light";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light" ? light : dark),
  },
});
