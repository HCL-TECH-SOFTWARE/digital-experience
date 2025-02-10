# Installing IBM SDS 6.4.0.27 Ldap Client Tools, on Linux

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

It's very common for DX Portal to make searches, and even modifications, on LDAP Servers.

An IBM LDAP, called Security Directory Server (SDS), formerly known as "Tivoli Directory Server" is so common among DX Portal environments, we will use it here in our example of how to install the Client tools.

This way, you will have these tools available:

```text
idsldapadd
idsldapchangepwd
idsldapdelete
idsldapexop
idsldapmodify
idsldapmodrdn
idsldapsearch
idsldaptrace
```

As of June/2023, we will install the last version available: 6.4.0.27.
See, Flexnet/IBM if you have a more recent version available.

## Instructions

**For the test, we will use IBM Ldap Server 6.4.0.27, installed on a test server.**

**This is just needed for the test: you can install the Client Tools without having the Server installed.**

**Instantiate the needed environment variables (change them appropriately):**
```text
SDS64="<your server's IP address>"
PORT="389"
DN="cn=root" 
PASSWORD="<password>"
export SDS64 PORT DN PASSWORD
```

**Download the last SDS64 fixes at Flexnet or IBM, and copy them to "/mnt/install/portal95/sds64/fixes":**

ISS-ISDS-LinuxX64

ISS-GSKIT-LinuxX64

**For this article, we will use the version 6.4.0.27, and use these files:**

6.4.0.27-ISS-ISDS-LinuxX64-IF0027.tar.gz

8.0.55.29-ISS-GSKIT-LinuxX64-FP0029.tar.gz

**Create a temp directory**

mkdir -p /tmp/sds64/fixes

**Copy the SDS64 Client Packages into this directory:**

cp /mnt/install/portal95/sds64/fixes/*ISS* /tmp/sds64/fixes

**Unpack those files:**

cd /tmp/sds64/fixes

tar xvf *ISS-ISDS-LinuxX64*

tar xvf *ISS-GSKIT-LinuxX64*

**Install ISDS license:**

/tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/license/idsLicense -q

**Verify it with: A "0" should be printed, and install the license:**

/tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/license/idsLicense -t

echo $?

rpm -ivh /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-license64-6.4.0-*.x86_64.rpm

**Install GSKit:**

rpm -ivh /tmp/sds64/fixes/*-ISS-GSKIT-LinuxX64-*/64/gsk*64*rpm

**Install all client search programs and tools:**

rpm -ivh         /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-cltbase64-6.4.0-*.x86_64.rpm

rpm -ivh         /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-clt64bit64-6.4.0-*.x86_64.rpm

rpm -ivh --force /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-cltjava64-6.4.0-*.x86_64.rpm

**Install all English, Spanish and Portuguese language packages:**

rpm -ivh --force /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-msg64-es-6.4.0-*.noarch.rpm

rpm -ivh --force /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-msg64-pt_BR-6.4.0-*.noarch.rpm

rpm -ivh --force /tmp/sds64/fixes/*-ISS-ISDS-LinuxX64-*/images/idsldap-msg64-en-6.4.0-*.x86_64.rpm

**Create all binaries and libraries links:**

/opt/ibm/ldap/V6.4/bin/idslink -i -l 64 -s base

**Finally, make an ldap search on the SDS64 ldap server:**

idsldapsearch -B -D $DN -w $PASSWORD -h $SDS64 -p $PORT -s sub objectclass=*