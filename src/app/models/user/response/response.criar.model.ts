import { ResponseDataCriar } from "./responseData.criar.model copy";

export class ResponseCriar {
    constructor(
        public data: ResponseDataCriar,
        public message: string,
        public status: number,
        public isSuccess: boolean,
        public notifications: any
    ) { }
}