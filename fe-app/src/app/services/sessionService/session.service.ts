import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {shareReplay} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    public currentUserName: string = null;
    public readonly BS_TOKEN_NAME = "AUTH_TOKEN";

    constructor() {

    }


    public signOut() {
        this.saveTokenIntoSessionStorage(null, null);
    }

    public isAuthenticated(): boolean {
        return this.currentUserName != null;
    }

    /**
     * To save/remove the session, based on if the user's logged in/out
     * @param token
     * @param uName
     */
    saveTokenIntoSessionStorage(token: string, uName?: string) {
        let namedToken = token
        let oldSessionToken = sessionStorage.getItem(this.BS_TOKEN_NAME);
        if (namedToken == oldSessionToken) return;
        console.log("New token for " + uName + ": " + token);
        if (token == null) {
            this.currentUserName = null;
            sessionStorage.removeItem(this.BS_TOKEN_NAME);
        } else {
            this.currentUserName = uName;
            sessionStorage.setItem(this.BS_TOKEN_NAME, namedToken + "|" + uName);
        }
    }

    /**
     * To get the token from the sessionStorage
     */
    getTokenFromSessionStorage(): string {
        let token = sessionStorage.getItem(this.BS_TOKEN_NAME);
        if (token != null) {
            let tokenParts = token.split("|");
            this.currentUserName = tokenParts[1];
            return tokenParts[0];
        } else {
          return null;
        }
    }
}
