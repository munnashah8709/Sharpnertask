var remove3rdlastElem = function(head) {
    if (!head || !head.next || !head.next.next) {
        return head;
    }

    let fast = head;
    let slow = head;
    let prev = null;
    for (let i = 0; i < 3; i++) {
        fast = fast.next;
    }
    while (fast !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next;
    }
    if (prev) {
        prev.next = slow.next;
    }

    return head;
};