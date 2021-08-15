# NVHS Computing Team Website

2nd (and hopefully final) rewrite of https://nvcomputing.com/.

Please contribute to the resources folder!

# Credits:
- Raymond Zhao - Website backend/infrastructure, formatting supervision, website frontend, Markdown renderer, LaTeX and regex parser, page styling, and maintainer
- Anton Barchukov - Website frontend, navigation bar, Lightbox for images, page styling, HTML cleanup/partials
- Kelly Hong - Heavy Contributor to Resources / Practice
- Kenneth Zhao - Heavy Contributor to Resources / Practice
- Nihal Shivannagari - Contributor to Resources / Practice
- Nishikar Paruchuri - Contributor to Resources / Practice

# Guide to Contributing to Resources
To contribute to resources, simply add your Markdown (`.md`) files to the `markdown` folder. 
The Markdown converter will take care of the conversion to HTML in the background.

This is done by directly transliterating the file name into a webpage.
For example, `io.md` in the `markdown` folder is directly accessible at the URL `https://nvcomputing.com/resources/io`.
As such, please make sure your file is properly named (all lowercase, no spaces, etc.)

Don't worry about editing the large Table of Contents (the one that links to all the individual pages). I'll take care of that for you.

You can do this directly in GitHub's GUI. It should "fork" the repository for you, in which case you can
continue editing, then submit a Pull Request on the Pull Requests tab. (base: master, compare: your fork).
This is fine for simple edits - **HOWEVER: If you are doing anything more complicated than just a simple revision, you should REALLY set up your own development environment.**

## Setting Up Your Development Environment

This is a very involved process, so bear with me.

First, install your IDE of choice. I recommend WebStorm (free with the [GitHub Student Pack](https://education.github.com/pack).)

### Prerequisites
In order to start setting up your development environment, you first need a bit of knowledge and a few other programs installed.

Install these:
- [Git](https://git-scm.com)
- [Node.js Latest Version (NOT LTS)](https://nodejs.org) - should be v14.7.0 or similar

Setup might be a bit complicated. Here are some tips for the installers:
- Git
  - Select Components: The defaults are fine.
  - DO NOT use Vim as Git's default text editor. You will suffer. (Pick Visual Studio Code instead if you have it installed, or if you don't, install it / pick Atom.)
  - Adjusting your PATH environment: Git from the command line and also from 3rd-party software
  - Use the OpenSSL library
  - Checkout Windows-style, commit Unix-style line endings
  - Terminal emulator doesn't matter (just pick any)
  - `git pull` should behave like default
  - Use Git Credential Manager (Not Git Credential Manager Core)
  - Enable file system caching
  - Don't enable anything else experimental.
  - Click install and you should be good to go.

- Node.js
  - MAKE SURE the Add to PATH section is enabled. YOU WILL NOT BE ABLE TO DO THE LATER SETUP IF IT IS NOT ENABLED.

You should also have a bit of Git knowledge. If you don't know how to use Git, read this glossary:
#### Git Terminology
**Git**

_A version control system (like a distributed Google Drive)._

_Has a ton of terminology associated with it. (Read them in order)_

- **Repository** - What houses the entire project (in a folder) - it's what Git tracks.
- **GitHub** - A popular hosting site for remote repositories. I hope you know it by now...
- **Remote** - A version of the repository NOT on your local device, but in some other arbitrary location (i.e. a company server or GitHub). Your typical remote's name will be "origin".
- **Push** - The act of sending your code from your local device to the remote repository. THIS WILL ONLY WORK IF YOUR LOCAL CODE IS UP TO DATE WITH THE REMOTE (unless you use --force... don't use --force by the way.)
- **Pull** - This will sync your local repository with the remote repository (this combines a *fetch* and a *merge* - you can look into those if you would like), aka sending the remote repository's code to your local device. THIS DOES NOT OVERWRITE YOUR LOCAL CHANGES - it will neatly MERGE your code and the updated code from the repository, creating conflicts where necessary.
- **Commit** - The thing you send/receive when you push and pull. Think of it as little packages that you must wrap your changes in before sending them. Also a verb, which means to create a commit.
- **Conflict** - This is where an automatic merge cannot be done, and you must resolve the conflict by going into the file (it will indicate where the conflict is), changing it to the exact version you want, then committing and pushing.
- **Tracked / Untracked** - This is a term that describes the files. If a file is TRACKED, that means that Git is keeping track of the changes. If it is UNTRACKED, git acts as though that file doesn't exist. You can start tracking a file using git add.
- **Staged / Unstaged** - This is a term that describes the changes. If changes are staged, then they are ready to commit - unstaged changes are not committed. You should stage whatever changes you want to prior to committing, then commit.
- **Branch** - This is a term that describes different versions of the repository. Work is typically done in the *master* branch. If you wanted to do work on one feature while also doing work on another feature, you would make two new branches based off of master.
- **Pull Request** - You create a pull request when you want to merge two branches together. Any conflicts will have to be manually resolved in an extraordinarily messy fashion, so try to avoid those.
- **Fork** - Create a copy of someone else's repository. For example, if you wanted to contribute to an open source project (but of course, only have read access), you could FORK their repository, open a pull request comparing your base branch to their branch, and then if they accept it your code is now in the open source repository.

Whew, that was a lot of prerequisite knowledge. Let's continue with the setup.

### Initial Setup
Before you leave GitHub, click on the button on this repository that says "Fork". This will allow you to make changes on your own version of the repository.

Wait until the fork finishes, then continue with the setup.

### Setup on WebStorm
First, open WebStorm, then click on `Get from Version Control`.
The remote URL should be `https://github.com/YOUR_GITHUB_USERNAME/nvcomputingsite.git`. (This is the URL of the repository you just forked. Accept the default directory location, and log in to your GitHub account if applicable. (This might come up later - just log in to your GitHub account whenever asked.)

Next, the project should load in and index. Once it's loaded in, open Terminal (tab at the bottom of the screen).

Run these commands (these will set up Git properly so that you can use our development workflow):
```
git branch --set-upstream-to=origin/master master
git remote add upstream https://github.com/NVComputing/nvcomputingsite
```

And then these commands (these will install all the project dependencies):
```
npm install
```

And your development environment should be good to go!

Whenever you want to do any work, you should get the latest version of MY repository (NOT YOUR FORK) by doing `git pull upstream master`.

Essentially, there are now 3 versions of the repository: Your local repo, your GitHub fork, and my original repository. You can pull from my original repo to your local repo, but you cannot push to it (you have READ access). So every time you want to do work, PULL from my repository, do your work on your local version, PUSH to your fork, then open a pull request at my repository. I will accept it and merge it if it's good, or I will do some review.

The advantage of having your local repository is that you can now browse your own local version of the site (this means you can DIRECTLY see what the results of your changes on the website will be).

Run the command
```
node .
```
in Terminal, which should start the server (`Express server started on port 8080`).

Then, simply open the page http://localhost:8080 to browse your own version of the website. Make any changes you would like (you don't have to rerun `node .`) in the IDE, and reload the page you are editing to see the changes. This means you can ensure you won't have any wacky formatting issues when you do a pull request - everything works exactly like it would on the actual, live website.

# Page Requirements / Markdown Styling

In your pull request, provide me a brief description of what you've edited/added and why. It doesn't need to be long, just a couple words.
I will either approve it or ask for changes. If I ask for changes, go back to your fork, make the changes, and I'll approve it once I think it's good.

## Headers / Table of Contents
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

## Code Blocks
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

## Math Expressions
For math expressions, the syntax is as follows:

First, put your code in an inline code block.
```markdown
`$your inline math expression$`
`$$your block math expression$$`
```

One dollar sign means inline LaTeX block; two means separate LaTeX block.

## 

## Attribution

Feel free to add attribution at the bottom of any pages you create, in the form of a text snippet like this:

`*Author: Raymond Zhao*`

If you're editing someone else's page, you can add yourself to the authors if you write a significant portion of the page.

`*Authors: Raymond Zhao, Kenneth Zhao*`

Make sure you also add a line break prior to the attribution (this can be done with `---`.)

# Extra Notes
The ACSL page will be more or less an index that links to resource pages for all the various topics in ACSL.
It will only contain necessary general information about the contest; all the topic pages
will be linked on there, not directly explained on there. To add subpages to ACSL, add things to the `markdown/acsl` directory.
