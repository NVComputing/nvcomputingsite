# Past USACO Problems

## Contents
#### [Bronze](#bronzeproblems)
  - [Promotion Counting](#january2016problem1)
  - [Hoof, Paper, Scissors](#january2017problem2)
  - [Daisy Chains](#december2020problem2)
  - [Uddered but not Herd](#january2021problem1)
  - [Even More Odd Photos](#january2021problem2)
  - [Just Stalling](#january2021problem3)

#### [Silver](#silverproblems)

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

### January 2021, Problem 2
Link: [Even More Odd Photos](http://www.usaco.org/index.php?page=viewproblem2&cpid=1084)

Solution (in Java):
```java
import java.util.ArrayList;
import java.util.Scanner;

public class OddPhotos {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        ArrayList<String> evenOdd = new ArrayList<String>();
        
        for(int i = 0; i < N; i++){
            if(sc.nextInt() % 2 == 0){
                evenOdd.add("E");
            }else{
                evenOdd.add("O");
            }
        }

        int groups = 0;
        //singles only
        for(int i = 0; i < N; i++){
            if(i % 2 == 0){
                if(evenOdd.contains("E")){
                    groups++;
                    evenOdd.remove(evenOdd.indexOf("E"));
                }else{
                    break;
                }
            }
            if(i % 2 == 1){
                if(evenOdd.contains("O")){
                    groups++;
                    evenOdd.remove(evenOdd.indexOf("O"));
                }else{
                    break;
                }
            }
        }

        //pairs
        for(int i = 0; i < evenOdd.size(); i++){
            if((groups + i + 1) % 2 == 0){
                if(evenOdd.contains("O")){
                    evenOdd.remove(evenOdd.indexOf("O"));
                    if(evenOdd.contains("O")){
                        evenOdd.remove(evenOdd.indexOf("O"));
                        groups++;
                    }else{
                        evenOdd.add("O");
                    }
                }else{
                    break;
                }
            }
        }
        groups++;
        System.out.println(groups);
    }
}
```

What this code does:
(to be added)

Efficiency:
This code runs in `$O(n)$` time.

### January 2021, Problem 3
Link: [Just Stalling](http://www.usaco.org/index.php?page=viewproblem2&cpid=1085)

Solution (in Java):
```java
import java.util.Arrays;
import java.util.Scanner;

public class Stalling {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] a = new int[N];
        int[] b = new int[N];
        for(int i = 0; i < N; i++){
            a[i] = sc.nextInt();
        }
        for(int i = 0; i < N; i++){
            b[i] = sc.nextInt();
        }
        int[] possible = new int[N];
        for(int i = 0; i < a.length; i++){
            for(int j = 0; j < b.length; j++){
                if(a[i] <= b[j]){
                    possible[i]++;
                }
            }
        }
        Arrays.sort(possible);
        int ways = 1;
        for(int i = 0; i < possible.length; i++){
            ways = ways * (possible[i] - i);
        }
        System.out.println(ways);
    }
}

```

What this code does:
(to be added)

Efficiency:
This code runs in `$O(n^2)$` time. Again, not the most efficient code, but since it's bronze it gets the job done.

## Silver Problems