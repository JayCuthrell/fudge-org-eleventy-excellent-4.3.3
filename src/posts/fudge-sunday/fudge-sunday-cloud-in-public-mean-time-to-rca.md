---
date: 2021-10-25 01:27:33+00:00
tags: ['Fudge Sunday']
description: ''
permalink: /archive/fudge-sunday-cloud-in-public-mean-time-to-rca/
title: 'Fudge Sunday - Cloud in Public: Mean Time To RCA'
faq:
- question: What does 'Mean Time To RCA' refer to in the context of this blog post
    series?
  answer: It refers to the time it takes to produce actionable insights from a root
    cause analysis, which in turn informs, refines, or results in creating KPIs or
    OKRs for an organization.
- question: Are there consistent standards for expressing 'Mean Time To RCA' among
    hyperscale public cloud providers?
  answer: No, the blog post notes that there are stark variations amongst the hyperscalers
    in expressing Mean Time To RCA.
- question: What is the primary focus of the final issue in this 5-part series?
  answer: The final issue will look at the increasing importance of dependency mapping
    across hyperscale public cloud service providers and consider business value engineering
    and customer journeys.
---
This week we continue to take a look at public things for a public cloud.

☁️✅⚠️🛑

This issue is part 4 of a 5 part series

1. [Fudge Sunday - Cloud in Public: Status Dashboards](/archive/fudge-sunday-cloud-in-public-status-dashboards/)
2. [Fudge Sunday - Cloud in Public: Engineering SLO](/archive/fudge-sunday-cloud-in-public-engineering-slo/)
3. [Fudge Sunday - Cloud in Public: DevCommsOps](/archive/fudge-sunday-cloud-in-public-devcommsops/)
4. [Fudge Sunday - Cloud in Public: Mean Time To RCA](/archive/fudge-sunday-cloud-in-public-mean-time-to-rca/)
5. [Fudge Sunday - Cloud in Public: Impact Mapping](/archive/fudge-sunday-cloud-in-public-impact-mapping/)

As of this issue, we now have historical perspectives and definitions for [status dashboards](/archive/fudge-sunday-cloud-in-public-status-dashboards/), [Engineering SLO](/archive/fudge-sunday-cloud-in-public-engineering-slo/), and [DevCommsOps](/archive/fudge-sunday-cloud-in-public-devcommsops/). Next, let’s talk about cultural values and the innovations which drive continuous improvement in pursuit of publishing timely Root Cause Analysis (RCA) that, in turn, help further the development of key performance indicators (KPIs).

 **Meant Time To Root Cause Analysis in practice**

Last week we covered *Who*, *What*, and *Where* for cloud companies that “write it down” to pursue goals for [The Perfect Team](https://fudge.org/archive/the-perfect-team/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter). This issue will get to one of the two remaining questions, *When*, and next week we will explore *Why*.

Now, perhaps, is time for another neologism. This neologism is Mean Time To RCA. As of now, the only search engine results for [“Mean Time To RCA”](https://www.google.com/search?q=%22Mean%20Time%20To%20RCA%22&utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) will likely return this newsletter, and [“Mean Time To Root Cause Analysis”](https://www.google.com/search?q=%22Mean%20Time%20To%20Root%20Cause%20Analysis%22&utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) will likely return [Splunk](https://lantern.splunk.com/IT_Use_Case_Guidance/Infrastructure_Performance_Monitoring/Virtualization_Monitoring/Monitoring_VMware_virtualization_infrastructure?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) too.

“Mean Time To RCA” can be viewed through several lenses or perspectives within a [learning-focused postmortem culture](https://sre.google/sre-book/postmortem-culture/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter). While vendors of tooling utilized by [SRE](https://sre.google/resources/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) and incident management practitioners have a variety of [perspectives](https://communities.sas.com/t5/SAS-Global-Forum-Proceedings/Improving-Mean-Time-to-Resolution-and-Root-Cause-Analysis-for/ta-p/726299?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) on the [fastest way](https://www.oreilly.com/content/taming-chaos-preparing-for-your-next-incident/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) or most complete approach to get to RCA, they all trend to other Mean Time To *X* as a foundation (Ishikawa diagrams, Kaizen methods, Cause Maps, Postmortem Templates, etc.). That said, marketing teams for tooling vendors may look for a way to, at best, differentiate or, at worst, obfuscate with a thesaurus approach to naming conventions.

* If X = R = Respond, Repair, Recovery, Resolve, or Resolution
* If X = I = Identify, Isolate, or Insights
* If X = F = Failure, Fix, Fidelity, or Facilitate
* If X = A = Acknowledge, Activity, or Action
* If X = D = Determine, Detect, or Diagnose
* If X = V = Verify or Validate
* If X = T = Triage or Telemetry
* If X = C = Confirm, Clarity, or Closure
* [If X = RR…](https://sre.google/mobaa/methods/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) 🤣🤣🤣🤣
* and so on
* but it ALL *adds up to the time it takes to get to RCA*

So, one may wonder if MTTAA is the Mean Time To Another Acronym.🤔

Effectively, Mean Time To RCA (for this series) refers to the time it takes to produce [actionable insights from a root cause analysis](https://sre.google/sre-book/example-postmortem/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter). The lessons learned will inform, refine, or result in creating KPIs or Objectives and Key Results (OKRs) for the organization as part of a commitment to conspicuous and continuous improvement.

We know there is an increasingly personalized approach to DevCommsOps among hyperscale public cloud service providers. So, we need to understand the impact on Mean Time To RCA from both general public DevCommsOps and the effect from personalized approaches.

To provide examples, let’s examine where Mean Time To RCA is found within the hyperscale public cloud service providers today using our previous searches for “Root Cause Analyses (RCAs) / Incidents.” Once again, the list is in no particular order or weighting other than shorter names to longer names.

IBM Cloud Mean Time to RCA [examples](https://cloud.ibm.com/status/incident-reports?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter):

* ~5 days for an outage duration of ~3 days
* ~10 days for an outage duration of ~12 hours
* ~10 days for an outage duration of ~9 hours
* ~10 days for an outage duration of ~6 hours
* ~2 days for an outage duration of ~3 hours
* ~3 days for an outage duration of ~2 hours
* And so on

Alibaba Cloud Mean Time to RCA [examples](https://www.alibabacloud.com/notice?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter):

* Unable to find any notices that include outage duration
* Unable to find any links from news coverage of outages
* And so on?

Microsoft Azure Mean Time to RCA [examples](https://status.azure.com/en-us/status/history/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter):

* [RCA (detailed) can be made available upon request](https://azure.microsoft.com/en-us/blog/get-an-official-service-issue-root-cause-analysis-with-azure-service-health/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)
* Unable to find any notices with an actual publication date
* RCA publishing is *organized by the start date of an outage*
* Several RCA reference outages lasting to the following day
* Otherwise, ~1 day for an outage duration of any length (*unlikely?*)
* And so on?

Amazon Web Services Mean Time to RCA [examples](https://aws.amazon.com/premiumsupport/technology/pes/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter):

* ~9 days for the April 21, 2001 “disruption” and no duration calculated
* ~5 days for the July 2, 2012 “event” and no duration calculated
* ~5 days for the October 22, 2012 “event” [based on Twitter update](https://twitter.com/jeffbarr/status/262031699033063424?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)
* ~5 days for the December 24, 2012 “event” [based on Twitter update](https://twitter.com/fzeisler/status/285253174837792770?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)
* ~3 days for the December 17, 2012 “event”
* ~5 days for the June 13, 2014 “disruption” [based on Twitter update](https://twitter.com/m3thos/status/81828759845609472?s=20&utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)
* The August 7, 2014 message URI seems to be recycled from 2011 🤷‍♂️
* ~3 days for the November 25, 2020 “event”
* And so on

Google Cloud Platform Mean Time to RCA [examples](https://status.cloud.google.com/summary?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter):

* ~9 days for the October 31, 2019 “incident” duration of ~3 days
* ~14 days for the May 20, 2021 “incident” duration of ~1 hour
* And so on

Oracle Cloud Infrastructure Mean Time to RCA [examples](https://ocistatus.oraclecloud.com/history?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter):

* [RCA (detailed) can be made available upon request](https://blogs.oracle.com/proactivesupportepm/post/how-to-get-a-root-cause-analysis-of-unplanned-outages-in-enterprise-performance-management-epm-cloud?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)
* ~3 days for the July 7, 2021 “Production Event” duration of ~16 hours
* And so on?

Notes:

* As noted previously, AWS has relatively few (*major*) [“post event summaries](https://aws.amazon.com/premiumsupport/technology/pes/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter),”Google Cloud Platform has [“incidents](https://status.cloud.google.com/summary?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter),” Oracle Cloud Infrastructure has [“incidents](https://ocistatus.oraclecloud.com/history?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter),” Microsoft Azure has [RCAs](https://status.azure.com/en-us/status/history/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter), and [IBM Cloud](https://cloud.ibm.com/status/incident-reports?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter) has [“incidents](https://cloud.ibm.com/status/incident-reports?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter).”
* For this sampling, there was no access to consoles (portals) required.

In summary, there are **stark variations** amongst the hyperscalers in expressing Mean Time To RCA. Further, it is reasonable to expect the market will drive demand for standards that normalize the variations.

At the same time, DevCommsOps mixes public and personalized views that are unique to the customer experience. Further, the drive for personalization will result in Mean Time To RCA for the customer informed by their unique specific dependency mapping. The [Azure](https://azure.microsoft.com/en-us/blog/get-an-official-service-issue-root-cause-analysis-with-azure-service-health/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) and [Oracle Cloud](https://blogs.oracle.com/proactivesupportepm/post/how-to-get-a-root-cause-analysis-of-unplanned-outages-in-enterprise-performance-management-epm-cloud?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) approaches will appeal to particular Enterprise customers.

As a reminder, we have established definitions for [status dashboards](https://fudge.org/archive/fudge-sunday-cloud-in-public-status-dashboards/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter), [Engineering SLO](https://fudge.org/archive?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter), [DevCommsOps](https://fudge.org/archive/fudge-sunday-cloud-in-public-devcommsops/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), and Mean Time To RCA. We have a baseline that is ready to compare general public dependencies and customer personalized views of the underlying dependencies among hyperscale public cloud service providers.

Our last issue in the series will look at the increasing importance of dependency mapping across hyperscale public cloud service providers. Finally, we will consider business value engineering and customer journeys.

Stay tuned!

 