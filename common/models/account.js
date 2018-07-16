'use strict';

const path      = require('path');
const config    = require('../../server/config.json');

module.exports = function(Account) {
        
    var verifyEmailOptions = {
        type: 'email',
        to: '',
        from: 'Easy Strata <accounts@easystrata.com>',
        subject: "Verify your email address to activate your account",
        template: path.resolve(__dirname, '../../server/views/verify.html'),
        host: process.env.NODE_ENV == 'production' ? config.hostname : 'localhost',
        port: process.env.NODE_ENV == 'production' ? 80 : config.devServerPort,
        logo: 'https://' + config.hostname + '/assets/img/logo-text.jpg',
        text: '{href}',
        name: '',
        redirect: '/verified',
        Account: Account
    };

    //send verification email after registration
    Account.afterRemote('create', function(context, accInstance, next) {
        console.log('> user.afterRemote triggered');

        console.log("verifyEmailOptions.logo:", verifyEmailOptions.logo);
        
        verifyEmailOptions.to = accInstance.email;
        verifyEmailOptions.name = accInstance.firstName + accInstance.lastName;

        accInstance.verify(verifyEmailOptions, function(err, response) {
            console.log('err: ', err);
            if (err) return next(err);

            console.log('> verification email sent:', response);

            context.res.status(200);
            return next(null);
        });
    });

    // init aws SES and send email..
    // request password reset and send email with token
    Account.on('resetPasswordRequest', function (info) {
        console.log('info: ', info);
        console.log('info.email: ', info.email); // the email of the requested user
        console.log('info.accessToken.id', info.accessToken.id); // the temp access token to allow password reset

        var url = process.env.NODE_ENV == 'production' ? config.hostName : config.host + ':' + config.devServerPort;
        var html = `
            <html>
            <body style='font-family: Helvetica, Arial, sans-serif;'>
                <p style='font-size: 18px;'>
                    Greetings ${info.user.firstName} ${info.user.lastName},
                </p>
                <p style='font-size: 16px;'>
                    We received a request to change your password on Easy Strata (https://easystrata.com).
                </p>
                <p style='font-size: 16px;'>
                    Click the link below to create a new password:
                </p>

                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td>
                        <table border="0" cellspacing="0" cellpadding="0">
                            <tr>
                            <td align="center" style="border-radius: 3px;" bgcolor="#e9703e">
                                <a href="//${url}/reset-password-verified?access_token=${info.accessToken.id}" target="_blank" style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; text-decoration: none;border-radius: 3px; padding: 12px 18px; border: 1px solid #e9703e; display: inline-block;">Reset Password &rarr;</a>
                            </td>
                            </tr>
                        </table>
                        </td>
                    </tr>
                </table>

                <p style='font-size: 16px;'>
                    If you don't want to change your password, you can ignore this email.
                </p>

                <p>
                    <em style='font-size: 18px;'>Sincerely,</em>
                    <br>
                    <br>
                    <em style='font-size: 14px;'>
                        The Easy Strata Team,<br>
                        7415 Shaw Ave,<br>
                        Chilliwack, BC,<br>
                        V2R 3C1<br>
                    </em>
                    <img src="//${url}/assets/img/logo-text.jpeg" alt='Logo' width="60" height="60">
                </p>
            </body>
            </html>
        `;

        // send email
        Account.app.models.Email.send({
            to: info.email,
            from: 'Easy Strata <accounts@easystrata.com>',
            subject: 'Password Reset',
            html: html
        }, function(err) {
            if (err) return console.log('> error sending password reset email', err);
            console.log('> sending password reset email to:', info.email);
        });
    });

    Account.resendAccountActivationEmail = function(emailToVerify, cb) {
        if (!emailToVerify || !emailToVerify) {
            // bad params
            return cb(false);
        }
        
        Account.findOne({
            where: {
                email: emailToVerify,
                emailVerified: {
                    "neq": true
                }
            }
        }, (err, accInst) => {
            console.log("err:", err);
            
            if (err || !accInst) {
                console.log('return false');
                
                return cb(false);
            }

            verifyEmailOptions.to = accInst.emailToVerify;
            verifyEmailOptions.name = accInst.firstName + ' ' + accInst.lastName;

            accInst.verify(verifyEmailOptions, function(err, response) {
                if (err) return cb(false);

                console.log('> verification email sent:', response);
                return cb(null, true);
            });
        });
    };

    Account.resetPasswordConfirm = function(accessToken, newPassword, cb) {
        // console.log("Account.app.models.AccessToken:", Account.app.models.AccessToken.findById);
        if (!accessToken || !newPassword) {
            // bad params
            return cb(false);
        }
        
        Account.app.models.AccessToken.findById(accessToken, function(err, accTokenInst) {
            
            if (err || !accTokenInst || !accTokenInst.accountId) {
                // no access token found
                return cb(false);
            }

            Account.findById(accTokenInst.accountId, function (err, accInstance) {

                if (err || !accInstance) {
                    // no account attached to token
                    return cb(false);
                }

                // update password
                accInstance.updateAttributes({
                    password: newPassword
                }, function(err, accInstanceRes) {
                    if (err) {
                        return cb(false);
                    }
    
                    return cb(null, true);
                });

            });
           
            
        });
    };

    Account.remoteMethod(
        'resendAccountActivationEmail',
        {
            description: "Allows an unauthenticated account to resend its activation email.",
            http: {verb: 'post'},
            accepts: [
                {arg: 'email', type: 'string', required: true, description: "The email address of the account to verify"}
            ],
            returns: {arg: 'emailSent', type: 'boolean'}
        }
    );

    Account.remoteMethod(
        'resetPasswordConfirm',
        {
            description: "Allows an unauthenticated user to reset his/her password.",
            http: {verb: 'post'},
            accepts: [
                {arg: 'accessToken', type: 'string', required: true, description: "The verification token sent in the password reset email"},
                {arg: 'newPassword', type: 'string', required: true, description: "The new account password"}
            ],
            returns: {arg: 'passwordChange', type: 'boolean'}
        }
    );
};
