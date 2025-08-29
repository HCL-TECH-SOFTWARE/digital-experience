CONTAINER_COMMAND ?= 'docker'

run-in-container:
	${CONTAINER_COMMAND} run -it --rm -p 8000:8000 -v $$(pwd):/docs quintana-docker.artifactory.cwp.pnp-hcl.com/dxubi:v1.0.0_8.7-1031 /bin/bash -c "sh /docs/jenkins/helpers/02-serve-doc.sh"

run-in-faster-container:
	${CONTAINER_COMMAND} run -it --rm -p 8000:8000 -v $$(pwd):/docs python:3.10-alpine /bin/sh -c "apk add git && git config --global --add safe.directory /docs && cd /docs && pip3 install -r ./requirements.txt && mkdocs serve -a 0.0.0.0:8000 --dirtyreload"