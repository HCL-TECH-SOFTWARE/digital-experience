# How to determine if WebSphere Application Server is Traditional or Liberty

## Applies to

> HCL Digital Experience 9.5

## Introduction

This document explains how to determine whether your WebSphere Application Server is a WebSphere Traditional Server or a WebSphere Liberty server. 

## Instructions

Traditional WebSphere  Application Server uses a systemout.log, systemerr.log and native_stderr.log and in the systemout.log.  You will see in the
section "Start Current Environment" the Edition and version of Traditional WebSphere Application Server you are using.

Liberty WebSphere  Application Server uses a messages.log and a console.log instead.  And the messages.log should tell you what Edition and version of liberty you are using if you are using liberty.

So you can confirm which kind of logs are output to determine your WebSphere Application Server is Traditional or Liberty.
