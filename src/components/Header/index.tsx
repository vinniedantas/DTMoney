import logoImg from "../../assets/Logo.svg";
import { Container, Content } from "./styles";
import { IHeaderProps } from "./IHeaderProps";



export function Header({ onOpenNewTransactionModal }: IHeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Dt Money" />
                <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
            </Content>
        </Container>
    )
}