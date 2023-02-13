export interface IUsuario extends Document {
  nombre: string;
  usuario: string;
  email: string;
  password: string;
}

export interface IPasajero extends Document{
  readonly nombre:string;
  readonly asiento:string;
  readonly vuelo:string;
  readonly horario:string;
}