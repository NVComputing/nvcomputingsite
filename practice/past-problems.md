# Solutions to Past Programming Problems
## Available Problems
- [Example (<span style="color: #935000">Difficulty</span>)](#Example)
- [Allocation (Easy)](#Allocation)
- [Bus Routes (Easy)](#BusRoutes)
- [Longest Arithmetic (Easy)](#LongestArithmetic)
- [High Buildings (Medium)](#HighBuildings)
- [Toys (Hard)](#Toys)


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

## High Buildings 

Link: [High Buildings](https://codingcompetitions.withgoogle.com/kickstart/round/000000000019ff47/00000000003bef73)

Solution (in Java):
```java
//Code written by Nishikar
import java.io.*;
import java.util.*;
public class Solution
{
	public static void main(String[] args) throws IOException
	{
		Scanner sc=new Scanner(System.in);
		int test=sc.nextInt();
		for(int g=0;g<test;g++)
		{
			int n=sc.nextInt();
			int a=sc.nextInt();
			int b=sc.nextInt();
			int c=sc.nextInt();
			ArrayList<Integer> ans= new ArrayList<Integer>();
			if((a-c)+(b-c)+c>n)
			{
				System.out.println("Case #" + (g+1) + ": " + "IMPOSSIBLE");	
			}
			else if(a==b&&b==c&&a==1)
			{
				if(n==1)
				{
					System.out.println("Case #" + (g+1) + ": 1");	

				}
				else
				System.out.println("Case #" + (g+1) + ": " + "IMPOSSIBLE");	
			}
			else
			{
				int temp=0;
				boolean switcher=false;
			int starter=n-(a-c);
			for(int x=0;x<a-c;x++)
			{
				ans.add(starter);
				starter++;
			}
			int adder=0;
			for(int x=0;x<c;x++)
			{
				ans.add(n);
				if(x==0)
				{
					adder=ans.size();
				}
			}
			for(int x=0;x<b-c;x++)
			{
				ans.add(n-x-1);
			}
			while(ans.size()<n)
			{
				if(c==1&&adder==ans.size())
				{
					ans.add(adder-1,1);
				}
				else
				{	
					ans.add(adder,1);
				}

			}

			System.out.print("Case #" + (g+1) + ": ");
			//if(switcher==false) {
			for(int x=0;x<n;x++)
			{
				if(x!=n-1)
				System.out.print(ans.get(x)+ " ");
				else
				System.out.print(ans.get(x));

			}
			System.out.println();
			
			}
		}
	}
}

```
What this code does:

There are a couple of things you need to recognize for this problem. First, look for the impossible cases. The only times the cases are impossible is if `$a=b=1$` but `$n>1$`, or if `$a+b-c>n$`, as there are that many houses visible, so n must be at least greater than that. Once you recognize this, there you will notice there are 2 types of possible cases. First, if `$c>1$`, all the towers that the both can see must be the same height. For convenience, we will make the height of the tall towers `$n$`. There will also be `$a-c$` short towers, of size 1, to the left of those equally tall towers and `$b-c$` short towers to the right of the tall towers. Any towers that neither can person can see, the number can be found from `$n-(a+b-c)$`, will be short towers put within the equally tall towers. This will work for all test cases where `$c>1$` that pass the impossible cases. Next, you solve for if `$c=1$`. You would check for the side, `$a$` or `$b$`, that is `$>1$`. If this is not true for `$a$` or `$b$` but it passed the impossible case, the solution is 1. Now, given the side `$>1$`, you take the other side and add `$b-c$` short towers. Then you place 1 tall tower to the correct side of small towers. Next you take the side that passes that `$>1$`, suppose the value was `$pass$`, and put `$pass-c-1$` short towers to the correct side. Now you place, a medium tower, for convenience it will have height `$n-1$`, between the pass side and the tall tower. Now, any invisible towers, there will be `$n-(a+b-c)$` of them, will be placed between the medium height tower and the tall tower. With all these circumstances complete, your code should effeciently run through the test sets.

Efficiency: `$O(n)$`

## Toys 

Link: [Toys](https://codingcompetitions.withgoogle.com/kickstart/round/000000000019ff47/00000000003bede9)

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
			int n=sc.nextInt();int[]e=new int[n]; int[] r=new int[n];
			for(int x=0;x<n;x++)
			{e[x]=sc.nextInt();r[x]=sc.nextInt();}
			long[]and=recurse(e,r,new boolean[n],0);
			long sol=n-and[0];
			long ans=and[1];
			System.out.print("Case #"+count+": "+sol+" ");
			if(ans==-1) {System.out.println("INDEFINITELY");}
			else {System.out.println(ans);}
		}
		sc.close();
	}
	public static long[] recurse(int[]e,int[]r,boolean[]check,int i)
	{
		if(i>=e.length)
		{
			long[]w=new long[2];long esum=0; boolean passed=true;
			for(int x=0;x<e.length;x++)
			{
				if(check[x])
				{w[0]++;esum+=e[x];}
			}
			if(w[0]==0) {return w;}
			for(int x=0;x<e.length;x++)
			{
				if(check[x]&&r[x]>esum-e[x])
				{passed=false; w[1]+=esum;break;}
				else if(check[x]) {w[1]+=e[x];}
			}
			if(passed) {w[1]=-1;}
			return w;
		}
		else
		{
			check[i]=false;
			long[]w=recurse(e,r,check,i+1);
			check[i]=true;
			long[]v=recurse(e,r,check,i+1);
			if(w[1]==-1&&v[1]==-1)
			{
				if(w[0]>v[0]) {return w;} return v;
			}
			else if(w[1]==-1)
			{return w;}
			else if(v[1]==-1)
			{return v;}
			else if(w[1]>v[1]) {return w;}
			else if(w[1]<v[1]) {return v;}
			else if(v[0]>w[0]) {return v;}
			return w;
				
		}
	}
}
```
What this code does:

Since this problem is quite difficult and most of us aren't ready for it, we will only be reviewing how to get the first test set, which is efficient but not as efficient as it can be. Fortunately, the `$n$` value is capped at 12, so we are able to practically brute force the solution. However, a pure brute force algorithm won't work. We still need to avoid repeated cases through a primitive form of dynamic programming. The way to approach this is to treat every permutation as a series of true or falses for the toys regarding whether they are in the set or not. Then, we find the highest possible amount of time of entertainment throughtout the permutations. Finally, if there are multiple cases with the same highest value, we check which one has the most toys and use that as the solution.

Efficiency: `$O(n*2^n)$`

