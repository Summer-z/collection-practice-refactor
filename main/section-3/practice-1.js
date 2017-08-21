'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    return collectionA.map(obj => {
        let temp;
        objectB.value.forEach(ele => {
            if (obj.key === ele) {
                temp = true;
            }
        });
        if (temp) {
            return {key: obj.key, count: obj.count - 1};
        } else {
            return obj;
        }
    });
};
