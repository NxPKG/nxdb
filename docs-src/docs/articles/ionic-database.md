---
title: Ionic Storage - NxDB as database for hybrid apps
slug: ionic-database.html
---

# Ionic Storage - NxDB as database for hybrid apps

In the fast-paced world of mobile app development, **hybrid applications** have emerged as a versatile solution, offering the best of both worlds - the web and native app experiences. One key challenge these apps face is efficiently storing and querying data on the **client's device**. Enter [NxDB](https://nxdb.nxpkg.github.io/), a powerful client-side database tailored for ionic hybrid applications. In this article, we'll explore how NxDB addresses the requirements of storing and querying data in ionic apps, and why it stands out as a preferred choice.


<center>
    <a href="https://nxdb.nxpkg.github.io/">
        <img src="../files/icons/ionic.svg" alt="Ionic Database Storage" width="120" />
    </a>
</center>

## What are Ionic Hybrid Apps?

Ionic (aka Ionic 2 ) hybrid apps combine the strengths of web technologies (HTML, CSS, JavaScript) with native app development to deliver cross-platform applications. They are built using web technologies and then wrapped in a native container to be deployed on various platforms like iOS, Android, and the web. These apps provide a consistent user experience across devices while benefiting from the efficiency and familiarity of web development.

## Storing and Querying Data in an Ionic App

Storing and querying data is a fundamental aspect of any application, including hybrid apps. These apps often need to operate offline, store user-generated content, and provide responsive user interfaces. Therefore, having a reliable and efficient way to manage data on the client's device is crucial.

## Introducing NxDB as a Client-Side Database for Ionic Apps
NxDB steps in as a powerful solution to address the data management needs of ionic hybrid apps. It's a NoSQL client-side database that offers exceptional performance and features tailored to the unique requirements of client-side applications. Let's delve into the key features of NxDB that make it a great fit for these apps.

### Getting Started with NxDB


<center>
    <a href="https://nxdb.nxpkg.github.io/">
        <img src="../files/logo/nxdb_javascript_database.svg" alt="JavaScript Ionic Database Storage" width="220" />
    </a>
</center>

### What is NxDB?

At its core, [NxDB](https://nxdb.nxpkg.github.io/) is a **NoSQL** database that operates with a [local-first](../offline-first.md) approach. This means that your app's data is stored and processed primarily on the client's device, reducing the dependency on constant network connectivity. By doing so, NxDB ensures your app remains responsive and functional, even when offline.

### Local-First Approach
The [local-first](../offline-first.md) approach adopted by NxDB is a game-changer for hybrid applications. Storing data locally allows your app to function seamlessly without an internet connection, providing users with uninterrupted access to their data. When connectivity is restored, NxDB handles the synchronization of data, ensuring that any changes made offline are appropriately propagated.

### Observable Queries
One of NxDB's standout features is its implementation of observable queries. This concept allows your app's user interface to be dynamically updated in real time as data changes within the database. NxDB's observables create a bridge between your database and user interface, keeping them in sync effortlessly.

<p align="center">
  <img src="../files/animations/realtime.gif" alt="realtime ui updates" width="700" />
</p>

### NoSQL Query Engine
NxDB's NoSQL query engine empowers you to perform powerful queries on your app's data, without the constraints imposed by traditional relational databases. This flexibility is particularly valuable when dealing with unstructured or semi-structured data. With the NoSQL query engine, you can retrieve, filter, and manipulate data according to your app's unique requirements.

```ts
const foundDocuments = await myDatabase.todos.find({
    selector: {
        done: {
            $eq: false
        }
    }
}).exec();
```


### Great Observe Performance with EventReduce
NxDB introduces a concept called [EventReduce](https://github.com/nxpkg/event-reduce), which optimizes the observation process. Instead of overwhelming your app's UI with every data change, EventReduce filters and batches these changes to provide a smooth and efficient experience. This leads to enhanced app performance, lower resource usage, and ultimately, happier users.


## Why NoSQL is a Better Fit for Client-Side Applications Compared to relational databases like SQLite
When it comes to choosing the right database solution for your client-side applications, NoSQL NxDB presents compelling advantages over traditional options like SQLite. Let's delve into the key reasons why NoSQL NxDB is a superior fit for your ionic hybrid app development.

### Easier Document-Based Replication
NoSQL databases, like NxDB, inherently embrace a document-based approach to data storage. This design choice simplifies data [replication](../replication.md) between clients and servers. With documents representing discrete units of data, you can easily synchronize individual pieces of information without the complexity that can arise when dealing with rows and tables in a relational database like SQLite. This document-centric replication model streamlines the synchronization process and ensures that your app's data remains consistent across devices.

### Offline Capable
One of the defining features of client-side applications is the ability to function even when offline. NoSQL NxDB excels in this area by supporting a local-first approach. Data is cached on the client's device, enabling the app to remain fully functional even without an internet connection. As connectivity is restored, NxDB handles data synchronization with the server seamlessly. This offline capability ensures a smooth user experience, critical for ionic hybrid apps catering to users in various network conditions.

### NoSQL Has Better TypeScript Support
TypeScript, a popular superset of JavaScript, is renowned for its static typing and enhanced developer experience. NoSQL databases like NxDB are inherently flexible, making them well-suited for TypeScript integration. With well-defined data structures and clear typings, NoSQL NxDB offers [improved type safety](../tutorials/typescript.md) and easier development when compared to traditional SQL databases like SQLite. This results in reduced debugging time and increased code reliability.

### Easier [Schema Migration](../migration-schema.md) with NoSQL Documents
Schema changes are a common occurrence in application development, and dealing with them can be challenging. NoSQL databases, including NxDB, are more forgiving in this aspect. Since documents in NoSQL databases don't enforce a rigid structure like tables in relational databases, schema changes are often simpler to manage. This flexibility makes it easier to evolve your app's data structure over time without the need for complex migration scripts, a notable advantage when compared to SQLite.

## Great Performance
NxDB's [excellent performance](../rx-storage-performance.md) stems from its advanced indexing capabilities, which streamline data retrieval and ensure swift query execution. Additionally, the [JSON key compression](../key-compression.md) employed by NxDB minimizes storage overhead, enabling efficient data transfer and quicker loading times. The incorporation of real-time updates through change streams and the **EventReduce mechanism** further enhances NxDB's performance, delivering a responsive user experience even as data changes are propagated seamlessly.



## Using NxDB in an Ionic Hybrid App
NxDB's integration into your ionic hybrid app opens up a world of possibilities for efficient data management. Let's explore how to set up NxDB, use it with popular JavaScript frameworks, and take advantage of its diverse storage options.

### Setup NxDB
Getting started with NxDB is a straightforward process. By including the NxDB library in your project, you can quickly start harnessing its capabilities. Begin by installing the [NxDB package](https://www.npmjs.com/package/nxdb) from the npm registry. Then, configure your database instance to suit your app's needs. This setup process paves the way for seamless data management in your ionic hybrid app.
For a full instruction, follow the [NxDB Quickstart](https://nxdb.nxpkg.github.io/quickstart.html).

### Using NxDB in Frameworks (React, Angular, Vue.js)
NxDB seamlessly integrates with various JavaScript frameworks, ensuring compatibility with your preferred development environment. Whether you're building your ionic hybrid app with [React](./react-database.md), [Angular](./angular-database.md), or [Vue.js](https://github.com/nxpkg/nxdb/tree/master/examples/vue), NxDB offers bindings and tools that enable you to leverage its features effortlessly. This compatibility allows you to stay within the comfort zone of your chosen framework while benefiting from NxDB's powerful data management capabilities.

### Different RxStorage Layers for NxDB
NxDB doesn't limit you to a single storage solution. Instead, it provides a range of RxStorage layers to accommodate diverse use cases. These storage layers offer flexibility and customization, enabling you to tailor your data management strategy to match your app's requirements. Let's explore some of the available RxStorage options:

- [Dexie.js RxStorage](../rx-storage-dexie.md): Dexie.js is a popular JavaScript library for indexedDB, and NxDB offers a compatible RxStorage layer. This option leverages indexedDB's capabilities to provide efficient data storage and retrieval.
- [LokiJS RxStorage](../rx-storage-lokijs.md): LokiJS RxStorage integrates the LokiJS database with NxDB, giving you access to another powerful NoSQL database solution. LokiJS is known for its in-memory storage capabilities and ease of use.
- [IndexedDB RxStorage](../rx-storage-indexeddb.md): Leveraging the native browser storage, IndexedDB RxStorage offers reliable data persistence. This storage option is suitable for a wide range of scenarios and is supported by most modern browsers.
- [OPFS RxStorage](../rx-storage-opfs.md): Operating within the browser's file system, OPFS RxStorage is a unique choice that can handle larger data volumes efficiently. It's particularly useful for applications that require substantial data storage.
- [Memory RxStorage](../rx-storage-memory.md): Memory RxStorage is perfect for temporary or cache-like data storage. It keeps data in memory, which can result in rapid data access but doesn't provide long-term persistence.
- [SQLite RxStorage](../rx-storage-sqlite.md): SQLite is the goto database for mobile applications. It is build in on android and iOS devices. The SQLite NxDB storage layer is build upon SQLite and offers the best performance on hybrid apps, like ionic.



## Replication of Data with NxDB between Clients and Servers
Efficient data replication between clients and servers is the backbone of modern application development, ensuring that data remains consistent and up-to-date across various devices and platforms. NxDB provides a suite of replication methods that facilitate seamless communication between clients and servers, ensuring that your data is always in sync.

### NxDB Replication Algorithm
At the heart of NxDB's replication capabilities lies a sophisticated [algorithm](../replication.md) designed to manage data synchronization between clients and servers. This algorithm intelligently handles data changes, conflict resolution, and network connectivity fluctuations, resulting in reliable and efficient data replication. With the NxDB replication algorithm, your application can maintain data consistency across devices without unnecessary complexities.

- [CouchDB Replication](../replication-couchdb.md):
NxDB's integration with CouchDB replication presents a powerful way to synchronize data between clients and servers. CouchDB, a well-established NoSQL database, excels at distributed and decentralized data scenarios. By utilizing NxDB's CouchDB replication, you can establish bidirectional synchronization between your NxDB-powered client and a CouchDB server. This synchronization ensures that data updates made on either end are seamlessly propagated to the other, facilitating collaboration and data sharing.

- [Firestore Replication](../replication-firestore.md):
Firestore, Google's cloud-hosted NoSQL database, offers another avenue for data replication in NxDB. With Firestore replication, you can establish a connection between your NxDB-powered app and Firestore's cloud infrastructure. This integration provides real-time updates to data across multiple instances of your application, ensuring that users always have access to the latest information. NxDB's support for Firestore replication empowers you to build dynamic and responsive applications that thrive in today's fast-paced digital landscape.

- [WebRTC Replication](../replication-webrtc.md):
Peer-to-peer (P2P) replication via WebRTC introduces a cutting-edge approach to data synchronization in NxDB. P2P replication allows devices to communicate directly with each other, bypassing the need for a central server. This method proves invaluable in scenarios where network connectivity is limited or unreliable. With WebRTC replication, devices can exchange data directly, enabling collaboration and information sharing even in challenging network conditions.




## NxDB as an Alternative for Ionic Secure Storage
When it comes to securing sensitive data in your Ionic applications, NxDB emerges as a powerful alternative to traditional secure storage solutions. Let's delve into why NxDB is an exceptional choice for safeguarding your data while providing additional benefits.

### NxDB On-Device Encryption Plugin
NxDB offers an [on-device encryption plugin](https://nxdb.nxpkg.github.io/encryption.html), adding an extra layer of security to your app's data. This means that data stored within the NxDB database can be encrypted, ensuring that even if the device falls into the wrong hands, the sensitive information remains inaccessible without the proper decryption key. This level of data protection is crucial for applications that deal with personal or confidential information. Encryption runs either with `AES` on `crypto-js` or with the [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) which is faster and more secure.

### Works Offline
Security should never compromise functionality. NxDB excels in this area by allowing your application to operate seamlessly even when offline. The locally stored encrypted data remains accessible and functional, enabling users to interact with the app's features even without an active internet connection. This offline capability ensures that user data is secure, while the app continues to deliver a responsive and uninterrupted experience.

### Easy-to-Setup Replication with Your Backend
Ensuring data consistency between your client-side application and backend is a key concern for developers. NxDB simplifies this process with its straightforward replication setup. You can effortlessly configure data synchronization between your local NxDB instance and your backend server. This replication capability ensures that encrypted data remains up-to-date and aligned with the central database, enhancing data integrity and security.

### Compression of Client-Side Stored Data
In addition to security and offline capabilities, NxDB also offers [data compression](https://nxdb.nxpkg.github.io/key-compression.html). This means that the data stored on the client's device is efficiently compressed, reducing storage requirements and improving overall app performance. This compression ensures that your app remains responsive and efficient, even as data volumes grow.

### Cost-Effective Solution
In addition to its security features, NxDB offers cost-effective benefits. NxDB is [priced more affordably](/premium) compared to some other secure storage solutions, making it an attractive option for developers seeking robust security without breaking the bank. For many users, the free version of NxDB provides ample features to meet their application's security and data management needs.






## Follow Up

- Try out the [NxDB ionic example project](https://github.com/nxpkg/nxdb/tree/master/examples/ionic2)
- Try out the [NxDB Quickstart](https://nxdb.nxpkg.github.io/quickstart.html)
- Join the [NxDB Chat](https://nxdb.nxpkg.github.io/chat)

























