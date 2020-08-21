# Solutions to Past Programming Problems
## Available Problems
- [Example (<span style="color: #935000">Difficulty</span>)](#Example)
- [Allocation (Easy)](#Allocation)


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
  
