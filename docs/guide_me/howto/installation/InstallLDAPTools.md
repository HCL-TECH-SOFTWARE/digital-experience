# Installing IBM SDS 6.4.0.27 Ldap Client Tools, on Linux

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

It's very common for HCL Digital Experience (DX) to make searches, and even modifications, on LDAP Servers.

An IBM LDAP, called Security Directory Server (SDS), formerly known as "Tivoli Directory Server" is so common among DX environments. This article provide detailed steps to install the following IBM SDS Client tools:

- idsldapadd
- idsldapchangepwd
- idsldapdelete
- idsldapexop
- idsldapmodify
- idsldapmodrdn
- idsldapsearch
- idsldaptrace

!!!note
    This article describe the installation of IBM SDS Client tools version 6.4.0.27 (June/2023).
    Please check the product offerings, if a more recent version already exists.

## Instructions

1. [Install IBM Security Directory Server](https://www.ibm.com/docs/en/sva/11.0.0?topic=configuration-security-directory-server-installation){target="_blank"}

    !!!note
        It is suggested to first install IBM Security Directory Server. This is just needed for the tests. You can install the Client Tools without having the Server installed.  

2. Instantiate the needed environment variables (change them appropriately)

    ```text
    SDS64="<your server's IP address>"
    PORT="389"
    DN="cn=root" 
    PASSWORD="<password>"
    export SDS64 PORT DN PASSWORD
    ```

3. Download the last SDS64 fixes at Flexnet or IBM, and copy the files to directory `/mnt/install/portal95/sds64/fixes"`
    For this article version 6.4.0.27 is used for which the following files need to be downloaded:

    - 6.4.0.27-ISS-ISDS-LinuxX64-IF0027.tar.gz
    - 8.0.55.29-ISS-GSKIT-LinuxX64-FP0029.tar.gz

4. Create a temp directory

    ```text
    mkdir -p /tmp/sds64/fixes
    ```

5. Copy the SDS64 Client Packages into directory `/tmp/sds64/fixes`

    ```text
    cp /mnt/install/portal95/sds64/fixes/*ISS* /tmp/sds64/fixes
    ```

6. Unpack those files

    ```text
    cd /tmp/sds64/fixes
    tar xvf *ISS-ISDS-LinuxX64*
    tar xvf *ISS-GSKIT-LinuxX64*
    ```

7. Install ISDS license

    ```text
    /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/license/idsLicense -q
    ```

8. Verify it with: A "0" should be printed, and install the license

    ```text
    /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/license/idsLicense -t
    echo $?
    rpm -ivh /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-license64-6.4.0-*.x86_64.rpm
    ```

9. Install GSKit

    ```text
    rpm -ivh /tmp/sds64/fixes/*-ISS-GSKIT-LinuxX64-*/64/gsk*64*rpm
    ```

10. Install all client search programs and tools

    ```text
    rpm -ivh /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-cltbase64-6.4.0-*.x86_64.rpm
    rpm -ivh /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-clt64bit64-6.4.0-*.x86_64.rpm
    rpm -ivh --force /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-cltjava64-6.4.0-*.x86_64.rpm
    ```

11. Install all English, Spanish and Portuguese language packages

    ```text
    rpm -ivh --force /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-msg64-es-6.4.0-*.noarch.rpm
    rpm -ivh --force /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-msg64-pt_BR-6.4.0-*.noarch.rpm
    rpm -ivh --force /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-msg64-en-6.4.0-*.x86_64.rpm
    ```

12. Create all binaries and libraries links

    ```text
    /opt/ibm/ldap/V6.4/bin/idslink -i -l 64 -s base
    ```

13. Finally, make an ldap search on the SDS64 ldap server

    ```text
    idsldapsearch -B -D $DN -w $PASSWORD -h $SDS64 -p $PORT -s sub objectclass=*
    ```
