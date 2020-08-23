# Solutions to Past Programming Problems
## Available Problems
- [Example (<span style="color: #935000">Difficulty</span>)](#Example)
- [Allocation (Easy)](#Allocation)
- [Bus Routes (Easy)](#BusRoutes)
- [Longest Arithmetic (Easy)](#LongestArithmetic)


## Example

Link: [Problem](codeforces.com)

Solution (in <span style="color: #935000">language used</span>):
```java
//The example is in Java for simplicity.
import java.util.*;
public class Solution
{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        System.out.println(sc.nextInt());
    }
}
```
What this code does:

<span style="color: #935000">*This will try to explain the solution in plain English.*</span>

Efficiency:
<span style="color: #935000">*This will be written in big O notation. More information about big O notation can be found [here](/resources/efficiency).*</span>

  
## Allocation

Link: [Allocation](https://codingcompetitions.withgoogle.com/kickstart/round/000000000019ffc7/00000000001d3f56)

Solution (in Java):
```java
//Code written by Nihal
import java.util.*;
public class Solution
{
	public static void main(String args[])
	{
		Scanner sc=new Scanner(System.in);
		int test= sc.nextInt();
		for(int count=1;count<=test;count++)
		{
			int answer=0; int n=sc.nextInt();int b=sc.nextInt();
			int[] a=new int[n];
			for(int x=0;x<n;x++)
			{
				a[x]=sc.nextInt();
			}
			Arrays.sort(a);
			for(int x=0;x<n;x++)
			{
				if(a[x]<=b)
				{
					answer++; b-=a[x];
				}
				else
				{break;}
			}
			System.out.println("Case #"+count+": "+answer);
		}
		sc.close();
	}
}
```
What this code does:

This is a fairly simple problem that doesn't have many tricky efficiency requirements for the test cases. Once you recognize that it is always better to buy a cheaper house than a more expensive house, as it adds the same amount to the total, one, and is cheaper, the problem becomes very straightforward. It is a simple matter of sorting the array from cheapest house to most expensive, and traversing through the houses until you can't buy anymore. The number houses will be the solution.

Efficiency: `$O(nlog(n))$`
  
## Bus Routes

Link: [Bus Routes](https://codingcompetitions.withgoogle.com/kickstart/round/000000000019ffc8/00000000002d83bf)

Solution (in Java):
```java
//Code written by Nihal
import java.util.*;
public class Solution
{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        int test=sc.nextInt();
        for(int xix=1;xix<=test;xix++)
        {
            int n=sc.nextInt();long d=sc.nextLong();
            int[]i=new int[n];
            for(int x=0;x<n;x++)
            {
                i[x]=sc.nextInt();
            }
            for(int x=n-1;x>=0;x--)
            {
                d/=i[x];d*=i[x];
            }
            System.out.println("Case #"+xix+": "+d);
        }
    }
}
```
What this code does:

The solution to the problem is fairly intuitive. You would need to find the latest bus for each value less than n, and each time you find a bus, you reduce `$n$` to the day for the bus. The solution is to traverse backwards through the list of busses and find the latest multiple less than n. Once you find that, you make that latest multiple `$n$` and remove that bus from the list. Fortunately, integer division automatically truncates in Java, so you can simply divide `$n$` by the day for the bus and multiply the day for the bus again. Repeat this and the final value for `$n$` you are left with is the solution.

Efficiency: `$O(n)$`

## Longest Arithmetic 

Link: [Longest Arithmetic](https://codingcompetitions.withgoogle.com/kickstart/round/000000000019ff47/00000000003bf4ed)

Solution (in Java):
```java
//Code written by Jason
import java.io.*;
import java.util.*;
public class Solution 
{
	public static void main(String[] args) 
	{
		Scanner in = new Scanner(System.in);
		{
			int cases = in.nextInt();
			for(int t = 1; t<=cases; t++)
			{
				int n = in.nextInt();
				int[] k = new int[n];
				for(int x = 0; x<n; x++)
				{
					k[x] = in.nextInt();
				}				
				int maxcount = 0;
				int count = 0;
				int common = k[0]-k[1];
				for(int x = 1; x<n; x++)
				{
					if(k[x-1]-k[x]==common)
					{
						count++;
						if(maxcount<count)
						{
							maxcount = count;
						}
					}
					else
					{
						count = 0;
						common = k[x-1]-k[x];
						x--;
					}
				} 
				maxcount++;
				System.out.println("Case #"+t+": "+maxcount);				
			}
		}
	}
}

```
What this code does:

There isn't much to work on regarding efficiency in this problem. The best way to solve the problem is traverse throught the array and when you see a difference repeat, you count how long it lasts for, and everytime it changes, you reset. Then you just find the largest length, giving you the solution.

Efficiency: `$O(n)$`

