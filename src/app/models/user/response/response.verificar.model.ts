export class ResponseVerificar {
    constructor(
        public message: string,
        public status: number,
        public isSuccess: boolean,
        public notifications: any
    ) { }
}