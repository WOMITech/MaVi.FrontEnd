import { ResponseDataAutenticar } from "../models/user/response/responseData.autenticar.model";

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
    localStorage.setItem(btoa('mavi.token'), btoa(token));
  }

  public static getToken(): string | null {
    const data = localStorage.getItem(btoa('mavi.token'));
    if (data) {
      return atob(data);
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



  public static getTempo(): string | null {
    const data = localStorage.getItem(btoa('mavitempo'));
    if (data) {
      return atob(data);
    } else {
      return null;
    }
  }

  public static setTempo(tempo: string) {
    localStorage.setItem(btoa('mavitempo'), btoa(tempo));
  }



  public static clear() {
    localStorage.clear();
  }
}
