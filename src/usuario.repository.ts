export class UsuarioRepository {
    private usuarios = [];

    async salvar(usuarios) {
        this.usuarios.push(usuarios);
    }

    async listar() {
        return this.usuarios;
    }
}

//2 capitulo ep 5