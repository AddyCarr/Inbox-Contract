// SPDX-License-Identifier: MIT
pragma solidity ^0.4.17;


/// @title Inbox storage and retreival contract
/// @dev This contract is used to store and retreive a message
/// @author Adam Carr
/// @notice You can use this contract for only the most basic simulation

contract Inbox {
    string public message;

    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMesssage) public {
        message = newMesssage;
    }

}