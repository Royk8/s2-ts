import { v4 as uuidv4 } from "uuid";

export class Uuid {
    static generate(id?: string): string {
        if(id){
            return id;
        }
        return uuidv4();
    }
}