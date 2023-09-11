import { useState, FormEvent } from "react";
import Modal from "react-modal";
import { useNoteContext } from "../../hooks/notesContext";
import { Button } from "../Button";
import { Container } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewStickyModal({ isOpen, onRequestClose }: ModalProps) {
  const [stickyName, setStickyName] = useState("");
  const [stickyDescription, setStickyDescription] = useState("");
  const { addNote, notes } = useNoteContext();

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    localStorage.setItem("notes", JSON.stringify(notes));
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnEsc
      className="react-modal-content"
      style={{ overlay: { background: "rgba(0,0,0,0.6)" } }}
    >
      <Container onSubmit={handleFormSubmit}>
        <h1>Criar Lembrete</h1>
        <div>
          <input
            type="text"
            placeholder="Nome"
            onChange={(event) => setStickyName(event.target.value)}
          />
          <textarea
            placeholder="Descrição"
            onChange={(event) => setStickyDescription(event.target.value)}
          />
        </div>
        <Button
          title="Adicioanar Lembrete"
          onClick={() => addNote(stickyName, stickyDescription)}
        />
      </Container>
    </Modal>
  );
}
