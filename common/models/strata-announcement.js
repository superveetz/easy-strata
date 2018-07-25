'use strict';

module.exports = function(StrataAnnouncement) {
	StrataAnnouncement.beforeRemote('create', function(ctx, unused, next) {

		// add a default created date
		ctx.args.data.created = new Date().toISOString();

		next();
	})
};
