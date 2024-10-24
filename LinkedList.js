class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        }

        let temp = this.head;

        while (temp.next) {
            temp = temp.next;
        }

        temp.next = new Node(value);
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    size() {
        let count = 0;
        let temp = this.head;

        while (temp) {
            count++;
            temp = temp.next;
        }

        return count;
    }

    tail() {
        if (!this.head) return null;

        let temp = this.head;

        while (temp.next) {
            temp = temp.next;
        }

        return temp;
    }

    at(index) {
        let temp = this.head;

        for (let i = 0; i < index; i++) {
            if (!temp) return null;
            temp = temp.next;
        }

        return temp;
    }

    pop() {
        if (!this.head) return null;
        if (!this.head.next) {
            const temp = this.head;
            this.head = null;
            return temp;
        }

        let temp1 = this.head;
        let temp2 = this.head.next;

        while (temp2.next) {
            temp2 = temp2.next;
            temp1 = temp1.next;
        }

        temp1.next = null;

        return temp2;
    }

    contains(value) {
        if (!this.head) return false;

        let temp = this.head;

        while (temp) {
            if (temp.value === value) {
                return true;
            }
            temp = temp.next;
        }

        return false;
    }

    find(value) {
        if (!this.head) return null;

        let temp = this.head;
        let count = 0;

        while (temp) {
            if (temp.value === value) {
                return count;
            }
            temp = temp.next;
            count++;
        }

        return null;
    }

    toString() {
        let temp = this.head;
        let string = "";

        while (temp) {
            string += `(${temp.value}) -> `;
            temp = temp.next;
        }

        string += "null";

        return string;
    }

    insertAt(value, index) {
        if (index < 0) return;

        if (index === 0) {
            this.prepend(value);
            return;
        }

        if (!this.head) return;

        let temp1 = this.head;
        let temp2 = this.head.next;

        for (let i = 1; i < index; i++) {
            if (!temp2) return;
            temp1 = temp1.next;
            temp2 = temp2.next;
        }
        const newNode = new Node(value);
        temp1.next = newNode;
        newNode.next = temp2;
    }

    removeAt(index) {
        if (index < 0) return;

        if (!this.head) return;

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let temp1 = this.head;
        let temp2 = this.head.next;

        for (let i = 1; i < index; i++) {
            if (!temp2?.next) return;
            temp1 = temp1.next;
            temp2 = temp2.next;
        }
        temp1.next = temp2?.next ?? null;
    }
}
