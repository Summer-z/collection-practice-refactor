'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    let temp = [];
    collectionA.forEach(ele => {
        temp = temp.concat(objectB.value.filter(item => {
            return ele === item;
        }));
    });
    return temp;
};
