#!/bin/bash
# ********************************************************************
# * Licensed Materials - Property of HCL                             *
# *                                                                  *
# * Copyright HCL Technologies Ltd. 2023. All Rights Reserved.       *
# *                                                                  *
# * Note to US Government Users Restricted Rights:                   *
# *                                                                  *
# * Use, duplication or disclosure restricted by GSA ADP Schedule    *
# ********************************************************************

# Set default values

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
pip3 install mkdocs-material mike mkdocs-awesome-pages-plugin mkdocs-git-revision-date-localized-plugin mkdocs-minify-plugin mkdocs-macros-plugin

cd /docs

mkdocs serve -a 0.0.0.0:8000 --dirtyreload
