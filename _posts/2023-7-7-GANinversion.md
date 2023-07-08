---
layout: post
title: Mathematical Visualization 
       GAN Inversion
intro: GAN inversion plays a pivotal part in parameter manipulations such as in image manipulation. Some of these methods have a geometrical approach. In this article I visualize them and compare them with other algorithms...

start: GAN inversion plays a pivotal part in parameter manipulations such as in image manipulation. Some of these methods have a geometrical approach. In this article I visualize them and compare them with other algorithms...

---

         alert('this works')
         button.onclick = function(){
            txt.style.color = "rgba(255, 255, 255,  0)";
         };
         txt.style.color = "rgba(0, 0, 0,  1)";

window.history.back();

And you can of course go forward too:

window.history.forward();

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


1. [Introduction](#introduction)
2. [MLE, MAP estimation and EM](#mle-map-estimation-and-em) *(recap)*
3. [Bayesian inference](#bayesian-inference) *(recap)*
4. [Variational inference](#variational-inference) *(recap)*
5. [The Evidence Lower Bound](#the-evidence-lower-bound)
6. [Monte Carlo Estimate](#monte-carlo-estimate) *(recap)*
7. [Reparametrization Trick](#reparametrization-trick)
8. [SGVB estimator and AEVB algorithm](#sgvb-estimator-and-aevb-algorithm)
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
