import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { HttpSend } from "./httpSend.interceptor";
import { Criar } from "../models/user/request/criar.model";
import { Verificar } from "../models/user/request/verificar.model";
import { Autenticar } from "../models/user/request/autenticar.model";
import { Email } from "../models/user/request/email.model";
import { ResetarSenha } from "../models/user/request/resetar-senha.model";
import { TrocarNome } from "../models/user/request/troca-nome.model";
import { TrocarSenha } from "../models/user/request/troca-senha.model";
import { TrocarEmail } from "../models/user/request/troca-email.model";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  constructor(private http: HttpSend) { super() }


  criar(data: Criar){
    return this.http.post(`${this.UrlApi}/users`, data, this.ObterHeaderJson());
  }

  verificar(data: Verificar){
    return this.http.post(`${this.UrlApi}/verify`, data, this.ObterHeaderJson());
  }

  autenticar(data: Autenticar){
    return this.http.post(`${this.UrlApi}/authenticate`, data, this.ObterHeaderJson());
  }

  reenviarCodigoVerificacao(data: Email){
    return this.http.post(`${this.UrlApi}/resend-verification-code`, data, this.ObterHeaderJson());
  }

  enviarCodigoResetSenha(data: Email){
    return this.http.post(`${this.UrlApi}/send-reset-password-code`, data, this.ObterHeaderJson());
  }

  resetarSenha(data: ResetarSenha){
    return this.http.post(`${this.UrlApi}/reset-password`, data, this.ObterHeaderJson());
  }

  trocarNome(data: TrocarNome){
    return this.http.put(`${this.UrlApi}/change-name`, data, this.ObterAuthHeaderJson());
  }

  trocarSenha(data: TrocarSenha){
    return this.http.put(`${this.UrlApi}/change-password`, data, this.ObterAuthHeaderJson());
  }

  trocarEmail(data: TrocarEmail){
    return this.http.put(`${this.UrlApi}/change-email`, data, this.ObterAuthHeaderJson());
  }

  detalhes(){
    return this.http.get(`${this.UrlApi}/details`, this.ObterAuthHeaderJson());
  }


//   listarPorSistema(id: number) {
//     return this.http.get(`${this.UrlApi}/Cliente/Sistema/${id}`, this.ObterAuthHeaderJson());
//   }

//   listarPorId(id: number) {
//     return this.http.get(`${this.UrlApi}/Cliente/${id}`, this.ObterAuthHeaderJson());
//   }

//   registrar(data: any) {
//     return this.http.post(`${this.UrlApi}/Cliente`, data, this.ObterAuthHeaderJson());
//   }

//   atualizar(data: any) {
//     return this.http.put(`${this.UrlApi}/Cliente`, data, this.ObterAuthHeaderJson());
//   }

//   AtivarInativar(id: number) {
//     return this.http.put(`${this.UrlApi}/Cliente/Status/${id}`, '', this.ObterAuthHeaderJson());
//   }

//   deletar(id: number) {
//     return this.http.delete(`${this.UrlApi}/Cliente/${id}`, this.ObterAuthHeaderJson());
//   }
}




