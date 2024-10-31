export class Film {
  constructor(
    public titulo: string,
    public nro_episodio: number,
    public parrafos_apertura: string,
    public director: string,
    public productor: string,
    public fecha_lanzamiento: Date,
    public especies: string[],
    public naves: string[],
    public vehiculos: string[],
    public personajes: string[],
    public planetas: string[],
    public creado: string,
    public editado: string,
    public url: string,
  ) {}
}
