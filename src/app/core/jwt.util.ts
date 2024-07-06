import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'

})

export class jwtUtil {



    constructor(){}

    save(token:any , remembeMe:Boolean){
        if(remembeMe){
            localStorage.setItem('token', token);
        }

        else {
            sessionStorage.setItem('token' , token);
        }
    }

    clear(){
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
    }

    getToken(){

        let token =  localStorage.getItem('token');
        if(!token)
            token =  sessionStorage.getItem('token');

        return token;

    }

    getData():any {
        const token = this.getToken();
        if(token) {
            return jwt_decode(token);
        }

        return null;

    }

    getRoles():string[]{
        let data =  this.getData();

        if(data && data.roles){
            return data.roles;
        }

        return [];



    }





}

function jwt_decode(token: string): any {
    throw new Error("Function not implemented.");
}

