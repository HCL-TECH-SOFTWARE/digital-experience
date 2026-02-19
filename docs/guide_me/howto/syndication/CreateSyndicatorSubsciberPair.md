# How to create a syndicator / subscriber pair

## Applies to

> HCL Digital Experience version 8.5 and higher  

## Introduction

This document describes how to create a syndicator / subscriber pair.

## Instructions

**On subscriber server:**
1. Create the vault slot:
- Go to Portal Administration > Access > Credential Vault > Add a Vault Slot > Name=SyndicationSlot > New Vault Resource "SyndicationVaultResource" >
Vault slot is shared > shared userid: (syndicator admin userid) > enter password twice > Description "SyndicationSharedSlot" > ok

2. Create the syndicator / subscriber pair:

- Portal Administration > Portal Content > Subscribers > Subscribe now > Syndicator url: http://mysyndicator.example_hostname.com:<port>/wps/wcm >
Syndicator name: mySyndicator > Subscriber Name: mySubscriber > select credential vault slot "SyndicationSlot"

```note
If the syndicator were a virtual portal (VP) named "jdr", the URL would be: http://mysyndicator.example_hostname.com:<port>/wps/wcm/jdr
```

Additional details can be found in this video: [HCL Digital Experience - Setting up HCL Portal Syndication](https://www.youtube.com/watch?v=yUlddDkrY9w)
