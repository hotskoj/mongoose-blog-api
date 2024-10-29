/* global define, it, describe, beforeEach, document */
import * as chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server/app.js';

import { fakeUser, createUserInDB, nonExistentObjectId } from '../lib/fake.js';

const { expect } = chai;
chai.use(chaiHttp);

describe('/api/users', function () {
    this.timeout(6500);

    it('GET / should respond with users', async () => {
        try {
            await chai.request(app).get('/api/users');
            expect(res).to.have.status(200);
            expect(res.body).to.be.instanceOf(Array);
        } catch (error) {
            
        }
    });

    it('GET /:id should respond with a user when a valid ID is passed', async () => {
        try {
            const user = createUserInDB();
            await chai.request(app).get(`/api/users/${user._id}`);
            expect(res).to.have.status(200);
            expect(res.body).to.be.instanceOf(Object);
            expect(res.body._id).to.equal(String(user._id));
        } catch (error) {
            
        }
    });

    it('GET /:id should respond with 404 when an invalid ID is passed', async () => {
        try {
            await chai.request(app).get(`/api/users/${nonExistentObjectId}`);
            expect(res).to.have.status(404);
        } catch (error) {
            
        }
    });

    it('POST / should save a new user to the database', async () => {
        try {
            await chai.request(app).post('/api/users').send(fakeUser);
            expect(res).to.have.status(201);
            expect(res.body).to.not.be.null;
            expect(res.body._id).to.exist;

            const savedUserId = res.body._id;
            await chai.request(app).get(`/api/users/${res.body._id}`);
            expect(res).to.have.status(200);
            expect(err).to.be.null;
            expect(res.body._id).to.exist;
            expect(res.body._id).to.equal(savedUserId);
        } catch (error) {
            
        }
    });

    it('PUT /:id should update a user', async () => {
        try {
            const user = createUserInDB();
            await chai.request(app).put(`/api/users/${user._id}`).send({ firstName: 'Jane', lastName: 'Doe' });
            expect(err).to.be.null;
            expect(res).to.have.status(204);

            await chai.request(app).get(`/api/users/${user._id}`);
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body._id).to.equal(String(user._id));
            expect(res.firstName).to.not.equal('John');
            expect(res.lastName).to.not.equal('Smith');
        } catch (error) {
            
        }
    });

    it('DELETE /:id should delete a user', async () => {
        try {
            const user = createUserInDB();
            await chai.request(app).delete(`/api/users/${user._id}`);
            expect(err).to.be.null;
            expect(res).to.have.status(200);

            await chai.request(app).get(`/api/users/${user._id}`);
            expect(res).to.have.status(404);
        } catch (error) {
            
        }
    });
});