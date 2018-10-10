export class State
{
    private stateCode:number;
    private stateName:string;
    private countryCode:string
    constructor(code:number,sname:string,ccode:string)
    {
        this.countryCode=ccode;
        this.stateCode=code;
        this.stateName=sname;
    }

    get StateCode():number
    {
        return this.stateCode;
    }
    get StateName():string
    {
        return this.stateName;
    }
    get CountryCode():string
    {
        return this.countryCode;
    }
}