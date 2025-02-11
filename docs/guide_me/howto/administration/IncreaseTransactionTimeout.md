# How to increase the transaction timeouts for HCL Digital Experience?

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

HCL Digital Experience is using the WebSphere Application Server runtime to handle transactions that belong to the HCL Digital Experience server. During runtime transaction related errors may occur like:

`CNTR0019E: EJB threw an unexpected (non-declared) exception during invocation of method ..... Exception data:
com.ibm.websphere.csi.CSITransactionRolledbackException: Transaction rolled back; nested exception is:
javax.transaction.TransactionRolledbackException: Transaction is ended due to timeout`

or:

`javax.transaction.RollbackException: Transaction marked for rollback by external component. Possible timeout, increase transaction timeout value and try again.`

Most of the time the errors are related to wrong transaction timeout settings.

## Instructions

Transaction Timeout Settings can be set as following:

1) Login into the IBM Integrated Solutions Console (WAS admin-console).

2) Go to  Server > Application servers > WebSphere_Portal > Container Services > Transaction service

3) Typically the transaction timeouts can be changed as following:

    Total transaction lifetime timeout default 120

    Maximum transaction timeout default 120 s

    Time is in seconds so 1200 seconds = 20 minutes

4) Click Ok > Save to master configuration and restart the Portal server

Setting either value to 0 sets the timeout to infinite i.e. no timeout

Some users will also increase Client inactivity timeout to 1200 seconds on that same screen.

They will also set wcm.transaction.timeout to 1200 here:

In the IBM Integrated Solutions Console (WAS admin-console) go to `Resources > Resource Environment > Resource Environment Providers > WCM_WCMConfigService > Custom properties`

Additional information about transaction timeout settings can also be found at URL:

[How does the transaction timeout behave when I have a lot of applications deployed that need to have different timeouts](https://www.ibm.com/mysupport/s/question/0D50z000062kegeCAA/how-does-the-transaction-timeout-behave-when-i-have-a-lot-of-applications-deployed-that-need-to-have-different-timeouts?language=en_US)
