# Huiwen Goy, June 2012; huiwen.goy@utoronto.ca

form Resampling
comment Original soundfiles
sentence Directory /Users/Shared/Praat_test/OrigSoundfiles
comment New sampling rate
integer Newsampling 20000
comment Append optional suffix to new files
sentence Suffix _20000
comment Save resampled files to
sentence Newdirectory /Users/Shared/Praat_test/NewSoundfiles
endform

Create Strings as file list...  list 'directory$'/*.wav
number_files = Get number of strings

for j from 1 to number_files

select Strings list
currentfile$ = Get string... j
filename$ = currentfile$ - ".wav"

Read from file... 'directory$'/'currentfile$'
select Sound 'filename$'
Resample... newsampling 50
newfilename$ = "'filename$'" + "'suffix$'"

Write to WAV file... 'newdirectory$'/'newfilename$'.wav

endfor

select all
Remove

clearinfo
printline 'number_files' files resampled 
printline :O)