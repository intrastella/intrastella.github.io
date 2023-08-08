---
layout: cheat_sheet
category: linear_algebra
out: 4
topic: dims
title: Construction of Vector Spaces
permalink: /linear_algebra/dims
---

_____________________________________________________________________________________________________________________________________

<br/>

<br/>

#### Introduction

<br/>

<br/>

#### Constructions with linear subspace

<br>

### Basic constructions

<br/>

There are two basic construction operations with linear subspaces, intersecting and adding. Let $$ \mathcal{V} $$ be a vector space over a field $$ \mathbb{F} $$, let $$ J $$ be an index set and 
$$ \{ \mathcal{U}_j\}_{j \in J} $$ be a family of linear subspaces of  $$ \mathcal{V} $$.

&emsp;  <span style="color:#092b44"> **I)** </span> Then the <span style="color:#092b44"> **intersection** </span> of these linear spaces is defined by: <br>

$$ \begin{align} \bigcap_{j \in J}  \mathcal{U}_{j} := \left\{ v \in \mathcal{V} \ | \ \forall \ j \in J : v \in \mathcal{U}_{j} \right\} \end{align} $$

<br>

&emsp;  <span style="color:#092b44"> **II)** </span> The <span style="color:#092b44"> **sum** </span> of linear subspaces is constructed by: <br>

$$ \begin{align} \sum_{j \in J}  \mathcal{U}_{j} := \left\{ \sum_{j \in J} u_j \in \mathcal{V} \ | \ \forall \ j \in J : u_j \in \mathcal{U}_{j} \right\} \end{align} $$

<br>

<br>

Since the axiom of choice assures us the existence of a basis for a vector space we can think of the sum by taking a basis, $$ \mathcal{B}_1 $$, of $$ \mathcal{U}_1 $$ and then extend it by basis elements of the basis of all the other
linear subspaces which are linearly independent of all the basis elements in $ \mathcal{B}_1 $ with the help of the basis extension theorem:

<br>

&emsp; Let $$ \{ \mathcal{B}_j\}_{j \in J} $$ be the corresponding family bases for each linear subspace. Then we obtain the basis, $$ \mathcal{B} $$,  of $$ \sum_{j \in J}  \mathcal{U}_{j} $$ by setting:

$$ \mathcal{B} = \mathcal{B}_1 $$

&emsp; Now, let $$ \mathcal{\hat{B}}_2 \subseteq \mathcal{B}_2 $$ be the subset with basis elements that a linearly independent of $$ \mathcal{B} $$. <br>
&emsp; Define the new basis as the union of the previous two:

$$ \begin{align}
\mathcal{B} = \mathcal{B} \cup \mathcal{\hat{B}}_2
\end{align} $$

&emsp;  We continue repeating that method for each basis such that we obtain:

$$ \mathcal{B} = \Biggl( \bigcup_{j \in J \\ j \neq 1} \mathcal{\hat{B}}_j  \Biggl) \ \cup \ \mathcal{B}_1 $$ 

<br>

Then a vector $$ v \in  \sum_{j \in J}  \mathcal{U}_{j} $$ is simply a linear combination of $$ \mathcal{B} $$. This perspective makes it also evident that the vector space created by the intersection 
$$ \bigcap_{j \in J}  \mathcal{U}_{j} $$ is a subspace of the summed space since:

$$ 
 \bigcap_{j \in J}  \mathcal{B}_{j} \subseteq \mathcal{B}_{1} \subseteq \mathcal{B}_1  \ \cup \  \Biggl( \bigcup_{j \in J \\ j \neq 1} \mathcal{\hat{B}}_j \Biggl) = \mathcal{B}
$$

<br>

### Relation between Sum and Product

<br/>

Let $$ \mathcal{V}(\mathbb{F}) $$ be a vector space with basis, $$ \mathcal{B} = \{ b_1, ..., b_n \} $$, then for any choice of basis elements the generating system of it is a linear subspace of
$$ \mathcal{V} $$:

$$ \textbf{span} ( \{ b_{\sigma(1)}, ..., b_{\sigma(m)} \} ) = \left\{ v \in \mathcal{V} \ | \ v = \sum_{l=1}^{m} \lambda_l b_{\sigma(l)} \ , \ \lambda_l \in \mathbb{F} \ , \ l = 1, ..., m \right\} \ , \quad m \leq n$$

<br>

In that way we can <span style="color:#092b44"> **decomposes** </span> $$ \mathcal{V} $$ into a sum of linear subspaces created by dividing the basis into j smaller bases and constructing generating systems out of them.
Let us denote these newly created subspaces as $$ \mathcal{U}_k $$ and their corresponding basis $$ \mathcal{B}_k $$ with $$ k = 1, ..., j $$. Then the intersection of these spans contains only the zero vector:

$$  \bigcap_{k = 1}^{j} \mathcal{B}_{k} = \emptyset \implies \bigcap_{k = 1}^{j}  \mathcal{U}_{k} = \{ 0_{\mathcal{V}} \} $$

<br>

Because of this property we name this sum a <span style="color:#092b44"> **direct sum** </span> and write it in the following way:

$$ \mathcal{V} = \bigoplus_{k = 1}^{j} \mathcal{U}_{k} $$

<br>

Let $$ v = (v_1, ..., v_n) \in \mathcal{V} $$. An now $$ v = ((v_1, ..., v_k), (v_{k+1}, ..., v_n)) = (v_{w_1}, v_{w_2}) $$

Recall that the product of a family of linear subspaces, $$ \{ \mathcal{U}_j \}_{j \in J} $$, of a vector space, $$ \mathcal{V} $$, over a field, $$ \mathbb{F} $$, is defined by: 

$$ \prod_{j \in J} \mathcal{U}_j := \left\{ v = (u_1, ..., u_{|J|}) \in \mathcal{V} \ | \ \forall \ j \in J : u_j \in \mathcal{U}_{j} \right\} $$


<br>


#### Dimensionality

<br/>

<br/>

#### Quotient space

<br/>

<br/>

#### Quotient group via normal subgroup

<br/>

<br/>

#### Quotient ring via ideals

<br/>

<br/>

#### Tensor products

<br/>

<br/>


#### Tensor products of matrices

<br/>

<br/>


#### Exterior algebra

<br/>

<br/>

