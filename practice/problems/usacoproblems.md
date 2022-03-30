# Past USACO Problems

## Contents
- [Bronze](#bronzeproblems)
- [Silver](#silverproblems)

## Bronze Problems


### January 2016, Problem 1
Link: [Promotion Counting](http://www.usaco.org/index.php?page=viewproblem2&cpid=591)

Solution (in Java):
```java
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class promotion {
    public static void main(String[] args) throws FileNotFoundException {
        Scanner sc = new Scanner(new File("promote.in"));
        int preB = sc.nextInt();
        int postB = sc.nextInt();
        int preS = sc.nextInt();
        int postS = sc.nextInt();
        int preG = sc.nextInt();
        int postG = sc.nextInt();
        int preP = sc.nextInt();
        int postP = sc.nextInt();
        
        int ascP = postP - preP;
        int ascG = postG - preG + ascP;
        int ascS = postS - preS + ascG;
        
        PrintWriter out = new PrintWriter(new File("promote.out"));
        out.println(ascS);
        out.println(ascG);
        out.println(ascP);
        out.close();
    }
}
```
What this code does:
(to be added)

Efficiency:
This code is all basic calculation. It runs in `$O(1)$` time.

### January 2017, Problem 2
Link: [Hoof, Paper, Scissors](http://www.usaco.org/index.php?page=viewproblem2&cpid=688)

Solution (in Java):
```java
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class HoofPaperScissors {
    public static void main(String[] args) throws FileNotFoundException {
        Scanner sc = new Scanner(new File("hps.in"));
        int n = sc.nextInt();
        int[][] Array = new int[4][4];
        for(int i = 0; i < n; i++){
            int first = sc.nextInt();
            int second = sc.nextInt();
            Array[first][second]++;
        }
        sc.close();
        int max = Array[1][2] + Array[2][3] + Array[3][1];
        if(Array[1][3] + Array[3][2] + Array[2][1] > max){
            max = Array[1][3] + Array[3][2] + Array[2][1];
        }
        PrintWriter out = new PrintWriter(new File("hps.out"));
        out.println(max);
        out.close();
    }
}

```
What this code does:
(to be added)

Efficiency:
Since there's only one for loop, this code runs in `$O(n)$` time.

### December 2020, Problem 2
Link: [Daisy Chains](http://www.usaco.org/index.php?page=viewproblem2&cpid=1060)

Solution (in Java):
```java
import java.util.Scanner;

public class DaisyChains{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] Array = new int[N];
        for(int i = 0; i < N; i++){
            Array[i] = sc.nextInt();
        }
        int sum = 0;
        int count = 0;
        //i is for starting number
        for(int i = 0; i < N; i++){
            // j is for going through each number
            for(int j = i; j < N; j++){
                // x is for summing up
                for(int x = j; x < N; x++){
                    sum = sum + Array[x];
                }
                for(int x = j; x < N; x++){
                    if(sum / (N - i) == Array[x]){
                        count++;
                    }
                }
            }
        }
        count = count + N - 1;
        System.out.println(count);
    }
}


```
What this code does:
(to be added)

Efficiency:
This is terribly, terribly inefficient code, in `$O(n^3)$` time. If it wasn't in Bronze, it definitely would not have passed.

### January 2021, Problem 1
Link: [Uddered but not Herd](http://www.usaco.org/index.php?page=viewproblem2&cpid=1083)

Solution (in Java):
```java
import java.util.ArrayList;
import java.util.Scanner;

public class Cowphabet {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        ArrayList<Character> alphabet = new ArrayList<Character>();
        String alph = sc.nextLine();
        for(int i = 0; i < 26; i++){
            alphabet.add(alph.charAt(i));
        }
        int loop = 0;
        String word = sc.nextLine();
        ArrayList<Character> wordArray = new ArrayList<Character>();
        for(int i = 0; i < word.length(); i++){
            wordArray.add(word.charAt(i));
        }
        for(int i = 0; i < wordArray.size(); i++){
            if(i < wordArray.size() - 1 && alphabet.indexOf(wordArray.get(i)) >= alphabet.indexOf(wordArray.get(i + 1))){
                loop++;
            } 
        }
        loop++;
        System.out.println(loop);
    }
}
```

What this code does:
(to be added)

Efficiency:
This code runs in `$O(n)$` time.



## Silver Problems