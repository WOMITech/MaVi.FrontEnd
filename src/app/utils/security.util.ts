import { DecriptedToken } from "../models/user/decriptedToken.model";
import { ResponseDataAutenticar } from "../models/user/response/responseData.autenticar.model";
import jwt_decode from "jwt-decode";

export class Security {
  public static setEach(token: string, id: string, name: string, email: string, roles: string[]) {
    this.setToken(token);
    this.setId(id);
    this.setName(name);
    this.setEmail(email);
    this.setRoles(roles);
  }

  public static set(data: ResponseDataAutenticar) {
    this.setToken(data.token);
    this.setId(data.id);
    this.setName(data.name);
    this.setEmail(data.email);
    this.setRoles(data.roles);
  }
  


  public static setToken(token: string) {
    this.setDecriptedToken(token);
    localStorage.setItem(btoa('mavi.token'), btoa(token));
  }

  public static setDecriptedToken(token: string) {
  var decriptedToken = jwt_decode(token);
    // localStorage.setItem(btoa('mavi.decriptedToken'), btoa(JSON.stringify(decriptedToken)));
    localStorage.setItem('mavi.decriptedToken', JSON.stringify(decriptedToken));
  }
  public static getToken(): string | null {
    const data = localStorage.getItem(btoa('mavi.token'));
    // const data = localStorage.getItem('mavi.token');
    if (data) {
      return atob(data);
    } else {
      return null;
    }
  }

  public static getDecriptedToken(): DecriptedToken{
    // const data = JSON.parse(atob(localStorage.getItem(btoa('mavi.decriptedToken'))));
    const data = JSON.parse(localStorage.getItem('mavi.decriptedToken'));
    if (data) {
      return data;
    } else {
      return null;
    }
  }

  public static GetLoggedUserId(): string {
    var decriptedToken = this.getDecriptedToken();
    var data = decriptedToken.Id;
    if (data) {
      return data;
    } else {
      return null;
    }
  }

  public static GetLoggedUserName(): string {
    var decriptedToken = this.getDecriptedToken();
    var data = decriptedToken.given_name;
    if (data) {
      return data;
    } else {
      return null;
    }
  }

  public static GetLoggedUserEmail(): string {
    var decriptedToken = this.getDecriptedToken();
    var data = decriptedToken.unique_name;
    if (data) {
      return data;
    } else {
      return null;
    }
  }

  public static GetLoggedUserRoles(): string[] {
    var decriptedToken = this.getDecriptedToken();
    var data = decriptedToken.role;
    if (data) {
      return data;
    } else {
      return null;
    }
  }

  
  public static GetLoggedUserTokenExpirationDate(): number | null {
    var decriptedToken = this.getDecriptedToken();
    if (!decriptedToken)
      return null;
    var data = decriptedToken.exp;
    if (data) {
      return data;
    } else {
      return null;
    }
  }

  public static setId(id: string) {
    localStorage.setItem(btoa('mavi.id'), btoa(id));
  }

  public static getId(): string | null {
    const data = atob(localStorage.getItem(btoa('mavi.id')));
    if (data) {
      return data;
    } else {
      return null;
    }
  }

  public static setName(name: string) {
    localStorage.setItem(btoa('mavi.name'), btoa(name));
  }

  public static getName(): string | null {
    const data = atob(localStorage.getItem(btoa('mavi.name')));
    if (data) {
      return data;
    } else {
      return null;
    }
  }

  public static setEmail(email: string) {
    localStorage.setItem(btoa('mavi.email'), btoa(email));
  }

  public static getEmail(): string | null {
    const data = atob(localStorage.getItem(btoa('mavi.email')));
    if (data) {
      return data;
    } else {
      return null;
    }
  }

  public static setRoles(roles: string[]) {
    localStorage.setItem(btoa('mavi.roles'), btoa(JSON.stringify(roles)));
  }

  public static getRoles(): string[] | null {
    const data = JSON.parse(atob(localStorage.getItem(btoa('mavi.roles'))));
    if (data) {
      return data;
    } else {
      return null;
    }
  }

  public static hasToken(): boolean {
    if (this.getToken())
      return true;
    else
      return false;
  }

  public static hasExpiredToken(): boolean {
    let tempoFim = this.GetLoggedUserTokenExpirationDate();
    if(!tempoFim)
        return true;
    // let tempoFim = new Date(Date.now() + (60000 * 49)).getTime();
    let date = new Date()
    let ms = date.getTime();
    let seconds = ms / 1000;
    let tempoToken = seconds > tempoFim;

    if(tempoToken)
      return true;
    else
      return false;
  }

  


  public static clear() {
    localStorage.clear();
  }
}
