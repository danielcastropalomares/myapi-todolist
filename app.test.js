const request = require('supertest');
const app = require('./app');

describe('All users API', () => {
    it('GET /todos --> all array', () => {
        return request(app)
            .get('/todos')
            .expect(200)
            .expect('Content-type', /json/)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            //id: expect.any(String),
                            name: expect.any(String),
                            completed: expect.any(Boolean),
                            //__v: 0
                        })
                    ])
                )
            });
    });

it('GET /todos/id --> 404 if not found', () => { 
    return request(app)
    .get('/todos/632387893cebf3a800f0595b')
    .expect(404)
});

it('POST /todos/id --> create USER todoTestBySupertest', () => {
    return request(app)
    .post('/todos')
    .expect('Content-type', /json/)
    .expect(201)
    .send({
        name: "todoTestBySupertest"
    })
    .then((response) => {
        expect(response.body).toEqual(
            expect.objectContaining({
                name: "todoTestBySupertest",
                completed: false
            })
        )
    });

 });

it('GET /todos/name/todoTestBySupertest --> specific by name', () => {
    return request(app)
    .get('/todos/name/todoTestBySupertest')
    .expect(200)
    .expect('Content-type', /json/)
    .then((response) => {
        expect(response.body).toEqual(
            expect.objectContaining({
                name: "todoTestBySupertest",
                completed: false
            })
        )
    });
});


  

it('DELETE /todos/name/:name --> delete USER by name', () => {
    return request(app)
    .delete('/todos/name/todoTestBySupertest')
    .expect('Content-type', /json/)
    .expect(200)
 });

})
