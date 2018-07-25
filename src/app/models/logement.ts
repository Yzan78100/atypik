export class Logements {


  private _image :string;
  private _name : string;
  private _ville : string;
  private _note : number;
  private _personnes: number;
  private _caution :number;
  private _prix :number;
  private _tag :string;

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }



  get nom(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get ville(): string {
    return this._ville;
  }

  set ville(value: string) {
    this._ville = value;
  }

  get note(): number {
    return this._note;
  }

  set note(value: number) {
    this._note = value;
  }

  get personnes(): number {
    return this._personnes;
  }

  set personnes(value: number) {
    this._personnes = value;
  }

  get caution(): number {
    return this._caution;
  }

  set caution(value: number) {
    this._caution = value;
  }

  get prix(): number {
    return this._prix;
  }

  set prix(value: number) {
    this._prix = value;
  }

  get tag(): string {
    return this._tag;
  }

  set tag(value: string) {
    this._tag = value;
  }

	public getImage(){
		return this._image;
	}
	public setImage(img){
		this._image = img;
	}
	public getName(){
		return this._name;
	}
	public setName(name){
		this._name = name;
	}
	public getVille(){
		return this._ville;
	}
	public setVille(ville){
		this._ville = ville;
	}
	public getNote(){
		return this._note;
	}
	public setNote(note){
		this._note = note;
	}
	public getPersonnes(){
		return this._personnes;
	}
	public setPersonnes(personne){
		this._personnes = personne;
	}
	public getCaution(){
		return this._caution;
	}
	public setCaution(caution){
		this._caution = caution;
	}
	public getPrix(){
		return this._prix;
	}
	public setPrix(prix){
		this._prix = prix;
	}
	public getTag(){
		return this._tag;
	}
	public setTag(tag){
		this._tag = tag;
	}
}
