class Tuile {
  constructor(x, y, l, h, couleur) {
    this.x = x
    this.y = y
    this.largeur = l
    this.hauteur = h
    this.couleur = couleur
  }

generate(){
  c.fillStyle = this.couleur
  c.fillRect(this.x, this.y, this.largeur, this.hauteur)
}

movex(newx){
  this.x = newx
}

movey(newy){
  this.y = newy
}

}
