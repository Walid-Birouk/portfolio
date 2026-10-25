---
title: Railway Track Anomaly Detection
stack: Python & TensorFlow & U-Net & YOLOv8 & AWS SageMaker
pageSlug: railway-anomaly-detection
order: 3
description: An anomaly detection system for Belgian railway tracks using U-Net segmentation, an autoencoder and YOLOv8 signal recognition, built for an Infrabel project at RideOnTrack.
repoLabel: Built at RideOnTrack for Infrabel, code not public
flow: ["Track images", "U-Net, Autoencoder", "YOLOv8"]
---

### Computer vision for railway safety

## Context

I worked on this as an ML engineer at RideOnTrack from January to August 2025, on a project for Infrabel, the Belgian railway infrastructure manager.

## Constraints

- **Two separate problems in one system.** Anomalies on the track and train signals both had to be handled.
- **Signal recognition in real time.** The YOLOv8 model had to recognise train signals as they appear.
- **Detection depends on what the model looks at.** The critical areas of each track image had to be isolated first.

## What I built

<div style="overflow-x:auto;margin:1.5rem 0;"><svg viewBox="0 0 880 250" role="img" aria-label="Track images go through a U-Net segmentation model and an autoencoder to isolate critical areas for anomaly detection; YOLOv8 separately recognises train signals in real time." style="width:100%;max-width:880px;height:auto;display:block;margin:0 auto;">
<defs><marker id="rail-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280"></path></marker></defs>
<text x="440" y="24" text-anchor="middle" fill="#6b7280" font-size="10">Track anomalies</text>
<rect x="20" y="40" width="180" height="80" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="110" y="66" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Track images</text>
<text x="110" y="90" text-anchor="middle" fill="#6b7280" font-size="10">railway track</text>
<rect x="330" y="40" width="220" height="80" rx="6" fill="#141414" stroke="#2dd4bf" stroke-opacity="0.7"></rect>
<text x="440" y="66" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">U-Net + autoencoder</text>
<text x="440" y="90" text-anchor="middle" fill="#6b7280" font-size="10">isolate critical areas</text>
<rect x="680" y="40" width="180" height="80" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="770" y="66" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Anomaly detection</text>
<text x="770" y="90" text-anchor="middle" fill="#6b7280" font-size="10">on the track</text>
<line x1="200" y1="80" x2="330" y2="80" stroke="#6b7280" marker-end="url(#rail-arrow)"></line>
<line x1="550" y1="80" x2="680" y2="80" stroke="#6b7280" marker-end="url(#rail-arrow)"></line>
<text x="440" y="160" text-anchor="middle" fill="#6b7280" font-size="10">Train signals</text>
<rect x="330" y="176" width="220" height="60" rx="6" fill="#141414" stroke="#2dd4bf" stroke-opacity="0.7"></rect>
<text x="440" y="202" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">YOLOv8</text>
<text x="440" y="226" text-anchor="middle" fill="#6b7280" font-size="10">real-time recognition</text>
<rect x="680" y="176" width="180" height="60" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="770" y="202" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Train signals</text>
<text x="770" y="226" text-anchor="middle" fill="#6b7280" font-size="10">91% accuracy</text>
<line x1="550" y1="206" x2="680" y2="206" stroke="#6b7280" marker-end="url(#rail-arrow)"></line>
</svg></div>

- **Anomaly detection on railway tracks** using machine learning and computer vision.
- **A U-Net segmentation model and an autoencoder** that isolate the critical areas of each track image, which improves detection.
- **YOLOv8 for real-time train signal recognition**, which reached 91% accuracy.

## Design choices

**Isolate the critical areas before detecting.** A U-Net segmentation model and an autoencoder isolate the critical areas of each track image, which improves detection.

**YOLOv8 for the signals.** Signal recognition is a separate task from anomaly detection and has to run in real time, which is what YOLOv8 is built for. It reached 91% accuracy.

## Stack

Python, TensorFlow, U-Net, YOLOv8, AWS SageMaker, Git
