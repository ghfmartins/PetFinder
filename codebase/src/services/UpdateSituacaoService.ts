import { EnumSituacao } from "../enum/EnumSituacao";
import { EnumTipoDeProcesso } from "../enum/EnumTipoDeProcesso";
import { AdoptionRepository } from "../repositories/AdoptionRepository";
import { DisappearanceRepository } from "../repositories/DisappearanceRepository";
import { FindingRepository } from "../repositories/FindingRepository";

export class UpdateSituacaoService {
    async execute(idUsuario: string, idPet: string, tipoDoProcesso: string) {

        let novaSituacaoDoProcesso: EnumSituacao
        switch (tipoDoProcesso) {
            case EnumTipoDeProcesso[EnumTipoDeProcesso.Adocao]:
                const adoptionRepository = new AdoptionRepository();

                var adocao = await adoptionRepository.findOne(idUsuario, idPet)

                novaSituacaoDoProcesso = adocao!.situacao === EnumSituacao[EnumSituacao.Ativo] ? EnumSituacao.Inativo : EnumSituacao.Ativo

                return await adoptionRepository.updateSitucao(idUsuario, idPet, novaSituacaoDoProcesso);

            case EnumTipoDeProcesso[EnumTipoDeProcesso.Desaparecido]:
                const disappearanceRepository = new DisappearanceRepository();

                var desaparecido = await disappearanceRepository.findOne(idUsuario, idPet)

                novaSituacaoDoProcesso = desaparecido!.situacao === EnumSituacao[EnumSituacao.Ativo] ? EnumSituacao.Inativo : EnumSituacao.Ativo

                return await disappearanceRepository.updateSitucao(idUsuario, idPet, novaSituacaoDoProcesso)

            case EnumTipoDeProcesso[EnumTipoDeProcesso.Achado]:
                const findingRepository = new FindingRepository();

                const encontrado = await findingRepository.findOne(idUsuario, idPet)

                novaSituacaoDoProcesso = encontrado!.situacao === EnumSituacao[EnumSituacao.Ativo] ? EnumSituacao.Inativo : EnumSituacao.Ativo

                return await findingRepository.updateSitucao(idUsuario, idPet, novaSituacaoDoProcesso)

            default:
                throw new Error("Nenhum tipo de processo informado!")
        }
    }
}