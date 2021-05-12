// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

library PoseidonT3 {
    function poseidon(uint256[2] memory input) public pure returns (uint256) {}
}

library PoseidonT6 {
    function poseidon(uint256[5] memory input) public pure returns (uint256) {}
}

contract PoseidonBenchmarks {
    function hash2(uint256[2] memory array) public {
        PoseidonT3.poseidon(array);
    }

    function hash5(uint256[5] memory array) public {
        PoseidonT6.poseidon(array);
    }
}
