//Importing the function createContext from react//
import { createContext } from "react";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { ITransaction } from "../../components/TransactionsTable/ITransaction";
import { ITransactionsProviderProps } from "./ITransactionsProviderProps";

type TransactionInput = Omit<ITransaction, 'id' | 'createdAt'>

interface TransactionsContextData {
	transactions: ITransaction[];
	createTransaction: (transaction: TransactionInput) => void;
}

//Storing the function createContext inside a variable Transactions Context and defining an initial value as an empty Array//
export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

//Creating a Transaction Provider to export the State
export function TransactionsProvider({ children }: ITransactionsProviderProps) {
	const [transactions, setTransactions] = useState<ITransaction[]>([]);

	useEffect(() => {
		api
			.get("transactions")
			.then((response) => setTransactions(response.data.transactions));
	}, []);

	function createTransaction(transaction: TransactionInput) {	
     api.post('/transactions', transaction);
	}

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction}}>
			{children}
		</TransactionsContext.Provider>
	);
}
