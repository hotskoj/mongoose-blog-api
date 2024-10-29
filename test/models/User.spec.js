import { expect } from 'chai';

import { fakeUser } from '../lib/fake.js';
import createModelExpectations from '../lib/createModelExpectations.js';

import User from '../../server/models/User.js';

describe('User Model', () => {
    it('should define all the specified fields', () => {
        const u = new User(fakeUser);

        const expectedModel = {
            firstName: 'string',
            lastName: 'string',
            email: 'string',
            social: {
                twitter: 'string',
                linkedIn: 'string',
                facebook: 'string'
            },
            blogs: Array
        };

        createModelExpectations(expect, u, expectedModel);
    });

    it('should define required fields correctly', () => {
        const u = new User();

        u.validate((err) => {
            expect(err.errors).to.have.keys('firstName', 'lastName', 'email')
        });
    });
});