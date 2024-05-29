import { v4 as uuidv4 } from "uuid";

export class Uuid {
    static generate(id?: string): string {
        if(id){
            if(!Uuid.isValid(id)){
                throw new Error(`Invalid UUID: ${id} It should match [a-zA-Z0-9\\-_:]{2,64}`);
            }
            return id;
        }
        return uuidv4();
    }

    static isValid(uuid: string): boolean {
        return /[a-zA-Z0-9\\-_:]{2,64}/.exec(uuid) !== null;
    }
}
