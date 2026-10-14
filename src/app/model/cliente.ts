export interface Cliente{
    id?:number,
    nome:string,
    sobrenome:string,
    dataNascimento:string,
    cpf:string,
    email: string,
    senha?: string
}