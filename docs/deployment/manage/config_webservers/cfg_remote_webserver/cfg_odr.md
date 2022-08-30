# Configuring your OnDemand Router

Configure the communication between HCL Portal and your OnDemand Router \(ODR\).

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Go to **Servers** \> **Server Types** \> **Web server**.

3.  Select your ODR.

4.  Expand **On Demand Router Properties** in the **On Demand Router Settings** section.

5.  Click **Custom Properties** in the **Additional Properties** section.

6.  Add a new custom property with the following information:

    -   **Name**

        cache.query.string

    -   **Value**

        true

7.  Save your changes.

8.  Restart your ODR server.



