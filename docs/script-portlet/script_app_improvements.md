# Script Application Improvements

In CF201, some improvements are made to the Script Applications. You can now upload minified content, use a new configuration task to set the required WCM properties for script applications such as React or Angular, and make use of the new **Deferred with React** theme profile.

## Introduction

The following improvements were made for the Script Application on CF201:

-   The issue with uploading minified content is fixed so you can now use production builds of an SPA
-   A new configuration task is available to configure WCM properties required to run SPAs like React or Angular in script applications: `ConfigEngine.sh|bat enable-wcm-spa-script-app-properties`
-   Out of the box react profile in the 8.5 theme: **Deferred with React**.

## Fix for minified content processing

In CF200 and earlier, minified single line content would cause an issue with React and other SPAs due a problem with processing of the files in WCM. For example, in webpack, it was recommended to set `collapseWhitespace=false`. We have addressed this issue with CF201 and you can now build your script applications with `collapseWhitespace=true` going forward.

## Configuring WCM properties for SPA script apps

When using an Angular, React or another SPA in a script application, it is necessary to turn off the dynamic parameter tag and shortform in DX since they may interfere with some of the syntax used. Instead of having to trigger this manually, a new configuration task was added to configure these for you. Note that a restart of DX Portal is still required for the changes to take effect.

Config task: `ConfigEngine.sh|bat enable-wcm-spa-script-app-properties`

To disable run: `ConfigEngine.sh|bat disable-wcm-spa-script-app-properties`

## Deferred with React theme profile in 8.5 theme

A new **Deferred with React** theme profile was added that includes React v16 which can be used on pages contain React script applications.

