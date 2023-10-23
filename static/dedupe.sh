#!/bin/bash

# Check if the input file is provided as an argument
if [ "$#" -ne 1 ]; then
	echo "Usage: $0 input_file"
	exit 1
fi

input_file="$1"

# Check if the input file exists
if [ ! -f "$input_file" ]; then
	echo "Error: File '$input_file' not found."
	exit 1
fi

# Remove duplicate lines and overwrite the original file
sort "$input_file" | uniq >"$input_file.tmp"
mv "$input_file.tmp" "$input_file"

echo "Duplicate lines removed and saved to '$input_file'."
