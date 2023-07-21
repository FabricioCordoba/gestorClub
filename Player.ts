import { ClubMember } from "./ClubMember";

export enum Sport{
    futbol="futbol", basket="basket", zumba="zumba", voley="voley", natacion="natacion", gym="gym"
}
export class Player extends ClubMember{
    sport: Sport;

    constructor( name: string, lastName: string, birthDate: string, id: number, phoneNum: number, sport: Sport){
        super(name, lastName, birthDate, id, phoneNum)
        this.sport = sport;
    }

}