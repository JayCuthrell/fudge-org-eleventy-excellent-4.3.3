---
date: 2022-08-07 23:51:09.837000+00:00
description: Another look at multicloud
permalink: /archive/union-of-the-cloud/
title: Union of the Cloud
faq:
- question: According to the 2021 HashiCorp survey data mentioned in the post, what
    percentage of companies with annual cloud budgets of $5 million or more operated
    a Cloud Center of Excellence (CCoE)?
  answer: Almost 2/3 (or approximately 66%) of companies with annual cloud budgets
    of $5 million or more operated a CCoE, compared to only 40% of all respondents.
- question: What term does the 2022 HashiCorp and Forrester Consulting study use to
    refer to centralized cloud functions like a Cloud Center of Excellence (CCoE)?
  answer: The study refers to these centralized cloud functions as "platform teams."
- question: According to HashiCorp and Forrester Consulting, what is the main problem
    facing multicloud adoption?
  answer: The main problem is not the technology itself, but rather the people—specifically,
    the lack of people available to staff "cloud platform teams" and "Cloud Centers
    of Excellence (CCoE)" teams.
---
*[Duran Duran - Union Of The Snake (1983)](https://www.youtube.com/watch?v=n6p5Q6_JBes)*

Getting Informed
================

This week we take another look at multicloud (or multi-cloud if you prefer) but this time across three dimensions: Paths, Patterns, and Problems. So, as you might expect, there will be links to the past and present with a positive outlook on the future.

Thanks for reading Fudge Sunday! Subscribe to receive new posts and support my work.

There's a fine line drawing 🎶
-----------------------------

First, let’s look at ***Paths*** to multicloud by looking back a few years. To get perspective, we’ll examine emphasis on multicloud reasoning and surveys.

For 2019, let’s look at the collective knowledge of… popular multicloud related tweets – but pay keen attention to the first one… (we’ll come back to it later)

Li Haoyi @li\_haoyiMy company Databricks is looking for software engineers in SF and Amsterdam, interested in:

- Backend services
- Multi-cloud deployments
- Web UI
- Dev Tools
- Data infra

Tons of #Scala, lots of deep tech, and challenging problems.

If anyone wants to work with me, send a message!](https://twitter.com/li_haoyi/status/1106366239624970240?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)[1:27 AM ∙ Mar 15, 2019



129Likes53Retweets](https://twitter.com/li_haoyi/status/1106366239624970240?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)(https://twitter.com/pracucci/status/1116694575748395008?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)[1:28 PM ∙ Apr 12, 2019



159Likes54Retweets](https://twitter.com/pracucci/status/1116694575748395008?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)(https://twitter.com/littleidea/status/1135366854623485952?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)[2:05 AM ∙ Jun 3, 2019



202Likes38Retweets](https://twitter.com/littleidea/status/1135366854623485952?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)Wendy Nather @wendynather“Let’s go multi-cloud to avoid vendor lock-in.”

“Great, now we’re locked in to MULTIPLE vendors.”](https://twitter.com/wendynather/status/1187467332488179712?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)[8:34 PM ∙ Oct 24, 2019



794Likes163Retweets](https://twitter.com/wendynather/status/1187467332488179712?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)For 2020, let’s again look at the collective knowledge of… popular tweets that begin to illustrate the divide of data management and operational justifications.

(https://twitter.com/jrdntgn/status/1283039292206518275?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)[2:02 PM ∙ Jul 14, 2020



351Likes112Retweets](https://twitter.com/jrdntgn/status/1283039292206518275?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)(https://twitter.com/CTOAdvisor/status/1294394383303954433?s=20&t=zOpPvIrDPa_EdZRPaK2tbw) [10:04 PM ∙ Aug 14, 2020



138Likes20Retweets](https://twitter.com/CTOAdvisor/status/1294394383303954433?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)For 2021, Hashipcorp[1](#footnote-1) shared the following “5 Numbers To Remember” and went on to specifically call out 66% of companies had deemed it strategically advantageous to operate a Cloud Centers of Excellence (CCoE).

2021 had an emo kid background…
> *The prevalence of Cloud Centers of Excellence (CCoE) is also growing, especially among organizations with larger cloud budgets. Almost ⅔ of companies with annual cloud budgets of $5 million or more operated a CCoE, compared to just 40% of all respondents.*
> 
> 

For 2022, Hashicorp and Forrester Consulting[2](#footnote-2) shared “5 Numbers to Remember” that have a slightly different mix but once again called out Cloud Centers of Excellence (CCoE) and refines the term further to be simply “platform teams”. Also, these “platform teams” are very important – 86% reliance level important!

2022 has a more cheerful uplifting trance like background…
> *Cloud strategy and operations are so important that the vast majority of organizations have created a centralized organizational group or function such as a cloud platform team or Cloud Center of Excellence (CCoE) to make the most of their efforts. (Note: In this study, we refer to these centralized cloud functions as “platform teams.”)*
> 
> 

In summary, the paths are evident in the proliferation of “platform teams”. As such, these specialize cloud perfect teams[3](#footnote-3) are those that developed specific practice disciplines and understanding of domain specific languages as well as the essential tools that help accomplish shared goals to achieve a business outcome.

Through the borderline 🎶
------------------------

Next, let’s think about ***Patterns***. What did we see in 2019 that comes to mind in a different context in 2022?

Well, remember that first tweet from 2019 about Databricks hiring for multicloud deployments? Let’s check in with Databricks again… 

(https://twitter.com/protocol/status/1555901630490476544?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)Good times eh? 🤓☁️☁️☁️🤯

At this point, we can safely assume that a multicloud pattern can be based on the selection of a compelling data management service just as much as it can be about thinking carefully about what a multicloud strategy will render — especially when living a cloud in public corporate life.

(https://fudge.org/archive/fudge-sunday-cloud-in-public-impact-mapping/?utm_source=substack&utm_campaign=post_embed&utm_medium=web)To the borderline 🎶
-------------------

So, what are ***Problems*** for multicloud closing in on that last 10% that say multicloud isn’t working for them? 

According to Hashicorp and Forrester Consulting, well, it’s not the technology – it’s actually the people. Or, it’s the lack of the people to be more specific.

Indeed, the “cloud platform teams” and the “Cloud Centers of Excellence (CCoE)” teams do not grow on trees. Or do they?

If there was a tree analogy, is there an orchard? Can you wait to grow trees?

If there is an orchard, do you have to pick by hand? Can you pick fast enough?

If you don’t have to pick, do you have to squeeze to get juice? Is it worth it?

Or, as I’m often saying to folks that seek comparisons in the world of multicloud services, build vs buy, variable costs modeling, and the separation of truly differentiating cultural investments from enduring intellectual property creation:


> *It’s one thing to compare apples to oranges.* 
> 
> *It’s entirely another to compare apples to an Orange Julius.[4](#footnote-4)*
> 
> 

And if we’re talking about Orange Julius because we just want outcomes…

What are the true business outcomes to prioritize when placing your order?

Until next time… Place your bets… (and place your orders…)



[1](#footnote-anchor-1)Read: [HashiCorp 2021 State of Cloud Strategy Survey (via archive.org)](https://web.archive.org/web/20210811160340/https://www.hashicorp.com/state-of-the-cloud)

[2](#footnote-anchor-2)Read: [HashiCorp 2022 State of Cloud Strategy Survey](https://www.hashicorp.com/state-of-the-cloud)

[3](#footnote-anchor-3)Read: [The Perfect Team](https://fudge.org/archive/the-perfect-team/)

[4](#footnote-anchor-4)Read: [Orange Julius (via wikipedia.org)](https://en.wikipedia.org/wiki/Orange_Julius)