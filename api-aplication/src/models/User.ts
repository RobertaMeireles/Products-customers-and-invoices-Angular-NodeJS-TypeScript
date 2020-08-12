export default class User {
    id?:number;
    email:string;
    password: string;
    nome: string;

    constructor (id:number, email:string, password:string, nome:string) {
      this.id = id
      this.email = email
      this.password = password
      this.nome = nome
    }
}
