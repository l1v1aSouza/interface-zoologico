import React, { useState, useEffect } from 'react';
import Navegacao from '../../components/Navegacao/Navegacao';
import TabelaAnimal from '../../components/TabelaAnimal/TabelaAnimal';

function Depoimentos() {
    const [animais, setAnimais] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/listar-aves');
                if (!response.ok) {
                    throw new Error('Erro ao buscar servidor');
                }
                const listaAnimais = await response.json();
                setAnimais(listaAnimais);
            } catch (error) {
                console.error('Erro: ', error);
            }
        }

        fetchData();     
    }, []);

    return (
        <>
            <Navegacao />
            <div className='ctn-animais'>
                {animais.length > 0 ? (
                    <TabelaAnimal animais={animais} />
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
        </>
    );
}

export default Depoimentos;
