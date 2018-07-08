// Copyright IBM Corp. 2014. All Rights Reserved.
// Node module: loopback-example-offline-sync
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

// Your code goes here.
module.exports = {
    MongoDs: {
        connector: 'mongodb',
        name: 'MongoDs',
        hostname: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 27017,
        user: process.env.DB_USER || '',
        password: process.env.DB_PASSWORD || '',
        database: 'EasyStrata',
    },
    EmailDs: {
        connector: "mail",
        name: 'EmailDs',
        transports: [
            {
                type: "smtp",
                host: "email-smtp.us-west-2.amazonaws.com",
                secure: false,
                port: 587,
                tls: {
                    "rejectUnauthorized": true
                },
                auth: {
                    user: process.env.SMTP_USER || '',
                    pass: process.env.SMTP_PASS || ''
                }
            }
        ]
    }
};