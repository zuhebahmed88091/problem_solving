var mergeTwoLists = function(list1, list2) {
    let dummyList = new ListNode(0);

    let head = dummyList;

    while(list1 && list2) {
        if(list1.val < list2.val) {
            dummyList.next = list1;
            list1 = list1.next;
        } else {
            dummyList.next = list2;
            list2 = list2.next;
        }

        dummyList = dummyList.next;
    }

    if(list1 === null) {
        dummyList.next = list2;
    } else {
        dummyList.next = list1;
    }

    return head.next;

};