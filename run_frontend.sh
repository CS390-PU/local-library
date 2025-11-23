#!/bin/bash
set -e

FRONTEND_DIR="$(pwd)/frontend"
TARGET_DIR="$HOME/public_html/local-library"

echo "👉 Building site for production..."
cd "$FRONTEND_DIR"
npm install
npm run build

echo "🚚 Deploying to $TARGET_DIR ..."
mkdir -p "$TARGET_DIR"
rm -rf "$TARGET_DIR"/*
cp -r dist/* "$TARGET_DIR/"

echo "✅ Frontend deployed!"
echo "Visit:"
echo "   https://gray.cs.pacificu.edu/~$(whoami)/local-library/"
