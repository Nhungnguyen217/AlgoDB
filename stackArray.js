//https://completejavascript.com/trien-khai-stack-trong-javascript-voi-array-object-hay-map/

class AStack {
  constructor(capability) {
    this.data = [];
    this.capability = capability;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  isFull() {
    return this.data.length === this.capability;
  }

  push(item) {
    if (this.isFull()) return false;

    this.data.push(item);
    return true;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    return this.data.pop();
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.data[this.data.length - 1];
  }

  clear() {
    this.data.length = 0;
  }
}

const Capability = 50000000;
const TestCase = 10;

// Test dành cho Array
const st = new AStack(Capability);

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
