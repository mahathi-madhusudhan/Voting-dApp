// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Poll {
    string public name;
    uint256 public yes;
    uint256 public no;
    uint256 public duration;

    mapping(address => bool) public voted_voters;

    constructor(string memory _name, uint256 _duration) {
        name = _name;
        yes = 0;
        no = 0;
        duration = block.timestamp + _duration;
    }

    modifier active() {
        require(block.timestamp < duration, "Inactive Poll");
        _;
    }

    function voteYes() external active {
        require(!voted_voters[msg.sender], "Alreadfy Voted");
        yes++;
        voted_voters[msg.sender] = true;
    }

    function voteNo() external active {
        require(!voted_voters[msg.sender], "Alreadfy Voted");
        no++;
        voted_voters[msg.sender] = true;
    }

    function getRemainingTime() public view returns (uint256) {
        if (block.timestamp >= duration) {
            return 0;
        } else {
            return duration - block.timestamp;
        }
    }

    function getYesVotes() public view returns (uint256) {
        return yes;
    }

    function getNoVotes() public view returns (uint256) {
        return no;
    }
}
