//https://completejavascript.com/trien-khai-stack-trong-javascript-voi-array-object-hay-map/

class MStack {
  constructor(capability) {
    this.data = new Map();
    this.capability = capability;
  }

  isEmpty() {
    return this.data.size === 0;
  }

  isFull() {
    return this.data.size === this.capability;
  }

  push(item) {
    if (this.isFull()) return false;

    this.data.set(this.data.size, item);
    return true;
  }

  pop() {
    if (this.isEmpty()) return undefined;

    let item = this.data.get(this.data.size - 1);
    this.data.delete(this.data.size - 1);
    return item;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.data.get(this.data.size - 1);
  }

  clear() {
    this.data.clear();
  }
}

const Capability = 50000000;
const TestCase = 10;

// Test dành cho Map
const st = new MStack(Capability);

const start = performance.now();

for (let tc = 0; tc < TestCase; tc++) {
  for (let i = 0; i < Capability; i++) {
    st.push(i);
  }

  for (let i = 0; i < Capability; i++) {
    st.pop();
  }
}

const end = performance.now();
const duration = (end - start) / TestCase;

console.log(`Duration: ${duration} ms`);
