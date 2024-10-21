import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  DlnOrder: p.createTable({
    id: p.string(), // orderId
    sourceChainId: p.int(),
    destinationChainId: p.int(),
    sourceTxHash: p.string(),
    makerAddress: p.string(),
    maker: p.string(),
    orderStruct: p.string(), // JSON stringified order details
    status: p.string(), // CREATED, FULFILLED, CANCELLED
    fulfillmentTxHash: p.string().optional(),
    cancelTxHash: p.string().optional(),
    gasUsed: p.string().optional(),
    gasCost: p.string().optional()
  }),

  CrosschainTx: p.createTable({
    id: p.string(), // submissionId
    sourceChainId: p.int(),
    destinationChainId: p.int(),
    sourceTxHash: p.string(),
    destinationTxHash: p.string().optional(),
    sender: p.string(),
    receiver: p.string(),
    nativeSender: p.string(),
    executionFee: p.string(),
    flags: p.string(),
    forwardCall: p.boolean(),
    status: p.string(), // PENDING, COMPLETED, FAILED
    gasUsed: p.string().optional(),
    gasCost: p.string().optional()
  })
}));
