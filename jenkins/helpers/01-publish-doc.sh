#!/bin/bash
# ********************************************************************
# * Licensed Materials - Property of HCL                             *
# *                                                                  *
# * Copyright HCL Technologies Ltd. 2022. All Rights Reserved.       *
# *                                                                  *
# * Note to US Government Users Restricted Rights:                   *
# *                                                                  *
# * Use, duplication or disclosure restricted by GSA ADP Schedule    *
# ********************************************************************

# Install dependencies
microdnf install -y --nodocs git python3

# Install mkdocs
pip3 install mkdocs-material==8.2.11 mike mkdocs-awesome-pages-plugin mkdocs-git-revision-date-localized-plugin mkdocs-minify-plugin

# Chmod private key for Git Access
chmod -R 600 /root/.ssh/id_rsa

# Add Git hosts for SSH
ssh-keyscan git.cwp.pnp-hcl.com >> /root/.ssh/known_hosts

# Perform clone of target repository
git clone --depth 1 --branch gh-pages git@git.cwp.pnp-hcl.com:CWPdoc/dx-mkdocs.git 
cd dx-mkdocs
git fetch origin main
git switch -c main FETCH_HEAD

# Perform GH pages deploy
git config --global user.name hcl-digital-experience
git config --global user.email notarealemail@hcl.dx
mike set-default latest
mike deploy -u in-progress latest --push