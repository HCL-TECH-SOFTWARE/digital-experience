<!--
# IQ cross-version support

IQ and HCL Digital Experience (DX) Core are delivered through separate Helm charts and can be upgraded independently. To support this deployment model, IQ supports DX Core versions within a two cumulative fix (CF) release window.

This support applies to both DX Core and DX Compose (WebEngine) deployments.

## Supported versions

For a given release, an IQ version supports the current DX Core release and the two preceding DX Core releases. Similarly, a DX Core version supports the current IQ release and the two preceding IQ releases.

For example, the supported combinations for CF238 are:

| IQ version | Supported DX Core version |
| :--------- | :------------------------ |
| CF236 | CF238 |
| CF237 | CF238 |
| CF238 | CF236 |
| CF238 | CF237 |

For the following release, CF239, the supported combinations are:

| IQ version | Supported DX Core version |
| :--------- | :------------------------ |
| CF237 | CF239 |
| CF238 | CF239 |
| CF239 | CF237 |
| CF239 | CF238 |

!!! important
    Keep the IQ and DX Core versions within two CF releases of each other. Combinations outside this $n-2$ support window are not supported.

## How compatibility is managed

The DX Model Context Protocol (MCP) Server detects the underlying DX Core version and uses a tools matrix to expose only the MCP tools supported by that version. This enables an IQ deployment to adapt its available operations to the connected DX Core version.

The IQ user interface also resolves web component interface-property changes across supported versions. This supports adding, renaming, and removing properties when the UI and DX Core versions differ.

## Known differences

Minor MCP Server and UI changes were introduced between CF236 and CF238. For supported combinations in this range, the behavior of the IQ sparkle button can differ slightly between versions.

Release-specific limitations, when applicable, are documented with the corresponding release.

## Troubleshooting version compatibility

When investigating an IQ issue, first identify both the IQ and DX Core versions in the deployment. Then review the MCP Server logs to confirm the DX Core version detected by the server.

If the versions are outside the supported window, update IQ, DX Core, or both components until the versions are within two CF releases. For general diagnostic steps, refer to [Troubleshooting IQ](troubleshooting.md).
-->
