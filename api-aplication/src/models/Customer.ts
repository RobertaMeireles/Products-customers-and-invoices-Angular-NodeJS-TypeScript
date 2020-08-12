export default class Customer {
    id?:number;
    nome:string;
    idade: string;
    morada: string;
    cod_postal: number;
    deletado:number

    constructor (id:number, nome:string, idade: string, morada: string, cod_postal: number, deletado: number) {
      this.id = id
      this.nome = nome
      this.idade = idade
      this.morada = morada
      this.cod_postal = cod_postal
      this.deletado = deletado
    }
}
