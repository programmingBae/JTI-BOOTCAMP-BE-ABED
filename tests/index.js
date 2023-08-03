const chai = require("chai");
const chaiHttp = require('chai-http');
const app = require("../index");

chai.use(chaiHttp);
chai.should();

let itemId = "";


describe("POST /api/v1/bootcamp", () => {
    if('Enter a new item on the to do list', (done) => {
        chai.request(app)
        .post('/api/v1/bootcamp')
        .set('Content-Type', 'application/json')
        .send({
            text: "Write a unit test",
            isCompleted: false
        })
        .end((err, res) => {
            if(err){
                return done(err);
            }else{
                res.should.have.status(200);
                itemId = res.body._id;
                return done();
            }
        });
    });
});