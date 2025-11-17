2. What is the use of the keyof keyword in TypeScript? Provide an example.

TypeScript-এর একটা দারুণ দিক হলো object-এর property গুলো strict ভাবে handle করা।
JavaScript-এ ভুল key দিলে runtime এ error আসে কিন্তু TypeScript compile-time এ ধরিয়ে দেয়।
এই জায়গায় keyof অসাধারণভাবে সাহায্য করে।

keyof কী?

সহজভাবে বলতে গেলে:

keyof কোনো টাইপের সব property নামকে একটি union টাইপে রূপান্তর করে।

Example
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

type UserKeys = keyof User;
// Result: "name" | "age" | "isActive"


এখন UserKeys টাইপে শুধুমাত্র এই তিনটার যেকোনো একটি value ব্যবহার করতে পারবেন।
ভুল দিলে TypeScript সাথে সাথে error দেখাবে।

কোথায় কাজে লাগে?

Generic function লিখলে keyof এর সবচেয়ে বেশি শক্তি দেখা যায়:

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const person = { name: "Ruman", age: 24 };

getValue(person, "name");   // ঠিক আছে
getValue(person, "email");  // ভুল key => error


এইভাবে keyof ভুল property access আগেই ব্লক করে দেয়।

আগে হুঁশ, পরে কাজ — TypeScriptও তাই করে।




3. Explain the difference between any, unknown, and never types in TypeScript.

TypeScript  এর এই তিনটা  টাইপ প্রথমে খুব confusing লাগে।
আসলে তারা তিনজন তিন রকম স্বভাবের :

any → খুব স্বাধীন

unknown → ভদ্র এবং সতর্ক

never → যার কোনো অস্তিত্বই নেই

1. any – যা খুশি করো

any দিলে TypeScript সব freedom দিয়ে দেয়।

let data: any;

data = 10;
data = "hello";
data = {};
data.toUpperCase(); // ভুল হলেও কিছু বলবে না


এটা dangerous কারণ ভুলগুলো runtime পর্যন্ত লুকিয়ে থাকতে পারে।
এক কথায়,

any = খুব স্বাধীন, কিন্তু সাথে ঝুঁকি বেশি।

2. unknown – any-এর ভদ্র সংস্করণ

unknown দেখতে any এর মতো, কিন্তু এটি নিরাপদ।
TypeScript বলে :

আগে টাইপ চেক করে নিন, তারপর ব্যবহার করুন।

let value: unknown = "Ruman";

value.toUpperCase(); // সরাসরি করতে দেবে না

if (typeof value === "string") {
  value.toUpperCase(); // এখন ঠিক আছে
}


API থেকে আসা uncertain ডেটা handle করতে unknown খুব কাজে লাগে।

3. never – যেটা কখনো ঘটার কথা না

never এমন টাইপ যার কোনো মান return হওয়ার কথা না।
এটা error throw করা function, অথবা exhaustive checking-এ ব্যবহৃত হয়।

Example 1 – Error function
function crash(): never {
  throw new Error("Something went wrong");
}

Example 2 – Exhaustive checking
type Shape = "circle" | "square";

function area(shape: Shape) {
  switch (shape) {
    case "circle":
      return "Circle area";
    case "square":
      return "Square area";
    default:
      const check: never = shape;
      // এখানে এলে বুঝবেন আগের cases-এ কিছু মিস করেছেন
  }
}


never মানে — "এটা ঘটার কথা না, মানে কোডে কোথাও ভুল আছে।