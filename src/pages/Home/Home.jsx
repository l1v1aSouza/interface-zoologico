import './Home.css'
import Atracao from '../../components/Atracao/Atracao';
import Navegacao from '../../components/Navegacao/Navegacao';
import Welcome from '../../components/Welcome/Welcome';

function Home() {
    const componentes = [];
    for (let i = 0; i <= 2; i++) {
        componentes.push(<Atracao key={i} />)
    }
    return (
        <>
            <Navegacao></Navegacao>
            <Welcome></Welcome>
            <div className="ctn-atracoes">
                {componentes}
            </div>
        </>
    )
}

export default Home;