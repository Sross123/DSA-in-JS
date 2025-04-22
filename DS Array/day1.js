// create a custom array
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    delete this.data[this.length - 1];
    this.length--;
    return this.length;
  }
  get(index) {
    if (index >= 0 && index < this.length) {
      return this.data[index];
    }
    return this.data;
  }
  shift() {
    const firstElem = this.data[0];
    // re-indexing the array
    for(let i = 0; i<this.length; i++){
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length - 1]
    console.log(firstElem);
    return firstElem;
  }
  deleteByIndex(index){
    delete this.data[index];
    return this.data;
  }
}

const MyNewArray = new MyArray();
MyNewArray.push("Shilpa");
MyNewArray.push("Shashi");
MyNewArray.push("Sweta");
MyNewArray.push("Pratima");
// MyNewArray;
// console.log(MyNewArray.pop());
// MyNewArray;
// console.log(MyNewArray.pop());
// MyNewArray;
// console.log(MyNewArray.pop());
// MyNewArray;
// console.log(MyNewArray.pop());
// MyNewArray;
// MyNewArray.push("Shilpa");
// MyNewArray.push("Shashi");
// MyNewArray.push("Sweta");
// console.log(MyNewArray.shift())
console.log(MyNewArray);
console.log(MyNewArray.deleteByIndex())

