
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

//This is all just setup so I can test with some values

const node1 = new ListNode(2);
const node2 = new ListNode(4);
const node3 = new ListNode(7);

// Linking the nodes
node1.next = node2;
node2.next = node3;

head = node1;
head.next = node2;
head.next.next = node3;

somevalue = 2;

//Code start here for real

array = []

while (head !== null) {
    if (head.val !== somevalue) {
        array.push(head.val);
    }
    head = head.next;
}

if (array.length === 0) {
    return null;
}

else {
    const newhead = new ListNode(array[0]);
    current = newhead;

    for (let i = 1; i < array.length; i++) {
        current.next = new ListNode(array[i]);
        current = current.next;
    }

    console.log(newhead);
    return newhead;
}