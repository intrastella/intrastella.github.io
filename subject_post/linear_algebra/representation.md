---
layout: cheat_sheet
category: linear_algebra
out: 1
topic: representation
title: Matrix Representation
permalink: /linear_algebra/representation
---

_____________________________________________________________________________________________________________________________________

<br/>

#### Introduction

<br/>

This section is just a short summary of matrix representation due to its relevance in linear algebra and usefulness in the following chapters.

<br/>

### Matrix Representation

<br/>

Let $$\mathcal V (\mathbb{K}) $$ and $$\mathcal W (\mathbb{K}) $$ be two vector spaces over a field $$\mathbb{K} $$ and let $$\mathcal B_{1} = \{b_{1}, ..., b_{n} \} $$ 
and $$\mathcal B_{2} = \{\hat{b_{1}}, ..., \hat{b_{m}} \} $$  be two basis for $$\mathcal V $$ and $$\mathcal W $$ respectively. Further let $$ f \in \mathcal L
(\mathcal V, \mathcal W ) $$ be a homomorphism.

{% include latex_high.html latex1="Then for $$ f(b_{j}) \in \mathcal W $$" content_txt="/c/there exists uniquely defined coordinates/c/" latex2="$$ \alpha_{1, j}, ..., \alpha_{n, j} \in \mathbb{K} $$ such that:" %}


<br>

$$ f(b_{j}) = (\hat{b_{1}}, ..., \hat{b_{m}})  \begin{bmatrix} \alpha_{1, j} \\ \alpha_{2, j} \\ \vdots \\ \alpha_{n, j} \end{bmatrix} $$

<br/>

This is a system of equations that can be extended so that we obtain one expression for all basis elements in $ \mathcal B_{1}$. For this denote $ A = [ \alpha_{i, j} ] \in \mathbb{K}^{n \times n} $ 
as the matrix of all coordinates from that system of equation:

<br/>

$$\begin{align} f(b_{1}, ..., b_{n}) = (f(b_{1}), ..., f(b_{n})) = (\hat{b_{1}}, ..., \hat{b_{m}}) \ A \end{align} $$

<br/>

Then we obtain for any $$ v = \sum_{i=1}^{\\n} \lambda_{i} b_{i}  \in \mathcal V $$ :

<br/>

$$\begin{align} f(v) &= f \ (\sum_{i=1}^{\\n} \lambda_{i} b_{i}) \\ 
&= (f(b_{1}), ..., f(b_{n}))  \begin{bmatrix} \lambda_{1} \\ \vdots \\ \lambda_{n} \end{bmatrix} \\
&= (\hat{b_{1}}, ..., \hat{b_{m}}) \ A \begin{bmatrix} \lambda_{1} \\ \vdots \\ \lambda_{n} \end{bmatrix} \end{align} $$

<br/>

The matrix representation of $$ f $$ is given by $$ A $$ and is denoted by $$ [f]_{B_{1}, B_{2}} $$.  The coordinates of $$ f(v) $$ is given by $$ \Biggl( [f]_{B_{1}, B_{2}} \begin{bmatrix} \lambda_{1} \\ \vdots \\ \lambda_{n} \end{bmatrix} \Biggl) $$ .

### Commutative Diagram

<br/>

{% include res_img.html url="/images/lina/commutative.png" width="900px" %}

<br/>

### Coordinate Mapping

<br/>

### Basis Transformation

<br/>

