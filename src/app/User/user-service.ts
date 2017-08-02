import {Injectable} from '@angular/core';

@Injectable ()
export class UserService{
    userName: any;
    userPsw: string;
    setUserName(newUserName){
        this.userName=newUserName;
    }
    setUserPsw(newUserPsw){
        if (this.userPsw.length==8){
            this.userPsw=newUserPsw;
        }
        alert(`Your password is wrong.
        Password must contain lowercase and uppercase letter,
        one number or symbol, and
        be at least 8 characters long`)
    }
    getUserName():any{
        return this.userName;
    }
    getUserPsw():string{
        return this.userPsw;
    }
}
