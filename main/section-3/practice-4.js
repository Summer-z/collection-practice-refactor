'use strict';
function summarize(collection) {
    let result = [];
    let count = 1;
    collection.forEach(ele => {
        if(ele.includes('-')) {
            let split = ele.split('-');
            ele = split[0];
            count = Number(split[1]);
        }
        let exist = result.find(item => item.key === ele);
        if (exist) {
            exist.count += count;
        } else {
            result.push({key: ele, count});
        }
    });
    return result;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    collectionA = summarize(collectionA);
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
