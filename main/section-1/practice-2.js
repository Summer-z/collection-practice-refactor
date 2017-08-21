'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let temp = [];
    collectionA.forEach(ele => {
        collectionB.forEach(subCollection => {
            temp = temp.concat(subCollection.filter(item => {
                return ele === item;
            }));
        });
    });
    return temp;
};

