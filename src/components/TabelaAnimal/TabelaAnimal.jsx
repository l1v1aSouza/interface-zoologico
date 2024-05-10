import React from 'react';
import Table from 'react-bootstrap/Table';

function TabelaAnimal({ animais }) {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Gênero</th>
                    <th>Idade</th>
                    <th>Envergadura</th>
                </tr>
            </thead>
            <tbody>
                {animais.map((animal, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{animal.nomeanimal}</td>
                        <td>{animal.generoanimal}</td>
                        <td>{animal.idadeanimal}</td>
                        <td>{animal.envergadura}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default TabelaAnimal;