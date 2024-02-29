export { };

// 'this' implicitly has type 'any' because it does not have a type annotation.ts(2683)

// ⛔️ index.ts(6, 20): An outer value of 'this' is shadowed by this container.


// EXAMPLE 1 - Convert your named functions to arrow functions

class Employee {
  constructor(public salary: number) {
    this.salary = salary;
  }

  increaseSalary = () => {
    // 👇️ `this` refers to class instance here

    this.salary += 100;
    return this.salary;
  };

  // ------------------------------------------------

  incSal = () => {
    // 👇️ this refers to class instance here
    const nested = () => {
      // 👇️ this refers to class instance here
      this.salary += 100;
      console.log(this.salary);
      return this.salary;
    };

    nested();

    return this.salary;
  };
}

const emp = new Employee(100);

console.log(emp.increaseSalary()); // 👉️ 200
console.log(emp.incSal()); // 👉️ 300
