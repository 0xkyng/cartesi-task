# Errors Smart Contract

## Overview

`Errors`is a simple Solidity smart contract that implements `require()`, `assert()`, and `revert()` statements.
**Features**

`setValue`: This function checks if a given unsigned integer is greater than 0 using the `require()` statement. If the condition is not met, it reverts the transaction and provides an error message.
`incrementValue`: This function checks if a given unsigned integer is greater than 0 using the `assert()` statement. If the condition is not met, it reverts the transaction.
`resetValue`: This function resets the current value to zero if the current value is not zero. If the current value is zero, it reverts the transaction and provides an error message.

This contract is deployed on the mumbai testnest at this addresss: 0x7de1e6ae6d54F747CaCF92957954c306DCeABfd1

The frontend integration is done using thirdweb and the value to be set is hardcoded as 23, such that once a user signs the transaction to set value, it sets the value as 23.

Live link: https://cartesi-task.vercel.app/