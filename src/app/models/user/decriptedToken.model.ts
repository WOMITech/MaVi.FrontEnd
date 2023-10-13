export class DecriptedToken {
    constructor(
        public Id: string,
        public given_name: string,
        public unique_name: string,
        public role: string[],
        public nbf: number,
        public exp: number,
        public iat: number
    ) { }
}