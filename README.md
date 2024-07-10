# TypeScript Generics Basic

This repository provides a basic introduction to TypeScript Generics. Generics are a powerful feature in TypeScript that allow you to create reusable components and functions that can work with any data type while still maintaining type safety.

## Introduction

Generics in TypeScript allow you to create functions, classes, and interfaces that work with a variety of data types while still maintaining strict type safety. This repository contains examples and explanations to help you understand and apply TypeScript Generics in your own projects.

## Features

- Basic usage of generics in functions
- Generic classes and interfaces
- Constraints on generics
- Working with multiple generics

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and learning purposes.

### Prerequisites

- Node.js
- TypeScript

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/typescript-generics-basic.git
   cd typescript-generics-basic
   ```

2. Install TypeScript globally if you haven't already:

   ```bash
   npm install -g typescript
   ```

3. Compile the TypeScript files:

   ```bash
   tsc
   ```

4. Open the compiled JavaScript files in your preferred editor to explore the examples.

## Usage

This repository contains several examples demonstrating the use of TypeScript Generics. You can run these examples by compiling the TypeScript files and executing the resulting JavaScript files using Node.js.

### Example 1: Generic Function

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(42);

console.log(output1); // Output: myString
console.log(output2); // Output: 42
```

### Example 2: Generic Class

```typescript
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;

console.log(myGenericNumber.add(5, 10)); // Output: 15
```

### Example 3: Generic Interface

```typescript
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

console.log(myIdentity(10)); // Output: 10
```

## Examples

The `src` directory contains TypeScript files with various examples of generics usage. You can compile and run these files to see the output and better understand how generics work in TypeScript.

## License

This project is licensed under the MIT License.
