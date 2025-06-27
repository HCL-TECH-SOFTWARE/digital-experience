# How to Install IBM SDS 6.4.0.27 LDAP Client Tools, on Linux

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

It's very common for HCL Digital Experience (DX) to perform searches and even modifications on `LDAP` servers. This article describes how to install `IBM SDS Client tools` version 6.4.0.27 (June/2023).

IBM's `LDAP`, known as `Security Directory Server (SDS)` (formerly `Tivoli Directory Server`), is very common in `DX` environments. This article provides detailed steps to install the following `IBM SDS Client tools`:

- `idsldapadd`
- `idsldapchangepwd`
- `idsldapdelete`
- `idsldapexop`
- `idsldapmodify`
- `idsldapmodrdn`
- `idsldapsearch`
- `idsldaptrace`

!!! note "Check for Newer Version"
    Please check the product offerings; if a more recent version already exists.

## Instructions

1. [Install IBM Security Directory Server](https://www.ibm.com/docs/en/sva/11.0.0?topic=configuration-security-directory-server-installation){target="_blank"}

    !!!note
        It is suggested to first install IBM Security Directory Server. This is just needed for the tests. You can install the Client Tools without having the Server installed.  

2.  Instantiate the necessary environment variables (change them appropriately):

    ```
    SDS64="<your server's IP address>"
    PORT="389"
    DN="cn=root"
    PASSWORD="<password>"
    export SDS64 PORT DN PASSWORD
    ```
3.  Download the latest SDS64 fixes from Flexnet or IBM, and copy the files to the directory `/mnt/install/portal95/sds64/fixes`.
    For this article, version 6.4.0.27 is used, for which the following files need to be downloaded:

    * `6.4.0.27-ISS-ISDS-LinuxX64-IF0027.tar.gz`
    * `8.0.55.29-ISS-GSKIT-LinuxX64-FP0029.tar.gz`

4.  Create a temporary directory:

    ```bash
    mkdir -p /tmp/sds64/fixes
    ```

5.  Copy the SDS64 Client Packages into the directory `/tmp/sds64/fixes`:

    ```bash
    cp /mnt/install/portal95/sds64/fixes/*ISS* /tmp/sds64/fixes
    ```

6.  Unpack the downloaded files:

    ```bash
    cd /tmp/sds64/fixes
    tar xvf *ISS-ISDS-LinuxX64*
    tar xvf *ISS-GSKIT-LinuxX64*
    ```

7.  Install the ISDS license:

    ```bash
    /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/license/idsLicense -q
    ```    

8.  Verify the license status (a "0" indicates success) and install the license RPM:

    ```bash
    /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/license/idsLicense -t
    echo $?
    rpm -ivh /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-license64-6.4.0-*.x86_64.rpm
    ```

9.  Install the GSKit:

    ```bash
    rpm -ivh /tmp/sds64/fixes/*-ISS-GSKIT-LinuxX64-*/64/gsk*64*rpm
    ```

10. Install all client search programs and tools:

    ```bash
    rpm -ivh /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-cltbase64-6.4.0-*.x86_64.rpm
    rpm -ivh /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-clt64bit64-6.4.0-*.x86_64.rpm
    rpm -ivh --force /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-cltjava64-6.4.0-*.x86_64.rpm
    ```

11. Install all English, Spanish, and Portuguese language packages:

    ```bash
    rpm -ivh --force /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-msg64-es-6.4.0-*.noarch.rpm
    rpm -ivh --force /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-msg64-pt_BR-6.4.0-*.noarch.rpm
    rpm -ivh --force /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-msg64-en-6.4.0-*.x86_64.rpm
    ```

12. Create links for all binaries and libraries:

    ```bash
    /opt/ibm/ldap/V6.4/bin/idslink -i -l 64 -s base
    ```

13. Finally, perform an `LDAP` search on the `SDS64 LDAP server`:

    ```bash
    idsldapsearch -B -D $DN -w $PASSWORD -h $SDS64 -p $PORT -s sub objectclass=*
    ```
