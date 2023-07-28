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

A linear form, also known as linear functional, one form or covariant vector, is a linear map in $$\mathcal{L}(\mathcal{V}, \mathbb{K}) $$ where $$\mathcal V (\mathbb{K}) $$
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

A dual space of a vector space $$ \mathcal{V}(\mathbb{K}) $$ is defined as $$ \mathcal{V}^{*} := \mathcal{L}(\mathcal{V}, \mathbb{K}) $$. The dual space $$ \mathcal{V}^{*} $$ is by itself 
a vector space. That means its vectors are linear forms. 

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

