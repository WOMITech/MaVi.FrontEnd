import { ResponseDataAutenticar } from "./responseData.autenticar.model";

export class ResponseAutenticar {
    constructor(
        public data: ResponseDataAutenticar,
        public message: string,
        public status: number,
        public isSuccess: boolean,
        public notifications: any
    ) { }
}