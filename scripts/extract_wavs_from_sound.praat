#This script will extract all intervals with text on a given tier as
#individual .wav files. It requires a Sound file.
#The sound file and accompanying TextGrid must be in Praat as objects.
#You will need to input the entire file path for the target folder.
#2014-03-28 Jevon Heath
form 
    comment Name of sound file
    text filename File
    comment Tier to extract
    text targettier Extract
    # comment Tier to get name from
    # text namesource Translation
    comment Folder to save in
    text folder Clips
    boolean Preserve_times no
    boolean Remove_clips_from_list yes
endform
selectObject ("TextGrid 'filename$'")
tiers = do ("Get number of tiers")
for tier from 1 to tiers
    tiername$ = do$ ("Get tier name...", tier)
    if tiername$ = targettier$
        targettier = tier
    endif
endfor


selectObject ("TextGrid 'filename$'")
tiername$ = do$ ("Get tier name...", targettier)
isinterval = do ("Is interval tier...", targettier)
if isinterval
    intervals = do ("Get number of intervals...", targettier)
    for int from 1 to intervals
        label$ = do$ ("Get label of interval...", targettier, int)
        if label$ <> ""
            start = do ("Get start point...", targettier, int)
            end = do ("Get end point...", targettier, int)
            selectObject ("TextGrid 'filename$'")
            labelint = do ("Get interval at time...", targettier, start)
            namelabel$ = do$ ("Get label of interval...", targettier, labelint)
            selectObject ("Sound 'filename$'")
            part = do ("Extract part...", start, end, "rectangular", 1.0, preserve_times)
            selectObject (part)
            do ("Rename...", "'namelabel$'")
            do ("Save as WAV file...", "'folder$'/" + namelabel$ + ".wav")
            if remove_clips_from_list
                removeObject (part)
            endif
            selectObject ("TextGrid 'filename$'")
        endif
    endfor
endif