---
date: 2021-10-18 00:01:32+00:00
tags: ['Fudge Sunday']
description: ''
permalink: /archive/fudge-sunday-cloud-in-public-devcommsops/
title: 'Fudge Sunday - Cloud in Public: DevCommsOps'
faq:
- question: What is DevCommsOps?
  answer: DevCommsOps is defined as the purposeful insertion and conspicuous expression
    of change management communications within a DevOps culture, covering changes
    that are planned, achieved, deferred, failed, or resulting in a specific outcome.
- question: How does DevCommsOps relate to Error Budgets?
  answer: DevCommsOps provides a consistent and conspicuous account of changes that
    are planned, taking place, and completed, which all draw against Error Budgets
    and operational objectives.
- question: Are hyperscale cloud providers consistent in how they present DevCommsOps?
  answer: No, there are variations in how hyperscale cloud providers express DevCommsOps.
    While they all use channels like release notes, changelogs, and incident reports,
    they differ in their approaches, such as Oracle Cloud Infrastructure using a single-page
    approach for release notes and changelogs, while others have more granular or
    different methods for publishing incident reports.
---
This week we continue to take a look at public things for a public cloud.

☁️✅⚠️🛑

This issue is part 3 of a 5 part series

1. [Fudge Sunday - Cloud in Public: Status Dashboards](/archive/fudge-sunday-cloud-in-public-status-dashboards/)
2. [Fudge Sunday - Cloud in Public: Engineering SLO](/archive/fudge-sunday-cloud-in-public-engineering-slo/)
3. [Fudge Sunday - Cloud in Public: DevCommsOps](/archive/fudge-sunday-cloud-in-public-devcommsops/)
4. [Fudge Sunday - Cloud in Public: Mean Time To RCA](/archive/fudge-sunday-cloud-in-public-mean-time-to-rca/)
5. [Fudge Sunday - Cloud in Public: Impact Mapping](/archive/fudge-sunday-cloud-in-public-impact-mapping/)

When I wrote about [The Perfect Team](https://fudge.org/archive/the-perfect-team/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), I summarized it as one to do it, write it down, and think ahead. We now have a historical perspective and definitions for the [status dashboards](https://fudge.org/archive/fudge-sunday-cloud-in-public-status-dashboards/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter) and the [Engineering SLO](https://fudge.org/archive?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter). Next, let’s talk about how “write it down” can be expressed as various forms of communication in DevOps cultures.

DevCommsOps is best described as a purposeful insertion of change management communications within a DevOps culture and conspicuously expressing change management communications. To unpack that neologism a bit, imagine things we want (need?) to know relating to change that is *planned*, *achieved, deferred, failed*, and *resulting in an outcome*.

Recall that [Error Budgets, Uptime, and SLO](https://fudge.org/archive/fudge-sunday-cloud-in-public-engineering-slo/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) are simply a way to describe the operational objectives to stay up and running balanced with the innovation demands for developing new features, functionality, and availability for services. As such, DevCommsOps provides a consistent and conspicuous account for the changes planned, taking place, and completed that draw against Error Budgets.

Is DevCommsOps a word soup for Changelog, Release Notes, and Error Budget tracking? Perhaps! In practice, much like the growing depth of status dashboards, a single Changelog is more symbolic than practical as a single page to follow all change.

Is DevCommsOps a word soup for a post-ChatOps world within the context of Error Budgets economic policy? Perhaps! However, ChatOps definitions are likely going to vary from [vendor](https://www.atlassian.com/blog/software-teams/what-is-chatops-adoption-guide?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) to [vendor](https://medium.com/ibm-garage/better-living-through-chatops-df66872893e7?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) to [practitioner pioneers](https://www.youtube.com/watch?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter&v=NST3u-GjjFw).

Luckily, there’s always a cat meme ready to help us better understand.

*Vive La ChatOps!*

**[Capitaine Flam 💫🚀🔥🔥🔥](https://twitter.com/CapitaineFlam4/status/1415008668899332096)**

[@CapitaineFlam4](https://twitter.com/CapitaineFlam4/status/1415008668899332096)

Image rare d'une reproduction de la pyramide de Chatops [https://t.co/KLEYyqyTkL](https://t.co/KLEYyqyTkL)

 [2:02 PM - 13 Jul 2021](https://twitter.com/CapitaineFlam4/status/1415008668899332096)

 **DevCommsOps in practice**

1. Who do cloud companies send “write it down”? Public? Personalized?
2. What do cloud companies “write it down”?
3. Where do cloud companies “write it down”?
4. When do cloud companies “write it down”?
5. Why do cloud companies “write it down”?

Let’s take 1-3 in this issue and leave 4-5 for our following issues in the series.

To provide examples, let’s examine where DevCommsOps is found within the hyperscale cloud service providers today using a basic search for “Release Notes,” “Changelog,” “Notices / Maintenance / Announcements,” and “Root Cause Analyses (RCAs) / Incidents.” The list is in no particular order or weighting other than shorter names to longer names.

IBM Cloud

* [“release notes”](https://cloud.ibm.com/docs/search?q=%22release%20notes%22&utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = 224 hits
* [“changelog”](https://cloud.ibm.com/docs/search?q=%22Changelog%22&utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = 81 hits
* [“maintenance”](https://cloud.ibm.com/status/maintenance?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = 9 hits
* [“announcement”](https://cloud.ibm.com/status/announcement?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = 25 hits (round robin) since July 23, 2021
* [“incidents”](https://cloud.ibm.com/status/incident-reports?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = 9 hits (as PDFs)

Alibaba Cloud

* [“release notes”](https://www.alibabacloud.com/s/InJlbGVhc2Ugbm90ZXMi/h?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = 51 hits
* [“changelog”](https://www.alibabacloud.com/s/ImNoYW5nZWxvZyI/h?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = 9 hits
* [“notices”](https://www.alibabacloud.com/notice?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = 420 hits

Microsoft Azure

* [“release notes”](https://docs.microsoft.com/en-us/search/?scope=Azure&terms=%22release%20notes%22&utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = 726 hits
* [“changelog”](https://docs.microsoft.com/en-us/search/?scope=Azure&terms=%22changelog%22&utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = 46
* [“RCAs”](https://status.azure.com/en-us/status/history/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = 7 pages going back to November 20, 2019

Amazon Web Services

* [“release notes”](https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation&searchQuery=%22release%20notes%22&utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = ??? (100s? 1000s?)
* [“changelog”](https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation&searchQuery=changelog&utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = ??? (100s? 1000s?)
* [“post event summaries”](https://aws.amazon.com/premiumsupport/technology/pes/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = 14 RCAs for *major* service events

Google Cloud Platform

* [“release notes”](https://cloud.google.com/s/results?q=%22release%20notes%22&utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = ??? (100s? 1000s?)
* [“changelog”](https://cloud.google.com/s/results?q=%22changelog%22&utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = ??? (100s? 1000s?)
* [“incidents”](https://status.cloud.google.com/summary?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = 140 over a 12 months period (round robin)

Oracle Cloud Infrastructure

* [“release notes”](https://docs.oracle.com/en-us/iaas/releasenotes/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = 1118
* [“changelog”](https://docs.oracle.com/en-us/iaas/Content/servicechanges.htm?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = 6
* [“incidents”](https://ocistatus.oraclecloud.com/history?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) = 34 over a 3 month period paginated

Notes:

* As of this brief exercise, the only hyperscale cloud service provider that appears to have a “single page” approach to [Release Notes](https://docs.oracle.com/en-us/iaas/releasenotes/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) and [Changelog](https://docs.oracle.com/en-us/iaas/Content/servicechanges.htm?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) is Oracle Cloud Infrastructure.
* Compared to AWS’s use of the term *major,* Google Cloud Platform [“incidents](https://status.cloud.google.com/summary?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter),” Oracle Cloud Infrastructure [“incidents](https://ocistatus.oraclecloud.com/history?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter),” and Microsoft Azure [RCAs](https://status.azure.com/en-us/status/history/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) are more granular and historically accessible IMHO.
* [OCI Status](https://ocistatus.oraclecloud.com?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) appears to be using [Atlassian Statuspage](https://www.atlassian.com/software/statuspage?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter).
* [IBM Cloud](https://cloud.ibm.com/status/incident-reports?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) publishes incident reports as PDFs.

While there are variations amongst the hyperscalers in expressing DevCommsOps, it is essential to consider personalization less transparent to public perspectives. Personalization is outside of the examples above because these are not *public* representations.

At the same time, personalized views are unique to the customer experience, which is a topic for our next issue related to time to published communications and dependency mapping.

At this point, we have established definitions for [status dashboards](https://fudge.org/archive/fudge-sunday-cloud-in-public-status-dashboards/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter) and the [Engineering SLO](https://fudge.org/archive?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter) set against the backdrop of communications of DevOps culture in the form of DevCommsOps. Now we have a baseline to look at for comparison against timing and dependencies.

In the remaining two issues of the series, we will examine the time involved in publishing “Root Cause Analyses (RCAs) / Incidents” and dependency mapping value. We will also look at the increasing importance of dependency mapping for the future. The answers to “When and Why” from questions 4-5 above are coming soon.

Stay tuned!

 
