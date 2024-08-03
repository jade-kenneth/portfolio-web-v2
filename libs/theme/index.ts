import { extendBaseTheme } from "@chakra-ui/react";
import { styles } from "./style";
import { colors } from "./colors";
import { Button } from "./components/button";
import { components } from "./components";

export const theme = extendBaseTheme({
  styles,
  colors,
  components,
});
