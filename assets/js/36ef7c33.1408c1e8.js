"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4243],{60186:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var t=a(85893),i=a(11151);const r={title:"Create a custom IBC middleware",sidebar_label:"Create a custom IBC middleware",sidebar_position:2,slug:"/ibc/middleware/develop"},o="Create a custom IBC middleware",c={id:"ibc/middleware/develop",title:"Create a custom IBC middleware",description:"IBC middleware will wrap over an underlying IBC application (a base application or downstream middleware) and sits between core IBC and the base application.",source:"@site/versioned_docs/version-v8.2.x/01-ibc/04-middleware/02-develop.md",sourceDirName:"01-ibc/04-middleware",slug:"/ibc/middleware/develop",permalink:"/v8/ibc/middleware/develop",draft:!1,unlisted:!1,tags:[],version:"v8.2.x",sidebarPosition:2,frontMatter:{title:"Create a custom IBC middleware",sidebar_label:"Create a custom IBC middleware",sidebar_position:2,slug:"/ibc/middleware/develop"},sidebar:"defaultSidebar",previous:{title:"IBC middleware",permalink:"/v8/ibc/middleware/overview"},next:{title:"Integrating IBC middleware into a chain",permalink:"/v8/ibc/middleware/integration"}},l={},s=[{value:"Implement <code>IBCModule</code> interface",id:"implement-ibcmodule-interface",level:2},{value:"Channel handshake callbacks",id:"channel-handshake-callbacks",level:3},{value:"Version negotiation",id:"version-negotiation",level:4},{value:"<code>OnChanOpenInit</code>",id:"onchanopeninit",level:4},{value:"<code>OnChanOpenTry</code>",id:"onchanopentry",level:4},{value:"<code>OnChanOpenAck</code>",id:"onchanopenack",level:4},{value:"<code>OnChanOpenConfirm</code>",id:"onchanopenconfirm",level:4},{value:"<code>OnChanCloseInit</code>",id:"onchancloseinit",level:4},{value:"<code>OnChanCloseConfirm</code>",id:"onchancloseconfirm",level:4},{value:"Capabilities",id:"capabilities",level:4},{value:"Packet callbacks",id:"packet-callbacks",level:3},{value:"<code>OnRecvPacket</code>",id:"onrecvpacket",level:4},{value:"<code>OnAcknowledgementPacket</code>",id:"onacknowledgementpacket",level:4},{value:"<code>OnTimeoutPacket</code>",id:"ontimeoutpacket",level:4},{value:"ICS-04 wrappers",id:"ics-04-wrappers",level:2},{value:"<code>SendPacket</code>",id:"sendpacket",level:3},{value:"<code>WriteAcknowledgement</code>",id:"writeacknowledgement",level:3},{value:"<code>GetAppVersion</code>",id:"getappversion",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-a-custom-ibc-middleware",children:"Create a custom IBC middleware"}),"\n",(0,t.jsx)(n.p,{children:"IBC middleware will wrap over an underlying IBC application (a base application or downstream middleware) and sits between core IBC and the base application."}),"\n",(0,t.jsxs)(n.p,{children:["The interfaces a middleware must implement are found ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/05-port/types/module.go",children:"here"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// Middleware implements the ICS26 Module interface\ntype Middleware interface {\n  IBCModule // middleware has access to an underlying application which may be wrapped by more middleware\n  ICS4Wrapper // middleware has access to ICS4Wrapper which may be core IBC Channel Handler or a higher-level middleware that wraps this middleware.\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.code,{children:"IBCMiddleware"})," struct implementing the ",(0,t.jsx)(n.code,{children:"Middleware"})," interface, can be defined with its constructor as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// @ x/module_name/ibc_middleware.go\n\n// IBCMiddleware implements the ICS26 callbacks and ICS4Wrapper for the fee middleware given the\n// fee keeper and the underlying application.\ntype IBCMiddleware struct {\n  app    porttypes.IBCModule\n  keeper keeper.Keeper\n}\n\n// NewIBCMiddleware creates a new IBCMiddleware given the keeper and underlying application\nfunc NewIBCMiddleware(app porttypes.IBCModule, k keeper.Keeper) IBCMiddleware {\n  return IBCMiddleware{\n    app:    app,\n    keeper: k,\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"implement-ibcmodule-interface",children:["Implement ",(0,t.jsx)(n.code,{children:"IBCModule"})," interface"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"IBCMiddleware"})," is a struct that implements the ",(0,t.jsxs)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/05-port/types/module.go#L14-L107",children:["ICS-26 ",(0,t.jsx)(n.code,{children:"IBCModule"})," interface (",(0,t.jsx)(n.code,{children:"porttypes.IBCModule"}),")"]}),". It is recommended to separate these callbacks into a separate file ",(0,t.jsx)(n.code,{children:"ibc_middleware.go"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Note how this is analogous to implementing the same interfaces for IBC applications that act as base applications."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["As will be mentioned in the ",(0,t.jsx)(n.a,{href:"/v8/ibc/middleware/integration",children:"integration section"}),", this struct should be different than the struct that implements ",(0,t.jsx)(n.code,{children:"AppModule"})," in case the middleware maintains its own internal state and processes separate SDK messages."]}),"\n",(0,t.jsx)(n.p,{children:"The middleware must have access to the underlying application, and be called before it during all ICS-26 callbacks. It may execute custom logic during these callbacks, and then call the underlying application's callback."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Middleware ",(0,t.jsx)(n.strong,{children:"may"})," choose not to call the underlying application's callback at all. Though these should generally be limited to error cases."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"IBCModule"})," interface consists of the channel handshake callbacks and packet callbacks. Most of the custom logic will be performed in the packet callbacks, in the case of the channel handshake callbacks, introducing the middleware requires consideration to the version negotiation and passing of capabilities."]}),"\n",(0,t.jsx)(n.h3,{id:"channel-handshake-callbacks",children:"Channel handshake callbacks"}),"\n",(0,t.jsx)(n.h4,{id:"version-negotiation",children:"Version negotiation"}),"\n",(0,t.jsx)(n.p,{children:"In the case where the IBC middleware expects to speak to a compatible IBC middleware on the counterparty chain, they must use the channel handshake to negotiate the middleware version without interfering in the version negotiation of the underlying application."}),"\n",(0,t.jsx)(n.p,{children:"Middleware accomplishes this by formatting the version in a JSON-encoded string containing the middleware version and the application version. The application version may as well be a JSON-encoded string, possibly including further middleware and app versions, if the application stack consists of multiple milddlewares wrapping a base application. The format of the version is specified in ICS-30 as the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "<middleware_version_key>": "<middleware_version_value>",\n  "app_version": "<application_version_value>"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"<middleware_version_key>"})," key in the JSON struct should be replaced by the actual name of the key for the corresponding middleware (e.g. ",(0,t.jsx)(n.code,{children:"fee_version"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["During the handshake callbacks, the middleware can unmarshal the version string and retrieve the middleware and application versions. It can do its negotiation logic on ",(0,t.jsx)(n.code,{children:"<middleware_version_value>"}),", and pass the ",(0,t.jsx)(n.code,{children:"<application_version_value>"})," to the underlying application."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTE"}),": Middleware that does not need to negotiate with a counterparty middleware on the remote stack will not implement the version unmarshalling and negotiation, and will simply perform its own custom logic on the callbacks without relying on the counterparty behaving similarly."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"onchanopeninit",children:(0,t.jsx)(n.code,{children:"OnChanOpenInit"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func (im IBCMiddleware) OnChanOpenInit(\n  ctx sdk.Context,\n  order channeltypes.Order,\n  connectionHops []string,\n  portID string,\n  channelID string,\n  channelCap *capabilitytypes.Capability,\n  counterparty channeltypes.Counterparty,\n  version string,\n) (string, error) {\n  if version != "" {\n    // try to unmarshal JSON-encoded version string and pass\n    // the app-specific version to app callback.\n    // otherwise, pass version directly to app callback.\n    metadata, err := Unmarshal(version)\n    if err != nil {\n      // Since it is valid for fee version to not be specified,\n      // the above middleware version may be for another middleware.\n      // Pass the entire version string onto the underlying application.\n      return im.app.OnChanOpenInit(\n        ctx,\n        order,\n        connectionHops,\n        portID,\n        channelID,\n        channelCap,\n        counterparty,\n        version,\n      )\n    }\n    else {\n      metadata = {\n        // set middleware version to default value\n        MiddlewareVersion: defaultMiddlewareVersion,\n        // allow application to return its default version\n        AppVersion: "",\n      }\n    }\n  }\n\n  doCustomLogic()\n\n  // if the version string is empty, OnChanOpenInit is expected to return\n  // a default version string representing the version(s) it supports\n  appVersion, err := im.app.OnChanOpenInit(\n    ctx,\n    order,\n    connectionHops,\n    portID,\n    channelID,\n    channelCap,\n    counterparty,\n    metadata.AppVersion, // note we only pass app version here\n  )\n  if err != nil {\n    return "", err\n  }\n\n  version := constructVersion(metadata.MiddlewareVersion, appVersion)\n\n  return version, nil\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L36-L83",children:"here"})," an example implementation of this callback for the ICS-29 Fee Middleware module."]}),"\n",(0,t.jsx)(n.h4,{id:"onchanopentry",children:(0,t.jsx)(n.code,{children:"OnChanOpenTry"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func (im IBCMiddleware) OnChanOpenTry(\n  ctx sdk.Context,\n  order channeltypes.Order,\n  connectionHops []string,\n  portID,\n  channelID string,\n  channelCap *capabilitytypes.Capability,\n  counterparty channeltypes.Counterparty,\n  counterpartyVersion string,\n) (string, error) {\n  // try to unmarshal JSON-encoded version string and pass\n  // the app-specific version to app callback.\n  // otherwise, pass version directly to app callback.\n  cpMetadata, err := Unmarshal(counterpartyVersion)\n  if err != nil {\n    return app.OnChanOpenTry(\n      ctx,\n      order,\n      connectionHops,\n      portID,\n      channelID,\n      channelCap,\n      counterparty,\n      counterpartyVersion,\n    )\n  }\n\n  doCustomLogic()\n\n  // Call the underlying application\'s OnChanOpenTry callback.\n  // The try callback must select the final app-specific version string and return it.\n  appVersion, err := app.OnChanOpenTry(\n    ctx,\n    order,\n    connectionHops,\n    portID,\n    channelID,\n    channelCap,\n    counterparty,\n    cpMetadata.AppVersion, // note we only pass counterparty app version here\n  )\n  if err != nil {\n    return "", err\n  }\n\n  // negotiate final middleware version\n  middlewareVersion := negotiateMiddlewareVersion(cpMetadata.MiddlewareVersion)\n  version := constructVersion(middlewareVersion, appVersion)\n\n  return version, nil\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L88-L125",children:"here"})," an example implementation of this callback for the ICS-29 Fee Middleware module."]}),"\n",(0,t.jsx)(n.h4,{id:"onchanopenack",children:(0,t.jsx)(n.code,{children:"OnChanOpenAck"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (im IBCMiddleware) OnChanOpenAck(\n  ctx sdk.Context,\n  portID,\n  channelID string,\n  counterpartyChannelID string,\n  counterpartyVersion string,\n) error {\n  // try to unmarshal JSON-encoded version string and pass\n  // the app-specific version to app callback.\n  // otherwise, pass version directly to app callback.\n  cpMetadata, err = UnmarshalJSON(counterpartyVersion)\n  if err != nil {\n    return app.OnChanOpenAck(ctx, portID, channelID, counterpartyChannelID, counterpartyVersion)\n  }\n\n  if !isCompatible(cpMetadata.MiddlewareVersion) {\n    return error\n  }\n  doCustomLogic()\n\n  // call the underlying application's OnChanOpenTry callback\n  return app.OnChanOpenAck(ctx, portID, channelID, counterpartyChannelID, cpMetadata.AppVersion)\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L128-L153",children:"here"}),") an example implementation of this callback for the ICS-29 Fee Middleware module."]}),"\n",(0,t.jsx)(n.h4,{id:"onchanopenconfirm",children:(0,t.jsx)(n.code,{children:"OnChanOpenConfirm"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func OnChanOpenConfirm(\n  ctx sdk.Context,\n  portID,\n  channelID string,\n) error {\n  doCustomLogic()\n\n  return app.OnChanOpenConfirm(ctx, portID, channelID)\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L156-L163",children:"here"})," an example implementation of this callback for the ICS-29 Fee Middleware module."]}),"\n",(0,t.jsx)(n.h4,{id:"onchancloseinit",children:(0,t.jsx)(n.code,{children:"OnChanCloseInit"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func OnChanCloseInit(\n  ctx sdk.Context,\n  portID,\n  channelID string,\n) error {\n  doCustomLogic()\n\n  return app.OnChanCloseInit(ctx, portID, channelID)\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L166-L188",children:"here"})," an example implementation of this callback for the ICS-29 Fee Middleware module."]}),"\n",(0,t.jsx)(n.h4,{id:"onchancloseconfirm",children:(0,t.jsx)(n.code,{children:"OnChanCloseConfirm"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func OnChanCloseConfirm(\n  ctx sdk.Context,\n  portID,\n  channelID string,\n) error {\n  doCustomLogic()\n\n  return app.OnChanCloseConfirm(ctx, portID, channelID)\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L191-L213",children:"here"})," an example implementation of this callback for the ICS-29 Fee Middleware module."]}),"\n",(0,t.jsx)(n.h4,{id:"capabilities",children:"Capabilities"}),"\n",(0,t.jsxs)(n.p,{children:["The middleware should simply pass the capability in the callback arguments along to the underlying application so that it may be claimed by the base application. The base application will then pass the capability up the stack in order to authenticate an outgoing packet/acknowledgement, which you can check in the ",(0,t.jsxs)(n.a,{href:"#ics-04-wrappers",children:[(0,t.jsx)(n.code,{children:"ICS4Wrapper"})," section"]}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In the case where the middleware wishes to send a packet or acknowledgment without the involvement of the underlying application, it should be given access to the same ",(0,t.jsx)(n.code,{children:"scopedKeeper"})," as the base application so that it can retrieve the capabilities by itself."]}),"\n",(0,t.jsx)(n.h3,{id:"packet-callbacks",children:"Packet callbacks"}),"\n",(0,t.jsx)(n.p,{children:"The packet callbacks just like the handshake callbacks wrap the application's packet callbacks. The packet callbacks are where the middleware performs most of its custom logic. The middleware may read the packet flow data and perform some additional packet handling, or it may modify the incoming data before it reaches the underlying application. This enables a wide degree of usecases, as a simple base application like token-transfer can be transformed for a variety of usecases by combining it with custom middleware."}),"\n",(0,t.jsx)(n.h4,{id:"onrecvpacket",children:(0,t.jsx)(n.code,{children:"OnRecvPacket"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (im IBCMiddleware) OnRecvPacket(\n  ctx sdk.Context,\n  packet channeltypes.Packet,\n  relayer sdk.AccAddress,\n) ibcexported.Acknowledgement {\n  doCustomLogic(packet)\n\n  ack := app.OnRecvPacket(ctx, packet, relayer)\n\n  doCustomLogic(ack) // middleware may modify outgoing ack\n    \n  return ack\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L217-L238",children:"here"})," an example implementation of this callback for the ICS-29 Fee Middleware module."]}),"\n",(0,t.jsx)(n.h4,{id:"onacknowledgementpacket",children:(0,t.jsx)(n.code,{children:"OnAcknowledgementPacket"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (im IBCMiddleware) OnAcknowledgementPacket(\n  ctx sdk.Context,\n  packet channeltypes.Packet,\n  acknowledgement []byte,\n  relayer sdk.AccAddress,\n) error {\n  doCustomLogic(packet, ack)\n\n  return app.OnAcknowledgementPacket(ctx, packet, ack, relayer)\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L242-L293",children:"here"})," an example implementation of this callback for the ICS-29 Fee Middleware module."]}),"\n",(0,t.jsx)(n.h4,{id:"ontimeoutpacket",children:(0,t.jsx)(n.code,{children:"OnTimeoutPacket"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (im IBCMiddleware) OnTimeoutPacket(\n  ctx sdk.Context,\n  packet channeltypes.Packet,\n  relayer sdk.AccAddress,\n) error {\n  doCustomLogic(packet)\n\n  return app.OnTimeoutPacket(ctx, packet, relayer)\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L297-L335",children:"here"})," an example implementation of this callback for the ICS-29 Fee Middleware module."]}),"\n",(0,t.jsx)(n.h2,{id:"ics-04-wrappers",children:"ICS-04 wrappers"}),"\n",(0,t.jsxs)(n.p,{children:["Middleware must also wrap ICS-04 so that any communication from the application to the ",(0,t.jsx)(n.code,{children:"channelKeeper"})," goes through the middleware first. Similar to the packet callbacks, the middleware may modify outgoing acknowledgements and packets in any way it wishes."]}),"\n",(0,t.jsxs)(n.p,{children:["To ensure optimal generalisability, the ",(0,t.jsx)(n.code,{children:"ICS4Wrapper"})," abstraction serves to abstract away whether a middleware is the topmost middleware (and thus directly calling into the ICS-04 ",(0,t.jsx)(n.code,{children:"channelKeeper"}),") or itself being wrapped by another middleware."]}),"\n",(0,t.jsxs)(n.p,{children:["Remember that middleware can be stateful or stateless. When defining the stateful middleware's keeper, the ",(0,t.jsx)(n.code,{children:"ics4Wrapper"})," field is included. Then the appropriate keeper can be passed when instantiating the middleware's keeper in ",(0,t.jsx)(n.code,{children:"app.go"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type Keeper struct {\n  storeKey storetypes.StoreKey\n  cdc      codec.BinaryCodec\n\n  ics4Wrapper   porttypes.ICS4Wrapper\n  channelKeeper types.ChannelKeeper\n  portKeeper    types.PortKeeper\n  ...\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For stateless middleware, the ",(0,t.jsx)(n.code,{children:"ics4Wrapper"})," can be passed on directly without having to instantiate a keeper struct for the middleware."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/05-port/types/module.go#L110-L133",children:"The interface"})," looks as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// This is implemented by ICS4 and all middleware that are wrapping base application.\n// The base application will call `sendPacket` or `writeAcknowledgement` of the middleware directly above them\n// which will call the next middleware until it reaches the core IBC handler.\ntype ICS4Wrapper interface {\n  SendPacket(\n    ctx sdk.Context,\n    chanCap *capabilitytypes.Capability,\n    sourcePort string,\n    sourceChannel string,\n    timeoutHeight clienttypes.Height,\n    timeoutTimestamp uint64,\n    data []byte,\n  ) (sequence uint64, err error)\n\n  WriteAcknowledgement(\n    ctx sdk.Context,\n    chanCap *capabilitytypes.Capability,\n    packet exported.PacketI,\n    ack exported.Acknowledgement,\n  ) error\n\n  GetAppVersion(\n    ctx sdk.Context,\n    portID,\n    channelID string,\n  ) (string, bool)\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u26a0\ufe0f"," In the following paragraphs, the methods are presented in pseudo code which has been kept general, not stating whether the middleware is stateful or stateless. Remember that when the middleware is stateful, ",(0,t.jsx)(n.code,{children:"ics4Wrapper"})," can be accessed through the keeper."]}),"\n",(0,t.jsxs)(n.p,{children:["Check out the references provided for an actual implementation to clarify, where the ",(0,t.jsx)(n.code,{children:"ics4Wrapper"})," methods in ",(0,t.jsx)(n.code,{children:"ibc_middleware.go"})," simply call the equivalent keeper methods where the actual logic resides."]}),"\n",(0,t.jsx)(n.h3,{id:"sendpacket",children:(0,t.jsx)(n.code,{children:"SendPacket"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func SendPacket(\n  ctx sdk.Context,\n  chanCap *capabilitytypes.Capability,\n  sourcePort string,\n  sourceChannel string,\n  timeoutHeight clienttypes.Height,\n  timeoutTimestamp uint64,\n  appData []byte,\n) (uint64, error) {\n  // middleware may modify data\n  data = doCustomLogic(appData)\n\n  return ics4Wrapper.SendPacket(\n    ctx, \n    chanCap, \n    sourcePort, \n    sourceChannel, \n    timeoutHeight, \n    timeoutTimestamp, \n    data,\n  )\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/keeper/relay.go#L17-L27",children:"here"})," an example implementation of this function for the ICS-29 Fee Middleware module."]}),"\n",(0,t.jsx)(n.h3,{id:"writeacknowledgement",children:(0,t.jsx)(n.code,{children:"WriteAcknowledgement"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// only called for async acks\nfunc WriteAcknowledgement(\n  ctx sdk.Context,\n  chanCap *capabilitytypes.Capability,\n  packet exported.PacketI,\n  ack exported.Acknowledgement,\n) error {\n  // middleware may modify acknowledgement\n  ack_bytes = doCustomLogic(ack)\n\n  return ics4Wrapper.WriteAcknowledgement(packet, ack_bytes)\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/keeper/relay.go#L31-L55",children:"here"})," an example implementation of this function for the ICS-29 Fee Middleware module."]}),"\n",(0,t.jsx)(n.h3,{id:"getappversion",children:(0,t.jsx)(n.code,{children:"GetAppVersion"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// middleware must return the underlying application version\nfunc GetAppVersion(\n  ctx sdk.Context,\n  portID,\n  channelID string,\n) (string, bool) {\n  version, found := ics4Wrapper.GetAppVersion(ctx, portID, channelID)\n  if !found {\n    return "", false\n  }\n\n  if !MiddlewareEnabled {\n    return version, true\n  }\n\n  // unwrap channel version\n  metadata, err := Unmarshal(version)\n  if err != nil {\n    panic(fmt.Errof("unable to unmarshal version: %w", err))\n  }\n\n  return metadata.AppVersion, true\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/keeper/relay.go#L58-L74",children:"here"})," an example implementation of this function for the ICS-29 Fee Middleware module."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>o});var t=a(67294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);