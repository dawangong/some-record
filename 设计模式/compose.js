/**
 * 组合模式
 * 非父子关系 关键是 请求委托 接口一致
 * 把一类 接口相同的对象组合在一起 
 * auth wh
 */

class Folder {
  constructor(name) {
    this.name = name;
    this.files = [];
  }

  add(file) {
    // file.parent = this;
    this.files.push(file);
  }

  scan() {
    console.log(`开始扫描文件夹: ${this.name}`);
    this.files.forEach(file => {
      file.scan();
    });
  }
}

class File {
  constructor(name) {
    this.name = name;
  }

  scan() {
    console.log(`开始扫描文件: ${this.name}`);
  }
}

const root = new Folder("根目录");
const folder1 = new Folder("文件夹1");
const folder2 = new Folder("文件夹2");

const file1 = new File("文件1");
const file2 = new File("文件2");
const file3 = new File("文件3");
const file4 = new File("文件4");

root.add(folder1);
root.add(folder2);
root.add(file1);

folder1.add(file2);
folder1.add(file3);

folder2.add(file4);

root.scan();