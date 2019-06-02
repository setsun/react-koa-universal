# Zinc

An opinionated scaffold for building modern web applications with Rust, React, SSR, and GraphQL.

The goal of Zinc is to strike a balance with raw speed and developer ease-of-use for building full-stack applications for the modern web.

Very much a work in progress ⚠️

# Architecture

## Server (Rust)
Rust was chosen to back the web server for it's raw speed, zero-cost abstractions, and excellent complier. Benchmarks put it faster or on par with raw C, while having better semantics for memory safety & management: https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/rust.html

A sample comparision with Node.js drastically places Rust nearly 10 times faster:

!["rust-vs-node"](https://i.imgur.com/Dew6w5x.png)
***Source: https://medium.com/sean3z/rest-api-node-vs-rust-c75aa8c96343***

#### Actix-Web (HTTP / Web)
Actix is an actor framework for the web.

#### Juniper (GraphQL)
Juniper is a GraphQL implementation in Rust and provides us with the facilities of writing our GraphQL API.

## Client (TypeScript)
The front-end is written in TypeScript, and server-side rendering is handled by a separate service in Node.js and React. The motivation here is to not re-invent the wheel and to leverage the great work in the JS communities and provide access to the established ecosystem.

#### Node.js (SSR)
Node.js is leveraged as a seperate service specifically for server-side rendering only. If the server is unable to serve the request, then we fallback to client-side rendering.

#### React
React was chosen for ease of use in component development, it's enthusiastic community, and rich ecosystem.

#### Apollo (GraphQL)
Apollo is used to query the GraphQL database from the client-side.

#### Linaria (CSS-in-JS)
Linaria is a zero-runtime CSS-in-JS solution that builds your CSS ahead of time.
