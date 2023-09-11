// NoteContext.tsx
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

type Note = {
  title: string;
  description: string;
};

type NoteContextType = {
  notes: Note[];
  addNote: (title: string, description: string) => void;
  deleteNote: (index: number) => void;
};

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export const useNoteContext = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNoteContext deve ser usado dentro de um NoteProvider");
  }
  return context;
};

type NoteProviderProps = {
  children: ReactNode;
};

export const NoteProvider = ({ children }: NoteProviderProps) => {
  const [notes, setNotes] = useState<Note[]>([] as Note[]);

  useEffect(() => {
    const storedNotes = JSON.parse(
      localStorage.getItem("notes") || "[]"
    ) as Note[];
    setNotes(storedNotes);
  }, []);

  const addNote = (title: string, description: string) => {
    setNotes([...notes, { title, description }]);
  };

  const deleteNote = (index: number) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};
