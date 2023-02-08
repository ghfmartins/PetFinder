import { describe, expect, test } from '@jest/globals';
import { CreateUserService } from '../../src/services/CreateUserService';

describe('Autenticação', () => {
    test('Cadastro de usuário valido', async () => {
        const newUser = {
            name: 'Gustavo',
            email: 'gustavo@email.com',
            senha: 'teste123',
            logradouro: null,
            numero: null,
            complemento: null,
            bairro: null,
            cidade: null,
            estado: null,
            telefone: null,
            CEP: null
        }

        const createUserService = new CreateUserService();

        expect(await createUserService.execute(newUser)).toBeUndefined()
    })

    test('Cadastro de usuário valido', async () => {
        const newUser = {
            name: 'Gustavo',
            email: 'gustavo@email.com',
            senha: 'teste123',
            logradouro: null,
            numero: null,
            complemento: null,
            bairro: null,
            cidade: null,
            estado: null,
            telefone: null,
            CEP: null
        }

        const createUserService = new CreateUserService();

        expect(await createUserService.execute(newUser)).toBeUndefined()
    })
})