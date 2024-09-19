import { Body, Controller, Post } from "@nestjs/common";

@Controller('/usuarios')
export class UsuarioController {

    @Post()
    async criaUsuario(@Body() dadosDoUsuarios) {
        return dadosDoUsuarios
    }

}