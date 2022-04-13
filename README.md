# HCL Digital Experience Help Center

Visit the published site at [https://opensource.hcltechsw.com/digital-experience](https://opensource.hcltechsw.com/digital-experience)

## Usage

[View the documentation](https://opensource.hcltechsw.com/digital-experience/) for product features and usage information.

## Contributing

Bug reports on **product documentation** and pull requests are welcome on GitHub at https://github.com/HCL-TECH-SOFTWARE/digital-experience. This is Digital Experience product documentation site not product support platform, all bug reports and pull requests shall pertain to product documentation. Updates shall be performed only to markdown files in the `doc` directory.

### Make changes and validate the documentation locally

To perform updated document check before raising pull request, follow below steps:

- Follow the [MkDocs Installation guide](https://www.mkdocs.org/user-guide/installation/) to install [`MkDocs`](https://www.mkdocs.org/) and `pip`
- Install the plugins by running  
  `pip install mkdocs-material mkdocs-awesome-pages-plugin mkdocs-git-revision-date-localized-plugin`
- Clone the [digital-experience repository](https://github.com/HCL-TECH-SOFTWARE/digital-experience)
- Update markdown and perform [mkdocs serve](https://www.mkdocs.org/getting-started/#creating-a-new-project) to validate changes on user system
- Raise [Pull Request](https://github.com/HCL-TECH-SOFTWARE/digital-experience/pulls) post update validations

### Submitting code changes

- Follow the [previous steps](#make-changes-and-validate-the-documentation-locally) to make changes to the documentation 
- Await markdown files review, merge and a build
- Version number is increased post each build. `<MAJOR.MINOR>` versioning scheme is being followed for Volt MX documentation release

## License

The documentation is available as open source under the terms of the [Apache License 2.0](http://www.apache.org/licenses/).
