import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import AnimalRequests from '../../fetch/AnimalRequests';
import { FaRegTrashAlt } from "react-icons/fa";


function TabelaAnimal() {

    const [animais, setAnimais] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setAnimais(await AnimalRequests.listarAnimais());
        }

        fetchData();
    }, [])

    const deletarAnimal = async (id) => {
        const confirma = window.confirm(`Deseja deletar o animal com id ${id}?`);
        if (confirma){
            if(await AnimalRequests.deletarAnimal(id)) {
                window.alert('Animal deletado com sucesso');
                window.location.reload();
            } else {
                window.alert('Erro ao deletar animal');
            }
        }
    }

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Gênero</th>
                    <th>Idade</th>
                    <th>Envergadura</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {animais.map((animal, index) => (
                    <tr key={index}>
                        <td>{animal.idanimal}</td>
                        <td>{animal.nomeanimal}</td>
                        <td>{animal.generoanimal}</td>
                        <td>{animal.idadeanimal}</td>
                        <td>{animal.envergadura}</td>
                        <td onClick={() => deletarAnimal(animal.idanimal)}><FaRegTrashAlt />
</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default TabelaAnimal;