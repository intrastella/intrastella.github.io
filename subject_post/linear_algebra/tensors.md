---
layout: cheat_sheet
category: linear_algebra
out: 1
topic: tensors
title: Tensor Algebra
permalink: /linear_algebra/tensors
---

_____________________________________________________________________________________________________________________________________

<br/>

<br/>

#### Introduction

<br/>

Even though tensor algebra does not belong to linear algebra I decided to incorporate this topic in here since it can be 
also viewed as an extension of the knowledge required in linear algebra. Concepts like inner product, vectors, matrices and
metrics are further generalized in tensor algebra.

<br>

### Change of basis and coordinate transformation

<br/>

To understand some properties of covariant and contravariant vectors let us start with the basis transformation matrix and its
corresponding coordinate transformation matrix. These two operators exhibit a somehow reversed behaviour. When we though analyse 
how they are constructed it becomes obvious:

<br/>

Let $$\mathcal V (\mathbb{K}) $$ be a vectorspace over a fied $$\mathbb{K} $$ and let $$\mathcal B_{1} = \{b_{1}, ..., b_{n} \} $$ 
and $$\mathcal B_{2} = \{\hat{b_{1}}, ..., \hat{b_{n}} \} $$  be two basis. <br>
$$ \forall \ v \in \mathcal V $$  with $$ v = \sum_{i=1}^{\\n} b_{i} \mu_{i} = \sum_{i=1}^{\\n} \hat{b}_{i} \lambda_{i}$$
we have $$ \mathcal T_{B} = (\mathcal T_{C}^{-1})^\top $$ where:

<br>

$$\text{1.} \quad \mathcal T_{B} (b_{1}, ..., b_{n}) = (\hat{b_{1}}, ..., \hat{b_{n}})  $$ 

$$\qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad ;  \qquad  \mathcal T_{B}, \mathcal T_{C} \in \mathbb{K}^{n \times n}  $$ 

$$\text{2.} \quad \mathcal T_{C} \begin{bmatrix} \mu_{1} \\ \mu_2 \\ \vdots \\ \mu_n \end{bmatrix} \ = \begin{bmatrix} \lambda_{1} \\ \lambda_{2} \\ \vdots \\ \lambda_{n} \end{bmatrix}$$ 

<br>

{% include collapse.html title="&nbsp; Proof"  collapsed_content="
Because $ \forall \ b_{i} \in \mathcal V  \quad \exists \ \alpha_{1}, ..., \alpha_{n} \in \mathbb{K} $ , where $i = 1, ..., n$ such that: 

<br/>

<br/>

$$ b_{i} = (\hat{b_{1}}, ..., \hat{b_{n}})  \begin{bmatrix} \alpha_{1, i} \\ \alpha_{2, i} \\ \vdots \\ \alpha_{n, i} \end{bmatrix} $$

<br/>

<br/>

This is a system of equations that can be extended so that we obtain one expression for all basis elements in $ \mathcal B_{1}$. For this denote $\mathcal T_{C} = [ \alpha_{i, j} ] \in \mathbb{K}^{n \times n} $ 
as the matrix of all coefficients from that system of equation:

<br/>

<br/>

$$\begin{align} (b_{1}, ..., b_{n}) &= (\hat{b_{1}}, ..., \hat{b_{n}}) \begin{bmatrix} \alpha_{1, 1} &  \cdots & \alpha_{n, 1} \\ \vdots & & \vdots \\ \alpha_{n, i} & \cdots & \alpha_{n, n}  \end{bmatrix} \\
            &= (\hat{b_{1}}, ..., \hat{b_{n}}) \ \mathcal T_{C} \end{align} $$

<br/>

<br/>

diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, Lorem ipsum dolor sit amet, consetetur 
sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua..."%}

<br/>

{% include res_gif.html url="/images/lina/transform.gif"  width="1000px" text="On the left plot is the coordinate 
transformation and on the right the basis transformation. In the center of both plots you can see the unit disc:
$$\{ v \in \mathbb{R}^{2} : \| v \|_2 \leq 1 \}$$ As we can see these transformations are acting inverse to each other."%}


<br/>

<br/>

<br/>

#### Vectorfields

<br/>

<br/>

#### Covariant Vectors

<br/>

Due to the duality ...

<br/>

#### Contravariant Vectors

<br/>

<br/>

### Transformation of a Gradient


<br/>

<br/>

