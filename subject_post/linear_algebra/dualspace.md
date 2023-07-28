---
layout: cheat_sheet
category: linear_algebra
out: 2
topic: dualspace
title: Dual Spaces
permalink: /linear_algebra/dualspace
---

_____________________________________________________________________________________________________________________________________

<br/>

<br>

#### Introduction

<br/>

Dual spaces have meaningful applications in several areas in mathematics likes differential geometry and functional analysis. In this chapter I will introduce 
some important concepts regarding dual spaces.

<br>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

#### Dual Spaces

<br/>

### Linear Form

<br/>

A linear form, also known as linear functional, one form or covariant vector, is a linear map in $$\mathcal{L}(\mathcal{V}, \mathbb{K}) $$ where $$\mathcal V (\mathbb{K}) $$
is a vector space.

<br>

<ins>Example</ins>: Let $$ \mathcal{M}_n(\mathbb{R}) $$ be the vector space of all n x n matrices over $$\mathbb{R}$$.
Then the trace of a matrix is a linear form: <br>

$$ \textbf{Tr}: \mathcal{M}_n(\mathbb{R}) \longrightarrow \mathbb{R} \quad A = [a_{i, j}] \mapsto \textbf{Tr}(A) = \sum_{i=1}^{n} a_{i, i} $$

Then we have $$ \forall \ A, B \in \mathcal{M}_n(\mathbb{R}) \land \forall \ \lambda \in \mathbb{R}$$:

$$ \begin{align} &(1) \qquad \textbf{Tr}(A + B) = \textbf{Tr}(A) + \textbf{Tr}(B) \\
&(2) \qquad  \lambda \textbf{Tr}(A) = \textbf{Tr}(\lambda A)\\
&(3) \qquad \textbf{Tr} \in \mathcal{L}(\mathcal{M}_n(\mathbb{R}), \mathbb{R})
\end{align} $$ 

<br/>

<br/>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

#### Dual Basis

<br/>

<br/>

<br>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

#### Push forward

<br/>

<br/>

<br>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

#### Pull back

<br/>

<br/>

<br>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

