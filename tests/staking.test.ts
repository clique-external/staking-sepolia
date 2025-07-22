import {
  afterAll,
  assert,
  beforeAll,
  clearStore,
  describe,
  test,
} from "matchstick-as/assembly/index";
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { CommitStake } from "../generated/schema";
import { CommitStake as CommitStakeEvent } from "../generated/Staking/Staking";
import { handleCommitStake } from "../src/staking";
import { createCommitStakeEvent } from "./staking-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#tests-structure

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let stakingId = BigInt.fromI32(234);
    let commitment = Bytes.fromI32(1234567890);
    let newCommitStakeEvent = createCommitStakeEvent(stakingId, commitment);
    handleCommitStake(newCommitStakeEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#write-a-unit-test

  test("CommitStake created and stored", () => {
    assert.entityCount("CommitStake", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CommitStake",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "stakingId",
      "234",
    );
    assert.fieldEquals(
      "CommitStake",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "commitment",
      "1234567890",
    );

    // More assert options:
    // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#asserts
  });
});
