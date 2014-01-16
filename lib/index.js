/**
 * sails-generate-views
 *
 * Usage:
 * `sails generate views`
 *
 * @type {Object}
 */

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	targets: {
		'./': { exec: function (scope, cb) { console.log('Running generator (sails-generate-views) @ `'+scope.rootPath+'`...'); cb(); }}
	}
};

