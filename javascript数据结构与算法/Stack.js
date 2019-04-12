/** 栈需要具有的特性
 * push     fn      入栈
 */
class Stack {

    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push(element) {
        this.dataStore[this.top ++] = element
    }
}