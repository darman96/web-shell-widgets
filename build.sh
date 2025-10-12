#!/bin/bash

# Create central dist directory if it doesn't exist
mkdir -p ./dist/widgets

# Find and build each widget with its own vite config
widget_configs=$(find ./widgets -type f -name 'vite.config.ts')
if [ -z "$widget_configs" ]; then
  echo "No widget-specific configs found. Using main config..."
  npx vite build
else
  echo "Building widgets with individual configs..."
  echo "Found widget configs:"
  echo "$widget_configs" | while read config; do
    widget_name=$(basename "$(dirname "$config")")
    echo " - $widget_name"
  done

  echo "$widget_configs" | while read config; do
    widget_name=$(basename "$(dirname "$config")")
    printf "\n\n"
    echo "Building widget: $widget_name ..."

    # Navigate to widget directory and build
    (cd "$(dirname "$config")" && npx vite build --config "./vite.config.ts")
  done
fi
