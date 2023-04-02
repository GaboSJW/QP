Create Strings as file list... soundFiles ../exp/production/splice/cut/*.wav
select Strings soundFiles
numberOfFiles = Get number of strings

for i to numberOfFiles
	select Strings soundFiles
	soundName$ = Get string... i
	Read from file... ../exp/production/splice/cut/'soundName$'
	Scale peak... 0.99
	Save as WAV file... ../exp/production/splice/peak_int/'soundName$'
	Remove
endfor