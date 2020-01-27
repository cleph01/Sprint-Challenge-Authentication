//Supertest is a library to help test endpoints
const supertest = require('supertest');

//remember our server won't actually start
//due to the if statement in index.js
const server = require('./api/server');

const Auth = require('./auth/auth-model');


// test("Welcome Route", async () => {

//     //Passing our server gives us an 
//     //instance of our server to we 
//     //can make http requests
//     const result = await supertest(server).get("/")

//     //does it return the expected status code?

//     expect(result.status).toBe(200)

//     // //does it return the expected data format?

//     expect(result.type).toBe("application/json")

//     // //does it return the expected data?

//     expect(result.body.message).toBe("Welcome")

// })


//First Test 

test("Login Route", async () => {

    const data = {
        "username":"charlie",
        "password":"valentina"
    }
    const result = await supertest(server).post("/api/auth/login").send(data);

    expect(result.body.message).toBe("Welcome charlie, have a token...!")
    
    token = result.body.token 

    expect(result.status).toBe(200)

    console.log(token)

})


//Second Test

test("Jokes Route", async () => {
    
    const result = await supertest(server).get("/api/jokes").set('authorization',token);

    expect(result.status).toBe(200)

    expect(result.body[0].id).toBe('0189hNRf2g')

    // console.log(result)

})


//Third Test

// test("Register Route", async () => {

//     const data = {
//         "username":"charlito",
//         "password":"valentina"
//     }

//     const result = await supertest(server).post("/api/auth/register").send(data);

//     expect(result.body.username).toBe(data.username)

//     expect(result.status).toBe(201)


// })