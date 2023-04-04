CONTAINER_COMMAND ?= 'docker'

run-in-container:
	${CONTAINER_COMMAND} run -it --rm -p 8000:8000 -v $$(pwd):/docs quintana-docker.artifactory.cwp.pnp-hcl.com/dxubi:v1.0.0_8.7-1031 /bin/bash -c "sh /docs/jenkins/helpers/02-serve-doc.sh"
