# This script helps you to check the annotation.
# It assumes that there are pairs of sound files and TextGrid files with the same names.
# It opens every pair in the specified folder, allow you to edit them, and save the changes automatically.
# Author: Shigeto Kawahara
# Date: 4/27/2010
# 
# Modifications made to allow backwards navigation.
# Modifications by: Joseph LeBeau
# Date: 10/15/2013 
#
# This script will extract all intervals with text on a given tier as individual .wav files. It requires a Sound file.
# The sound file and accompanying TextGrid must be in Praat as objects.
# You will need to input the entire file path for the target folder.
# 2014-03-28 Jevon Heath
#
# Modification made to combine functions of both scripts.
# Modifications by: Jiawei Shao
# Date: 3/16/2023



form 
    sentence Directory /Users/
    comment Tier to extract
    text targettier Extract
    text folder Folder
    boolean Preserve_times no
    boolean Remove_clips_from_list yes
endform

Create Strings as file list... wavlist 'directory$'/*.wav
number_files = Get number of strings
 

for i from 1 to number_files
     # select .wav and .TextGrid
    select Strings wavlist
    filename$ = Get string... i
    Read from file... 'directory$'/'filename$'
    soundname$ = selected$ ("Sound")

    Read from file... 'directory$'/'soundname$'.TextGrid
    gridname$=selected$("TextGrid")


    # Extract non-empty interval


    selectObject ("TextGrid 'gridname$'")
    tiers = do ("Get number of tiers")
    for tier from 1 to tiers
        tiername$ = do$ ("Get tier name...", tier)
        if tiername$ = targettier$
            targettier = tier
        endif
    endfor


    selectObject ("TextGrid 'gridname$'")
    tiername$ = do$ ("Get tier name...", targettier)
    isinterval = do ("Is interval tier...", targettier)
    if isinterval
        intervals = do ("Get number of intervals...", targettier)
        for int from 1 to intervals
            label$ = do$ ("Get label of interval...", targettier, int)
            if label$ <> ""
                start = do ("Get start point...", targettier, int)
                end = do ("Get end point...", targettier, int)
                selectObject ("TextGrid 'gridname$'")
                labelint = do ("Get interval at time...", targettier, start)
                namelabel$ = do$ ("Get label of interval...", targettier, labelint)
                selectObject ("Sound 'soundname$'")
                part = do ("Extract part...", start, end, "rectangular", 1.0, preserve_times)
                selectObject (part)
                do ("Rename...", "'namelabel$'")
                do ("Save as WAV file...", "'folder$'/" + namelabel$ + ".wav")
                if remove_clips_from_list
                    removeObject (part)
                endif
                selectObject ("TextGrid 'gridname$'")
            endif
        endfor
    endif
endfor