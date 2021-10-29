# Overview

This is a Ruby on Rails application.

# Getting Started

## Requirements

- You need to have a specific version of Ruby installed on your system.
  See `.ruby-version` file to check which version is needed.
  It is recommended to use [RVM](https://rvm.io/) for Ruby installation.
- You need `rails` and `bundler` gem installed locally.
  ```
  $ gem install rails bundler
  ```

## Initial Setup

- Clone this repository.
- `cd` into the cloned repository and install dependencies.
  ```
  $ bundler
  ```
- Run migration.
  ```
  $ rails db:migrate
  ```
- Seed the database. This project uses sqlite3.
  ```
  $ rails db:seed
  ```
- Start the server. By default, the server will listen to http://localhost:3001/
  ```
  $ rails server
  ```
- Test the server by sending a login request.
  ```
  $ curl -X POST http://localhost:3001/login \
  -H 'Content-Type: application/json' \
  -d '{"email": "hello@hatchways.io", "password": "sample"}'
  ```
  It should return a json document with `user` and `token`.

## Common Troubleshooting

- I Can't Install RVM

  Please make sure you have all dependencies listed [here](https://rvm.io/rvm/install).
  If you are on Mac, `xcode-select --install` might be needed for building specific Ruby versions.

# README TODO

Things we may want to cover:

- [x] Ruby version
- [x] System dependencies
- [ ] Configuration
- [ ] Database creation
- [x] Database initialization
- [ ] How to run the test suite
- [ ] Services (job queues, cache servers, search engines, etc.)
- [ ] Deployment instructions
- [ ] ...
