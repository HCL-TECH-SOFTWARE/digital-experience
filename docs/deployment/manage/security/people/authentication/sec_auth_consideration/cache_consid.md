# Caching considerations

Information that is protected by access control and is therefore restricted to a limited set of people needs special consideration when served from an access control agnostic cache. These considerations especially apply to server side caches but you also need to consider local browser caches.

Browser caches usually have no issues unless the computers are shared between multiple users with different levels of access. If you access HCL Digital Experience from a shared computer, know that all users who have access to the computer can access content that is cached in the local browser cache. To prevent this from happening, do not enable public or private caching of the content. Caching is disabled by default.

Depending on the type of browser you are using, you can still experience information leakage from shared computers, even if caching is disabled. Some browsers serve content that is accessed from the browser's **Back** button from a separate history cache that is not affected by HTTP caching directives. As a result, if you click the **Back** button, you may see content that is generated from the previous user even if the previous user performed a logout. To prevent this, the markup that is rendered on logout should explicitly clear the browser's history cache, which typically requires browser-specific script coding, or display a message to close all browser windows after logout. History cache can typically be disabled in the browser but it may be activated by default.

The [HCL Digital Experience Performance Tuning Guide](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0074411) provides information about caches for HCL Portal and HCL Web Content Manager. After you have setup your environment, review the tuning guide to learn more about stand-alone and cluster tuning, and then read about both HCL Portal and HCL Web Content Manager caches.


