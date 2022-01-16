import { useContext } from "react";
import incomeImg from "../../assets/images/Income.svg";
import outcomeImg from "../../assets/images/Outcome.svg";
import totalImg from "../../assets/images/Total.svg";
import { Container } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext/TransactionsContext";

export function Summary() {
    const {transactions} = useContext(TransactionsContext);

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1.000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>-R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}