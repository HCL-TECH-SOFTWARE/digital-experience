---
tags:
    - Personalization
hide: tags
---

# Personalization

HCL DX has a lightweight built-in personalization engine and can integrate with enterprise solutions such as HCL Unica.

## Rules Definition

The inbuilt personalization engine allows the development of simple personalization rules. These can be used within a variety of locations in DX.

Rules are built by categorizing individuals (usually the current site visitor) according to their user properties, and linking that to actions that select relevant content (amongst other possibilities). For example a simple content selection rule may be combined with a user's profile to ensure that only content relevant to that user's interests is displayed.

Personalization also has the capability to organize rules into Campaigns, which are a means of organizing and implementing sets of personalization behavior. This means that the behavior of the personalization engine can be changed over time, rules can be activated or deactivated, or user profiler can be updated.

It is possible to have multiple campaigns active simultaneously. When this happens, the priority settings of the active campaigns dictate which campaign's rule mapping will be used. The campaign with the highest priority 'wins' and its rule mappings are used. In the event that multiple active campaigns have the same priority setting, the rule mapping used for a given content spot is determined randomly according to the relative split ratios.

Personalization in HCL DX is managed via a point-and-click interface to enable the management of personalization rules and other artifacts. A [REST API](api_access.md) is also provided.

## Using Rules in DX

Personalization rules may be used in a number of ways within HCL DX. Most commonly they are used to:

* Control which pages or applications will be visible to a given user
* Control which content the user sees
* Create a dynamic list of content that can be used in a website or via an API