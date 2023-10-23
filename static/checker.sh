#!/bin/bash

# Define folder names
folders=("600" "1200" "2000")

# Loop through each folder
for folder in "${folders[@]}"; do
	# Loop through files in the current folder
	for file in "$folder"/*; do
		# Extract the base name of the file (without extension and resolution)
		base_name=$(basename "$file" | sed -E 's/([a-zA-Z0-9_]{10,16})_'"$folder"'w\.webp/\1/')
		echo $base_name
		# Check if 600w, 1200w, and 2000w versions exist for the current file
		# if [ ! -e "$folder/$base_name"_600w.webp ]; then
		# 	echo "Missing 600w version for $base_name"
		# fi
		# if [ ! -e "$folder/$base_name"_1200w.webp ]; then
		# 	echo "issing  $folder/$base_name _1200w.webp"
		# fi
		# if [ ! -e "$folder/$base_name"_2000w.webp ]; then
		# 	echo "Missing 2000w version for $file"
		# fi
	done
done
