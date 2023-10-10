export class ResetarSenha {
    constructor(
        public email: string,
        public resetPasswordCode: string,
        public newPassword: string
    ) { }
}