#!/bin/bash

echo "Getting githook path"
hookpath=$(pwd)/.githooks
echo "Telling git what are our path for hooks"
git config --global core.hooksPath $hookpath