import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { TransactionsContext } from "../../contexts/TransactionsContext/TransactionsContext";
import { INewTransactionModalProps } from "./INewTransactionProps";

import closeImg from "../../assets/images/Close.svg";
import incomeImg from "../../assets/images/Income.svg";
import outcomeImg from "../../assets/images/Outcome.svg";


import { Container, TransactionTypeContainer, RadioBox } from "./styles";


export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModalProps) {
    const { createTransaction} = useContext(TransactionsContext)


    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
     event.preventDefault();

     createTransaction({
         title,
         amount,
         category,
         type
     })

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
                value={amount}
                onChange={event => setAmount(Number(event.target.value))} 
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