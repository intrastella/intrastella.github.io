
{% include chapter.html name="Introduction" %}

Applications of such a model is amongst others data representation, generating artificial data and image super-resolution.
As we know from a standard AE an encoder tries to find the most relevant features of observed data and captures this information in a feature vector and the decoder has to reconstruct the original data. Hence, 
the architecture of a standard AE can be used for data representation. If we sample some features from a latent variable and feed that to the decoder we could use the decoder  for generating artificial data.
Those characteristics make an AE a useful basic structure for these goals.

{% include image.html url="/images/vae_arch.png" text="An explanatory illustration that shows the model design." %}

<br/>

In a VAE, the encoder's task is to describe the distributions of those features based on the data we observed. Whereas during inference, just the decoder will be used as a generator, during training, 
the entire model will be treated as a generator model. From that perspective, sampled values from the latent variable are generated from an unknown prior distribution. Hence, we would like to construct a model based on that perspective.

*The goal of this model is to find out from which distribution family these latent variables are drawn. In addition, we would like to increase the likelihood that such a latent distribution originated from our observed data.*

Let's first formulate that mathematically:

![_config.yml]({{ site.baseurl }}/images/vae_v1.png)

As a directed graph we could view it in the following way: (I made the arc representing p(x) dotted because we will later see that it is intractible.)

Applying this formulation on our model we obtain the following assignment:

![_config.yml]({{ site.baseurl }}/images/vae_v1_1.png)

To visualize that concept I created an illustration:

{% include image.html url="/images/diag1.png" text="This diagram illustrates assignments of distributions." %}



