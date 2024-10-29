import { expect } from 'chai';
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;

import { fakeBlogs, fakeUser } from '../lib/fake.js';
import createModelExpectations from '../lib/createModelExpectations.js';

import Blog from '../../server/models/Blog.js';
import User from '../../server/models/User.js';

describe('Blog Model', () => {
    it('should define all the specified fields', () => {
        const b = new Blog(fakeBlogs[0]);

        const expectedModel = {
            title: 'string',
            article: 'string',
            published: Date,
            featured: 'boolean'
        };

        createModelExpectations(expect, b, expectedModel);
    });

    it('should define required fields correctly', () => {
        const b = new Blog();

        b.validate((err) => {
            expect(err.errors).to.have.keys('title', 'article', 'published', 'featured');
        });
    });

    it('should correctly establish relationship between User and Blog', (done) => {
        const u = new User(fakeUser);

        u
            .save()
            .then(user => {
                const b = new Blog(fakeBlogs[0]);

                b.author = user._id;

                return Promise.all([Promise.resolve(user), b.save()]);
            })
            .then(([user, blog]) => {
                user.blogs.push(blog);

                return Promise.all([user.save(), Promise.resolve(blog)]);
            })
            .then(([user, blog]) => {
                expect(user.blogs.every(b => b._id === blog._id)).to.be.true;

                done();
            })
        // .catch(error => console.error(error));        
    });
});