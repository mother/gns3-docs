---
title: How to use AI Skills
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# How to use AI Skills

GNS3 Skills is a repository of network troubleshooting skills. It is used to expand the AI Assistant's capabilities. It contains 50 YAML skill files and 815 fault injection scenarios. It covers over 60 network protocols and technologies (from PPP to SRv6 and EVPN). It is integrated into the GNS3 network simulation environment. It provides automated fault diagnosis and learning support.

## Folder Structure

- `injection/` — 50 fault injection skills (OSPF, BGP, VXLAN, EVPN, and more)
- `device/` — Device interface definitions (for example, VPCS virtual PC commands)
- `packet_analysis/` — Packet analysis rules (tshark field extraction)
- `prompts/` — LLM system prompts (troubleshooting, teaching assistant, lab automation)

## Technical Specifications

- Each fault includes: severity level, difficulty level, symptoms, troubleshooting hints
- CI/CD validation: YAML syntax, skill format, tshark field validity
- Local pre-commit hook support

## Repository Address

[https://github.com/gns3/gns3-skills](https://github.com/gns3/gns3-skills)

This is for network engineers to use in labs, troubleshooting training, and automated testing scenarios.
