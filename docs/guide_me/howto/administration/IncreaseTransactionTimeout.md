# How to increase the duration of transaction timeouts in HCL DX

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

HCL Digital Experience (DX) uses the IBM WebSphere Application Server runtime to handle transactions that belong to the HCL DX server. During runtime, transaction-related errors may occur due to incorrect transaction timeout settings. For example:

- An unexpected (non-declared) exception

    ```log
    CNTR0019E: EJB threw an unexpected (non-declared) exception during invocation of method ..... Exception data:
    com.ibm.websphere.csi.CSITransactionRolledbackException: Transaction rolled back; nested exception is:
    javax.transaction.TransactionRolledbackException: Transaction is ended due to timeout
    ```

- A rollback exception

    ```log
    javax.transaction.RollbackException: Transaction marked for rollback by external component.  
    Possible timeout, increase transaction timeout value and try again.
    ```

## Instructions

Refer to the following steps to configure your transaction timeout:

1. Log in to the **WebSphere Integrated Solutions Console** as an administrator.
2. Navigate to  **Servers > Server Types > WebSphere application servers > WebSphere_Portal > Container Services > Transaction service**.
3. Set the following properties (in seconds):

    - Total transaction lifetime timeout: 120
    - Maximum transaction timeout: 120

    Setting either value to 0 sets the timeout to infinite (no timeout).

4. Click **OK**.
5. Click **Save** at the top of the console messages.
6. Restart your HCL DX server.

If you want to increase the Client inactivity timeout (for example, to 1200 seconds), you also need to set `wcm.transaction.timeout` to 1200:

1. Log in to the **WebSphere Integrated Solutions Console** as an administrator.
2. Navigate to **Resources > Resource Environment > Resource Environment Providers > WCM_WCMConfigService > Custom properties**.
3. Create or modify the **wcm.transaction.timeout** property.

    If the property does not exist:

    1. Click **New...**.
    2. Under **Name**, enter **wcm.transaction.timeout**.
    3. Under **Value**, enter Client inactivity timeout you set (for example, 1200).
    4. Click **Apply**.

    If the property already exists:

    1. Locate and click **wcm.transaction.timeout**.
    2. Under **Value**, enter Client inactivity timeout you set (for example, 1200).
    3. Click **Apply**.

4. Click **Save** at the top of the console messages.

For more information refer to
[How does the transaction timeout behave when I have a lot of applications deployed that need to have different timeouts](https://www.ibm.com/mysupport/s/question/0D50z000062kegeCAA/how-does-the-transaction-timeout-behave-when-i-have-a-lot-of-applications-deployed-that-need-to-have-different-timeouts?language=en_US){target="_blank"}.
