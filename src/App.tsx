import { CssBaseline, ThemeProvider } from "@mui/material";
import TagSectionContainer from "./components/TagSectionContainer";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TagSectionContainer />
    </ThemeProvider>
  );
}

export default App;
