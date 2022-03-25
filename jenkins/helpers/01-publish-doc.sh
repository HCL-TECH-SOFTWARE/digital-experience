#!/bin/bash

# Install dependencies
microdnf install -y --nodocs git python3

# Install mkdocs
pip3 install mkdocs-material mkdocs-awesome-pages-plugin mkdocs-git-revision-date-localized-plugin

# Chmod private key for Git Access
chmod -R 600 /root/.ssh/id_rsa

# Add Git hosts for SSH
ssh-keyscan git.cwp.pnp-hcl.com >> /root/.ssh/known_hosts

# Perform clone of target repository
git clone git@git.cwp.pnp-hcl.com:CWPdoc/dx-mkdocs.git

# Perform GH pages deploy
cd dx-mkdocs
mkdocs gh-deploy --force