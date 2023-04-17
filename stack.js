class Node {
    contructor(value) {
        this.value = value;
        this.prev = null;
    }
}

class Stack {
    contructor() {
        this.top = null;
    }
    
    push(value) {
        let node = new Node(value);
        node.prev = this.top;
        this.top = node;
    }
    
    pop() {
        if (this.top) {
            let value = this.top.value;
            this.top = this.top.prev;
        } else {
            return 'Stack is empty'
        }
    }
}

let stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);

console.log(stack1.pop()); // 3
console.log(stack1.pop()); // 2
console.log(stack1.pop()); // 1
console.log(stack1.pop()); // stack is empty
