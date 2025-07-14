import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
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
} from "../generated/Staking/Staking"

export function createCommitStakeEvent(
  stakingId: BigInt,
  commitment: Bytes
): CommitStake {
  let commitStakeEvent = changetype<CommitStake>(newMockEvent())

  commitStakeEvent.parameters = new Array()

  commitStakeEvent.parameters.push(
    new ethereum.EventParam(
      "stakingId",
      ethereum.Value.fromUnsignedBigInt(stakingId)
    )
  )
  commitStakeEvent.parameters.push(
    new ethereum.EventParam("commitment", ethereum.Value.fromBytes(commitment))
  )

  return commitStakeEvent
}

export function createConfigCreatedEvent(configId: BigInt): ConfigCreated {
  let configCreatedEvent = changetype<ConfigCreated>(newMockEvent())

  configCreatedEvent.parameters = new Array()

  configCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "configId",
      ethereum.Value.fromUnsignedBigInt(configId)
    )
  )

  return configCreatedEvent
}

export function createConfigSetEvent(configId: BigInt): ConfigSet {
  let configSetEvent = changetype<ConfigSet>(newMockEvent())

  configSetEvent.parameters = new Array()

  configSetEvent.parameters.push(
    new ethereum.EventParam(
      "configId",
      ethereum.Value.fromUnsignedBigInt(configId)
    )
  )

  return configSetEvent
}

export function createOwnershipHandoverCanceledEvent(
  pendingOwner: Address
): OwnershipHandoverCanceled {
  let ownershipHandoverCanceledEvent =
    changetype<OwnershipHandoverCanceled>(newMockEvent())

  ownershipHandoverCanceledEvent.parameters = new Array()

  ownershipHandoverCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return ownershipHandoverCanceledEvent
}

export function createOwnershipHandoverRequestedEvent(
  pendingOwner: Address
): OwnershipHandoverRequested {
  let ownershipHandoverRequestedEvent =
    changetype<OwnershipHandoverRequested>(newMockEvent())

  ownershipHandoverRequestedEvent.parameters = new Array()

  ownershipHandoverRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return ownershipHandoverRequestedEvent
}

export function createOwnershipTransferredEvent(
  oldOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRequestUnstakeEvent(
  stakingId: BigInt,
  recipient: Address
): RequestUnstake {
  let requestUnstakeEvent = changetype<RequestUnstake>(newMockEvent())

  requestUnstakeEvent.parameters = new Array()

  requestUnstakeEvent.parameters.push(
    new ethereum.EventParam(
      "stakingId",
      ethereum.Value.fromUnsignedBigInt(stakingId)
    )
  )
  requestUnstakeEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return requestUnstakeEvent
}

export function createRolesUpdatedEvent(
  user: Address,
  roles: BigInt
): RolesUpdated {
  let rolesUpdatedEvent = changetype<RolesUpdated>(newMockEvent())

  rolesUpdatedEvent.parameters = new Array()

  rolesUpdatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  rolesUpdatedEvent.parameters.push(
    new ethereum.EventParam("roles", ethereum.Value.fromUnsignedBigInt(roles))
  )

  return rolesUpdatedEvent
}

export function createStakedEvent(
  stakingId: BigInt,
  recipient: Address,
  amount: BigInt
): Staked {
  let stakedEvent = changetype<Staked>(newMockEvent())

  stakedEvent.parameters = new Array()

  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "stakingId",
      ethereum.Value.fromUnsignedBigInt(stakingId)
    )
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return stakedEvent
}

export function createToppedUpEvent(
  stakingId: BigInt,
  recipient: Address,
  amount: BigInt
): ToppedUp {
  let toppedUpEvent = changetype<ToppedUp>(newMockEvent())

  toppedUpEvent.parameters = new Array()

  toppedUpEvent.parameters.push(
    new ethereum.EventParam(
      "stakingId",
      ethereum.Value.fromUnsignedBigInt(stakingId)
    )
  )
  toppedUpEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  toppedUpEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return toppedUpEvent
}

export function createUnstakedEvent(
  stakingId: BigInt,
  recipient: Address
): Unstaked {
  let unstakedEvent = changetype<Unstaked>(newMockEvent())

  unstakedEvent.parameters = new Array()

  unstakedEvent.parameters.push(
    new ethereum.EventParam(
      "stakingId",
      ethereum.Value.fromUnsignedBigInt(stakingId)
    )
  )
  unstakedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return unstakedEvent
}
