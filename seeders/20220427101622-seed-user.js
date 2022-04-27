'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Users', [{
            firstname : 'John',
            lastname : 'Doe',
            email : 'johnDoe@test.com',
            password: "password",
            createdAt : new Date(),
            updatedAt : new Date(),

        }], {});
    },

    async down (queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};