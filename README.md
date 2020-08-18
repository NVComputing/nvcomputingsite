# NVHS Computing Team Website

Rewrite of https://nvcomputing.com/.

Please contribute to the resources folder!

# Credits:
- Raymond Zhao - Website backend, frontend, Markdown renderer, and maintainer
- Anton Barchukov - Navbar from old website
- Kenneth Zhao - Contributor to Resources
- Kelly Hong - Contributor to Resources
- Nihal Shivannagari - So Heavy He Is Overweight Contributor to Resources
- Nishikar Paruchuri - Contributor to Resources

# Guide to Contributing to Resources
To contribute to resources, simply add your Markdown (`.md`) files to the `markdown` folder. 
The Markdown converter will take care of the conversion to HTML in the background.

This is done by directly transliterating the file name into a webpage.
For example, `io.md` in the `markdown` folder is directly accessible at the URL `https://nvcomputing.com/resources/io`.
As such, please make sure your file is properly named (all lowercase, no spaces, etc.)

Don't worry about editing the large Table of Contents (the one that links to all the pages). I'll take care of that for you.

You can do this directly in GitHub's GUI. It should "fork" the repository for you, in which case you can
continue editing, then submit a Pull Request on the Pull Requests tab. (base: master, compare: your fork)

In your pull request, provide me a brief description of what you've edited/added and why. It doesn't need to be long, just a couple words.
I will either approve it or ask for changes. If I ask for changes, go back to your fork, make the changes, and I'll approve it once I think it's good.

For each page, always ensure there is a table of contents. To make it, the links for headers in Markdown are styled as such:

To link to a header named 
```
# 'What is life?'
```
simply do this in Markdown:
```
[What is life?](#whatislife)
```

There are different header levels (`#` is the largest, and it gets smaller all the way down to `######`).
Make sure you're using sublevels correctly (i.e. if there are subcategories for a category, move the header level one level down.)

All Markdown pages should begin with a `#` header that states the title of that page.
There should also be a header for every relevant subject for each Markdown page.

Code blocks should always be denoted with a language, to enable smart markdown highlighting by the website.

For example, for Java code, this would be the formatting:
````markdown
```java
private final String test = "bruh";
```
````

Or for C++:
````markdown
```c++
cout << "Hello World!" < endl;
```
````

For plaintext:
````markdown
```text
foo bar
baz
```
````

For math expressions, the syntax is as follows:

First, put your code in an inline code block.
```markdown
`$your inline math expression$`
`$$your block math expression$$`
```

One dollar sign means inline LaTeX block; two means separate LaTeX block.

Feel free to add attribution at the bottom of any pages you create, in the form of a text snippet like this:

`*Author: Raymond Zhao*`

If you're editing someone else's page, you can add yourself to the authors if you write a significant portion of the page.

`*Authors: Raymond Zhao, Kenneth Zhao*`

Make sure you also add a line break prior to the attribution (this can be done with `---`.)

# Extra Notes
The ACSL page will be more or less an index that links to resource pages for all the various topics in ACSL.
It will only contain necessary general information about the contest; all the topic pages
will be linked on there, not directly explained on there. To add subpages to ACSL, add things to the `markdown/acsl` directory.
