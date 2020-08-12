export default class Product {
    id?:number;
    designacao:string;
    descricao: string;
    preco: number;
    id_categoria: number;
    deletado:number;

    constructor (id:number, designacao:string, descricao: string, preco: number, id_categoria: number, deletado:number) {
      this.id = id
      this.designacao = designacao
      this.descricao = descricao
      this.preco = preco
      this.id_categoria = id_categoria
      this.deletado = deletado
    }
}
