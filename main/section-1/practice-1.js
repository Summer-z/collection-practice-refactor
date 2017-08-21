'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let temp = [];
    collectionA.forEach(ele => {
        temp = temp.concat(collectionB.filter(item => {
            return ele === item;
        }));
    });
    return temp;
};
