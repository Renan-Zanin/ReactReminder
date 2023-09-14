import { useState, useContext } from "react";
import reminderLogo from "../../assets/images/Logo.jpg";
import { Button } from "../Button";
import { NewStickyModal } from "../NewStickyModal";
import { Container } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Sun, Moon } from "@phosphor-icons/react";

interface HeaderProps {
  toggleTheme: () => void;
}

export function Header({ toggleTheme }: HeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { colors, name } = useContext(ThemeContext);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <Container>
      <img src={reminderLogo} alt="Logo React Reminder" />

      <div>
        <div>
          <Sun size={24} color={colors.textColor} />
          <Switch
            onChange={toggleTheme}
            checked={name === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={16}
            width={40}
            offColor={colors.delete}
            onColor={colors.border}
          />
          <Moon size={24} color={colors.textColor} />
        </div>
        <Button title="Adicionar Lembrete" onClick={handleOpenModal} />
      </div>

      <NewStickyModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </Container>
  );
}
