import './Animais.css'
import React, { useEffect, useState } from 'react';
import CardAnimal from '../../components/CardAnimal/CardAnimal';
import Navegacao from '../../components/Navegacao/Navegacao';
import AnimalRequests from '../../fetch/AnimalRequests';

function Animais() {

    // RECUPERANDO LISTA DE ANIMAIS DO SERVIDOR
    const [animais, setAnimais] = useState(null);

    // Recupera a lista de todos os animais do servidor
    useEffect(() => {

        const fetchData = async () => {
            setAnimais(await AnimalRequests.listarAnimais());
        }

        fetchData();
    }, []);

    const deletarAnimal = async (id) => {
        const confirma = window.confirm (`Deseja deletar o animal com id ${id}?`);
        if (confirma) {
            if (await AnimalRequests.deletarAnimal(id)){
                window.alert('Animal deletado com sucesso');
                window.location.reload();
            }else{
                window.alert('Erro ao deletar o animal');
            }
        }
    }


    return (
        <>
            <Navegacao />
            <div className='ctn-animais'>
                {animais ? (
                    // Renderize o seu componente para cada item da lista
                    animais.map(animal => (
                        <CardAnimal key={animal.idanimal} animal={animal} />
                    ))
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
        </>
    );
}

export default Animais;