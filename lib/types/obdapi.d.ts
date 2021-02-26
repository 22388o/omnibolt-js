import { MessageType, Message, P2PPeer, BtcFundingInfo, FundingBtcCreated, FundingBtcSigned, OmniFundingAssetInfo, OmniSendAssetInfo, OpenChannelInfo, AcceptChannelInfo, AssetFundingCreatedInfo, AssetFundingSignedInfo, SignedInfo100100, SignedInfo100101, SignedInfo100102, SignedInfo100103, SignedInfo100104, SignedInfo100105, SignedInfo100106, SignedInfo100110, SignedInfo100111, SignedInfo100112, SignedInfo100113, SignedInfo100114, SignedInfo100360, SignedInfo100361, SignedInfo100362, SignedInfo100363, SignedInfo100364, SignedInfo101035, SignedInfo101134, CommitmentTx, CommitmentTxSigned, InvoiceInfo, HTLCFindPathInfo, addHTLCInfo, HtlcSignedInfo, ForwardRInfo, SignRInfo, CloseHtlcTxInfo, CloseHtlcTxInfoSigned, IssueFixedAmountInfo, IssueManagedAmoutInfo, OmniSendGrant, OmniSendRevoke, CloseChannelSign, AtomicSwapAccepted, AtomicSwapRequest } from "./pojo";
import { Result } from "./result";
import { IAcceptChannel, IConnect, IOnChannelOpenAttempt } from "./types";
export default class ObdApi {
    constructor({ url }?: {
        url?: string | undefined;
    });
    isConnectedToOBD: boolean;
    isLoggedIn: boolean;
    messageType: MessageType;
    ws: WebSocket | any;
    defaultUrl: string;
    globalCallback: Function | undefined;
    callbackMap: Map<number, Function>;
    onMessage: Function | undefined;
    onChannelOpenAttempt: ((data: IOnChannelOpenAttempt) => any) | undefined;
    onBitcoinFundingCreated: Function | undefined;
    onChannelClose: Function | undefined;
    onAssetFundingCreated: Function | undefined;
    loginData: {
        nodeAddress: string;
        nodePeerId: string;
        userPeerId: string;
    };
    connect({ url, onOpen, onMessage, onChannelOpenAttempt, onBitcoinFundingCreated, onAssetFundingCreated, onChannelClose, onError, onClose, onAddHTLC, onForwardR, onSignR, onCloseHTLC }?: {
        url?: string | undefined;
        onOpen?: (() => any) | undefined;
        onMessage?: undefined;
        onChannelOpenAttempt?: undefined;
        onBitcoinFundingCreated?: undefined;
        onAssetFundingCreated?: undefined;
        onChannelClose?: undefined;
        onError?: ((e: string | object) => any) | undefined;
        onClose?: ((code: number, reason: string) => any) | undefined;
        onAddHTLC?: (() => null) | undefined;
        onForwardR?: (() => null) | undefined;
        onSignR?: (() => null) | undefined;
        onCloseHTLC?: (() => null) | undefined;
    }): Promise<Result<IConnect>>;
    registerEvent(msgType: number, callback: Function): void;
    removeEvent(msgType: number): void;
    sendJsonData(msg: string, type: number, callback: Function): void;
    connectToServer(url: string, callback: Function, globalCallback: Function): import("./result").Err<unknown> | undefined;
    sendData(msg: Message, callback: Function): import("./result").Err<unknown> | undefined;
    getDataFromServer(jsonData: any): any;
    logIn(mnemonic: string): Promise<Result<string>>;
    userPeerId: string;
    onLogIn(resultData: any): void;
    disconnect(): void;
    logout(): Promise<unknown>;
    onLogout(jsonData: any): void;
    connectPeer(info: P2PPeer): Promise<unknown>;
    fundingBitcoin(info: BtcFundingInfo): Promise<unknown>;
    onFundingBitcoin(jsonData: any): void;
    bitcoinFundingCreated(recipient_node_peer_id: string, recipient_user_peer_id: string, info: FundingBtcCreated): Promise<unknown>;
    sendSignedHex100341(recipient_node_peer_id: string, recipient_user_peer_id: string, signed_hex: string): Promise<unknown>;
    bitcoinFundingSigned(recipient_node_peer_id: string, recipient_user_peer_id: string, info: FundingBtcSigned): Promise<unknown>;
    listProperties(): Promise<unknown>;
    onListProperties(jsonData: any): void;
    fundingAsset(info: OmniFundingAssetInfo): Promise<unknown>;
    onFundingAsset(jsonData: any): void;
    sendAsset(info: OmniSendAssetInfo): Promise<unknown>;
    onSendAsset(jsonData: any): void;
    genAddressFromMnemonic(): Promise<unknown>;
    onGenAddressFromMnemonic(jsonData: any): void;
    getAddressInfo(index: number): Promise<unknown>;
    onGetAddressInfo(jsonData: any): void;
    openChannel(recipient_node_peer_id: string, recipient_user_peer_id: string, info: OpenChannelInfo): Promise<Result<string>>;
    onOpenChannel(jsonData: any): void;
    acceptChannel(recipient_node_peer_id: string, recipient_user_peer_id: string, info: AcceptChannelInfo): Promise<Result<IAcceptChannel>>;
    onAcceptChannel(jsonData: any): void;
    checkChannelAddessExist(recipient_node_peer_id: string, recipient_user_peer_id: string, info: AcceptChannelInfo): Promise<unknown>;
    onCheckChannelAddessExist(jsonData: any): void;
    assetFundingCreated(recipient_node_peer_id: string, recipient_user_peer_id: string, info: AssetFundingCreatedInfo): Promise<unknown>;
    sendSignedHex101034(recipient_node_peer_id: string, recipient_user_peer_id: string, signed_hex: string): Promise<unknown>;
    sendSignedHex101134(info: SignedInfo101134): Promise<unknown>;
    assetFundingSigned(recipient_node_peer_id: string, recipient_user_peer_id: string, info: AssetFundingSignedInfo): Promise<unknown>;
    onAssetFundingSigned(jsonData: any): void;
    sendSignedHex101035(recipient_node_peer_id: string, recipient_user_peer_id: string, info: SignedInfo101035): Promise<unknown>;
    commitmentTransactionCreated(recipient_node_peer_id: string, recipient_user_peer_id: string, info: CommitmentTx): Promise<unknown>;
    onCommitmentTransactionCreated(jsonData: any): void;
    sendSignedHex100360(recipient_node_peer_id: string, recipient_user_peer_id: string, info: SignedInfo100360): Promise<unknown>;
    commitmentTransactionAccepted(recipient_node_peer_id: string, recipient_user_peer_id: string, info: CommitmentTxSigned): Promise<unknown>;
    onCommitmentTransactionAccepted(jsonData: any): void;
    sendSignedHex100361(recipient_node_peer_id: string, recipient_user_peer_id: string, info: SignedInfo100361): Promise<unknown>;
    sendSignedHex100362(recipient_node_peer_id: string, recipient_user_peer_id: string, info: SignedInfo100362): Promise<unknown>;
    sendSignedHex100363(recipient_node_peer_id: string, recipient_user_peer_id: string, info: SignedInfo100363): Promise<unknown>;
    sendSignedHex100364(info: SignedInfo100364): Promise<unknown>;
    addInvoice(info: InvoiceInfo): Promise<unknown>;
    onAddInvoice(jsonData: any): void;
    HTLCFindPath(info: HTLCFindPathInfo): Promise<unknown>;
    onHTLCFindPath(jsonData: any): void;
    addHTLC(recipient_node_peer_id: string, recipient_user_peer_id: string, info: addHTLCInfo): Promise<unknown>;
    onAddHTLC(jsonData: any): void;
    sendSignedHex100100(recipient_node_peer_id: string, recipient_user_peer_id: string, info: SignedInfo100100): Promise<unknown>;
    sendSignedHex100101(recipient_node_peer_id: string, recipient_user_peer_id: string, info: SignedInfo100101): Promise<unknown>;
    sendSignedHex100102(info: SignedInfo100102): Promise<unknown>;
    sendSignedHex100103(recipient_node_peer_id: string, recipient_user_peer_id: string, info: SignedInfo100103): Promise<unknown>;
    sendSignedHex100104(info: SignedInfo100104): Promise<unknown>;
    sendSignedHex100105(recipient_node_peer_id: string, recipient_user_peer_id: string, info: SignedInfo100105): import("./result").Err<unknown> | Promise<unknown>;
    sendSignedHex100106(recipient_node_peer_id: string, recipient_user_peer_id: string, info: SignedInfo100106): import("./result").Err<unknown> | Promise<unknown>;
    sendSignedHex100110(recipient_node_peer_id: string, recipient_user_peer_id: string, info: SignedInfo100110): import("./result").Err<unknown> | Promise<unknown>;
    sendSignedHex100111(recipient_node_peer_id: string, recipient_user_peer_id: string, info: SignedInfo100111): Promise<unknown>;
    sendSignedHex100112(info: SignedInfo100112): Promise<unknown>;
    sendSignedHex100113(recipient_node_peer_id: string, recipient_user_peer_id: string, info: SignedInfo100113): Promise<unknown>;
    sendSignedHex100114(info: SignedInfo100114): Promise<unknown>;
    htlcSigned(recipient_node_peer_id: string, recipient_user_peer_id: string, info: HtlcSignedInfo): Promise<unknown>;
    onHtlcSigned(jsonData: any): void;
    forwardR(recipient_node_peer_id: string, recipient_user_peer_id: string, info: ForwardRInfo): Promise<unknown>;
    onForwardR(jsonData: any): void;
    signR(recipient_node_peer_id: string, recipient_user_peer_id: string, info: SignRInfo): Promise<unknown>;
    onSignR(jsonData: any): void;
    closeHTLC(recipient_node_peer_id: string, recipient_user_peer_id: string, info: CloseHtlcTxInfo): Promise<unknown>;
    onCloseHTLC(jsonData: any): void;
    closeHTLCSigned(recipient_node_peer_id: string, recipient_user_peer_id: string, info: CloseHtlcTxInfoSigned): Promise<unknown>;
    onCloseHTLCSigned(jsonData: any): void;
    getTransaction(txid: string): Promise<unknown>;
    onGetTransaction(jsonData: any): void;
    issueFixedAmount(info: IssueFixedAmountInfo): Promise<unknown>;
    onIssueFixedAmount(jsonData: any): void;
    issueManagedAmout(info: IssueManagedAmoutInfo): Promise<unknown>;
    onIssueManagedAmout(jsonData: any): void;
    sendGrant(info: OmniSendGrant): Promise<unknown>;
    onSendGrant(jsonData: any): void;
    sendRevoke(info: OmniSendRevoke): Promise<unknown>;
    onSendRevoke(jsonData: any): void;
    getAllBalancesForAddress(address: string): Promise<unknown>;
    onGetAllBalancesForAddress(jsonData: any): void;
    getProperty(propertyId: string): Promise<unknown>;
    onGetProperty(jsonData: any): void;
    getBtcBalanceByAddress(address: string): Promise<unknown>;
    onGetBtcBalanceByAddress(jsonData: any): void;
    importPrivKey(privkey: string): Promise<unknown>;
    onImportPrivKey(jsonData: any): void;
    getAddHTLCRandHInfoList(): Promise<unknown>;
    onGetAddHTLCRandHInfoList(jsonData: any): void;
    getHtlcSignedRandHInfoList(): Promise<unknown>;
    onGetHtlcSignedRandHInfoList(jsonData: any): void;
    getRFromCommitmentTx(channel_id: string): Promise<unknown>;
    onGetRFromCommitmentTx(jsonData: any): void;
    getPathInfoByH(h: string): Promise<unknown>;
    onGetPathInfoByH(jsonData: any): void;
    getRByHOfReceiver(h: string): Promise<unknown>;
    onGetRByHOfReceiver(jsonData: any): void;
    getLatestCommitmentTransaction(channel_id: string): Promise<unknown>;
    onGetLatestCommitmentTransaction(jsonData: any): void;
    getItemsByChannelId(channel_id: string): Promise<unknown>;
    onGetItemsByChannelId(jsonData: any): void;
    getMyChannels(page_size: Number, page_index: Number): Promise<unknown>;
    onGetMyChannels(jsonData: any): void;
    getAmountOfRechargeBTC(): Promise<unknown>;
    onGetAmountOfRechargeBTC(jsonData: any): void;
    getChannelDetailFromChannelID(channel_id: string): Promise<unknown>;
    onGetChannelDetailFromChannelID(jsonData: any): void;
    getChannelDetailFromDatabaseID(id: number): Promise<unknown>;
    onGetChannelDetailFromDatabaseID(jsonData: any): void;
    getAllBreachRemedyTransactions(channel_id: string): Promise<unknown>;
    onGetAllBreachRemedyTransactions(jsonData: any): void;
    getAllCommitmentTx(channel_id: string): Promise<unknown>;
    onGetAllCommitmentTx(jsonData: any): void;
    getLatestRevockableDeliveryTransaction(channel_id: string): Promise<unknown>;
    onGetLatestRevockableDeliveryTransaction(jsonData: any): void;
    getLatestBreachRemedyTransaction(channel_id: string): Promise<unknown>;
    onGetLatestBreachRemedyTransaction(jsonData: any): void;
    sendSomeCommitmentById(id: number): Promise<unknown>;
    onSendSomeCommitmentById(jsonData: any): void;
    getAllRevockableDeliveryTransactions(channel_id: string): Promise<unknown>;
    onGetAllRevockableDeliveryTransactions(jsonData: any): void;
    closeChannel(recipient_node_peer_id: string, recipient_user_peer_id: string, channel_id: string): Promise<unknown>;
    onCloseChannel(jsonData: any): void;
    closeChannelSigned(recipient_node_peer_id: string, recipient_user_peer_id: string, info: CloseChannelSign): Promise<unknown>;
    onCloseChannelSigned(jsonData: any): void;
    atomicSwap(recipient_node_peer_id: string, recipient_user_peer_id: string, info: AtomicSwapRequest): Promise<unknown>;
    atomicSwapAccepted(recipient_node_peer_id: string, recipient_user_peer_id: string, info: AtomicSwapAccepted): Promise<unknown>;
    isNotString(str: String): boolean;
}
