'use strict';

module.exports = function(StrataAnnouncement) {
	StrataAnnouncement.observe('before save', function(ctx, next) {

		ctx.instance.setAttribute('created', new Date().toISOString());

		next();
	})
};
