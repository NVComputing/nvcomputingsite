# Past USACO Problems

## Contents
#### [Bronze](#bronzeproblems)
  - [Promotion Counting](#january2016problem1)
  - [Hoof, Paper, Scissors](#january2017problem2)
  - [Word Processor](#january2020problem1)
  - [Do You Know Your ABC's](#december2020problem1)
  - [Daisy Chains](#december2020problem2)
  - [Stuck in a Rut](#december2020problem3)
  - [Uddered but not Herd](#january2021problem1)
  - [Even More Odd Photos](#january2021problem2)
  - [Just Stalling](#january2021problem3)

#### [Silver](#silverproblems)
  - [Breed Counting](#december2015problem3)
  - [Counting Haybales](#december2016problem1)
  - [Cities and States](#december2016problem2)
  - [Grass Planting](#january2019problem1)
  - [MooBuzz](#december2019problem1)

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

### January 2020, Problem 1
Link: [Word Processor](http://www.usaco.org/index.php?page=viewproblem2&cpid=987)

Solution (in Java):
```java
import java.util.*;
import java.io.*;

public class WordProcessor {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader("word.in"));
        PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter("word.out")));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int numWords = Integer.parseInt(st.nextToken());
        int maxChars = Integer.parseInt(st.nextToken());

        st = new StringTokenizer(br.readLine());
        br.close();

        int numChars = 0;
        String res = "";
        while(st.hasMoreTokens()) {
            String word = st.nextToken();
            if(numChars + word.length() <= maxChars) {
                res += word + " ";
                //pw.print(word + " ");
                numChars += word.length();
            } else {
                pw.println(res.substring(0,res.length()-1));
                //pw.print(word + " ");
                res = word + " ";
                numChars = word.length();
            }
        }
        pw.print(res.substring(0,res.length()-1));

        pw.close();
    }
}

```
What this code does:
(to be added)

Efficiency:
This code runs in `$O(n)$` time.

### December 2020, Problem 1
Link: [Do You Know Your ABC's?](http://www.usaco.org/index.php?page=viewproblem2&cpid=1059)

Solution (in Java):
```java
import java.util.*;
import java.io.*;

public class DecBronze1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] nums = new int[7];
        for(int i = 0; i < 7; i++) {
            nums[i] = sc.nextInt();
        }

        Arrays.sort(nums);

        int a = nums[0];
        int b = nums[1];
        int c = nums[6] - a - b;

        System.out.println(a + " " + b + " " + c);
    }
}
```
What this code does:
(to be added)

Efficiency:
This code runs in `$O(1)$` time, since the for loop is guaranteed to have 7 runs every time.

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

### December 2020, Problem 3
Link: [Stuck in a Rut](http://www.usaco.org/index.php?page=viewproblem2&cpid=1061)

Solution (in Java):
```java
import java.util.*;
import java.io.*;

public class DecBronze3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<int[]> cows = new ArrayList<int[]>();
        ArrayList<int[]> easts = new ArrayList<int[]>();
        ArrayList<int[]> activeNorths = new ArrayList<int[]>();

        HashMap<int[], String> res = new HashMap<int[], String>();
        int numCows = sc.nextInt();
        for(int i = 0; i < numCows; i++) {
            String dir = sc.next();
            int[] coords = {sc.nextInt(), sc.nextInt()};
            res.put(coords, "Infinity");
            if(dir.equals("E")) {
                easts.add(coords);
                cows.add(coords);
            } else {
                activeNorths.add(coords);
                cows.add(coords);
            }
        }

        Collections.sort(easts, Comparator.comparing(c -> c[1]));

        for(int i = 0; i < easts.size(); i++) {
            int[] currentEast = easts.get(i);
            ArrayList<int[]> conflictNorths = getActiveNorths(currentEast, activeNorths);
            Collections.sort(conflictNorths, Comparator.comparing(c -> c[0]));

            for(int j = 0; j < conflictNorths.size(); j++) {
                int[] conflictNorth = conflictNorths.get(j);
                int eastDistance = conflictNorth[0] - currentEast[0];
                int northDistance = currentEast[1] - conflictNorth[1];

                if(eastDistance == northDistance) {
                    continue;
                } else if(eastDistance < northDistance) {
                    res.put(conflictNorth, "" + northDistance);
                    activeNorths.remove(conflictNorth);
                } else {
                    res.put(currentEast, "" + eastDistance);
                    break;
                }
            }
        }

        for(int[] cow: cows) {
            System.out.println(res.get(cow));
        }

    }

    public static ArrayList<int[]> getActiveNorths(int[] east, ArrayList<int[]> activeNorths) {
        ArrayList<int[]> norths = new ArrayList<int[]>();
        for(int i = 0; i < activeNorths.size(); i++) {
            int[] northCoord = activeNorths.get(i);
            if(east[0] < northCoord[0] && east[1] >= northCoord[1]) {
                norths.add(northCoord);
            }
        }
        return norths;
    }
}
```
What this code does:
(to be added)

Efficiency:
This code runs in `$O(n^2)$` time.

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

### December 2015, Problem 3
Link: [Breed Counting](http://www.usaco.org/index.php?page=viewproblem2&cpid=572)

Solution (in Java):
```java
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class BreedCounting {
    public static void main(String[] args) throws FileNotFoundException{
        Scanner sc = new Scanner(new File("bcount.in"));
        int N = sc.nextInt();
        int Q = sc.nextInt();
        int H = 0;
        int G = 0;
        int J = 0;
        int[] Hfix = new int[N + 1];
        int[] Gfix = new int[N + 1];
        int[] Jfix = new int[N + 1];
        Hfix[0] = 0;
        Gfix[0] = 0;
        Jfix[0] = 0;
        // H1 G2 J3
        for(int i = 1; i < N + 1; i++){
            int breed = sc.nextInt();
            if(breed == 1){
                H++;
            }else if(breed == 2){
                G++;
            }else{
                J++;
            }
            Hfix[i] = H;
            Gfix[i] = G;
            Jfix[i] = J;
        }
        PrintWriter pw = new PrintWriter(new File("bcount.out"));
        for(int i = 0; i < Q; i++){
            int first = sc.nextInt();
            int last = sc.nextInt();
            int Hout = Hfix[last] - Hfix[first - 1];
            int Gout = Gfix[last] - Gfix[first - 1];
            int Jout = Jfix[last] - Jfix[first - 1];
            pw.println(Hout + " " + Gout + " " + Jout);
        }
        pw.close();
    }
}

```

What this code does:
(to be added)

Efficiency:
This code runs in `$O(n)$` time.

### December 2016, Problem 1
Link: [Counting Haybales](http://www.usaco.org/index.php?page=viewproblem2&cpid=666)

Solution (in Java):
```java
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.Scanner;

public class Haybales {
    public static void main(String[] args) throws FileNotFoundException {
        Scanner sc = new Scanner(new File("haybales.in"));
        int N = sc.nextInt();
        int Q = sc.nextInt();
        int[] Array = new int[N];
        for(int i = 0; i < N; i++){
            Array[i] = sc.nextInt();
        }
        Arrays.sort(Array);
        PrintWriter out = new PrintWriter(new File("haybales.out"));
        for(int i = 0; i < Q; i++){
            int count = 0;
            int first = sc.nextInt();
            int last = sc.nextInt();
            int lowSearch = Arrays.binarySearch(Array, first);
            if(lowSearch < 0){
                lowSearch = Math.abs(lowSearch + 1);
            }
            int highSearch = Arrays.binarySearch(Array, last);
            if(highSearch < 0){
                highSearch = Math.abs(highSearch + 2);
            }

            out.println(highSearch - lowSearch + 1);
        }
        out.close();
    }
}

```

What this code does:
(to be added)

Efficiency:
This code runs in `$O(n)$` time.

### December 2016, Problem 2
Link: [Cities and States](http://www.usaco.org/index.php?page=viewproblem2&cpid=667)

Solution (in Java):
```java
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Scanner;

public class Citystate {
    public static void main(String[] args) throws FileNotFoundException {
        Scanner sc = new Scanner(new File("citystate.in"));
        int N = sc.nextInt();
        HashMap<String, Long> map = new HashMap<String, Long>();
        int dupes = 0;
        for(int i = 0; i < N; i++){
            String[] Array = new String[2];
            Array[0] = sc.next().substring(0, 2);
            Array[1] = sc.next();
            Arrays.sort(Array);
            String key = Array[0] + "" + Array[1];
            if(map.containsKey(key)){
                map.put(key, map.get(key) + 1);
                dupes++;
            }else{
                map.put(key, 1);
            }
        }
        dupes = dupes / 2;
        PrintWriter out = new PrintWriter(new File("citystate.out"));
        out.println(dupes);
        out.close();
    }
}

```

What this code does:
(to be added)

Efficiency:
This code runs in `$O(n)$` time.

### January 2019, Problem 1
Link: [Grass Planting](http://www.usaco.org/index.php?page=viewproblem2&cpid=894)

Solution (in Java):
```java
import java.util.*;
import java.io.*;

public class Grass {
    public static void main(String[] args) throws IOException{
        Scanner sc = new Scanner(new File("planting.in"));
        int N = sc.nextInt();
        int[] d = new int[100000];
        for(int i = 1; i < N; i++){
            int a = sc.nextInt();
            int b = sc.nextInt();
            d[a-1]++; 
            d[b-1]++;
        }
        int D = 0;
        for(int i = 0; i < N; i++){
            if(d[i] > D){
                D = d[i];
            }
        }
        PrintWriter pw = new PrintWriter(new File("planting.out"));
        pw.println(D+1);
        pw.close();
    }
}
```

What this code does:
(to be added)

Efficiency:
This code runs in `$O(n)$` time.

### December 2019, Problem 1
Link: [MooBuzz](http://www.usaco.org/index.php?page=viewproblem2&cpid=966)

Solution (in Java):
```java
//This code only passes 12/13 test cases.
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class MooBuzz {
    public static void main(String[] args) throws FileNotFoundException {
        Scanner sc = new Scanner(new File("moobuzz.in"));
        long N = sc.nextInt();
        long pos = N % 8;
        if(pos == 0){
            pos = 8;
        }
        long add = N / 8;
        long[] nums = {1, 2, 4, 7, 8, 11, 13, 14};
        PrintWriter pw = new PrintWriter(new File("moobuzz.out"));
        pw.println(nums[(int) (pos - 1)] + add * 15);
        pw.close();
    }
}

```

What this code does:
(to be added)

Efficiency:
This code runs in `$O(n)$` time.

