import { Container } from './styles';
import { Summary } from '../../components/Summary';
import { TransactionsTable } from '../../components/TransactionsTable';


export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}
