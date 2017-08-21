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
            let count = obj.count;
            return {key: obj.key, count: count - Math.floor(count / 3)};
        } else {
            return obj;
        }
    });
};
