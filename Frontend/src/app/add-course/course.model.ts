export class CourseModel{
    constructor(
    public name: string,
    public image:string,
    public professor:string,
    public email:string|null,
    public duration:string,
    public details:string,
    public qualification:string,
    public type:string,
    public startdate:string,
    public level:string,
    ){}
}