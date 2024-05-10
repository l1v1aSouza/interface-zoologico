class AnimalRequests {

    constructor() {
        this.serverUrl ='http://localhost:3000';
        this.routeListarAnimal = '/listar-aves';
        this.routeCadastrarAnimal = '/novo/ave';        
        this.routeDeletarAnimal = '/remover/animal';
        this.routeAlterarAnimal = '/atualizar/animal';
    }

    async listarAnimais () {
        try {
            const response = await fetch(`${this.serverUrl}${this.routeListarAnimal}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar servidor');
            }
           return await response.json();
        } catch (error) {
            console.error('Erro: ', error);
        }
    }

        /**
     * Deleta um animal do servidor
     * 
     * @param {*} idAnimal ID do animal a ser deletado
     * @returns **verdadeiro (true)** caso o animal tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */
        async deletarAnimal(idAnimal) {
            try {
                // Faz a requisição para o servidor, passando o endereço, a rota e a query com o ID do animal
                const response = await fetch(`${this.serverUrl}${this.routeDeletarAnimal}?idAnimal=${idAnimal}`, {
                    // Informa o verbo a ser acessado
                    method: 'DELETE'
                });
                // Verifica se a resposta não foi bem sucedida ...
                if (!response.ok) {
                    // ... lança um erro
                    throw new Error('Erro ao enviar formulário');
                }
                // retorna true caso a resposta seja bem sucedida
                return true;
            } catch (error) {
                // caso ocorra algum erro na comunicação
                console.error('Erro: ', error);
                window.alert('Erro ao cadastrar animal');
                return null;
            }
        }
}

export default new AnimalRequests