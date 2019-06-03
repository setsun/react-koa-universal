FROM rust:1.35.0-stretch

WORKDIR /server

COPY ./ ./

RUN cargo build --release

EXPOSE 8801
