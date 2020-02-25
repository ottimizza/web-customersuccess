export class Suggestion {

  constructor(
    public sugestaoMelhoria: string,
    public problema: string,
    public resultadoEsperado: string,
    public diminuicaoSuporte: Avaliation,
    public automacaoProcesso: Avaliation,
    public aumentoProdutividade: Avaliation,
    public likes: number,
    public dislikes: number,
    public comments: number,
    public idUsuario: number
  ) { }

}

export enum Avaliation {
  POUCO = 1,
  MÉDIO,
  MUITO
}
