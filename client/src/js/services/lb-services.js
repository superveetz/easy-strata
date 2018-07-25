// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Email",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Emails/:id",
          { 'id': '@id' },
          {
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Email#modelName
        * @propertyOf lbServices.Email
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Email`.
        */
        R.modelName = "Email";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Account
 * @header lbServices.Account
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Account` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Account",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Accounts/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Account#prototype$__findById__accessTokens
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#prototype$__destroyById__accessTokens
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#prototype$__updateById__accessTokens
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Account.stratas.findById() instead.
            "prototype$__findById__stratas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/stratas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Account.stratas.destroyById() instead.
            "prototype$__destroyById__stratas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/stratas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Account.stratas.updateById() instead.
            "prototype$__updateById__stratas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/stratas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Account.announcementPosts.findById() instead.
            "prototype$__findById__announcementPosts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/announcementPosts/:fk",
              method: "GET",
            },

            // INTERNAL. Use Account.announcementPosts.destroyById() instead.
            "prototype$__destroyById__announcementPosts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/announcementPosts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Account.announcementPosts.updateById() instead.
            "prototype$__updateById__announcementPosts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/announcementPosts/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#prototype$__get__accessTokens
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Queries accessTokens of Account.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Accounts/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#prototype$__create__accessTokens
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Accounts/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#prototype$__delete__accessTokens
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Accounts/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#prototype$__count__accessTokens
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Counts accessTokens of Account.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Accounts/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use Account.stratas() instead.
            "prototype$__get__stratas": {
              isArray: true,
              url: urlBase + "/Accounts/:id/stratas",
              method: "GET",
            },

            // INTERNAL. Use Account.stratas.create() instead.
            "prototype$__create__stratas": {
              url: urlBase + "/Accounts/:id/stratas",
              method: "POST",
            },

            // INTERNAL. Use Account.stratas.destroyAll() instead.
            "prototype$__delete__stratas": {
              url: urlBase + "/Accounts/:id/stratas",
              method: "DELETE",
            },

            // INTERNAL. Use Account.stratas.count() instead.
            "prototype$__count__stratas": {
              url: urlBase + "/Accounts/:id/stratas/count",
              method: "GET",
            },

            // INTERNAL. Use Account.announcementPosts() instead.
            "prototype$__get__announcementPosts": {
              isArray: true,
              url: urlBase + "/Accounts/:id/announcementPosts",
              method: "GET",
            },

            // INTERNAL. Use Account.announcementPosts.create() instead.
            "prototype$__create__announcementPosts": {
              url: urlBase + "/Accounts/:id/announcementPosts",
              method: "POST",
            },

            // INTERNAL. Use Account.announcementPosts.destroyAll() instead.
            "prototype$__delete__announcementPosts": {
              url: urlBase + "/Accounts/:id/announcementPosts",
              method: "DELETE",
            },

            // INTERNAL. Use Account.announcementPosts.count() instead.
            "prototype$__count__announcementPosts": {
              url: urlBase + "/Accounts/:id/announcementPosts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#create
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Accounts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#createMany
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Accounts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#patchOrCreate
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Accounts",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#replaceOrCreate
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Accounts/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#upsertWithWhere
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Accounts/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#exists
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Accounts/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#findById
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Accounts/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#replaceById
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Accounts/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#find
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Accounts",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#findOne
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Accounts/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#updateAll
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Accounts/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#deleteById
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Accounts/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#count
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Accounts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#prototype$patchAttributes
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Accounts/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#createChangeStream
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Accounts/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#login
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Accounts/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#logout
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Accounts/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#prototype$verify
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Trigger user's identity verification with configured verifyOptions
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `verifyOptions` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$verify": {
              url: urlBase + "/Accounts/:id/verify",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#confirm
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Confirm a user registration with identity verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Accounts/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#resetPassword
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Accounts/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#changePassword
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Change a user's password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `oldPassword` – `{string}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/Accounts/change-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#setPassword
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Reset user's password via a password-reset token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "setPassword": {
              url: urlBase + "/Accounts/reset-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#resendAccountActivationEmail
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Allows an unauthenticated account to resend its activation email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `email` – `{string}` - The email address of the account to verify
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `emailSent` – `{boolean=}` -
             */
            "resendAccountActivationEmail": {
              url: urlBase + "/Accounts/resendAccountActivationEmail",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#resetPasswordConfirm
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Allows an unauthenticated user to reset his/her password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `accessToken` – `{string}` - The verification token sent in the password reset email
             *
             *  - `newPassword` – `{string}` - The new account password
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `passwordChange` – `{boolean=}` -
             */
            "resetPasswordConfirm": {
              url: urlBase + "/Accounts/resetPasswordConfirm",
              method: "POST",
            },

            // INTERNAL. Use Strata.accountOwner() instead.
            "::get::Strata::accountOwner": {
              url: urlBase + "/Strata/:id/accountOwner",
              method: "GET",
            },

            // INTERNAL. Use AnnouncementPost.account() instead.
            "::get::AnnouncementPost::account": {
              url: urlBase + "/AnnouncementPosts/:id/account",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#getCurrent
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Accounts" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Account#upsert
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Account#updateOrCreate
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Account#patchOrCreateWithWhere
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Account#update
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Account#destroyById
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Account#removeById
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Account#updateAttributes
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.Account#getCachedCurrent
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Account#login} or
         * {@link lbServices.Account#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Account instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Account#isAuthenticated
         * @methodOf lbServices.Account
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Account#getCurrentId
         * @methodOf lbServices.Account
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.Account#modelName
        * @propertyOf lbServices.Account
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Account`.
        */
        R.modelName = "Account";

    /**
     * @ngdoc object
     * @name lbServices.Account.stratas
     * @header lbServices.Account.stratas
     * @object
     * @description
     *
     * The object `Account.stratas` groups methods
     * manipulating `Strata` instances related to `Account`.
     *
     * Call {@link lbServices.Account#stratas Account.stratas()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Account#stratas
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Queries stratas of Account.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
        R.stratas = function() {
          var TargetResource = $injector.get("Strata");
          var action = TargetResource["::get::Account::stratas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.stratas#count
             * @methodOf lbServices.Account.stratas
             *
             * @description
             *
             * Counts stratas of Account.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.stratas.count = function() {
          var TargetResource = $injector.get("Strata");
          var action = TargetResource["::count::Account::stratas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.stratas#create
             * @methodOf lbServices.Account.stratas
             *
             * @description
             *
             * Creates a new instance in stratas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
        R.stratas.create = function() {
          var TargetResource = $injector.get("Strata");
          var action = TargetResource["::create::Account::stratas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.stratas#createMany
             * @methodOf lbServices.Account.stratas
             *
             * @description
             *
             * Creates a new instance in stratas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
        R.stratas.createMany = function() {
          var TargetResource = $injector.get("Strata");
          var action = TargetResource["::createMany::Account::stratas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.stratas#destroyAll
             * @methodOf lbServices.Account.stratas
             *
             * @description
             *
             * Deletes all stratas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.stratas.destroyAll = function() {
          var TargetResource = $injector.get("Strata");
          var action = TargetResource["::delete::Account::stratas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.stratas#destroyById
             * @methodOf lbServices.Account.stratas
             *
             * @description
             *
             * Delete a related item by id for stratas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for stratas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.stratas.destroyById = function() {
          var TargetResource = $injector.get("Strata");
          var action = TargetResource["::destroyById::Account::stratas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.stratas#findById
             * @methodOf lbServices.Account.stratas
             *
             * @description
             *
             * Find a related item by id for stratas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for stratas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
        R.stratas.findById = function() {
          var TargetResource = $injector.get("Strata");
          var action = TargetResource["::findById::Account::stratas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.stratas#updateById
             * @methodOf lbServices.Account.stratas
             *
             * @description
             *
             * Update a related item by id for stratas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `fk` – `{*}` - Foreign key for stratas
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
        R.stratas.updateById = function() {
          var TargetResource = $injector.get("Strata");
          var action = TargetResource["::updateById::Account::stratas"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Account.announcementPosts
     * @header lbServices.Account.announcementPosts
     * @object
     * @description
     *
     * The object `Account.announcementPosts` groups methods
     * manipulating `AnnouncementPost` instances related to `Account`.
     *
     * Call {@link lbServices.Account#announcementPosts Account.announcementPosts()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Account#announcementPosts
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Queries announcementPosts of Account.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
        R.announcementPosts = function() {
          var TargetResource = $injector.get("AnnouncementPost");
          var action = TargetResource["::get::Account::announcementPosts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.announcementPosts#count
             * @methodOf lbServices.Account.announcementPosts
             *
             * @description
             *
             * Counts announcementPosts of Account.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.announcementPosts.count = function() {
          var TargetResource = $injector.get("AnnouncementPost");
          var action = TargetResource["::count::Account::announcementPosts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.announcementPosts#create
             * @methodOf lbServices.Account.announcementPosts
             *
             * @description
             *
             * Creates a new instance in announcementPosts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
        R.announcementPosts.create = function() {
          var TargetResource = $injector.get("AnnouncementPost");
          var action = TargetResource["::create::Account::announcementPosts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.announcementPosts#createMany
             * @methodOf lbServices.Account.announcementPosts
             *
             * @description
             *
             * Creates a new instance in announcementPosts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
        R.announcementPosts.createMany = function() {
          var TargetResource = $injector.get("AnnouncementPost");
          var action = TargetResource["::createMany::Account::announcementPosts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.announcementPosts#destroyAll
             * @methodOf lbServices.Account.announcementPosts
             *
             * @description
             *
             * Deletes all announcementPosts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.announcementPosts.destroyAll = function() {
          var TargetResource = $injector.get("AnnouncementPost");
          var action = TargetResource["::delete::Account::announcementPosts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.announcementPosts#destroyById
             * @methodOf lbServices.Account.announcementPosts
             *
             * @description
             *
             * Delete a related item by id for announcementPosts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for announcementPosts
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.announcementPosts.destroyById = function() {
          var TargetResource = $injector.get("AnnouncementPost");
          var action = TargetResource["::destroyById::Account::announcementPosts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.announcementPosts#findById
             * @methodOf lbServices.Account.announcementPosts
             *
             * @description
             *
             * Find a related item by id for announcementPosts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for announcementPosts
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
        R.announcementPosts.findById = function() {
          var TargetResource = $injector.get("AnnouncementPost");
          var action = TargetResource["::findById::Account::announcementPosts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.announcementPosts#updateById
             * @methodOf lbServices.Account.announcementPosts
             *
             * @description
             *
             * Update a related item by id for announcementPosts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Account id
             *
             *  - `fk` – `{*}` - Foreign key for announcementPosts
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
        R.announcementPosts.updateById = function() {
          var TargetResource = $injector.get("AnnouncementPost");
          var action = TargetResource["::updateById::Account::announcementPosts"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Strata
 * @header lbServices.Strata
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Strata` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Strata",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Strata/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Strata.accountOwner() instead.
            "prototype$__get__accountOwner": {
              url: urlBase + "/Strata/:id/accountOwner",
              method: "GET",
            },

            // INTERNAL. Use Strata.announcements.findById() instead.
            "prototype$__findById__announcements": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Strata/:id/announcements/:fk",
              method: "GET",
            },

            // INTERNAL. Use Strata.announcements.destroyById() instead.
            "prototype$__destroyById__announcements": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Strata/:id/announcements/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Strata.announcements.updateById() instead.
            "prototype$__updateById__announcements": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Strata/:id/announcements/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Strata.announcements() instead.
            "prototype$__get__announcements": {
              isArray: true,
              url: urlBase + "/Strata/:id/announcements",
              method: "GET",
            },

            // INTERNAL. Use Strata.announcements.create() instead.
            "prototype$__create__announcements": {
              url: urlBase + "/Strata/:id/announcements",
              method: "POST",
            },

            // INTERNAL. Use Strata.announcements.destroyAll() instead.
            "prototype$__delete__announcements": {
              url: urlBase + "/Strata/:id/announcements",
              method: "DELETE",
            },

            // INTERNAL. Use Strata.announcements.count() instead.
            "prototype$__count__announcements": {
              url: urlBase + "/Strata/:id/announcements/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Strata#create
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Strata",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Strata#createMany
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Strata",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Strata#patchOrCreate
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Strata",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Strata#replaceOrCreate
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Strata/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Strata#upsertWithWhere
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Strata/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Strata#exists
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Strata/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Strata#findById
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Strata/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Strata#replaceById
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Strata/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Strata#find
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Strata",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Strata#findOne
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Strata/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Strata#updateAll
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Strata/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Strata#deleteById
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Strata/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Strata#count
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Strata/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Strata#prototype$patchAttributes
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Strata id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Strata/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Strata#createChangeStream
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Strata/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Account.stratas.findById() instead.
            "::findById::Account::stratas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/stratas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Account.stratas.destroyById() instead.
            "::destroyById::Account::stratas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/stratas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Account.stratas.updateById() instead.
            "::updateById::Account::stratas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/stratas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Account.stratas() instead.
            "::get::Account::stratas": {
              isArray: true,
              url: urlBase + "/Accounts/:id/stratas",
              method: "GET",
            },

            // INTERNAL. Use Account.stratas.create() instead.
            "::create::Account::stratas": {
              url: urlBase + "/Accounts/:id/stratas",
              method: "POST",
            },

            // INTERNAL. Use Account.stratas.createMany() instead.
            "::createMany::Account::stratas": {
              isArray: true,
              url: urlBase + "/Accounts/:id/stratas",
              method: "POST",
            },

            // INTERNAL. Use Account.stratas.destroyAll() instead.
            "::delete::Account::stratas": {
              url: urlBase + "/Accounts/:id/stratas",
              method: "DELETE",
            },

            // INTERNAL. Use Account.stratas.count() instead.
            "::count::Account::stratas": {
              url: urlBase + "/Accounts/:id/stratas/count",
              method: "GET",
            },

            // INTERNAL. Use StrataAnnouncement.strata() instead.
            "::get::StrataAnnouncement::strata": {
              url: urlBase + "/StrataAnnouncements/:id/strata",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Strata#upsert
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Strata#updateOrCreate
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Strata#patchOrCreateWithWhere
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Strata#update
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Strata#destroyById
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Strata#removeById
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Strata#updateAttributes
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Strata id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Strata#modelName
        * @propertyOf lbServices.Strata
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Strata`.
        */
        R.modelName = "Strata";


            /**
             * @ngdoc method
             * @name lbServices.Strata#accountOwner
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Fetches belongsTo relation accountOwner.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Strata id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
        R.accountOwner = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::get::Strata::accountOwner"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Strata.announcements
     * @header lbServices.Strata.announcements
     * @object
     * @description
     *
     * The object `Strata.announcements` groups methods
     * manipulating `StrataAnnouncement` instances related to `Strata`.
     *
     * Call {@link lbServices.Strata#announcements Strata.announcements()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Strata#announcements
             * @methodOf lbServices.Strata
             *
             * @description
             *
             * Queries announcements of Strata.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Strata id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
        R.announcements = function() {
          var TargetResource = $injector.get("StrataAnnouncement");
          var action = TargetResource["::get::Strata::announcements"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Strata.announcements#count
             * @methodOf lbServices.Strata.announcements
             *
             * @description
             *
             * Counts announcements of Strata.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Strata id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.announcements.count = function() {
          var TargetResource = $injector.get("StrataAnnouncement");
          var action = TargetResource["::count::Strata::announcements"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Strata.announcements#create
             * @methodOf lbServices.Strata.announcements
             *
             * @description
             *
             * Creates a new instance in announcements of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Strata id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
        R.announcements.create = function() {
          var TargetResource = $injector.get("StrataAnnouncement");
          var action = TargetResource["::create::Strata::announcements"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Strata.announcements#createMany
             * @methodOf lbServices.Strata.announcements
             *
             * @description
             *
             * Creates a new instance in announcements of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Strata id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
        R.announcements.createMany = function() {
          var TargetResource = $injector.get("StrataAnnouncement");
          var action = TargetResource["::createMany::Strata::announcements"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Strata.announcements#destroyAll
             * @methodOf lbServices.Strata.announcements
             *
             * @description
             *
             * Deletes all announcements of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Strata id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.announcements.destroyAll = function() {
          var TargetResource = $injector.get("StrataAnnouncement");
          var action = TargetResource["::delete::Strata::announcements"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Strata.announcements#destroyById
             * @methodOf lbServices.Strata.announcements
             *
             * @description
             *
             * Delete a related item by id for announcements.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Strata id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for announcements
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.announcements.destroyById = function() {
          var TargetResource = $injector.get("StrataAnnouncement");
          var action = TargetResource["::destroyById::Strata::announcements"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Strata.announcements#findById
             * @methodOf lbServices.Strata.announcements
             *
             * @description
             *
             * Find a related item by id for announcements.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Strata id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for announcements
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
        R.announcements.findById = function() {
          var TargetResource = $injector.get("StrataAnnouncement");
          var action = TargetResource["::findById::Strata::announcements"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Strata.announcements#updateById
             * @methodOf lbServices.Strata.announcements
             *
             * @description
             *
             * Update a related item by id for announcements.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Strata id
             *
             *  - `fk` – `{*}` - Foreign key for announcements
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
        R.announcements.updateById = function() {
          var TargetResource = $injector.get("StrataAnnouncement");
          var action = TargetResource["::updateById::Strata::announcements"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.StrataAnnouncement
 * @header lbServices.StrataAnnouncement
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `StrataAnnouncement` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "StrataAnnouncement",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/StrataAnnouncements/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use StrataAnnouncement.strata() instead.
            "prototype$__get__strata": {
              url: urlBase + "/StrataAnnouncements/:id/strata",
              method: "GET",
            },

            // INTERNAL. Use StrataAnnouncement.posts.findById() instead.
            "prototype$__findById__posts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/StrataAnnouncements/:id/posts/:fk",
              method: "GET",
            },

            // INTERNAL. Use StrataAnnouncement.posts.destroyById() instead.
            "prototype$__destroyById__posts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/StrataAnnouncements/:id/posts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use StrataAnnouncement.posts.updateById() instead.
            "prototype$__updateById__posts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/StrataAnnouncements/:id/posts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use StrataAnnouncement.posts() instead.
            "prototype$__get__posts": {
              isArray: true,
              url: urlBase + "/StrataAnnouncements/:id/posts",
              method: "GET",
            },

            // INTERNAL. Use StrataAnnouncement.posts.create() instead.
            "prototype$__create__posts": {
              url: urlBase + "/StrataAnnouncements/:id/posts",
              method: "POST",
            },

            // INTERNAL. Use StrataAnnouncement.posts.destroyAll() instead.
            "prototype$__delete__posts": {
              url: urlBase + "/StrataAnnouncements/:id/posts",
              method: "DELETE",
            },

            // INTERNAL. Use StrataAnnouncement.posts.count() instead.
            "prototype$__count__posts": {
              url: urlBase + "/StrataAnnouncements/:id/posts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#create
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/StrataAnnouncements",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#createMany
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/StrataAnnouncements",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#patchOrCreate
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/StrataAnnouncements",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#replaceOrCreate
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/StrataAnnouncements/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#upsertWithWhere
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/StrataAnnouncements/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#exists
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/StrataAnnouncements/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#findById
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/StrataAnnouncements/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#replaceById
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/StrataAnnouncements/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#find
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/StrataAnnouncements",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#findOne
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/StrataAnnouncements/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#updateAll
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/StrataAnnouncements/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#deleteById
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/StrataAnnouncements/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#count
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/StrataAnnouncements/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#prototype$patchAttributes
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - StrataAnnouncement id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/StrataAnnouncements/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#createChangeStream
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/StrataAnnouncements/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Strata.announcements.findById() instead.
            "::findById::Strata::announcements": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Strata/:id/announcements/:fk",
              method: "GET",
            },

            // INTERNAL. Use Strata.announcements.destroyById() instead.
            "::destroyById::Strata::announcements": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Strata/:id/announcements/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Strata.announcements.updateById() instead.
            "::updateById::Strata::announcements": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Strata/:id/announcements/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Strata.announcements() instead.
            "::get::Strata::announcements": {
              isArray: true,
              url: urlBase + "/Strata/:id/announcements",
              method: "GET",
            },

            // INTERNAL. Use Strata.announcements.create() instead.
            "::create::Strata::announcements": {
              url: urlBase + "/Strata/:id/announcements",
              method: "POST",
            },

            // INTERNAL. Use Strata.announcements.createMany() instead.
            "::createMany::Strata::announcements": {
              isArray: true,
              url: urlBase + "/Strata/:id/announcements",
              method: "POST",
            },

            // INTERNAL. Use Strata.announcements.destroyAll() instead.
            "::delete::Strata::announcements": {
              url: urlBase + "/Strata/:id/announcements",
              method: "DELETE",
            },

            // INTERNAL. Use Strata.announcements.count() instead.
            "::count::Strata::announcements": {
              url: urlBase + "/Strata/:id/announcements/count",
              method: "GET",
            },

            // INTERNAL. Use AnnouncementPost.strataAnnouncement() instead.
            "::get::AnnouncementPost::strataAnnouncement": {
              url: urlBase + "/AnnouncementPosts/:id/strataAnnouncement",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#upsert
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#updateOrCreate
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#patchOrCreateWithWhere
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#update
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#destroyById
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#removeById
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#updateAttributes
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - StrataAnnouncement id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.StrataAnnouncement#modelName
        * @propertyOf lbServices.StrataAnnouncement
        * @description
        * The name of the model represented by this $resource,
        * i.e. `StrataAnnouncement`.
        */
        R.modelName = "StrataAnnouncement";


            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#strata
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Fetches belongsTo relation strata.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - StrataAnnouncement id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Strata` object.)
             * </em>
             */
        R.strata = function() {
          var TargetResource = $injector.get("Strata");
          var action = TargetResource["::get::StrataAnnouncement::strata"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.StrataAnnouncement.posts
     * @header lbServices.StrataAnnouncement.posts
     * @object
     * @description
     *
     * The object `StrataAnnouncement.posts` groups methods
     * manipulating `AnnouncementPost` instances related to `StrataAnnouncement`.
     *
     * Call {@link lbServices.StrataAnnouncement#posts StrataAnnouncement.posts()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement#posts
             * @methodOf lbServices.StrataAnnouncement
             *
             * @description
             *
             * Queries posts of StrataAnnouncement.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - StrataAnnouncement id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
        R.posts = function() {
          var TargetResource = $injector.get("AnnouncementPost");
          var action = TargetResource["::get::StrataAnnouncement::posts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement.posts#count
             * @methodOf lbServices.StrataAnnouncement.posts
             *
             * @description
             *
             * Counts posts of StrataAnnouncement.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - StrataAnnouncement id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.posts.count = function() {
          var TargetResource = $injector.get("AnnouncementPost");
          var action = TargetResource["::count::StrataAnnouncement::posts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement.posts#create
             * @methodOf lbServices.StrataAnnouncement.posts
             *
             * @description
             *
             * Creates a new instance in posts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - StrataAnnouncement id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
        R.posts.create = function() {
          var TargetResource = $injector.get("AnnouncementPost");
          var action = TargetResource["::create::StrataAnnouncement::posts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement.posts#createMany
             * @methodOf lbServices.StrataAnnouncement.posts
             *
             * @description
             *
             * Creates a new instance in posts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - StrataAnnouncement id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
        R.posts.createMany = function() {
          var TargetResource = $injector.get("AnnouncementPost");
          var action = TargetResource["::createMany::StrataAnnouncement::posts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement.posts#destroyAll
             * @methodOf lbServices.StrataAnnouncement.posts
             *
             * @description
             *
             * Deletes all posts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - StrataAnnouncement id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.posts.destroyAll = function() {
          var TargetResource = $injector.get("AnnouncementPost");
          var action = TargetResource["::delete::StrataAnnouncement::posts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement.posts#destroyById
             * @methodOf lbServices.StrataAnnouncement.posts
             *
             * @description
             *
             * Delete a related item by id for posts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - StrataAnnouncement id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for posts
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.posts.destroyById = function() {
          var TargetResource = $injector.get("AnnouncementPost");
          var action = TargetResource["::destroyById::StrataAnnouncement::posts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement.posts#findById
             * @methodOf lbServices.StrataAnnouncement.posts
             *
             * @description
             *
             * Find a related item by id for posts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - StrataAnnouncement id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for posts
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
        R.posts.findById = function() {
          var TargetResource = $injector.get("AnnouncementPost");
          var action = TargetResource["::findById::StrataAnnouncement::posts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.StrataAnnouncement.posts#updateById
             * @methodOf lbServices.StrataAnnouncement.posts
             *
             * @description
             *
             * Update a related item by id for posts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - StrataAnnouncement id
             *
             *  - `fk` – `{*}` - Foreign key for posts
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
        R.posts.updateById = function() {
          var TargetResource = $injector.get("AnnouncementPost");
          var action = TargetResource["::updateById::StrataAnnouncement::posts"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.AnnouncementPost
 * @header lbServices.AnnouncementPost
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AnnouncementPost` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "AnnouncementPost",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/AnnouncementPosts/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use AnnouncementPost.strataAnnouncement() instead.
            "prototype$__get__strataAnnouncement": {
              url: urlBase + "/AnnouncementPosts/:id/strataAnnouncement",
              method: "GET",
            },

            // INTERNAL. Use AnnouncementPost.account() instead.
            "prototype$__get__account": {
              url: urlBase + "/AnnouncementPosts/:id/account",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#create
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/AnnouncementPosts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#createMany
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/AnnouncementPosts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#patchOrCreate
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/AnnouncementPosts",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#replaceOrCreate
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/AnnouncementPosts/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#upsertWithWhere
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/AnnouncementPosts/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#exists
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/AnnouncementPosts/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#findById
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/AnnouncementPosts/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#replaceById
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/AnnouncementPosts/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#find
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/AnnouncementPosts",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#findOne
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/AnnouncementPosts/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#updateAll
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/AnnouncementPosts/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#deleteById
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/AnnouncementPosts/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#count
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/AnnouncementPosts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#prototype$patchAttributes
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AnnouncementPost id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/AnnouncementPosts/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#createChangeStream
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/AnnouncementPosts/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Account.announcementPosts.findById() instead.
            "::findById::Account::announcementPosts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/announcementPosts/:fk",
              method: "GET",
            },

            // INTERNAL. Use Account.announcementPosts.destroyById() instead.
            "::destroyById::Account::announcementPosts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/announcementPosts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Account.announcementPosts.updateById() instead.
            "::updateById::Account::announcementPosts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/announcementPosts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Account.announcementPosts() instead.
            "::get::Account::announcementPosts": {
              isArray: true,
              url: urlBase + "/Accounts/:id/announcementPosts",
              method: "GET",
            },

            // INTERNAL. Use Account.announcementPosts.create() instead.
            "::create::Account::announcementPosts": {
              url: urlBase + "/Accounts/:id/announcementPosts",
              method: "POST",
            },

            // INTERNAL. Use Account.announcementPosts.createMany() instead.
            "::createMany::Account::announcementPosts": {
              isArray: true,
              url: urlBase + "/Accounts/:id/announcementPosts",
              method: "POST",
            },

            // INTERNAL. Use Account.announcementPosts.destroyAll() instead.
            "::delete::Account::announcementPosts": {
              url: urlBase + "/Accounts/:id/announcementPosts",
              method: "DELETE",
            },

            // INTERNAL. Use Account.announcementPosts.count() instead.
            "::count::Account::announcementPosts": {
              url: urlBase + "/Accounts/:id/announcementPosts/count",
              method: "GET",
            },

            // INTERNAL. Use StrataAnnouncement.posts.findById() instead.
            "::findById::StrataAnnouncement::posts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/StrataAnnouncements/:id/posts/:fk",
              method: "GET",
            },

            // INTERNAL. Use StrataAnnouncement.posts.destroyById() instead.
            "::destroyById::StrataAnnouncement::posts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/StrataAnnouncements/:id/posts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use StrataAnnouncement.posts.updateById() instead.
            "::updateById::StrataAnnouncement::posts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/StrataAnnouncements/:id/posts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use StrataAnnouncement.posts() instead.
            "::get::StrataAnnouncement::posts": {
              isArray: true,
              url: urlBase + "/StrataAnnouncements/:id/posts",
              method: "GET",
            },

            // INTERNAL. Use StrataAnnouncement.posts.create() instead.
            "::create::StrataAnnouncement::posts": {
              url: urlBase + "/StrataAnnouncements/:id/posts",
              method: "POST",
            },

            // INTERNAL. Use StrataAnnouncement.posts.createMany() instead.
            "::createMany::StrataAnnouncement::posts": {
              isArray: true,
              url: urlBase + "/StrataAnnouncements/:id/posts",
              method: "POST",
            },

            // INTERNAL. Use StrataAnnouncement.posts.destroyAll() instead.
            "::delete::StrataAnnouncement::posts": {
              url: urlBase + "/StrataAnnouncements/:id/posts",
              method: "DELETE",
            },

            // INTERNAL. Use StrataAnnouncement.posts.count() instead.
            "::count::StrataAnnouncement::posts": {
              url: urlBase + "/StrataAnnouncements/:id/posts/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#upsert
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#updateOrCreate
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#patchOrCreateWithWhere
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#update
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#destroyById
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#removeById
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#updateAttributes
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AnnouncementPost id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnnouncementPost` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.AnnouncementPost#modelName
        * @propertyOf lbServices.AnnouncementPost
        * @description
        * The name of the model represented by this $resource,
        * i.e. `AnnouncementPost`.
        */
        R.modelName = "AnnouncementPost";


            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#strataAnnouncement
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Fetches belongsTo relation strataAnnouncement.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AnnouncementPost id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StrataAnnouncement` object.)
             * </em>
             */
        R.strataAnnouncement = function() {
          var TargetResource = $injector.get("StrataAnnouncement");
          var action = TargetResource["::get::AnnouncementPost::strataAnnouncement"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.AnnouncementPost#account
             * @methodOf lbServices.AnnouncementPost
             *
             * @description
             *
             * Fetches belongsTo relation account.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AnnouncementPost id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
        R.account = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::get::AnnouncementPost::account"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
