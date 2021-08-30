The Eyevinn Ingest Application Framework (Eyevinn IAF) is a framework to simplify building VOD ingest applications. A framework of open source plugins to integrate with various transcoding and streaming providers. 

## Overview
The Figure below shows the intended way to use IAF plugins with an ingest application. The Eyevinn IAF upload plugins handle service-specific integrations. This approach makes integration with different providers simpler.
![Diagram of Eyevinn Ingest Application Framework](eyevinn-iaf.png)

## Available Plugins

- [@eyevinn/iaf-plugin-aws](https://www.npmjs.com/package/@eyevinn/iaf-plugin-aws) for transcoding using AWS MediaConvert.

## Building your own plugin.

If you want to write you own IAF plugin for your transcoding service of choice, your module will need to implement one of the interfaces defined in `interfaces.d.ts`.

The interfaces are purposefully barebones, in order to make integrations with many different services possible.

If your plugin interacts with a transcoding service, it should implement the `IafUploadModule` interface. If your plugin watches for new ingest files, it should implementthe `IafFileWatchModule` interface.

 