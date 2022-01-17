import { useContext } from "react";
import incomeImg from "../../assets/images/Income.svg";
import outcomeImg from "../../assets/images/Outcome.svg";
import totalImg from "../../assets/images/Total.svg";
import { Container } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext/TransactionsContext";

export function Summary() {
	const { transactions } = useContext(TransactionsContext);

	const summary = transactions.reduce(
		(acc, transaction) => {
			if (transaction.type === "deposit") {
				acc.deposits += transaction.amount;
				acc.total += transaction.amount;
			} else {
				acc.widthdraw += transaction.amount;
				acc.total -= transaction.amount;
			}
			return acc;
		},
		{
			deposits: 0,
			widthdraw: 0,
			total: 0,
		},
	);

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
				</header>
				<strong>
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(summary.deposits)}
				</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt="Saídas" />
				</header>
				<strong>
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(summary.widthdraw)}
				</strong>
			</div>
			<div className="highlight-background">
				<header>
					<p>Total</p>
					<img src={totalImg} alt="Total" />
				</header>
				<strong>
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(summary.total)}
				</strong>
			</div>
		</Container>
	);
}
