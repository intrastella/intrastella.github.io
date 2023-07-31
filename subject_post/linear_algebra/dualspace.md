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

#### Linear Form

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

<br>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

<br/>

#### Dual Space

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

<br>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

#### Dual Basis

<br/>

Let $$\mathcal V (\mathbb{F}) $$ be a vector space over a field $$ \mathbb{F} $$. Then for every basis $$\mathcal{B} = \{ b_1, ..., b_n \} $$ of $$\mathcal V $$
there exists a unique dual basis $$ \mathcal{B}^{*} = \{ \varphi^1, ..., \varphi^n \} $$ of $$ \mathcal{V}^{*} $$  that is defined by:

$$ \varphi^{i}(v_j) = \delta_{i, j} \ ; \qquad i, j = 1, ..., n$$

Furthermore, if $$ f \in \mathcal{V}^{*} $$ we can write this linear form in terms of its basis:

$$ f = \sum_{i=1}^{n} f(b_i) \  \varphi^i $$

<br>

<ins>Example 1</ins>: Let $$ \mathbb{R}[t]_{\leq 2} $$ be the vector space of polynomials with degree at most 2.
Then the dual basis of $$\mathcal{B} = \{ b_1, b_2, b_3 \}  $$ given by: <br>

$$ \begin{align}  
&b_1 = 3 - 5t + 3t²/2 \ ;
\qquad b_2 = -3/2 + 4t - 3t²/2  \ ;
\qquad b_3 = -1/3 -t + t²/2 
\end{align}$$

$$ \begin{align} \mathcal{B}^{*} = \left\{ \ \varphi^i \quad \bigg\vert \quad  \varphi^i(p(t)) = \int_{0}^{i} p(t) dt \quad \land \quad p(t) \in  \mathbb{R}[t]_{\leq 2} \ \right\}_{i=1}^{3}
\end{align} $$ 

<br/>

For $$j=1, 2, 3$$ let $$ b_j = \sum_{k=0}^{2} \alpha_{j, k} t^{k} $$ where $$\{ \alpha_{j, k} \}_{k=0}^{2}$$ are the coordinates of $$ b_j $$ w.r.t. the standard basis of $$ \mathbb{R}[t]_{\leq 2} $$ then we get in total:

$$ \varphi^{i}(b_j) =  \int_{0}^{i} \sum_{k=0}^{2} \alpha_{j, k} t^{k} dt = \sum_{k=0}^{2} \alpha_{j, k} \int_{0}^{i} t^{k} dt  \ \ ; \qquad i = 1, 2, 3$$

<br/>

In that way we can rewrite those integrals as a matrix product:

$$ \begin{align}

\begin{bmatrix}
\varphi^1(b_1) & \varphi^2(b_1) & \varphi^3(b_1) \\
\varphi^1(b_2) & \varphi^2(b_2) & \varphi^3(b_2) \\
\varphi^1(b_3) & \varphi^2(b_3) & \varphi^3(b_3) 
\end{bmatrix}

&=
\begin{bmatrix}
\alpha_{1, 1} & \alpha_{1, 2} & \alpha_{1, 3} \\
\alpha_{2, 1} & \alpha_{2, 2} & \alpha_{2, 3}  \\
\alpha_{3, 1} & \alpha_{3, 2} & \alpha_{3, 3} 
\end{bmatrix}

\begin{bmatrix}
t \vert_{0}^{1} & t \vert_{0}^{2} & t \vert_{0}^{3} \\
\frac{t²}{2} \vert_{0}^{1} & \frac{t²}{2} \vert_{0}^{2} & \frac{t²}{2} \vert_{0}^{3} \\
\frac{t³}{3} \vert_{0}^{1} & \frac{t³}{3} \vert_{0}^{2} & \frac{t³}{3} \vert_{0}^{2}
\end{bmatrix} \\

\\

&=

\begin{bmatrix}
3 & -5 & 3/2 \\
-3/2 & 4 & -3/2 \\
-1/3 & -1 & 1/2 
\end{bmatrix}

\begin{bmatrix}
1 & 2 & 3 \\
1/2 & 2 & 9/2 \\
1/3 & 8/3 & 9
\end{bmatrix} \\

\\

&=

\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 
\end{bmatrix}


\end{align} $$

<br>

Therefore, $$\mathcal{B}^{*}$$ is dual to $$\mathcal{B}$$.

<br>

<br>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

#### Alternative Perspective

<br/>

Let $$ \mathcal{V}(\mathbb{F}) $$ be a (n+1)-dimensional vector space. Then $$ \mathcal{V}^{*} $$ is the space of polynomials. Let $$ p_{t} \in \mathcal{V}^{*} $$ be a polynomial with the unknown $$ t \in \mathbb{F} $$ then $$\exists \ \mathcal{B} $$ such that:

$$ [p_{t}]_{\mathcal{B}, 1} = [1, ..., t^{n}] $$

$$ p_t(v) = [p_{t}]_{\mathcal{B}, 1} v = [1, ..., t^{n}]  \begin{bmatrix} v_{0} \\ \vdots \\ v_{n} \end{bmatrix} = v_0 + v_1t + ... + v_nt^n  \quad ; \quad v =  \begin{bmatrix} v_{0} \\ \vdots \\ v_{n} \end{bmatrix} \in \mathcal{V} $$

<br/>


<br>

<br>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

#### Dual Map

<br>

Let $$ \mathcal{V}(\mathbb{F}) $$ and $$ \mathcal{W}(\mathbb{F}) $$ be two vector spaces and $$ f \in \mathcal{L}(\mathcal{V}, \mathcal{W}) $$ then the dual map of $$ f $$ is defined by:

$$ f^{*} \ : \mathcal{W}^{*} \longrightarrow \mathcal{V}^{*} \ ; \quad h \longmapsto f^{*}(h) = h \circ f $$

<br/>

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

