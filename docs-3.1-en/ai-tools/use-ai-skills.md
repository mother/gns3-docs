---
title: How to use AI Skills
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# How to use AI Skills

GNS3-Skills is the domain knowledge base for GNS3 Copilot. It contains 50 YAML skill files and 815 fault injection scenarios. It covers over 60 network protocols and technologies (from PPP to SRv6 and EVPN). As the knowledge layer of the GNS3 network simulation environment, it provides automated fault diagnosis, lab automation, and learning assistance capabilities for GNS3 Copilot through LangChain tools.

## Folder Structure

- **injection/** — 50 fault injection skills covering 60+ network protocols and technologies (OSPF, BGP, VXLAN, EVPN, etc.), each with multiple fault scenarios, severity levels, difficulty levels, symptom descriptions, and troubleshooting hints
- **device/** — Device interface definitions providing command syntax, configuration examples, diagnostic commands, and troubleshooting guides for different network devices (such as VPCS virtual PC)
- **feature/** — Advanced feature skills for automated handling of complex scenarios like network topology planning
- **prompts/** — LLM system prompts defining AI Assistant behavior in different modes, including troubleshooting, teaching assistant, and lab automation
- **packet_analysis/** — Packet analysis rules providing tshark field extraction rules for 60+ network protocols, supporting automated packet parsing and fault diagnosis
- **config/** — Security and runtime configuration defining a list of prohibited commands to protect the GNS3 lab environment

## Technical Specifications

- **Fault scenario format**: Severity level, difficulty level, symptom description, troubleshooting hints
- **CI/CD validation**: YAML syntax, skill format, tshark field validity
- **Local validation**: Pre-commit hook support

## Usage

GNS3-Skills is automatically loaded by GNS3 Copilot, no manual configuration required. Skill files are exposed to the LLM through LangChain tools and support hot reload.

## Statistics

For detailed statistics and categories, see: [SKILLS_SUMMARY.md](https://github.com/GNS3/gns3-skills/blob/main/SKILLS_SUMMARY.md)

## Repository Info

- **URL**: https://github.com/GNS3/gns3-skills
- **License**: GPL-3.0-or-later
- **Purpose**: Lab exercises, troubleshooting training, and automated testing scenarios for network engineers
