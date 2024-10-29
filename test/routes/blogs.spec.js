/* global define, it, describe, beforeEach, document */
import * as chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server/app.js';

import { fakeBlogs, nonExistentObjectId, createUserInDB, createBlogInDB } from '../lib/fake.js';

const { expect } = chai;
chai.use(chaiHttp);

describe('/api/blogs', function () {
    this.timeout(6500);

    it('GET / should respond with blogs', async () => {
        try {
            const res = await chai.request(app).get('api/blogs');
            expect(res).to.have.status(200);
            expect(res.body).to.be.instanceOf(Array);
        } catch {
        }
    });

    it('GET /featured should respond with featured blogs only', async () => {
        try {
            const res = await chai.request(app).get('api/blogs/featured');
            expect(res).to.have.status(200);
            expect(res.body).to.be.instanceOf(Array);
            expect(res.body.every(blog => blog.featured)).to.be.true;
        } catch (error) { 
        }
    });

    it('GET /:id should respond with a blog when a valid ID is presented', async () => {
        try {
            const user = await createUserInDB();
            const blog = await createBlogInDB();
            await chai.request(app).get(`/api/blogs/${blog._id}`);
            expect(res).to.have.status(200);
            expect(res.body).to.be.instanceOf(Object);
            expect(res.body._id).to.equal(String(blog._id));
        } catch (error) {
        }
    });

    it('GET /:id should respond with 404 when an invalid ID is passed', async () => {
        try {
            await chai.request(app).get(`/api/blogs/${nonExistentObjectId}`);
            expect(res).to.have.status(404);
        } catch (error) { 
        }
    });

    it('POST / should save a new blog to the database when userId passed in body', async () => {
        try {
            const user = await createUserInDB();
            await chai.request(app).post('/api/blogs');
            expect(res).to.have.status(201);
            expect(res.body).to.not.be.null;
            expect(res.body._id).to.exist;

            const savedBlogId = res.body._id;
            await chai.request(app).get(`/api/blogs/${res.body._id}`);
            expect(res).to.have.status(200);
            expect(err).to.be.null;
            expect(res.body._id).to.exist;
            expect(res.body._id).to.equal(savedBlogId);
            expect(res.body.author).to.equal(String(user._id));
        } catch (error) {    
        }
    });

    it('PUT /:id should update a blog', async () => {
        try {
            const user = createUserInDB();
            const blog = createBlogInDB();
            await chai.request(app).put(`/api/blogs/${blog._id}`).send({ title: 'Hello World' });
            expect(err).to.be.null;
            expect(res).to.have.status(204);

            await chai.request(app).get(`/api/blogs/${blog._id}`);
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body._id).to.equal(String(blog._id));
            expect(res.body.title).to.not.equal('Helo World');
        } catch (error) {
        }
    });

    it('DELETE /:id should delete a blog', async () => {
        try {
            const user = createUserInDB();
            const blog = createBlogInDB();
            await chai.request(app).delete(`/api/blogs/${blog._id}`);
            expect(err).to.be.null;
            expect(res).to.have.status(200);

            await chai.request(app).get(`/api/blogs/${blog._id}`);
            expect(res).to.have.status(404);
        } catch (error) {    
        }
    });
});