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

type User = {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}
const filterActiveUsers = (users : User[]) : User[]=>{
    const activeUsers = users.filter(user => user.isActive === true)
    return activeUsers;
}

interface Book {
    title : string,
    author: string,
    publishedYear:number,
    isAvailable: boolean
}

const printBookDetails = (book : Book) =>{
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ?'Yes':'No'}`)
}