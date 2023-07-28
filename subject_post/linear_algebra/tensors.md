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

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

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

<br>

$$\text{2.} \quad \mathcal T_{C} \begin{bmatrix} \mu_{1} \\ \mu_2 \\ \vdots \\ \mu_n \end{bmatrix} \ = \begin{bmatrix} \lambda_{1} \\ \lambda_{2} \\ \vdots \\ \lambda_{n} \end{bmatrix}$$ 

<br>

{% include collapse.html title="&nbsp; Proof"  collapsed_content="
From the chapter, Matrix Representation, we know that the coordinate transformation from basis $\mathcal{B}_1$ to basis $\mathcal{B}_2$ has the following form:

$$ \Phi_{\mathcal{B}_2} = [\mathcal{I}d_{\mathcal{V}}]_{\mathcal{B}_1, \mathcal{B}_2} \ \circ \ \Phi_{\mathcal{B}_1} $$

<br/>

$$
(\mathcal{T}_{C}^{-1})^\top = (([\mathcal{I}d_{\mathcal{V}}]_{\mathcal{B}_1, \mathcal{B}_2} \ \circ \ \Phi_{\mathcal{B}_1})^{-1})^\top =
( \Phi_{\mathcal{B}_1}^{-1} \ \circ \   [\mathcal{I}d_{\mathcal{V}}]_{\mathcal{B}_1, \mathcal{B}_2}^{-1})^\top =
( \Phi_{\mathcal{B}_1}^{-1} \ \circ \   [\mathcal{I}d_{\mathcal{V}}]_{\mathcal{B}_2, \mathcal{B}_1})^\top

$$

Now we need to  ... (dual map)

<br/>

"%}

<br/>

{% include res_gif.html url="/images/lina/transform.gif" text="On the left plot is the coordinate 
transformation and on the right the basis transformation. In the center of both plots you can see the unit disc:
$$\{ v \in \mathbb{R}^{2} : \| v \|_2 \leq 1 \}$$ As we can see these transformations are acting dual to each other." %}


<br/>

<br/>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

#### Vectorfields

<br/>

<br/>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

#### Covariant Vectors

<br/>

Due to the duality ...

<br/>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

#### Contravariant Vectors

<br/>

<br/>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

### Transformation of a Gradient


<br/>

<br/>

{% include res_img.html url="/images/separator.png" width="800px" %}

<br/>

