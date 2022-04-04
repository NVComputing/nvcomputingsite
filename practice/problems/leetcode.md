# LeetCode

## Contents
- [Middle of the Linked List](#middleofthelinkedlist)
- [Backspace String Compare](#backspacestringcompare)
- [Sort Array by Parity](#sortarraybyparity)
- [Goat Latin](#goatlatin)
- [Self Dividing Numbers](#selfdividingnumbers)
- [Maximum Depth of a Binary Tree](#maximumdepthofabinarytree)


## Middle of the Linked List

Link: [Problem](https://leetcode.com/problems/middle-of-the-linked-list/)

Solution (in Java):
```java
//Code written by Kelly
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;
        
        while(fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        
        return slow;
    }
}
```
What this code does:

To be added.

Efficiency:
This code runs in `$O(n)$` time.

## Backspace String Compare

Link: [Problem](https://leetcode.com/problems/backspace-string-compare/)

Solution (in Java):
```java
//Code written by Kelly
class Solution {
    public boolean backspaceCompare(String S, String T) {
        return build(S).equals(build(T));
    }
    
    public static String build(String text) {
        String chars = "";
        for(int i = 0; i < text.length(); i++) {
            if(text.charAt(i) != '#') {
                chars += "" + text.charAt(i);
            } else if (chars.length() != 0) {
                chars = chars.substring(0, chars.length() - 1);
            }
        }
        
        return chars;
    }
}

```
What this code does:

To be added.

Efficiency:
This code runs in `$O(n)$` time.

## Sort Array by Parity

Link: [Problem](https://leetcode.com/problems/sort-array-by-parity/)

Solution (in Java):
```java
//Code written by Kelly
class Solution {
    public int[] sortArrayByParity(int[] nums) {
        ArrayList<Integer> even = new ArrayList<Integer>();
        ArrayList<Integer> odd = new ArrayList<Integer>();
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] % 2 == 1) {
                odd.add(nums[i]);
            } else {
                even.add(nums[i]);
            }
        }
        
        for(int i = 0; i < even.size(); i++) {
            nums[i] = even.get(i);
        }
        
        for(int i = even.size(); i < nums.length; i++) {
            nums[i] = odd.get(i - even.size());
        }
        
        return nums;
    }
}
```
What this code does:

To be added.

Efficiency:
This code runs in `$O(n)$` time.

## Goat Latin

Link: [Problem](https://leetcode.com/problems/goat-latin/)

Solution (in Python):
```python
//Code written by Kelly
class Solution:
    def toGoatLatin(self, S: str) -> str:
        words = S.split()
        vowels = 'aeiouAEIOU'
        for i in range(0, len(words)):
            if words[i][0] in vowels:
                words[i] = words[i] + 'ma'
            else:
                words[i] = words[i][1:] + words[i][0] + 'ma'
            
            words[i] = words[i] + ('a' * (i+1))
        
        sentence = " ".join(words)
        return sentence
```
What this code does:

To be added.

Efficiency:
This code runs in `$O(n)$` time.

## Self Dividing Numbers

Link: [Problem](https://leetcode.com/problems/self-dividing-numbers/)

Solution (in Python):
```python
//Code written by Kelly
class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        selfDividers = []
        
        for num in range(left, right+1):
            origNum = num
            
            if '0' in str(num):
                continue
            
            isSelfDividing = True
            while num > 0:
                if origNum % (num % 10) != 0:
                    isSelfDividing = False
                    break
                num //= 10
                    
            if isSelfDividing:
                selfDividers.append(origNum)
                
        return selfDividers
```
What this code does:

To be added.

Efficiency:
This code runs in `$O(n^2)$` time.

## Maximum Depth of a Binary Tree

Link: [Problem](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

Solution (in Java):
```java
//Code written by Kelly
class Solution {
    public int maxDepth(TreeNode root) {
        if(root != null) {
            return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
        }
        return 0;
    }
}
```
What this code does:

To be added.

Efficiency:
This code runs in `$O(1)$` time.

