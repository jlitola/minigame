#!/bin/sh

# This script downloads lates Phaser Typescript Types, as they are not available 
# easily with standard mechanisms.

echo "Downloading phaser types..."
curl https://raw.githubusercontent.com/photonstorm/phaser3-docs/master/typescript/phaser.d.ts -o src/@types/phaser/index.d.ts
