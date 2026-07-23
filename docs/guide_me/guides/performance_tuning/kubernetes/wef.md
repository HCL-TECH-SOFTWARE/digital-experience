# Web Experience Factory

## Tuning via the Integrated Solutions Console

The base Portal High Volume Sites tunings were used to achieve optimal WAB performance.

In addition, the web container thread pool minimum and maximum was set to `60`.

## Setting the thread pool values

To set the thread pool values through the WebSphere Integrated Solutions Console (WAS Console), refer to the following steps

1. Log in to the WAS Console.

2. Go to **Servers** > **Application servers > WebSphere Portal** > **Thread pools** > **WebContainer**.

3. In the **Configuration** tab, enter values for the following required fields:

    - **Name**: Enter the name of the server.
    - **Minimum Size**: Enter the minimum amount of threads.
    - **Maximum Size**: Enter the maximum amount of threads.
    - **Thread inactivity timeout**: Enter the inactivity timeout duration.

4. Click **Apply**.
