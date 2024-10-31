export class Character {
  constructor(
    public nombre: string,
    public altura: string,
    public masa: string,
    public colorPiel: string,
    public colorCabello: string,
    public colorOjos: string,
    public añoNacimiento: string,
    public genero: string,
    public hogar: string,
    public peliculas: string[],
    public naves: string[],
    public vehiculos: string[],
    public especies: string[],
    public creado: string,
    public editado: string,
    public url: string,
  ) {}
}
