/**  列表需要具有的特性
     * listSize prop    列表的元素个数
     * pos      prop    列表的当前位置
     * append   fn      在列表的末尾添加新元素或一组新元素
     * remove   fn      从列表中删除元素
     * length   fn      返回列表中元素的个数
     * listData fn      返回整个列表
     * insert   fn      在现有元素后插入新元素
     * clear    fn      清空列表中的所有元素
     * contain  fn      判断给定值是否在列表中
     * getEle   fn      返回当前位置的元素
     * front    fn      将列表的当前位置设移动到第一个元素
     * end      fn      将列表的当前位置移动到最后一个元素
     * prev     fn      将当前位置后移一位
     * next     fn      将当前位置前移一位
     * currPos  fn      返回列表的当前位置
     * moveTo   fn      将当前位置移动到指定位置
 */

class List {

    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = []; // 初始化一个空数组来保存列表元素
    }

    // 在列表的末尾添加新元素
    append(element) {
        const isArray = Array.isArray(element);
        if(isArray) {
            this.dataStore = [...this.dataStore, ...element];
            this.listSize += element.length;
        } else {
            this.dataStore[this.listSize ++] = element;
        }
    }

    // 内部方法
    find(element) {
        let res = -1;
        this.dataStore.forEach((item, index) => {
            if(item === element) {
                res = index;
            }
        });
        return res;
    }

    // 从列表中删除元素
    remove(element) {
        const index = this.find(element);
        if(index > -1) {
            this.dataStore.splice(index, 1);
            this.listSize --;
            return true;
        }
        return false;
    }

    // 返回列表中元素的个数
    length() {
        return this.listSize;
    }

    // 返回整个列表
    listData() {
        return this.dataStore;
    }

    // 在某个元素之后插入
    insert(element, newElement) {
        const index = this.find(element);
        if(index > -1) {
            this.dataStore.splice(index, 0, newElement);
            this.listSize ++;
            return true;
        }
        return false;
    }

    // 清空列表
    clear() {
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }

    // 给定值是否在列表中
    contain(element) {
        return this.find(element) > -1
    }

    // 返回当前位置
    getEle() {
        return this.dataStore[this.pos];
    }

    // 移动到第一个
    front() {
        this.pos = 0;
    }

    // 移动到最后一个
    end() {
        this.pos = this.listSize - 1;
    }

    // 前移
    prev() {
        this.pos > 0 && this.pos --;
    }

    // 后移
    next() {
        this.pos < this.listSize - 1 && this.pos ++;
    }

    // 当前位置
    currPos() {
        return this.pos;
    }

    // 移动到指定位置
    moveTo(position) {
        if(position > 0 && position < this.listSize) {
            this.pos = position;
        } else {
            throw new Error('over length of list object! ')
        }
    }
}

const list = new List();

list.append('test0');
list.append(['test1', 'test2', 'test3']);

console.log(list.listData(), list.length(), list.contain('test2'));

