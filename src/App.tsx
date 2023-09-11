import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StickyNotes } from "./components/StickyNotes";
import { NoteProvider } from "./hooks/notesContext";

export interface NotesProps {
  title: string;
  description: string;
}

function App() {
  return (
    <NoteProvider>
      <Header />
      <Hero />
      <StickyNotes />
    </NoteProvider>
  );
}

export default App;
