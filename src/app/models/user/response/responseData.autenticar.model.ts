export class ResponseDataAutenticar {
    constructor(
        public token: string,
        public id: string,
        public name: string,
        public email: string,
        public roles: string[]
    ) { }
}