;'use strict';

module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach(ele => {
        let summary = 1;
        if(ele.length > 1) {
            summary = Number(ele.match(/\d{1,3}/g)[0]);
            ele = ele.match(/\w/)[0];
        }
        let exist = result.find(item => item.name === ele);
        if (exist) {
            exist.summary += summary;
        } else {
            result.push({name: ele, summary});
        }
    });
    return result;
};
