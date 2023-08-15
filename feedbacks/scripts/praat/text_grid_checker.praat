# This script helps you to check the annotation.
# It assumes that there are pairs of sound files and TextGrid files with the same names.
# It opens every pair in the specified folder, allow you to edit them, and save the changes automatically.
# Author: Shigeto Kawahara
# Date: 4/27/2010
# 
# Modifications made to allow backwards navigation.
# Modifications by: Joseph LeBeau
# Date: 10/15/2013 



form 
	sentence Directory C:\
endform

Create Strings as file list... wavlist 'directory$'/*.wav
number_files = Get number of strings
 
# Select .wav and .TextGrid
for i from 1 to number_files
	select Strings wavlist
	filename$ = Get string... i
	Read from file... 'directory$'/'filename$'
	soundname$ = selected$ ("Sound")

	Read from file... 'directory$'/'soundname$'.TextGrid
	gridname$=selected$("TextGrid")

	select Sound 'soundname$'
	plus TextGrid 'gridname$'

#Extract non-empty interval

	Edit
	beginPause ("File " + string$(i) + " of " + string$(number_files))
       		comment ("Check the annotation. Click next when you're done, or previous to return to the last file.")
    	clicked = endPause ("Previous", "Next", 2)
	if clicked == 1
		if i <= 1
			i = 0
		else
			i = i-2
		endif
	endif
	select TextGrid 'gridname$'
    	Write to text file... 'directory$'/'soundname$'.TextGrid

	select all
	minus Strings wavlist
     	Remove
endfor
 
select all
Removetext_grid_checkertext_grid_checker