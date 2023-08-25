# JavaScript & TypeScript Classes Exploration

This repository contains an extensive exploration of classes in JavaScript and TypeScript. It's crafted to help developers understand the underlying mechanics of classes, inheritance, encapsulation, and the prototypical nature of JavaScript.

## Contents

### Classes in JavaScript
The `classes` directory houses various examples and implementations regarding classes.

#### History of Classes - `history.js`
Explains the evolution of how classes were handled in JavaScript, depicting four different approaches that lead us to the modern class syntax.

#### Prototypical Explanation - `protoExplained.js`
A detailed supporting resource that demystifies how the `__proto__` linkage works in JavaScript.

#### Subclassing - `subclassing.js`
This file explains subclassing in JavaScript, showcasing how one class can inherit properties and methods from another.

### TypeScript Specifics
The following TypeScript files delve into specific topics related to classes in TypeScript.

#### Introduction - `intro.ts`
A general introduction to classes in TypeScript, covering basic concepts.

#### Access Modifiers - `accessModifier.ts`
Explains how to utilize access modifiers (`public`, `private`, and `protected`) within TypeScript classes.

#### Getters & Setters - `getter&setter.ts`
Covers how to use getters and setters in TypeScript, providing encapsulation to class properties.

## Usage
You can clone the repository and run the JavaScript files in any environment that supports ES6 syntax. For TypeScript files, make sure you have the TypeScript compiler installed.

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the repository
cd <repository-name>

# Run JavaScript file (for example)
node classes/history.js

# Compile and run TypeScript file (for example)
npm install -g ts-node
ts-node classes/intro.ts
