# How to create links that display content with WCM servlet without the Portal theme

## Applies to

> HCL Digital Experience v9.5 and Later

## Introduction

This document provides instructions on how to create links that display content within a WCM servlet, but without the Portal theme.

## Instructions

While there may be alternate approaches, one approach is to use a menu item. This produces links that will open a new window containing the specific content only (will not wrap in the Portal context/theme etc).

Use something similar to this in "Design for each menu search result":

```html
<tr>
    <td>
        <a href="[Placeholder tag="noprefixhref"]" target="_blank">
            [Placeholder tag="name"]
        </a><br>
    </td>
</tr>
```
