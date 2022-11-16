
export interface UserdataType{
    name : string,
    email:string,
    password:string
}

export interface User{
    firstName : string,
    lastName:string,
    password:string,
    city:string,
    state:string,
    zip:string,
    _id?:string
}

export class UserData {
	constructor(
	public primaryAddress: string,
	public secondaryAddress: string
	){}
}
