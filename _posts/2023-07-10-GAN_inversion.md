---
layout: post
title: Mathematical Visualization 
       GAN Inversion
---
This article was created for those who would like to understand more about the mathematical reasoning behind a model such as VAE. For this purpose I am introducing a range of different concepts in statistics
that help understand the decision-making of this paper's  authors. I marked them with (in short) to indicate that they are only a short summery of relevant mathematical statements for this post.
If you have any questions or suggestions  regarding this article feel free to contact me.

<br/>

![_config.yml]({{ site.baseurl }}/images/separator.png)

## Table of Content

1. [Introduction](#introduction)
2. [MLE, MAP estimation & EM](#MLE-MAP-estimation-&-EM)
3. [Bayesian inference](#rBayesian inference)
4. [Variational inference](#Variational inference)
5. [ELBO](#ELBO)
6. [Monte Carlo Estimate](#Monte Carlo Estimate)
7. [Reparametrization Trick](#Reparametrization Trick)
8. [SGVB estimator and AEVB algorithm](#SGVB estimator and AEVB algorithm)
9. [Sources](#Sources)

<br/>

### Required knowledge

The following topics are necessary to understand this article:
- Basic probability theory
- Basic statistics
- Auto-Encoder

I will recap some necessary core concepts from the following topics:
- MLE, MAP estimator & EM
- Bayesian inference
- Variational inference
- Monte Carlo Estimate

If you are keen to know more details about each topic I can suggest: 
- [Introduction to Mathematical Statistics by Hogg](https://minerva.it.manchester.ac.uk/~saralees/statbook2.pdf) 
- [Mathematical Statistics by van de Geer](https://www.stat.math.ethz.ch/~geer/mathstat.pdf) 
- [Monte Carlo Methods by Kroese](https://people.smp.uq.edu.au/DirkKroese/mccourse.pdf)

<br/>

![_config.yml]({{ site.baseurl }}/images/separator.png)