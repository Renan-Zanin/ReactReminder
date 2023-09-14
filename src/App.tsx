import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StickyNotes } from "./components/StickyNotes";
import { NoteProvider } from "./hooks/notesContext";
import dark from "./style/themes/dark";
import { GlobalStyle } from "./style/global";
import { useState } from "react";
import light from "./style/themes/light";

export interface NotesProps {
  title: string;
  description: string;
}

function App() {
  const [theme, setTheme] = useState(dark);

  function toggleTheme() {
    setTheme(theme.name === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <NoteProvider>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Hero />
        <StickyNotes />
      </NoteProvider>
    </ThemeProvider>
  );
}

export default App;
