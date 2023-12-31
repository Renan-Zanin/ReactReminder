import { For } from "million/react";
import { useNoteContext } from "../../hooks/notesContext";
import { Container, Grid } from "./styles";
import { NotesProps } from "../../App";
import trash from "../../assets/images/trash.svg";

export function StickyNotes() {
  const { notes, deleteNote } = useNoteContext();

  return (
    <Container>
      <div className="reminderTitle">
        <h1>Lembretes - {notes.length}</h1>
      </div>
      <Grid>
        <For each={notes} as="div">
          {(notes: NotesProps, index: number) => (
            <div key={notes.title}>
              <h2>{notes.title}</h2>
              <p>{notes.description}</p>
              <button onClick={() => deleteNote(index)}>
                <img src={trash} />
              </button>
            </div>
          )}
        </For>
      </Grid>
    </Container>
  );
}
