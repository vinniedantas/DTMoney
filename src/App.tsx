import { useState } from "react";
import { Header } from "./components/Header/index";
import { NewTransactionModal } from "./components/NewTransactionModal/index";
import { Dashboard } from "./components/Dashboard/index";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/globals";

Modal.setAppElement("#root");

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </>
  )
}
