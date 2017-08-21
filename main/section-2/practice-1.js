'use strict';

module.exports = function countSameElements(collection) {
    let result = [];
    let count = 1;
    collection.forEach(ele => {
        let exist = result.find(item => item.key === ele);
        if (exist) {
            exist.count++;
        } else {
            result.push({key: ele, count});
        }
    });
    return result;
};
