'use strict';

module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach(ele => {
        let count = 1;
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
};
