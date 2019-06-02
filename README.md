# Zinc

An opinionated scaffold for building modern web applications with Rust, React, SSR, and GraphQL.

The goal of Zinc is to strike a balance with raw speed and developer ease-of-use for building full-stack applications for the modern web.

Very much a work in progress ⚠️

# Architecture

## Server (Rust)
Rust was chosen to back the web server for it's raw speed, zero-cost abstractions, and excellent complier. Benchmarks put it faster or on par with raw C, while having better semantics for memory safety & management: https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/rust.html

A sample comparision with Node.js more drastically places Rust at 10 times faster:

!["rust-vs-node"](https://i.imgur.com/Dew6w5x.png)
***Source: https://medium.com/sean3z/rest-api-node-vs-rust-c75aa8c96343***

## SSR (Node.js)
Server-side rendering is handled by a separate service in Node.js and React. The motivation here is to not re-invent the wheel and leverage the great work in the JS communities and provide access to the established ecosystem.

#### React
React was chosen for ease of use in component development, it's enthusiastic community, and rich ecosystem.

#### Apollo (GraphQL)
Apollo is used to query the GraphQL database from the client-side.

#### Linaria (CSS-in-JS)
Linaria is a zero-runtime CSS-in-JS solution that builds your CSS ahead of time.
