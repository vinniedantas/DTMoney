import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/Close.svg";
import incomeImg from "../../assets/Income.svg";
import outcomeImg from "../../assets/Outcome.svg";
import { api } from "../../services/api";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { INewTransactionModalProps } from "./INewTransactionProps";


export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
     event.preventDefault();

     const data = {title, value, category, type}

     api.post('/transactions', data);


    }

    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Close" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input 
                placeholder="Título"
                value={title}
                onChange={event => setTitle(event.target.value)} 
                />

                <input 
                type="number" 
                placeholder="Valor" 
                value={value}
                onChange={event => setValue(Number(event.target.value))} 
                />

                <TransactionTypeContainer>
                    <RadioBox type="button" onClick={() => { setType("deposit"); }} 
                    isActive={type === 'deposit'}
                    activeColor="green"
                    ><img src={incomeImg} alt="Income" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox type="button" onClick={() => { setType("withdraw") }} 
                    isActive={type === 'withdraw'}
                    activeColor="red"
                    
                    ><img src={outcomeImg} alt="Outcome" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                placeholder="Categoria" 
                value={category}
                onChange={event => setCategory(event.target.value)} 
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>








    )
}