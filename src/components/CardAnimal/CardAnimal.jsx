import './CardAnimal.css'
import imgNotFound from '../../assets/img-not-found.png'

function CardAnimal({ animal }) {

    const exibeID = () => {
        console.log(animal.idanimal, "\n", animal);
    }

    return (
        <div className='card-animal'>
            <img src={imgNotFound} alt="Imagem não encontrada" onClick={exibeID} />
            <p>Nome: {animal.nomeanimal}</p>
            <p>Gênero: {animal.generoanimal}</p>
            <p>Espécie: {animal.tipoanimal}</p>
            <p>Envergadura: {animal.envergadura}</p>
        </div >
    );
}

export default CardAnimal;