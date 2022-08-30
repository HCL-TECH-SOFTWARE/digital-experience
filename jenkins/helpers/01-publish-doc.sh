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
microdnf install -y --nodocs git zlib-devel make gcc openssl-devel bzip2-devel libffi-devel zlib-devel

# Build python
mkdir -p /opt/python
cd /opt/python
wget https://www.python.org/ftp/python/3.10.5/Python-3.10.5.tgz
tar xzf Python-3.10.5.tgz 
chmod -R u+rxw Python-3.10.5
cd Python-3.10.5
chmod +x ./configure
./configure --with-system-ffi --with-computed-gotos --enable-loadable-sqlite-extensions 
make -j 2
make install

cd ~

# Install mkdocs
pip3 install mkdocs-material mike mkdocs-awesome-pages-plugin mkdocs-git-revision-date-localized-plugin mkdocs-minify-plugin

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
