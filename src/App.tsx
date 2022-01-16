import { useState } from "react";
import { Header } from "./components/Header/index";
import { NewTransactionModal } from "./components/NewTransactionModal/index";
import { TransactionsProvider } from "./contexts/TransactionsContext/TransactionsContext";
import { Dashboard } from "./screens/Dashboard/index";
import Modal from "react-modal";
import { GlobalStyle } from "./assets/styles/globals";

Modal.setAppElement("#root");

export const App = () => {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
		useState(false);

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true);
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false);
	}
	return (
		<TransactionsProvider>
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />
			<NewTransactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			/>
			<GlobalStyle />
		</TransactionsProvider>
	);
};
