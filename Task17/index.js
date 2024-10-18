var findSumOfOddElements = function (head) {
    let sum = 0;
        let current = head; 
        while (current !== null) {
            if (current.val % 2 !== 0) { 
                sum += current.val; 
            }
            current = current.next; 
        }
    
        return sum; 
     
        
        // return the sum of odd values of the linkedlist
    };