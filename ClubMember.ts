import { Person } from "./Person";
export abstract class ClubMember implements Person{
    name: string;
    lastName: string;
    birthDate: string;
    id: number;
    phoneNum: number;    
    memberSice: string;
    constructor( name: string, lastName: string, birthDate: string, id: number, phoneNum: number){
        this.name = name;
        this.lastName = lastName;
        this.birthDate = new Date(birthDate).toLocaleDateString();
        this.id = id;
        this.phoneNum= phoneNum;
        this.memberSice= new Date().toLocaleDateString();  
    }
}