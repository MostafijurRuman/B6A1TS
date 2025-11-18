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
  name: string;
  age: number;
   constructor( name: string, age: number){
    this.name = name;
    this.age = age;
   }
   getDetails():string{
   return `'Name: ${this.name}, Age: ${this.age}'`;
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

type Value = string | number;

function getUniqueValues(arr1: Value[], arr2: Value[]): Value[] {
  const result: Value[] = [];
  let rIndex = 0;

  const isExists = (value: Value): boolean => {
    for (let i = 0; i < rIndex; i++) {
      if (result[i] === value) return true;
    }
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    if (!isExists(arr1[i])) {
      result[rIndex] = arr1[i];
      rIndex++;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!isExists(arr2[i])) {
      result[rIndex] = arr2[i];
      rIndex++;
    }
  }

  return result;
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
}
const calculateTotalPrice = (products : Product[]) :number =>{
   if(products.length === 0){
    return 0;
   }
   const totalPrice = products.reduce((acc,product)=>{
        let price = product.price * product.quantity;

        if(product.discount !== undefined){
            price = price - (price*product.discount)/100;
        }
        return acc + price;
    },0)

    return totalPrice

}