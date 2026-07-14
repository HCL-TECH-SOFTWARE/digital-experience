# How to enable djConfig.isDebug output to the browser console

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

This article provides information on what code you need to add to your JavaScript in order to write debug statements to the browser console.

## Instructions

Add a line like this near the top of the javascript file that contains the debug statements:

    `window.djConfig = { isDebug:true };`
