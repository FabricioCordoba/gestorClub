import fs from "fs";
import readLineSync from "readline-sync";

import { Player, Sport} from "./Player";


export class ManagerClub{
    constructor(){
        fs.writeFileSync('./socios.json', "[]")
    }
    
    data() { return JSON.parse(fs.readFileSync("./member.json", "utf-8"))}

    
    setAddMember(){
        let name = readLineSync.question("Escriba el nombre del socio:--> ");
        let lastName = readLineSync.question("Escriba el apellido del socio:--> ");
        let birthDate = readLineSync.question("Escriba la fecha de nacimiento del socio:--> ");
        let id =Number (readLineSync.question("Escriba el DNI del socio:--> "));
        let phoneNum = Number(readLineSync.question("Escriba el numero de telefono del socio--> "));

        let dep= Object.values(Sport);
        let sport= readLineSync.keyInSelect( dep,"Seleccione deporte");
        let play= dep[sport];  
       
        let newMember = new Player (name, lastName, birthDate, id, phoneNum, play);
        let member = [...this.data(), newMember];
      
        fs.writeFileSync("./member.json", JSON.stringify(member, null, 2));
        
     }   
     getSearchName(name: string) {
        let nameMember = this.data().filter((member: { name: string }) => member.name === name);
        console.log(nameMember);
        return nameMember
     }
    
    getSearchSport(sport: string){
        let memberSport= this.data().filter((persona:{sport:string})=>persona.sport===sport)
        console.log(memberSport);       

    }

    getSearchLastName(lastName:string){
        let lastMember= this.data().filter((member:{lastName:string})=>member.lastName===lastName);
        console.log(lastMember);
    }

    getSearchPhoneNum(phoneNum: number){
        let phoneNumMember= this.data().find((member:{phoneNum:number})=>member.phoneNum===phoneNum);
        console.log(phoneNumMember);
    }

    getSearchId(id: number){
        let idMember= this.data().find((member:{id:number})=>member.id===id);
        console.log(idMember);
    }
    setDeleteMember (id:number){
        let members= this.data(); 
        let deleteMember = members.findIndex((members:{id:number}) => members.id === id);
       
        if (deleteMember >= 0) {
          members.splice(deleteMember, 1);
          console.log("El socio ", id, "se dio de baja");               
          
          fs.writeFileSync("./member.json", JSON.stringify(members));
        
          console.log(this.data());   
        
        } else {
          console.log(
            "El socio ",id," no pudo darse de baja porque no se encontro"
          );
        }
    }

}

