# VUE Login System Example

This is a simple demonstrative VUE project for creating a secure user login system.

The backend authentication is done by [Sessionless Authentication using JWTs ](https://blog.usejournal.com/sessionless-authentication-withe-jwts-with-node-express-passport-js-69b059e4b22c). It is implemented with Jason Web Token (JWT). Authentication is done using PassportJS.

The aim of this repo is to provide a simple demonstration and help people to write their own log in system using Vue-router.

##  What's implemented:
- Backend authentication for username and password
- JWT encode and save to cookie
- JWT authentication for protected website
- logging out
- log in page of frontend
- frontend router

## What's NOT implemented:
- The actual website
- Database for saving user data
- Registering

## To run frontend

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

Of course you need to run the backend to have it work:
## To run backend:

``` bash
cd src/server
node server.js
```

## what you should see:
- You can logging page at: *localhost:8080*
- You can then try logging in using this credential:

__email__: 123@123.com
__password__: 123
- When logging in, it will navigate you to: *localhost:8080/#/home*
- You can click logout, which will navigate you back to logging page
- If you aren't logged in and try to directly go to *localhost:8080/#/home*, you will be navigated back to logging page.
