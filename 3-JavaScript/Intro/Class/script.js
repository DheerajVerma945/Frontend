class organism{
    age;
    color;
    #weight;

    constructor(a,c,w){
        this.#weight = w;
        this.age = a;
        this.color = c;
    }
    get Weight(){
        return this.#weight;
    }
}
let ravi = new organism(12,"black",52);
console.log( "Age of Ravi is" ,ravi.age);
console.log( "Color of Ravi is ",ravi.color);
console.log(ravi.weight);
