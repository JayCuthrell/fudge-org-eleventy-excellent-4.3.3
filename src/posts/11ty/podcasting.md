---
title: "The Podcasting Era"
permalink: "/archive/podcasting/"
description: "It is time to start podcasting (again)"
date: 2026-03-06
tags: [11ty, Podcast]
---

## 🎙️ Podcast via POSSE

While evolving the way I handle my digital footprint, the **POSSE** (Publish on Own Site, Syndicate Everywhere) principle is coming to my upcoming [podcast](https://fudge.org/tags/podcast/). Initially, I will be using my existing **11ty (Eleventy)** on Akamai Linode VPS approach.

While I've experimented over the years with a podcast, much of that experimentation was short-lived. However, I believe that a podcast is more viable now that I've proven my newsletter publishing continuously.

### The Studio

My initial goal is to have the studio fit in my pocket or backpack. Effectively that means I'll be using an iPhone or my MacBook Air.

For now, speaking to the iPhone or my MacBook Air will suffice. As I get more sophisticated, there will be a formal studio design with gear that fits in a carry-on bag.

### The DevSecFinGitOps Goals

Taking a lesson from my newsletter publishing, I am going to keep things simple and stable. To stay within my 2TB Linode transfer pool and minimize my footprint, I’ve opted for a "Zero-Runtime" architecture:

* **Ultra-Lean:** 11ty compiles my Markdown into a static compatible RSS/Atom feed
* **Edge Delivery:** Serving the static files via [Caddy](https://caddyserver.com/) *OR* delivering static files via Cloudflare R2 (TBD) with a media subdomain
* **The Workflow: (for now)**
    1. **Draft:** Content starts in **Obsidian** (Markdown) *OR* Voice Memos *OR* GarageBand
    2. **Refine:** Metadata is managed in **VS Code**
    3. **Automate:** A **python** script calculates audio `length` and `duration` bitrates
    4. **Deploy:** `git push` triggers a **GitHub Action** and webhooks to my VPS *OR* Cloudflare R2
    5. **Push:** n8n parses and pushes anything that doesn't handle RSS/Atom feed

### The Bandwidth Shield

By optionally using a **Storage-Origin/CDN-Edge** strategy, I’m offloading the heavy `.mp3` delivery to the edge. This keeps my Linode egress which I used for my [music](https://jaycuthrell.com/music/) years ago.

This setup isn't just about overages mitigation, it’s about owning the source and keeping the infrastructure as code (IaaC) portable and self-hosted wherever possible. Also, a subdomain for media delivery will be an interesting challenge.

## The Domain Decision

Every podcast needs a snazzy domain name, and I'm finally going to do *something* with [UnicornJockeys.com (Unicorn Jockeys Podcast)](https://unicornjockeys.com/) which is currently parked on Netlify. That something will be podcasting.

Fun fact: Almost 10 years ago, I was still active on [Twitter](https://fudge.org/archive/on-twitter/). I even grabbed the [unicornjockey](https://twitter.com/unicornjockeys) username back in late 2015.

> IT kids love the meaty new taste of Unicorn Jockeys Podcast: Now with up to 65% less hosts! Mmmm mmmm good! 🦄
> Data Centers Worldwide
> Joined December 2015

*Side note: At the time, I had used a similar domain, [UnicornJockey.com (no "s")](http://unicornjockey.com/), for recruiting purposes to get referrals during the time of hypergrowth / blitzscaling at [VCE](https://fudge.org/tags/vce-and-dell/). Over the years, I've updated the redirect to reflect where I happen to be working at the time.*

More to come... stay tuned.

## #OpenToWork Weekly

I participated in a [#NeverSearchAlone](https://www.youtube.com/watch?v=OH3nzRdwYPA) [#JSC](https://www.phyl.org/jsc) after rebooting [Cuthrell Consulting](https://cuthrell.consulting) and [joining NexusTek](https://cuthrell.consulting/blog/jay-cuthrell-joins-nexustek/).

I added those #OpenToWork from my LinkedIn network to this newsletter. Over time, we've grown an Alumni 🎉 section for those that transitioned to their next career adventure.

### Alumni 🎉

- [Congrats Jennifer Fisher 🎉](https://www.linkedin.com/posts/jenniferlfisher_im-excited-to-announce-that-ive-joined-activity-7430287738932731904-xDRn)
- [Congrats Scott Place 🎉](https://www.linkedin.com/posts/scottplace_im-happy-to-announce-im-starting-as-an-activity-7427067835618660352-a82o)
- [Congrats Brian Booden 🎉](https://www.linkedin.com/posts/qlikluminary_im-happy-to-share-that-im-starting-a-new-activity-7379829478044147713-V2t-/)
- [Congrats Sam Aiello 🎉](https://www.linkedin.com/feed/update/urn:li:activity:7368473092924268545/)
- [Congrats Nathan Clyker 🎉](https://www.linkedin.com/posts/activity-7366138435163607041-zOLE?utm_source=share&utm_medium=member_desktop&rcm=ACoAACk1T7oBu6QkP2p3bHgknv3R55ktER0dzqc)
- [Congrats Kelly Britt 🎉](https://www.linkedin.com/posts/activity-7351735768186306560-_6Ls?utm_source=share&utm_medium=member_desktop&rcm=ACoAACk1T7oBu6QkP2p3bHgknv3R55ktER0dzqc)
- [Congrats Tamera Rousseau King 🎉](https://www.linkedin.com/posts/activity-7343345962272120833-RNuK?utm_source=share&utm_medium=member_desktop&rcm=ACoAACk1T7oBu6QkP2p3bHgknv3R55ktER0dzqc)
- [Congrats Thomas Chatham 🎉](https://www.linkedin.com/in/thomaschatham/)
- [Congrats Dan Kelleher 🎉](https://www.linkedin.com/in/kelleherdan/)
- [Congrats Jarrod Weise 🎉](https://www.linkedin.com/posts/jarrodweise_thechargeahead-electricvehicles-innovation-activity-7325543362621509632-t5Oy?utm_source=share&utm_medium=member_desktop&rcm=ACoAACk1T7oBu6QkP2p3bHgknv3R55ktER0dzqc)
- [Congrats Karl Edwards 🎉](https://www.linkedin.com/posts/edwardskarl_im-happy-to-share-that-im-starting-a-new-activity-7323502970120138752-SLA-?utm_source=share&utm_medium=member_desktop&rcm=ACoAACk1T7oBu6QkP2p3bHgknv3R55ktER0dzqc)
- [Congrats Paul Lysko 🎉](https://www.linkedin.com/posts/paullysko_hellyeah-activity-7315070360708603905-ZDc_?utm_source=share&utm_medium=member_desktop&rcm=ACoAACk1T7oBu6QkP2p3bHgknv3R55ktER0dzqc)
- [Congrats Bob Lima, PMP 🎉](https://www.linkedin.com/posts/limarobert_im-happy-to-share-that-im-starting-a-new-activity-7315167863147769856-Tsk-?utm_source=share&utm_medium=member_desktop&rcm=ACoAACk1T7oBu6QkP2p3bHgknv3R55ktER0dzqc)
- [Congrats Rich Green 🎉](https://www.linkedin.com/posts/rich-green-5304804_im-happy-to-share-that-im-starting-a-new-activity-7312272227184324608-HmZN?utm_source=share&utm_medium=member_desktop&rcm=ACoAACk1T7oBu6QkP2p3bHgknv3R55ktER0dzqc)
- [Congrats Sheri Gearhart 🎉](https://www.linkedin.com/posts/sheri-gearhart_im-happy-to-share-that-im-starting-a-new-activity-7314986352909983745-VKzo?utm_source=share&utm_medium=member_desktop&rcm=ACoAACk1T7oBu6QkP2p3bHgknv3R55ktER0dzqc)
- [Congrats Shianna Maxwell 🎉](https://www.linkedin.com/posts/shiannamaxwell_im-happy-to-share-that-im-starting-a-new-activity-7302404919678902272-FHRz?utm_source=share&utm_medium=member_desktop&rcm=ACoAACk1T7oBu6QkP2p3bHgknv3R55ktER0dzqc)
- [Congrats Richard Arnesen! 🎉](https://www.linkedin.com/posts/richard-arnesen_im-happy-to-share-that-im-starting-a-new-activity-7290099022084616192-QjYm?utm_source=share&utm_medium=member_desktop)

Those in my network that are #OpenToWork:

- [Janel Van Beek - Business Strategist & Master Coach | Leadership & Change Expert](https://www.linkedin.com/in/janellanzadbafrancievanwirkus220/)
- [Mike Berteletti, CISSP - Experienced IT Professional | Infrastructure & Security](https://www.linkedin.com/in/mike-berteletti-cissp/)
- [Trevor Schulz - 20+ Years in Tech Sales | Loyal, Dedicated, and Ready to Work Today](https://www.linkedin.com/in/trevorschulz/)
- [Elizabeth Quintanilla - Fractional CMO, Digital Marketing Consultant & Coach, Marketing Gunslinger](https://www.linkedin.com/in/elizabethquintanilla/)
- [Barbara Hadley, EdM, SPHR - Strategic HR Leader | Employee Engagement Expert](https://www.linkedin.com/in/barbarahadleyhrleader/)
- [Andrew Webber - Proven Leader | Consumer Product Innovation & Scaling](https://www.linkedin.com/in/andrewwebber/)
- [Lida Tohidi - Award-Winning Product & Marketing Leader | Startup Advisor](https://www.linkedin.com/in/lidatohidi/)
- [Gina (Gina Minks) Rosenthal - Global Product Marketing Manager | Technical Content Strategist](https://www.linkedin.com/in/gminks/)
- [Greg Phillips - Cloud Platform & Strategic Marketing Leader](https://www.linkedin.com/in/gregaphillips/)
- [Ricardo Perez - Virtualization Architect | PowerFlex & VxRail Specialist](https://www.linkedin.com/in/ricardo-perez-atx)
- [Chris Mojica - Technical Sales & Solutions Architect](https://www.linkedin.com/in/pcmojica/)
- [Matthew Leib - Datacenter, Cloud & Storage Architect | Technical Writer & Analyst](https://www.linkedin.com/in/matthewleib/)
- [Michael Joffe - Global Technology Leader | P&L Management | SaaS & OEM](https://www.linkedin.com/in/joffemichael/)
- [Colleen Coll - Event Technology & Digital Media Specialist | Live Reporting](https://www.linkedin.com/in/colleen-coll-b971505/)