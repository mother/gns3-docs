---
title: Fault Injection
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Fault Injection

Fault injection is a feature of the GNS3 AI Assistant. It simulates network problems in your topology. This helps you practice your network troubleshooting skills. The feature uses AI to automatically analyze your network topology, choose the right fault type, and inject it into the project.

## Steps to Use

1. On the project topology page, click the fault injection button in the left toolbar (shown in the image below).

   <img style={{ width: '100%' }} alt="Fault Injection Button in Toolbar" src={useBaseUrl('img/web-ui/zh/fault-injection-button.jpeg')} />

2. In the "Fault Injection" dialog, click the "Inject Fault" button.

   <img style={{ width: '100%' }} alt="Fault Injection Dialog" src={useBaseUrl('img/web-ui/zh/fault-injection-dialog.jpeg')} />

3. Choose how many faults to inject (you can pick 1-3 faults or a random number). Then click the "Confirm & Inject" button.

   <img style={{ width: '100%' }} alt="Choose Fault Count" src={useBaseUrl('img/web-ui/zh/fault-injection-count.jpeg')} />

4. Wait for the fault injection to finish. The screen shows real-time progress.

   <img style={{ width: '100%' }} alt="Fault Injection in Progress" src={useBaseUrl('img/web-ui/zh/fault-injection-progress.jpeg')} />

5. After the fault injection is done, you can see the results.

   <img style={{ width: '100%' }} alt="Fault Injection Complete" src={useBaseUrl('img/web-ui/zh/fault-injection-done.jpeg')} />

6. Check the AI Assistant for the detailed steps of the fault injection. This can help you if you are not sure about the cause of the problem.

   <img style={{ width: '100%' }} alt="View Details in AI Assistant" src={useBaseUrl('img/web-ui/zh/fault-injection-details.jpeg')} />

## Technical Reference

### Workflow

1. **Topology analysis** — AI analyzes the current topology. It finds device types, routing protocols, and services.
2. **Fault selection** — AI matches the current topology and recommends the right fault types.
3. **Fault injection** — AI connects to the target devices and changes their configuration.
4. **Result feedback** — AI creates a fault description, diagnosis steps, and troubleshooting tips.

### Skills Repository

The fault injection skills are defined in the [GNS3-Skills](https://github.com/gns3/gns3-skills) repository, inside the `injection/` folder. It supports fault types for protocols like OSPF, BGP, VLAN, and STP.
