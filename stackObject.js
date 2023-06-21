class OStack {
  constructor(capability) {
    this.data = {};
    this.size = 0;
    this.capability = capability;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capability;
  }

  push(item) {
    if (this.isFull()) return false;

    this.data[this.size] = item;
    this.size++;
    return true;
  }

  pop() {
    if (this.isEmpty()) return undefined;

    let item = this.data[this.size - 1];
    delete this.data[this.size - 1];
    this.size--;
    return item;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.data[this.size - 1];
  }

  clear() {
    while (!this.isEmpty()) this.pop();
    this.size = 0;
  }
}

const Capability = 50000000;
const TestCase = 10;

// Test dành cho Object
const st = new OStack(Capability);


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
