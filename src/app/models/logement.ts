export class Logements {
	private image :string;
	private name : string;
	private ville : string;
	private note : number;
	private personnes: number;
	private caution :number;
	private prix :number;
	private tag :string;

	public getImage(){
		return this.image;
	}
	public setImage(img){
		this.image = img;
	}
	public getName(){
		return this.name;
	}
	public setName(name){
		this.name = name;
	}
	public getVille(){
		return this.ville;
	}
	public setVille(ville){
		this.ville = ville;
	}
	public getNote(){
		return this.note;
	}
	public setNote(note){
		this.note = note;
	}
	public getPersonnes(){
		return this.personnes;
	}
	public setPersonnes(personne){
		this.personnes = personne;
	}
	public getCaution(){
		return this.caution;
	}
	public setCaution(caution){
		this.caution = caution;
	}
	public getPrix(){
		return this.prix;
	}
	public setPrix(prix){
		this.prix = prix;
	}
	public getTag(){
		return this.tag;
	}
	public setTag(tag){
		this.tag = tag;
	}
}
