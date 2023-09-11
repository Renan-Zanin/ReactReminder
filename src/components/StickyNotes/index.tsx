import { For } from "million/react";
import { useNoteContext } from "../../hooks/notesContext";
import { Container, Grid } from "./styles";
import { NotesProps } from "../../App";

export function StickyNotes() {
  const { notes } = useNoteContext();

  return (
    <Container>
      <div className="reminderTitle">
        <h1>Lembretes - {notes.length}</h1>
      </div>
      <Grid>
        <For each={notes} as="div">
          {(notes: NotesProps) => (
            <div key={notes.title}>
              <h2>{notes.title}</h2>
              <p>{notes.description}</p>
            </div>
          )}
        </For>
      </Grid>
    </Container>
  );
}
