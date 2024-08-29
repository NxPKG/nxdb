import React from 'react';
import {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import NotFoundContent from '@theme/NotFound/Content';
export default function Index() {
  const title = translate({
    id: 'theme.NotFound.title',
    message: 'NxDB - 404 Page Not Found',
  });
  return (
    <>
      <PageMetadata title={title} />
      <Layout
        title='NxDB - 404 Page Not Found'
      >
        <NotFoundContent />
      </Layout>
    </>
  );
}
