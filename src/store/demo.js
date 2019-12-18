/*
 * @Descripttion: 
 * @version: 
 * @Author: liujinyuan
 * @Date: 2019-08-15 17:00:45
 * @LastEditors: liujinyuan
 * @LastEditTime: 2019-08-15 17:00:48
 */

const demo = (state = 0,action) => {
    switch (action.type) {
    case 'add':
        return state+1;
    case 'del':
        return state-1;
    default:
        return state;
    }
};

export default demo;