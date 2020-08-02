# Digital Electronics

## Contents
- [Introduction](#introduction)
- [Definitions](#definitions)
- [Sample Problems](#sampleproblems)

<br>

# Introduction

Digital electronics is a way to visualize boolean algebra using drawn-out circuits. The same laws of boolean algebra apply and truth tables are still very useful when analyzin them.

<br>

# Definitions

<table class="wikitable" style="text-align: left">

<tr>
<th><b>NAME</b>
</th>
<th><b>GRAPHICAL SYMBOL</b>
</th>
<th><b>ALGEBRAIC EXPRESSION</b>
</th>
<th><b>TRUTH TABLE</b>
</th></tr>
<tr>
<th><b>BUFFER</b>
</th>
<td> <a href="categories.acsl.org/wiki/index.php?title=File:Buffer-gate-en.svg" class="image"><img alt="Buffer-gate-en.svg" src="categories.acsl.org/wiki/images/thumb/a/a6/Buffer-gate-en.svg/128px-Buffer-gate-en.svg.png" width="128" height="46" srcset="categories.acsl.org/wiki/images/thumb/a/a6/Buffer-gate-en.svg/192px-Buffer-gate-en.svg.png 1.5x, categories.acsl.org/wiki/images/thumb/a/a6/Buffer-gate-en.svg/256px-Buffer-gate-en.svg.png 2x" /></a>
</td>
<td> X = A
</td>
<td>
<table class="wikitable" style="text-align: center">

<tr>
<td style="background-color: #cceeff; font-size: x-small">INPUT
</td>
<td style="background-color: #cceeff; font-size: x-small">OUTPUT
</td></tr>
<tr>
<td> 0 </td>
<td> 0
</td></tr>
<tr>
<td> 1 </td>
<td> 1
</td></tr></table>
</td></tr>
<tr>
<th><b>NOT</b>
</th>
<td> <a href="categories.acsl.org/wiki/index.php?title=File:Not-gate-en.svg" class="image"><img alt="Not-gate-en.svg" src="categories.acsl.org/wiki/images/thumb/9/9f/Not-gate-en.svg/128px-Not-gate-en.svg.png" width="128" height="46" srcset="categories.acsl.org/wiki/images/thumb/9/9f/Not-gate-en.svg/192px-Not-gate-en.svg.png 1.5x, categories.acsl.org/wiki/images/thumb/9/9f/Not-gate-en.svg/256px-Not-gate-en.svg.png 2x" /></a>
</td>
<td> X = <span style='opacity:0.5'>[math]\overline{A}[/math]</span> or  <span style='opacity:0.5'>[math]\neg A[/math]</span>
</td>
<td>
<table class="wikitable" style="text-align: center">

<tr>
<td style="background-color: #cceeff; font-size: x-small">INPUT
</td>
<td style="background-color: #cceeff; font-size: x-small">OUTPUT
</td></tr>
<tr>
<th> A </th>
<th> X
</th></tr>
<tr>
<td> 0 </td>
<td> 1
</td></tr>
<tr>
<td> 1 </td>
<td> 0
</td></tr></table>
</td></tr>
<tr>
<th><b>AND</b>
</th>
<td><a href="categories.acsl.org/wiki/index.php?title=File:And-gate.png" class="image"><img alt="And-gate.png" src="categories.acsl.org/wiki/images/thumb/d/d8/And-gate.png/128px-And-gate.png" width="128" height="46" srcset="categories.acsl.org/wiki/images/thumb/d/d8/And-gate.png/192px-And-gate.png 1.5x, categories.acsl.org/wiki/images/thumb/d/d8/And-gate.png/256px-And-gate.png 2x" /></a>
</td>
<td> X = <span style='opacity:0.5'>[math]AB[/math]</span> or <span style='opacity:0.5'>[math]A \cdot B[/math]</span>
</td>
<td>
<table class="wikitable" style="text-align: center">

<tr>
<td colspan="2" style="background-color: #cceeff; font-size: x-small">INPUT
</td>
<td colspan="1" style="background-color: #cceeff; font-size: x-small">OUTPUT
</td></tr>
<tr>
<th> A </th>
<th> B </th>
<th>  X
</th></tr>
<tr>
<td> 0 </td>
<td> 0 </td>
<td> 0
</td></tr>
<tr>
<td> 0 </td>
<td> 1 </td>
<td> 0
</td></tr>
<tr>
<td> 1 </td>
<td> 0 </td>
<td> 0
</td></tr>
<tr>
<td> 1 </td>
<td> 1 </td>
<td> 1
</td></tr></table>
</td></tr>
<tr>
<th><b>NAND</b>
</th>
<td> <a href="categories.acsl.org/wiki/index.php?title=File:Nand-gate-en.svg" class="image"><img alt="Nand-gate-en.svg" src="categories.acsl.org/wiki/images/thumb/5/58/Nand-gate-en.svg/128px-Nand-gate-en.svg.png" width="128" height="46" srcset="categories.acsl.org/wiki/images/thumb/5/58/Nand-gate-en.svg/192px-Nand-gate-en.svg.png 1.5x, categories.acsl.org/wiki/images/thumb/5/58/Nand-gate-en.svg/256px-Nand-gate-en.svg.png 2x" /></a>
</td>
<td> X = <span style='opacity:0.5'>[math]\overline{AB}[/math]</span> or <span style='opacity:0.5'>[math]\overline{A\cdot B}[/math]</span>
</td>
<td>
<table class="wikitable" style="text-align: center">

<tr>
<td colspan="2" style="background-color: #cceeff; font-size: x-small">INPUT
</td>
<td style="background-color: #cceeff; font-size: x-small">OUTPUT
</td></tr>
<tr>
<th> A </th>
<th> B </th>
<th> X
</th></tr>
<tr>
<td> 0 </td>
<td> 0 </td>
<td> 1
</td></tr>
<tr>
<td> 0 </td>
<td> 1 </td>
<td> 1
</td></tr>
<tr>
<td> 1 </td>
<td> 0 </td>
<td> 1
</td></tr>
<tr>
<td> 1 </td>
<td> 1 </td>
<td> 0
</td></tr></table>
</td></tr>
<tr>
<th><b>OR</b>
</th>
<td> <a href="categories.acsl.org/wiki/index.php?title=File:Or-gate-en.svg" class="image"><img alt="Or-gate-en.svg" src="categories.acsl.org/wiki/images/thumb/4/4c/Or-gate-en.svg/128px-Or-gate-en.svg.png" width="128" height="46" srcset="categories.acsl.org/wiki/images/thumb/4/4c/Or-gate-en.svg/192px-Or-gate-en.svg.png 1.5x, categories.acsl.org/wiki/images/thumb/4/4c/Or-gate-en.svg/256px-Or-gate-en.svg.png 2x" /></a>
</td>
<td> X = <span style='opacity:0.5'>[math]A+B[/math]</span>
</td>
<td>
<table class="wikitable" style="text-align: center">

<tr>
<td colspan="2" style="background-color: #cceeff; font-size: x-small">INPUT
</td>
<td style="background-color: #cceeff; font-size: x-small">OUTPUT
</td></tr>
<tr>
<th> A </th>
<th> B </th>
<th> X
</th></tr>
<tr>
<td> 0 </td>
<td> 0 </td>
<td> 0
</td></tr>
<tr>
<td> 0 </td>
<td> 1 </td>
<td> 1
</td></tr>
<tr>
<td> 1 </td>
<td> 0 </td>
<td> 1
</td></tr>
<tr>
<td> 1 </td>
<td> 1 </td>
<td> 1
</td></tr></table>
</td></tr>
<tr>
<th><b>NOR</b>
</th>
<td> <a href="categories.acsl.org/wiki/index.php?title=File:Nor-gate-en.svg" class="image"><img alt="Nor-gate-en.svg" src="categories.acsl.org/wiki/images/thumb/9/94/Nor-gate-en.svg/128px-Nor-gate-en.svg.png" width="128" height="46" srcset="categories.acsl.org/wiki/images/thumb/9/94/Nor-gate-en.svg/192px-Nor-gate-en.svg.png 1.5x, categories.acsl.org/wiki/images/thumb/9/94/Nor-gate-en.svg/256px-Nor-gate-en.svg.png 2x" /></a>
</td>
<td> X = <span style='opacity:0.5'>[math]\overline{A+B}[/math]</span>
</td>
<td>
<table class="wikitable" style="text-align: center">

<tr>
<td colspan="2" style="background-color: #cceeff; font-size: x-small">INPUT
</td>
<td style="background-color: #cceeff; font-size: x-small">OUTPUT
</td></tr>
<tr>
<th> A </th>
<th> B </th>
<th> X
</th></tr>
<tr>
<td> 0 </td>
<td> 0 </td>
<td> 1
</td></tr>
<tr>
<td> 0 </td>
<td> 1 </td>
<td> 0
</td></tr>
<tr>
<td> 1 </td>
<td> 0 </td>
<td> 0
</td></tr>
<tr>
<td> 1 </td>
<td> 1 </td>
<td> 0
</td></tr></table>
</td></tr>
<tr>
<th><b>XOR</b>
</th>
<td><a href="categories.acsl.org/wiki/index.php?title=File:Xor-gate-en.svg" class="image"><img alt="Xor-gate-en.svg" src="categories.acsl.org/wiki/images/thumb/6/6d/Xor-gate-en.svg/128px-Xor-gate-en.svg.png" width="128" height="46" srcset="categories.acsl.org/wiki/images/thumb/6/6d/Xor-gate-en.svg/192px-Xor-gate-en.svg.png 1.5x, categories.acsl.org/wiki/images/thumb/6/6d/Xor-gate-en.svg/256px-Xor-gate-en.svg.png 2x" /></a>
</td>
<td> X = <span style='opacity:0.5'>[math]A \oplus B[/math]</span>
</td>
<td>
<table class="wikitable" style="text-align: center">

<tr>
<td colspan="2" style="background-color: #cceeff; font-size: x-small">INPUT
</td>
<td style="background-color: #cceeff; font-size: x-small">OUTPUT
</td></tr>
<tr>
<th> A </th>
<th> B </th>
<th> X
</th></tr>
<tr>
<td> 0 </td>
<td> 0 </td>
<td> 0
</td></tr>
<tr>
<td> 0 </td>
<td> 1 </td>
<td> 1
</td></tr>
<tr>
<td> 1 </td>
<td> 0 </td>
<td> 1
</td></tr>
<tr>
<td> 1 </td>
<td> 1 </td>
<td> 0
</td></tr></table>
</td></tr>
<tr>
<th><b>XNOR</b>
</th>
<td> <a href="categories.acsl.org/wiki/index.php?title=File:Xnor-gate-en.svg" class="image"><img alt="Xnor-gate-en.svg" src="categories.acsl.org/wiki/images/thumb/3/35/Xnor-gate-en.svg/128px-Xnor-gate-en.svg.png" width="128" height="46" srcset="categories.acsl.org/wiki/images/thumb/3/35/Xnor-gate-en.svg/192px-Xnor-gate-en.svg.png 1.5x, categories.acsl.org/wiki/images/thumb/3/35/Xnor-gate-en.svg/256px-Xnor-gate-en.svg.png 2x" /></a>
</td>
<td> X = <span style='opacity:0.5'>[math]\overline{A \oplus B} \text{ or } A \odot B[/math]</span>
</td>
<td>
<table class="wikitable" style="text-align: center">

<tr>
<td colspan="2" style="background-color: #cceeff; font-size: x-small">INPUT
</td>
<td style="background-color: #cceeff; font-size: x-small">OUTPUT
</td></tr>
<tr>
<th> A </th>
<th> B </th>
<th> X
</th></tr>
<tr>
<td> 0 </td>
<td> 0 </td>
<td> 1
</td></tr>
<tr>
<td> 0 </td>
<td> 1 </td>
<td> 0
</td></tr>
<tr>
<td> 1 </td>
<td> 0 </td>
<td> 0
</td></tr>
<tr>
<td> 1 </td>
<td> 1 </td>
<td> 1
</td></tr></table>
</td></tr></table>
<br>

# Sample Problems 

<br>
