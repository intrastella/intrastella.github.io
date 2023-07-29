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

#### Dual Space

<br/>

### Linear Form

<br/>

A linear form, also known as linear functional, one form or covariant vector, is a linear map in $$\mathcal{L}(\mathcal{V}, \mathbb{F}) $$ where $$\mathcal V (\mathbb{F}) $$
is a vector space.

<br>

<ins>Example 1</ins>: Let $$ \mathcal{M}_n(\mathbb{R}) $$ be the vector space of all n x n matrices over $$\mathbb{R}$$.
Then the trace of a matrix is a linear form: <br>

$$ \textbf{Tr}: \mathcal{M}_n(\mathbb{R}) \longrightarrow \mathbb{R} \ ; \quad A = [a_{i, j}] \longmapsto \textbf{Tr}(A) = \sum_{i=1}^{n} a_{i, i} $$

Then we have $$ \forall \ A, B \in \mathcal{M}_n(\mathbb{R}) \land \forall \ \lambda \in \mathbb{R}$$:

$$ \begin{align} &(1) \qquad \textbf{Tr}(A + B) = \textbf{Tr}(A) + \textbf{Tr}(B) \\
&(2) \qquad  \lambda \textbf{Tr}(A) = \textbf{Tr}(\lambda A)\\
&(3) \qquad \textbf{Tr} \in \mathcal{L}(\mathcal{M}_n(\mathbb{R}), \mathbb{R})
\end{align} $$ 

<br/>

<br>

<ins>Example 2</ins>: Let $$ G \subseteq \mathbb{R}^n $$ be open and $$ f: G \rightarrow \mathbb{R}^n $$ be a differentiable vector field.
Then the divergence of $$ f $$ is a linear form: <br>

$$ \textbf{div} \ f: G \longrightarrow \mathbb{R} \ ; \quad v \longmapsto \textbf{div} \ f (v) =  \sum_{i=1}^{n} \frac{\partial f_i}{\partial x_i} (v) $$

Then we have $$ \forall \ v, w \in G \land \forall \ \lambda, \mu \in \mathbb{R}$$:

$$ \begin{align} &(1) \qquad \textbf{div} \ f (\lambda v + \mu w) = \sum_{i=1}^{n} \frac{\partial f_i}{\partial x_i} (\lambda v + \mu w) = \sum_{i=1}^{n} \frac{\partial f_i}{\partial x_i} (\lambda v) + \sum_{i=1}^{n} \frac{\partial f_i}{\partial x_i} (\mu w) 
= \lambda \ \textbf{div} \ f (v) + \mu \ \textbf{div} \ f (w) \\

&(2) \qquad \textbf{div} \ f \in \mathcal{L}(G, \mathbb{R})
\end{align} $$ 

<br/>

<br/>

### Dual Space

<br/>

A dual space of a vector space $$ \mathcal{V}(\mathbb{F}) $$ is defined as $$ \mathcal{V}^{*} := \mathcal{L}(\mathcal{V}, \mathbb{F}) $$. The dual space $$ \mathcal{V}^{*} $$ is by itself 
a vector space. That means its vectors are linear forms. 

<br/>

(1) &emsp;  Representation Matrix:

&emsp;  Let $$\mathcal{B}_1 = \{ b_1, ..., b_n \} $$ be a basis of $$ \mathcal{V}(\mathbb{F}) $$ and $$ \mathcal{B}_2 = \{ 1 \} $$ a basis of $$\mathcal{V}^{*}$$.
For $$ f \in \mathcal{V}^{*}$$ its representation matrix is : <br>

$$ [f]_{\mathcal{B}_1, \mathcal{B}_2} = [f(b_1), ..., f(b_n)] \in \mathbb{F}^{1, n}. $$

<br/>

(2) &emsp; Coordinate Mapping:

&emsp;  Let $$v = \sum_{i=1}^{n} \lambda_i b_i \in \mathcal{V}$$ then we have due to (1) and because $$ \mathbb{F}^{1, 1} \cong \mathbb{F} $$: <br>

$$ f(v) = [f]_{\mathcal{B}_1, \mathcal{B}_2} \Phi_{\mathcal{B}_1} (v) = [f(b_1), ..., f(b_n)] \begin{bmatrix} \lambda_{1} \\ \vdots \\ \lambda_{n} \end{bmatrix} \in \mathbb{F}^{1, 1}$$

<br/>

### Dual Basis

<br/>

Let $$\mathcal V (\mathbb{F}) $$ be a vector space over a field $$ \mathbb{F} $$. Then every basis $$\mathcal{B} = \{ b_1, ..., b_n \} $$ of $$\mathcal V $$
has a unique dual basis $$ \mathcal{B}^{*} = \{ \varphi_1, ..., \varphi_n \} $$ of $$ \mathcal{V}^{*} $$  that is defined to be:

$$ \varphi_i(v_j) = \delta_{i, j} \ ; \qquad i, j = 1, ..., n$$

<br>

<ins>Example 1</ins>: Let $$ \mathbb{R}[t]_{\leq 2} $$ be the vector space of polynomials with degree at most 2.
Then the dual basis of $$\mathcal{B} = \{ b_1, b_2, b_3 \}  $$ given by: <br>

$$ \begin{align}  
&b_1 = 3 - 5t + 3t²/2 \ ;
\qquad b_2 = -3/2 + 4t - 3t²/2  \ ;
\qquad b_3 = -1/3 -t + t²/2 
\end{align}$$

$$ \begin{align} \mathcal{B}^{*} = \left\{ \ \varphi_i \quad \bigg\vert \quad  \varphi_i(p(t)) = \int_{0}^{i} p(t) dt \quad \land \quad p(t) \in  \mathbb{R}[t]_{\leq 2} \ \right\}_{i=1}^{3}
\end{align} $$ 

<br/>

Let $$ p(t) = \sum_{k=1}^{3} \alpha_k t^{k} $$ then we get in total:

$$ \varphi_i(p(t)) =  \int_{0}^{i} \sum_{k=1}^{3} \alpha_k t^{k} dt = \sum_{k=1}^{3} \alpha_k \int_{0}^{i} t^{k} dt$$



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

