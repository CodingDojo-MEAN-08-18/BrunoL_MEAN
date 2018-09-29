export class Rsvp {
  constructor(
    public player: String = "", // oid of player 
    public game: String = "", // oid of game
    public status: Number = 0 // 0=undecided, 1=yes, 2=no
    ){}
}
