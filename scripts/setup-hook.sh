#!/bin/bash

echo "Copying pre-push hook into .git/hooks"
cp pre-push ../.git/hooks/
echo "Providing pre-push hook execution permission"
chmod +x ../.git/hooks/pre-push