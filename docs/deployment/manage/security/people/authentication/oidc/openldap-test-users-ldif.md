---
id: openldap-test-users-ldif
title: Sample OpenLDAP LDIF
tags: [native kube, keycloak, openldap, ldap, ldif]
---

# Sample OpenLDAP LDIF

Use this sample LDIF file to prepare users for an OpenLDAP. Add the following contents to a file `test_users.ldif` on your respective machine:

```ldif
dn: uid=jjones1,ou=users,dc=dx,dc=com
objectClass: inetOrgPerson
objectclass: top
objectclass: person
objectclass: organizationalPerson
cn: jjones1
sn: jjones1
uid: jjones1
userPassword: password
givenName: Joe Jones1
mail: jjones1@dx.com
preferredLanguage: en_us
title: Practicioner
telephoneNumber: 111111111

dn: uid=jjones2,ou=users,dc=dx,dc=com
objectClass: inetOrgPerson
objectclass: top
objectclass: person
objectclass: organizationalPerson
cn: jjones2
sn: jjones2
uid: jjones2
userPassword: password
givenName: Joe Jones2
mail: jjones2@dx.com
preferredLanguage: en_us
title: Practicioner
telephoneNumber: 111111111

dn: uid=jjones3,ou=users,dc=dx,dc=com
objectClass: inetOrgPerson
objectclass: top
objectclass: person
objectclass: organizationalPerson
cn: jjones3
sn: jjones3
uid: jjones3
userPassword: password
givenName: Joe Jones3
mail: jjones3@dx.com
preferredLanguage: en_us
title: Practicioner
telephoneNumber: 111111111

dn: uid=jjones4,ou=users,dc=dx,dc=com
objectClass: inetOrgPerson
objectclass: top
objectclass: person
objectclass: organizationalPerson
cn: jjones4
sn: jjones4
uid: jjones4
userPassword: password
givenName: Joe Jones4
mail: jjones4@dx.com
preferredLanguage: en_us
title: Practicioner
telephoneNumber: 111111111

dn: uid=jjones5,ou=users,dc=dx,dc=com
objectClass: inetOrgPerson
objectclass: top
objectclass: person
objectclass: organizationalPerson
cn: jjones5
sn: jjones5
uid: jjones5
userPassword: password
givenName: Joe Jones5
mail: jjones5@dx.com
preferredLanguage: en_us
title: Practicioner
telephoneNumber: 111111111

dn: ou=groups,ou=users,dc=dx,dc=com
objectClass: organizationalUnit
ou:groups

dn: cn=useradmingroup,ou=groups,ou=users,dc=dx,dc=com
objectclass: groupOfUniqueNames
cn: useradmingroup
uniquemember: uid=jjones1,ou=users,dc=dx,dc=com

dn: ou=customers,dc=dx,dc=com
objectClass: organizationalUnit
ou:customers

dn: uid=ccustomer1,ou=customers,dc=dx,dc=com
objectClass: inetOrgPerson
objectclass: top
objectclass: person
objectclass: organizationalPerson
cn: ccustomer1
sn: ccustomer1
uid: ccustomer1
userPassword: password
givenName: Carla Customer1
mail: ccustomer1@dx.com
preferredLanguage: en_us
title: Customer/Client
telephoneNumber: 222222222

dn: uid=ccustomer2,ou=customers,dc=dx,dc=com
objectClass: inetOrgPerson
objectclass: top
objectclass: person
objectclass: organizationalPerson
cn: ccustomer2
sn: ccustomer2
uid: ccustomer2
userPassword: password
givenName: Carla Customer2
mail: ccustomer2@dx.com
preferredLanguage: en_us
title: Customer/Client
telephoneNumber: 222222222

dn: uid=ccustomer3,ou=customers,dc=dx,dc=com
objectClass: inetOrgPerson
objectclass: top
objectclass: person
objectclass: organizationalPerson
cn: ccustomer3
sn: ccustomer3
uid: ccustomer3
userPassword: password
givenName: Carla Customer3
mail: ccustomer3@dx.com
preferredLanguage: en_us
title: Customer/Client
telephoneNumber: 222222222

dn: uid=ccustomer4,ou=customers,dc=dx,dc=com
objectClass: inetOrgPerson
objectclass: top
objectclass: person
objectclass: organizationalPerson
cn: ccustomer4
sn: ccustomer4
uid: ccustomer4
userPassword: password
givenName: Carla Customer4
mail: ccustomer4@dx.com
preferredLanguage: en_us
title: Customer/Client
telephoneNumber: 222222222

dn: uid=ccustomer5,ou=customers,dc=dx,dc=com
objectClass: inetOrgPerson
objectclass: top
objectclass: person
objectclass: organizationalPerson
cn: ccustomer5
sn: ccustomer5
uid: ccustomer5
userPassword: password
givenName: Carla Customer5
mail: ccustomer5@dx.com
preferredLanguage: en_us
title: Customer/Client
telephoneNumber: 222222222

dn: ou=groups,ou=customers,dc=dx,dc=com
objectClass: organizationalUnit
ou:groups

dn: cn=customeradmingroup,ou=groups,ou=customers,dc=dx,dc=com
objectclass: groupOfUniqueNames
cn: customeradmingroup
uniquemember: uid=ccustomer1,ou=customers,dc=dx,dc=com

dn: ou=guests,dc=dx,dc=com
objectClass: organizationalUnit
ou:guests

dn: uid=gguest1,ou=guests,dc=dx,dc=com
objectClass: inetOrgPerson
objectclass: top
objectclass: person
objectclass: organizationalPerson
cn: gguest1
sn: gguest1
uid: gguest1
userPassword: password
givenName: Gary Guest1
mail: gguest1@dx.com
preferredLanguage: en_us
title: Guest User
telephoneNumber: 333333333

dn: uid=gguest2,ou=guests,dc=dx,dc=com
objectClass: inetOrgPerson
objectclass: top
objectclass: person
objectclass: organizationalPerson
cn: gguest2
sn: gguest2
uid: gguest2
userPassword: password
givenName: Gary Guest2
mail: gguest2@dx.com
preferredLanguage: en_us
title: Guest User
telephoneNumber: 333333333

dn: uid=gguest3,ou=guests,dc=dx,dc=com
objectClass: inetOrgPerson
objectclass: top
objectclass: person
objectclass: organizationalPerson
cn: gguest3
sn: gguest3
uid: gguest3
userPassword: password
givenName: Gary Guest3
mail: gguest3@dx.com
preferredLanguage: en_us
title: Guest User
telephoneNumber: 333333333

dn: uid=gguest4,ou=guests,dc=dx,dc=com
objectClass: inetOrgPerson
objectclass: top
objectclass: person
objectclass: organizationalPerson
cn: gguest4
sn: gguest4
uid: gguest4
userPassword: password
givenName: Gary Guest4
mail: gguest4@dx.com
preferredLanguage: en_us
title: Guest User
telephoneNumber: 333333333

dn: uid=gguest5,ou=guests,dc=dx,dc=com
objectClass: inetOrgPerson
objectclass: top
objectclass: person
objectclass: organizationalPerson
cn: gguest5
sn: gguest5
uid: gguest5
userPassword: password
givenName: Gary Guest5
mail: gguest5@dx.com
preferredLanguage: en_us
title: Guest User
telephoneNumber: 333333333

dn: ou=groups,ou=guests,dc=dx,dc=com
objectClass: organizationalUnit
ou:groups

dn: cn=guestadmingroup,ou=groups,ou=guests,dc=dx,dc=com
objectclass: groupOfUniqueNames
cn: guestadmingroup
uniquemember: uid=gguest1,ou=guests,dc=dx,dc=com
```

This will set up users in three organizational units:

- `jjones1` to `jjones5` (password `password`) in ou `users`
- `ccustomer1` to `ccustomer5` (password `password`) in ou `customers`
- `gguest1` to `gguest5` (password `password`) in ou `guests`

It will also add the user `jjones1`, `ccustomer1` and `gguest1` to their respective administrative groups `useradmingroup`, `customeradmingroup` and `guestadmingroup`.
