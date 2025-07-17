import { BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts"
import { log } from '@graphprotocol/graph-ts'
import {
  CommitStake as CommitStakeEvent,
  ConfigCreated as ConfigCreatedEvent,
  ConfigSet as ConfigSetEvent,
  RequestUnstake as RequestUnstakeEvent,
  Staked as StakedEvent,
  ToppedUp as ToppedUpEvent,
  Unstaked as UnstakedEvent,
  SetConfigCall,
  SetConfigCall__Inputs
} from "../generated/Staking/Staking"
import {
  CommitStake,
  Config,
  RequestUnstake,
  Staked,
  ToppedUp,
  Unstaked
} from "../generated/schema"

export function handleConfigCreated(event: ConfigCreatedEvent): void {
  let entity = new Config(event.params.configId.toI32())

  let input = event.transaction.input;

  entity.bank = event.transaction.from;

  let manager = ethereum.decode(
    "address",
    changetype<Bytes>(input.slice(68, 100))
  )!.toAddress();
  entity.manager = manager;

  let token = ethereum.decode(
    "address",
    changetype<Bytes>(input.slice(100, 132))
  )!.toAddress();
  entity.token = token;

  let interestRate = ethereum.decode(
    "uint256",
    changetype<Bytes>(input.slice(132, 164))
  )!.toBigInt();
  entity.interestRate = interestRate;

  let stakeDuration = ethereum.decode(
    "uint256",
    changetype<Bytes>(input.slice(164, 196))
  )!.toBigInt();
  entity.stakeDuration = stakeDuration;

  let cooldownDuration = ethereum.decode(
    "uint256",
    changetype<Bytes>(input.slice(196, 228))
  )!.toBigInt();
  entity.cooldownDuration = cooldownDuration;

  let maxStake = ethereum.decode(
    "uint256",
    changetype<Bytes>(input.slice(228, 260))
  )!.toBigInt();
  entity.maxStake = maxStake;

  let minStake = ethereum.decode(
    "uint256",
    changetype<Bytes>(input.slice(260, 292))
  )!.toBigInt();
  entity.minStake = minStake;

  let isActive = ethereum.decode(
    "bool",
    changetype<Bytes>(input.slice(292, 324))
  )!.toBoolean();
  entity.isActive = isActive;

  let isTopupEnabled = ethereum.decode(
    "bool",
    changetype<Bytes>(input.slice(324, 356))
  )!.toBoolean();
  entity.isTopupEnabled = isTopupEnabled;

  let isPublic = ethereum.decode(
    "bool",
    changetype<Bytes>(input.slice(356, 388))
  )!.toBoolean();
  entity.isPublic = isPublic;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save()
}

export function handleConfigSet(event: ConfigSetEvent): void {
  let entity = Config.load(event.params.configId.toI32())

  if (entity == null) {
    return;
  }
  let input = event.transaction.input;

  let bank = ethereum.decode(
    "address",
    changetype<Bytes>(input.slice(36, 68))
  )!.toAddress();
  entity.bank = bank;

  let manager = ethereum.decode(
    "address",
    changetype<Bytes>(input.slice(68, 100))
  )!.toAddress();
  entity.manager = manager;

  let token = ethereum.decode(
    "address",
    changetype<Bytes>(input.slice(100, 132))
  )!.toAddress();
  entity.token = token;

  let interestRate = ethereum.decode(
    "uint256",
    changetype<Bytes>(input.slice(132, 164))
  )!.toBigInt();
  entity.interestRate = interestRate;

  let stakeDuration = ethereum.decode(
    "uint256",
    changetype<Bytes>(input.slice(164, 196))
  )!.toBigInt();
  entity.stakeDuration = stakeDuration;

  let cooldownDuration = ethereum.decode(
    "uint256",
    changetype<Bytes>(input.slice(196, 228))
  )!.toBigInt();
  entity.cooldownDuration = cooldownDuration;

  let maxStake = ethereum.decode(
    "uint256",
    changetype<Bytes>(input.slice(228, 260))
  )!.toBigInt();
  entity.maxStake = maxStake;

  let minStake = ethereum.decode(
    "uint256",
    changetype<Bytes>(input.slice(260, 292))
  )!.toBigInt();
  entity.minStake = minStake;

  let isActive = ethereum.decode(
    "bool",
    changetype<Bytes>(input.slice(292, 324))
  )!.toBoolean();
  entity.isActive = isActive;

  let isTopupEnabled = ethereum.decode(
    "bool",
    changetype<Bytes>(input.slice(324, 356))
  )!.toBoolean();
  entity.isTopupEnabled = isTopupEnabled;

  let isPublic = ethereum.decode(
    "bool",
    changetype<Bytes>(input.slice(356, 388))
  )!.toBoolean();
  entity.isPublic = isPublic;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save()
}

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
