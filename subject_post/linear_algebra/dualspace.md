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

A linear form, also linear functional, one form or covariant vector, is a linear map in $$\mathcal{L}(\mathcal{V}, \mathbb{F}) $$ where $$\mathcal V (\mathbb{F}) $$
is a vector space.

<br>

**Example 1**: Let $$ \mathcal{M}_n(\mathbb{R}) $$ be the vector space of all n x n matrices over $$\mathbb{R}$$.
Then the trace of a matrix is a linear form: <br>

$$ \textbf{Tr}: \mathcal{M}_n(\mathbb{R}) \longrightarrow \mathbb{R} \ ; \quad A = [a_{i, j}] \longmapsto \textbf{Tr}(A) = \sum_{i=1}^{n} a_{i, i} $$

Then we have $$ \forall \ A, B \in \mathcal{M}_n(\mathbb{R}) \land \forall \ \lambda \in \mathbb{R}$$:

<div style="text-align: center;">
    <p style="display: inline-block; text-align: left;">
        (1) $\quad \textbf{Tr}(A + B) = \textbf{Tr}(A) + \textbf{Tr}(B) $ <br/>
        (2) $\quad \lambda \textbf{Tr}(A) = \textbf{Tr}(\lambda A)$ <br/>
        (3) $\quad \textbf{Tr} \in \mathcal{L}(\mathcal{M}_n(\mathbb{R}), \mathbb{R})$ <br/>
    </p>
</div>

<br/>

<br>

**Example 2**: Let $$ M $$ be an n-dimensional smooth manifold and $$ \phi : U \subset M \rightarrow \mathbb{R}^{n} $$ be a coordinate chart where $$ U $$ is open and contains $$ p $$. More over, denote $$ T_pM $$ as the tangent space 
of $$ M $$ at $$ p $$. Let $$ x^{1}, ..., x^{n} $$ be the components of $$ \phi $$. These components are real valued functions:

$$ x^{i} : U \longrightarrow \mathbb{R} \ , \quad i = 1, ..., n $$

Then their derivative at a point $$ p \in U $$ are linear functionals:

$$ dx^{i}(p) : T_p M \longrightarrow \mathbb{R} \ , \quad i = 1, ..., n  $$



<div style="text-align: center;">
    <p style="display: inline-block; text-align: left;">
        (1) $\quad dx^{i}(p)(\mu v_1 + \lambda v_2) = \mu \ dx^{i}(p) \ v_1 + \lambda \ dx^{i}(p) \ v_2 $ <br>
        (2) $\quad dx^{i}(p) \in \mathcal{L}(T_pM, \mathbb{R})$ <br/>
    </p>
</div>

<br>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

<br/>

#### Dual Space

<br/>

A dual space of a vector space $$ \mathcal{V}(\mathbb{F}) $$ is defined as $$ \mathcal{V}^{*} := \mathcal{L}(\mathcal{V}, \mathbb{F}) $$. The dual space $$ \mathcal{V}^{*} $$ is by itself 
a vector space. That means its vectors are linear forms. 

<br/>

<br/>

### &emsp;  Representation Matrix:

&emsp;  Let $$\mathcal{B}_1 = \{ b_1, ..., b_n \} $$ be a basis of $$ \mathcal{V}(\mathbb{F}) $$ and $$ \mathcal{B}_2 = \{ 1 \} $$ a basis of $$\mathcal{V}^{*}$$.
For $$ f \in \mathcal{V}^{*}$$ its representation matrix is : <br>

$$ [f]_{\mathcal{B}_1, \mathcal{B}_2} = [f(b_1), ..., f(b_n)] \in \mathbb{F}^{1, n}. $$

<br/>

### &emsp; Coordinate Mapping:

&emsp;  Let $$v = \sum_{i=1}^{n} \lambda_i b_i \in \mathcal{V}$$ then we have due to (1) and because $$ \mathbb{F}^{1, 1} \cong \mathbb{F} $$: <br>

$$ f(v) = [f]_{\mathcal{B}_1, \mathcal{B}_2} \Phi_{\mathcal{B}_1} (v) = [f(b_1), ..., f(b_n)] \begin{bmatrix} \lambda_{1} \\ \vdots \\ \lambda_{n} \end{bmatrix} \in \mathbb{F}^{1, 1}$$


{% include collapse.html  id="ex00" title="Example"

collapsed_content="

...

"%}

<br/>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

<br/>

#### Dual Basis

<br/>

Let $$\mathcal V (\mathbb{F}) $$ be a vector space over a field $$ \mathbb{F} $$. Then for every basis $$\mathcal{B} = \{ b_1, ..., b_n \} $$ of $$\mathcal V $$
there exists a unique dual basis $$ \mathcal{B}^{*} = \{ \varphi^1, ..., \varphi^n \} $$ of $$ \mathcal{V}^{*} $$  that is defined by:

$$ \varphi^{i}(v_j) = \delta_{i, j} \ ; \qquad i, j = 1, ..., n$$

Furthermore, if $$ f \in \mathcal{V}^{*} $$ we can write this linear form in terms of its basis:

$$ f = \sum_{i=1}^{n} f(b_i) \  \varphi^i $$

<br>

{% include collapse.html id="ex1" title="&nbsp; Example"  collapsed_content="

Let $ \mathbb{R}[t]_{\leq 2} $ be the vector space of polynomials with degree at most 2.
Then the dual basis of $\mathcal{B} = \{ b_1, b_2, b_3 \}  $ given by: <br>

$$ \begin{align}  
&b_1 = 3 - 5t + 3t²/2 \ ;
\qquad b_2 = -3/2 + 4t - 3t²/2  \ ;
\qquad b_3 = -1/3 -t + t²/2 
\end{align}$$

$$ \begin{align} \mathcal{B}^{*} = \left\{ \ \varphi^i \quad \bigg\vert \quad  \varphi^i(p(t)) = \int_{0}^{i} p(t) dt \quad \land \quad p(t) \in  \mathbb{R}[t]_{\leq 2} \ \right\}_{i=1}^{3}
\end{align} $$ 

<br/>

For $j=1, 2, 3$ let $ b_j = \sum_{k=0}^{2} \alpha_{j, k} t^{k} $ where $\{ \alpha_{j, k} \}_{k=0}^{2}$ are the coordinates of $ b_j $ w.r.t. the standard basis of $ \mathbb{R}[t]_{\leq 2} $ then we get in total:

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

Therefore, $\mathcal{B}^{*}$ is dual to $\mathcal{B}$.

"%}

<br/>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

<br/>

#### Dual Map

<br>

Let $$ \mathcal{V}(\mathbb{F}) $$ and $$ \mathcal{W}(\mathbb{F}) $$ be two vector spaces and $$ f \in \mathcal{L}(\mathcal{V}, \mathcal{W}) $$ then the dual map of $$ f $$ is defined by:

$$ f^{*} \ : \mathcal{W}^{*} \longrightarrow \mathcal{V}^{*} \ ; \quad h \longmapsto f^{*}(h) = h \circ f $$

<br/>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

<br/>

#### Bilinear form

<br/>

### Definition

<br>

Let $$ \mathcal{V}(\mathbb{F}) $$ and $$ \mathcal{W}(\mathbb{F}) $$ be two vector spaces then a bilinear form $$ \beta : \mathcal{V} \times \mathcal{W} \longrightarrow \mathbb{F}$$ is defined by:

<br>

&emsp; $$ \forall \ \ v, v_1, v_2 \in \mathcal{V} \ \land \ w, w_1, w_2 \in \mathcal{W}  \ \land \  \mu \in \mathbb{F}$$ : <br/>

<div style="text-align: center;">
    <p style="display: inline-block; text-align: left;">
        (1) $\quad \beta(v_1 + v_2, w) = \beta(v_1, w) + \beta(v_2, w)$ <br/>
        (2) $\quad \beta(v, w_1 + w_2) = \beta(v, w_1) + \beta(v, w_2)$ <br/>
        (3) $\quad \beta(\mu v, w) = \mu \beta(v, w) = \beta(v, \mu w) $
    </p>
</div>

<br/>

This definition gives rise to the following natural mappings: <br/>

<div style="text-align: center;">
    <p style="display: inline-block; text-align: left;">
        (1) $\quad \beta_L : \mathcal{V} \rightarrow \mathcal{W}^{*} \ ; \quad v \mapsto \beta_v = \beta(v, \cdot)$ <br/>
        (2) $\quad \beta_R : \mathcal{W} \rightarrow \mathcal{V}^{*} \ ; \quad w \mapsto \beta_w = \beta(\cdot, w)$ <br/>
    </p>
</div>

<br/>

{% include collapse.html id="ex2" title="&nbsp; Example"  collapsed_content="

...

"%}

<br>

<br/>

<br>

### Special bilinear forms

<br>

1. &emsp; **Symmetric bilinear form**:

&emsp;  Let $$\beta : \mathcal{V} \times \mathcal{V} \rightarrow \mathbb{F}$$ then a symmetric bilinear form on $$\mathcal{V}$$ is defined by: <br>

$$ \forall \ \ v, w \in \mathcal{V} \ : \ \beta(v, w) = \beta(w, v) $$

<br>

{% include collapse.html id="ex3" title="&nbsp; Example"  collapsed_content="

...

"%}

<br/>

<br/>

2. &emsp; **Non-degenerate bilinear form**:

&emsp;  Let $$  \beta : \mathcal{V} \times \mathcal{W} \longrightarrow \mathbb{F} $$ be a bilinear form.

&emsp;  **I)** $$\beta$$ is considered to be non-degenerate in its _left_ variable iff: <br>

$$ \textbf{kern}(\beta_L) = \{ 0_{\mathcal{V}} \} \quad \iff \quad  \forall \ w \in \mathcal{W} \ : \beta_v(w) = 0 \  \implies v = 0_{\mathcal{V}} $$

<br>

&emsp;  **II)** $$\beta$$ is considered to be non-degenerate in its _right_ variable iff: <br>

$$ \textbf{kern}(\beta_R) = \{ 0_{\mathcal{W}} \} \quad \iff \quad  \forall \ v \in \mathcal{V} \ : \beta_w(v) = 0 \  \implies w = 0_{\mathcal{W}} $$

<br>

&emsp;  **III)** Iff I) and II) holds true for $$\beta$$ then: &emsp;  a) $$ \ \beta $$ is non-degenerate.

&nbsp; &nbsp; &nbsp; and if $$ \mathcal{V} , \ \mathcal{W} $$ are finite dimensional: &emsp; b) $$ \ \textbf{dim}(\mathcal{V}) = \textbf{dim}(\mathcal{W}) $$

<br>

{% include collapse.html  id="ex4" title="&nbsp; Proof of **III** b)"

collapsed_content="
To proof this statement I will show that: 

$$ \begin{align}
\text{I.} \quad \textbf{dim}(\mathcal{V}) \leq \textbf{dim}(\mathcal{W}) \\
\text{II.} \quad \textbf{dim}(\mathcal{W}) \leq \textbf{dim}(\mathcal{V}) \end{align} $$


From this follows that $\textbf{dim}(\mathcal{V}) = \textbf{dim}(\mathcal{W})$.

<br/>

<br/>

<br/>

<ins>Proof of $\text{I}$</ins>

<br>
Since $\beta$ is non-degenerate $ \textbf{kern}(\beta_L) = \{ 0_{\mathcal{V}} \} $ and therefore $\textbf{dim}(\textbf{kern}(\beta_L)) = 0$.
More over, note that the $\textbf{img}(\beta_L)$ is a vector subspace of $\mathcal{W}^{*}$. This implies that $ \textbf{dim}(\textbf{img}(\beta_L)) \leq  \textbf{dim}(\mathcal{W}^{*})$. From this property and the dimensionality theorem for linear transformations the following applies:

$$ \begin{align} 
\textbf{dim}(\mathcal{V}) = \textbf{dim}(\textbf{img}(\beta_L)) + \textbf{dim}(\textbf{kern}(\beta_L)) = \textbf{dim}(\textbf{img}(\beta_L)) + 0 \leq \textbf{dim}(\mathcal{W}^{*})
\end{align}$$

From the condition that the vector spaces are finite dimensional it holds true that $\mathcal{W}^{*} \cong \mathcal{W}$ and we obtain the desired result:

$$ \textbf{dim}(\mathcal{V}) \leq \textbf{dim}(\mathcal{W}^{*}) = \textbf{dim}(\mathcal{W}) $$

<br/>

<ins>Proof of $\text{II}$</ins>

<br>

This proof is analogous to the previous proof just exchange $\mathcal{V}$ and $\mathcal{W}$ and replace $\beta_L$ with $\beta_R$.  $\qquad \qquad \qquad \square$

"%}

<br/>

<br/>

3. &emsp; **Dual system**:

{% include center_no_latex.html

intro="&emsp; Let $\mathcal{V}$ and $\mathcal{W}$ be two vector spaces and $ \beta: \mathcal{V} \times \mathcal{W} \rightarrow \mathbb{F} $ a bilinear form. A dual system or dual pair over a field $\mathbb{F}$ is defined by:"

states="$\quad$A triple $(\mathcal{V}, \mathcal{W}, \beta)$| $\quad \beta$ is non-degenerate|"

%}

<br>

<br/>

<br>

### Properties

<br>


<br/>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

<br/>

#### Push forward

<br/>

<br/>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

<br/>

#### Pull back

<br/>

<br/>

<br>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

