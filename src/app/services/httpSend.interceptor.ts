import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Security } from "src/app/utils/security.util";
import { environment } from "src/environments/environment";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root'
})
export class HttpSend {

    static desconectando: boolean = false;
    static buscandoToken: boolean = false;

    constructor(private http: HttpClient, private route: Router) {
    }

    private checarTempo(): boolean {
        // let tempoFim = new Date(Security.getTempo()).getTime();
        let tempoFim = new Date(Date.now() + (60000 * 49)).getTime();
        let tempoToken = (Date.now() + (60000 * 42)) > tempoFim;

        if (tempoFim < Date.now()) {
            if (HttpSend.desconectando) return false;
            HttpSend.desconectando = true;
            Swal.fire('Conexão expirada', `Você foi desconectado por tempo de inatividade`, 'error').then(
                result => {
                    HttpSend.desconectando = false;
                    Security.clear();
                    this.route.navigate(['/account/login'])
                }
            );
            return false;
        } else if (tempoToken && !HttpSend.buscandoToken) {
            HttpSend.buscandoToken = true;
            this.put(
                `${environment.urlApi}/Login/Token`,
                '',
                {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${Security.getToken()}`
                    })
                })
                //this.tokenService.refreshToken()
                .subscribe(
                    result => {
                        if (!result.success) return;
                        Security.setToken(result.token);
                        Security.setTempo(result.expiration);
                    },
                    err => { },
                    () => HttpSend.buscandoToken = true
                )
        }

        return true;
    }

    post(url: string, body: any, options: any): any {
        if (!this.checarTempo()) return null;
        return this.http.post(url, body, options);
    }

    get(url: string, options: any): any {
        if (!this.checarTempo()) return null;
        return this.http.get(url, options);
    }

    put(url: string, body: any, options: any): any {
        if (!this.checarTempo()) return null;
        return this.http.put(url, body, options);
    }

    delete(url: string, options: any): any {
        if (!this.checarTempo()) return null;
        return this.http.delete(url, options);
    }

    options(url: string, options: any): any {
        if (!this.checarTempo()) return null;
        return this.http.options(url, options);
    }
}