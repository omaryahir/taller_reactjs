/*
 * Module dependencies
 */

import gokus from './gokus';

export default {
    gokus: {
        find: function(callback) {
            setTimeout(() => {
                callback(gokus);
            }, 3000);
        }
    }
}
