#!/bin/zsh
for i in mapping_movement/*/*.txt; do
	filename=$i:t:r
	echo '\n' >> $i
	echo 'slug: `'$filename'`,'  >> $i
	echo 'referringEssay: ' >> $i
	echo 'content: ' >> $i
	echo 'title: ' >> $i
	echo 'maps: ' >> $i
done;
