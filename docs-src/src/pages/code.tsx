import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Layout from '@theme/Layout';
import React, { useEffect } from 'react';

export default function Home() {
    const { siteConfig } = useDocusaurusContext();

    const isBrowser = useIsBrowser();
    useEffect(() => { if (isBrowser) { window.trigger('goto_code', 0.40); } });


    return (
        <Layout
            title={`Code - ${siteConfig.title}`}
            description="NxDB Source Code"
        >
            <main>
                <div className='redirectBox' style={{ textAlign: 'center' }}>
                    <a href="/">
                        <div className="logo">
                            <img src="/files/logo/logo_text.svg" alt="NxDB" width={160} />
                        </div>
                    </a>
                    <h1>NxDB Code</h1>
                    <p>
                        <b>You will be redirected in a few seconds.</b>
                    </p>
                    <p>
                        <a href="https://github.com/nxpkg/nxdb">Click here to open Code</a>
                    </p>
                    <meta httpEquiv="Refresh" content="1; url=https://github.com/nxpkg/nxdb" />
                </div>
            </main>
        </Layout >
    );
}
