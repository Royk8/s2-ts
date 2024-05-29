import { v4 as uuidv4 } from "uuid";

export class Uuid {
    static generate(id?: string): string {
        if(id){
            return id;
        }
        return uuidv4();
    }

    static isValid(uuid: string): boolean {
        return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.exec(uuid) !== null;
    }
}
