# Premium Tasks

If you are a **single developer** and you use NxDB in your **side project**, you can get free 2 years access to the [NxDB Premium](https://nxdb.khulnasoft.com/premium) package by solving one Task of this list. Before you start working on that task, please make an issue where you tell about the estimated time to finish the task.


## Open Tasks (This list will be regularly updated with new Tasks)

- Add server-side-rendering to the angular example, this was disabled when upgrading from angular v16 to v17: https://github.com/nxpkg/nxdb/pull/5800
- Update eslint to the latest version [#6115](https://github.com/nxpkg/nxdb/pull/6115)
- [#5589](https://github.com/nxpkg/nxdb/issues/5589) Add electric-sql to the [client-side-databases](https://github.com/nxpkg/client-side-databases) project to measure the performance metrics. For that, create an angular subproject like the already existing ones and then implement the logic interface.

## Tasks already in progress (do no work on these!)

- [#3935](https://github.com/nxpkg/nxdb/pull/3935) Fix [this bug](https://github.com/mafintosh/is-my-json-valid/pull/192) in the `is-my-json-valid` library, AND enable the unit tests for the plugin `nxdb/plugins/validate-is-my-json-valid`

## Solved Tasks

- Add a [local search](https://github.com/cmfcmf/docusaurus-search-local) plugin to the docusaurus docs. The search-bar must only appear on the documentation pages, not on the landingpage https://github.com/nxpkg/nxdb/pull/5429https://github.com/nxpkg/nxdb/pull/5429
- Fix the flaky tests for the "example-supabase" CI task. This randomly fails, it should be fixed either by analyzing+fixing the current problem or updating to the newest supabase version. https://github.com/nxpkg/nxdb/pull/5469
- UPDATE node.js in the `.nvmrc` file to version 22 and fix all CI issues that come with that. [#6231](https://github.com/nxpkg/nxdb/pull/6231)
