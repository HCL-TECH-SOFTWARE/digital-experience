---
id: h_clients_override
title: Overriding the default HTML client
---




You can remove the default HTML client and user agent string to prevent clients that support WML from not being recognized by the portal.

By default, when HCL Portal cannot determine the client, the default HTML client is used, which is assigned the user agent pattern of a period followed by an asterisk \(.\*\). As a result, clients that support WML or other markup are not recognized and receive HTML markup. To prevent this behavior and send an error message instead, remove the default HTML client and user agent string. The portal sends the following message to unrecognized clients: `Error 202: Your client could not be determined.`

