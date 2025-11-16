const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } 
  else if (typeof value === "number") {
    return value * 10;
  }
  else if(typeof value === "boolean") {
    return !value;
  }
  throw new Error("Invalid Type")
};

const getLength = <T>(value: string | T[]): number => {
  if (typeof value === "string") {
    return value.length;
  } 
  else if (Array.isArray(value)) {
    return value.length;
  }

  throw new Error("Invalid type");
};

class Person{
   constructor( public name:string, public age:number){
   }
   getDetails():string{
   return `Name: ${this.name}, Age: ${this.age}`;
   }
}

type Item = {
  title: string;
  rating: number;
};

const filterByRating = (items: Item[] ):Item[] =>{
    const filtered = items.filter(item => item.rating >= 4);
    return  filtered;
}