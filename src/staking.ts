import {
  CommitStake as CommitStakeEvent,
  ConfigCreated as ConfigCreatedEvent,
  ConfigSet as ConfigSetEvent,
  OwnershipHandoverCanceled as OwnershipHandoverCanceledEvent,
  OwnershipHandoverRequested as OwnershipHandoverRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RequestUnstake as RequestUnstakeEvent,
  RolesUpdated as RolesUpdatedEvent,
  Staked as StakedEvent,
  ToppedUp as ToppedUpEvent,
  Unstaked as UnstakedEvent
} from "../generated/Staking/Staking"
import {
  CommitStake,
  ConfigCreated,
  ConfigSet,
  OwnershipHandoverCanceled,
  OwnershipHandoverRequested,
  OwnershipTransferred,
  RequestUnstake,
  RolesUpdated,
  Staked,
  ToppedUp,
  Unstaked
} from "../generated/schema"

export function handleCommitStake(event: CommitStakeEvent): void {
  let entity = new CommitStake(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.stakingId = event.params.stakingId
  entity.commitment = event.params.commitment

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleConfigCreated(event: ConfigCreatedEvent): void {
  let entity = new ConfigCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.configId = event.params.configId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleConfigSet(event: ConfigSetEvent): void {
  let entity = new ConfigSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.configId = event.params.configId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipHandoverCanceled(
  event: OwnershipHandoverCanceledEvent
): void {
  let entity = new OwnershipHandoverCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pendingOwner = event.params.pendingOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipHandoverRequested(
  event: OwnershipHandoverRequestedEvent
): void {
  let entity = new OwnershipHandoverRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pendingOwner = event.params.pendingOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldOwner = event.params.oldOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestUnstake(event: RequestUnstakeEvent): void {
  let entity = new RequestUnstake(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.stakingId = event.params.stakingId
  entity.recipient = event.params.recipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRolesUpdated(event: RolesUpdatedEvent): void {
  let entity = new RolesUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.roles = event.params.roles

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStaked(event: StakedEvent): void {
  let entity = new Staked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.stakingId = event.params.stakingId
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleToppedUp(event: ToppedUpEvent): void {
  let entity = new ToppedUp(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.stakingId = event.params.stakingId
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnstaked(event: UnstakedEvent): void {
  let entity = new Unstaked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.stakingId = event.params.stakingId
  entity.recipient = event.params.recipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
