---
title: "Voice to Version 1.0"
permalink: "/archive/voice-to-11ty/"
description: "Exploring transcription workflows and getting my face out of the screen."
date: 2026-02-15
tags: [11ty]
---

As my travel schedule ramps up for 2026, I’ve found myself spending a significant amount of time heading to the airport or in transit between destinations. When I’m not catching up on phone calls, it occurred to me that I could reclaim that time to generate content using basic transcription available on the iPhone.

This isn’t exactly a new frontier for me. Many years ago, back when I was still rocking a BlackBerry, I was experimenting with early application support for transcription. Back then, it was never quite clear if the audio was being processed by a computer or if a WAV file was being quietly shipped off to a third party for "Mechanical Turk" style human transcription.

Gadgets are interesting but if the best camera is the one you have, then for audio, that's my iPhone too. Plus, I'm also looking for a simple alternative now that [I've discontinued using Limitless AI pendant](https://fudge.org/archive/final-thoughts-friday-for-2025-12-05/).

## The Medical Model

Transcription is a staple in other industries, most notably in medicine, where doctors narrate their notes for later processing. Now, I’m certainly not a doctor nor do I play one on TV, but the logic holds.

The Apple ecosystem and onboard transcription have reached a point of high reliability. Whether the processing stays on the device or hits the cloud for speech-to-text, the quality is finally there. The real question now is: what kind of post-processing can we apply to make it actually useful?

## Enriching the Stream

This is where the "wonders of containers, open source, and my Google Gemini Gem(s)" come into play. By feeding a Gem the knowledge of my prior blog posts (including the frontmatter and permalinks) I can do more than just transcribe. I can enrich.

For example, if I mention a topic like the [space value chain](https://fudge.org/tags/fudge-factor/), the workflow could automatically provide deep links to my existing content. A short Python script and some n8n glue could also grab the latest Techmeme headlines or meta-commentary from *~~Techmeme~~ Tech Brew Ride Home* to add context.

## Version 1.0

My goal is a "minimum viable" toolchain that gets a draft into version control on GitHub. From there, my webhooks are already in place to build the site and ship the post into [Fudge Factor Newsletter](https://lists.fudge.org/subscription/form) for subscriber dissemination.

The most exciting part? It keeps my face out of a screen. We could all use a "welcome departure" from the screen-staring that constitutes modern knowledge work.

## The Provocative Path

Some might use this as the opposite of a podcast—recording audio to get text. If I wanted to be provocative, I could take the resulting text, use a trained facsimile of my voice, and create an artificial recording of me reading the post I just spoke into existence.

I don't think I’m quite there yet. Capturing my specific inflections and mannerisms would require significant training against my video and audio archives. It’s on the list of things to try, but let’s be clear: I haven't uploaded my consciousness to the cloud. That trope, and that dog, won't hunt. At least not for now.
