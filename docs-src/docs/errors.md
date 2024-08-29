---
title: Error Messages
slug: errors.html
---


# NxDB Error Messages

When NxDB has an error, an `RxError` object is thrown instead of a normal JavaScript `Error`. This `RxError` contains additional properties such as a `code` field and `parameters`. By default the full human readable error messages are not included into the NxDB build. This is because error messages have a high entropy and cannot be compressed well. Therefore only an error message with the correct error-code and parameters is thrown but without the full text.
When you enable the [DevMode Plugin](./dev-mode.md) the full error messages are added to the `RxError`. This should only be done in development, not in production builds to keep a small build size.


## All NxDB error messages

import { ErrorMessages } from '@site/src/components/error-messages';

<ErrorMessages></ErrorMessages>
