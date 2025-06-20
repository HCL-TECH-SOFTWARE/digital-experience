# How to decode long Portal URLs

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

Portal URLs become long and unreadable because they contain a `base64`- and `gzip`-encoded XML string. For example:

```url
http://<server>:<port>/wps/portal/home/shopapply/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zizSzcDTzcDYx8DMzdHA0cDV2MTM2cLA1M_A31wwkpiAJKG-AAjgZA_VFgJThMMPA1gSrAY0ZBboRBpqOiIgBSYigH/dz/d5/L2dBISEvZ0FBIS9nQSEh/
```

This string captures the dynamic state of the page and all its portlets, enabling the browser's back button to restore the exact view. This document provides steps to decode these Portal URLs in the HCL Digital Experience (DX) site.

## Instructions

Refer to the following steps to decode a Portal URL:

1. Use the following syntax to construct a URL that passes your encoded Portal URL as a parameter to a `mycontenthandler` query and paste it in your browser.

    ```url
    http://<server>:<port>/wps/mycontenthandler?uri=state:http://<server>:<port>/<URL to be decoded>
    ```

    When you access this URL, an XML output appears, displaying the decoded information:

    ```xml
    <root>
    <state type="navigational">  
        <selection selection-node="Z6_68G0HG02L07FA0A1D256B904O1">  
        <mapping src="Z6_68G0HG02L07FA0A1D256B904O1" dst="Z6_000000000000000000000000A0"/>
        </selection>
        <expansions>
        <node id="Z6_68G0HG02L07FA0A1D256B900M4"/>
        <node id="Z6_000000000000000000000000A0"/>
        </expansions>
    </state>
    </root>
    ```

2. From the resulting XML output, identify the specific Portal page by looking for its object ID. This XML output is formatted like an XMLAccess result, and the object ID (for example, `Z6_68G0HG02L07FA0A1D256B904O1`) is referred to as the `selection-node`.
