# Integrating Huddo Boards with HCL Digital Experience

Huddo Boards is a team collaboration tool from Huddo that can make teams more productive.  Using the capabilities, users can view an activity as a board, giving them the option to drag and drop their Tasks and Entries and filter the content by person, priority, color, and more. For more information on the services and capabilities, see [Huddo Boards](https://www.huddo.com/boards).
<!--
```mermaid

flowchart TB
  node_1(["Start"])
  node_2["Check prerequisites"]
  node_3["Obtain license key"]
  node_4["Set up WebSphere OAuth"]
  node_5[/"What kind of environment are you using?"/]
  node_6["Deploy in Kubernetes"]
  node_7["Deploy in Docker"]
  node_8[/"Is Huddo Boards hosted on a different domain from HCL DX?"/]
  node_9["Use Huddo Boards API"]
  node_11["Set up SSO"]
  node_12["Install Huddo Boards portlet"]
  node_14[/"Do you want to use API?"/]
  node_1 --> node_2
  node_2 --> node_3
  node_4 --> node_5
  node_5 --"Kubernetes"--> node_6
  node_5 --"Docker"--> node_7
  node_6 --> node_8
  node_7 --> node_8
  node_8 --"Yes"--> node_11
  node_8 --"No"--> node_12
  node_11 --> node_12
  node_3 --> node_14
  node_14 --"No"--> node_4
  node_14 --"Yes"--> node_9
  

```
-->
-   **[Installing Huddo Boards in HCL DX](Install_huddo_boards.md)**  
Install Huddo Boards in HCL Digital Experience.
-   **[Configuring Huddo Boards in HCL DX](Configuration_huddo_boards.md)**  
Configure Huddo Boards in HCL Digital Experience.
-   **[Limitations](limitations.md)**  
See the limitations when integrating Huddo Boards with HCL Digital Experience.