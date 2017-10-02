/**
 * Created by Jacob on 2017-10-01.
 */
'use strict';

angular.
    module('post', []).
        factory('Post', function($resource){
            var url = '/json/posts.json '
            return $resource(url, {}, {
                query: {
                    method: "GET",
                    params: {},
                    isArray: true,
                    cache: true,
                    // transformResopnde
                    // interceptor
                },
                get: {
                    method: "GET",
                    params: {},
                    isArray: true,
                    cache: true,
                }
            })
        });
