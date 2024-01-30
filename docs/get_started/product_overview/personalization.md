---
tags:
    - Personalization
hide: tags
---

# Personalization

HCL DX has a lightweight, built-in personalization engine and can integrate with enterprise solutions such as HCL Unica.

## Rule definitions

With the built-in personalization engine, you can develop simple personalization rules. These rules can be used in a variety of locations in DX.

Rules are built by categorizing individuals (usually the current site visitor) according to user properties and linking that to actions that select relevant content (amongst other possibilities). For example, a simple content selection rule might be combined with a user's profile to ensure that only content relevant to that user's interests is displayed.

Personalization can also organize rules into campaigns, which are a means of organizing and implementing sets of personalization behavior. This ability to organize rules means that the behavior of the personalization engine can be changed over time, rules can be activated or deactivated, or user the profiler can be updated.

You can have have multiple campaigns active simultaneously. When multiple campaigns are active, the priority settings of the active campaigns dictate which campaign's rule mapping is used. The campaign with the highest priority "wins" and its rule mappings are used. In the event that multiple active campaigns have the same priority setting, the rule mapping for a given content spot is determined randomly according to the relative split ratios.

Personalization in HCL DX is managed in a point-and-click interface to enable the management of personalization rules and other artifacts. A [REST API](api_access.md) is also provided.

## Using rules in DX

Personalization rules can be used in a number of ways in HCL DX. Most commonly they are used to complete the following tasks:

* Control which pages or applications will be visible to a given user
* Control which content the user sees
* Create a dynamic list of content that can be used in a website or via an API