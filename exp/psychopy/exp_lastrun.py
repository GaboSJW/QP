#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.4),
    on Sun Apr  2 14:09:05 2023
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.4'
expName = 'exp'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/gabmac/Documents/RU/QP/exp/psychopy/exp_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1920, 1080], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "welcome" ---
welcome_text = visual.TextStim(win=win, name='welcome_text',
    text="Welcome to the study.\n\nIn this study, you'll finish two similar but different experiments. You'll receive instructions and do a couple of practice trials before the real experiments begin.\n\nBetween the two experiments you'll have time to take a 5-minute break. During the experiment, if you need to pause or stop, please raise you hand so the researcher can assist you.\n\nPress space to continue.",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_welcome = keyboard.Keyboard()

# --- Initialize components for Routine "exp1_instr" ---
insturction_1 = visual.TextStim(win=win, name='insturction_1',
    text="This is insturction for experiment 1.\n\nIn this experiment you will see two image items on the screen while listening a sentence. The sentence you hear can be English, Spanish or a mix of both. Each sentence will mention one and only one of the two items. When you hear the image item being mentioned, please press the corresponding left/right shift key on keyboard. \n\nBefore the experiment starts, let's do a couple of practice trials.\n\nPress space to start practice trial.",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_instr = keyboard.Keyboard()

# --- Initialize components for Routine "exp1_trial" ---
exp1_trial_image_l = visual.ImageStim(
    win=win,
    name='exp1_trial_image_l', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(-0.5, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
exp1_trial_image_r = visual.ImageStim(
    win=win,
    name='exp1_trial_image_r', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0.5, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
key_resp = keyboard.Keyboard()
exp1_trial_sound = sound.Sound('A', secs=-1, stereo=True, hamming=True,
    name='exp1_trial_sound')
exp1_trial_sound.setVolume(1.0)

# --- Initialize components for Routine "end_exp1_trial" ---

# --- Initialize components for Routine "exp1_start" ---

# --- Initialize components for Routine "exp1" ---

# --- Initialize components for Routine "exp1_end" ---

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "welcome" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
end_welcome.keys = []
end_welcome.rt = []
_end_welcome_allKeys = []
# keep track of which components have finished
welcomeComponents = [welcome_text, end_welcome]
for thisComponent in welcomeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "welcome" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *welcome_text* updates
    if welcome_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome_text.frameNStart = frameN  # exact frame index
        welcome_text.tStart = t  # local t and not account for scr refresh
        welcome_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome_text, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'welcome_text.started')
        welcome_text.setAutoDraw(True)
    
    # *end_welcome* updates
    if end_welcome.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_welcome.frameNStart = frameN  # exact frame index
        end_welcome.tStart = t  # local t and not account for scr refresh
        end_welcome.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_welcome, 'tStartRefresh')  # time at next scr refresh
        end_welcome.status = STARTED
        # keyboard checking is just starting
        end_welcome.clock.reset()  # now t=0
    if end_welcome.status == STARTED:
        theseKeys = end_welcome.getKeys(keyList=['space'], waitRelease=False)
        _end_welcome_allKeys.extend(theseKeys)
        if len(_end_welcome_allKeys):
            end_welcome.keys = _end_welcome_allKeys[-1].name  # just the last key pressed
            end_welcome.rt = _end_welcome_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in welcomeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "welcome" ---
for thisComponent in welcomeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if end_welcome.keys in ['', [], None]:  # No response was made
    end_welcome.keys = None
thisExp.addData('end_welcome.keys',end_welcome.keys)
if end_welcome.keys != None:  # we had a response
    thisExp.addData('end_welcome.rt', end_welcome.rt)
thisExp.nextEntry()
# the Routine "welcome" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "exp1_instr" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
end_instr.keys = []
end_instr.rt = []
_end_instr_allKeys = []
# keep track of which components have finished
exp1_instrComponents = [insturction_1, end_instr]
for thisComponent in exp1_instrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "exp1_instr" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *insturction_1* updates
    if insturction_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        insturction_1.frameNStart = frameN  # exact frame index
        insturction_1.tStart = t  # local t and not account for scr refresh
        insturction_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(insturction_1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'insturction_1.started')
        insturction_1.setAutoDraw(True)
    
    # *end_instr* updates
    if end_instr.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_instr.frameNStart = frameN  # exact frame index
        end_instr.tStart = t  # local t and not account for scr refresh
        end_instr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr, 'tStartRefresh')  # time at next scr refresh
        end_instr.status = STARTED
        # keyboard checking is just starting
        end_instr.clock.reset()  # now t=0
    if end_instr.status == STARTED:
        theseKeys = end_instr.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_allKeys.extend(theseKeys)
        if len(_end_instr_allKeys):
            end_instr.keys = _end_instr_allKeys[-1].name  # just the last key pressed
            end_instr.rt = _end_instr_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in exp1_instrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "exp1_instr" ---
for thisComponent in exp1_instrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "exp1_instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
exp1_trial_loop = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('/Users/gabmac/Documents/RU/QP/exp/practice_trial/trial_exp_1/trial.xlsx', selection='0:8'),
    seed=None, name='exp1_trial_loop')
thisExp.addLoop(exp1_trial_loop)  # add the loop to the experiment
thisExp1_trial_loop = exp1_trial_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisExp1_trial_loop.rgb)
if thisExp1_trial_loop != None:
    for paramName in thisExp1_trial_loop:
        exec('{} = thisExp1_trial_loop[paramName]'.format(paramName))

for thisExp1_trial_loop in exp1_trial_loop:
    currentLoop = exp1_trial_loop
    # abbreviate parameter names if possible (e.g. rgb = thisExp1_trial_loop.rgb)
    if thisExp1_trial_loop != None:
        for paramName in thisExp1_trial_loop:
            exec('{} = thisExp1_trial_loop[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "exp1_trial" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    exp1_trial_image_l.setImage(left)
    exp1_trial_image_r.setImage(right)
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    exp1_trial_sound.setSound(sound_dir, secs=4, hamming=True)
    exp1_trial_sound.setVolume(1.0, log=False)
    # keep track of which components have finished
    exp1_trialComponents = [exp1_trial_image_l, exp1_trial_image_r, key_resp, exp1_trial_sound]
    for thisComponent in exp1_trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "exp1_trial" ---
    while continueRoutine and routineTimer.getTime() < 5.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *exp1_trial_image_l* updates
        if exp1_trial_image_l.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            exp1_trial_image_l.frameNStart = frameN  # exact frame index
            exp1_trial_image_l.tStart = t  # local t and not account for scr refresh
            exp1_trial_image_l.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp1_trial_image_l, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'exp1_trial_image_l.started')
            exp1_trial_image_l.setAutoDraw(True)
        if exp1_trial_image_l.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > exp1_trial_image_l.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                exp1_trial_image_l.tStop = t  # not accounting for scr refresh
                exp1_trial_image_l.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'exp1_trial_image_l.stopped')
                exp1_trial_image_l.setAutoDraw(False)
        
        # *exp1_trial_image_r* updates
        if exp1_trial_image_r.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            exp1_trial_image_r.frameNStart = frameN  # exact frame index
            exp1_trial_image_r.tStart = t  # local t and not account for scr refresh
            exp1_trial_image_r.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp1_trial_image_r, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'exp1_trial_image_r.started')
            exp1_trial_image_r.setAutoDraw(True)
        if exp1_trial_image_r.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > exp1_trial_image_r.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                exp1_trial_image_r.tStop = t  # not accounting for scr refresh
                exp1_trial_image_r.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'exp1_trial_image_r.stopped')
                exp1_trial_image_r.setAutoDraw(False)
        
        # *key_resp* updates
        waitOnFlip = False
        if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp.frameNStart = frameN  # exact frame index
            key_resp.tStart = t  # local t and not account for scr refresh
            key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp.started')
            key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
        if key_resp.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp.tStop = t  # not accounting for scr refresh
                key_resp.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp.stopped')
                key_resp.status = FINISHED
        if key_resp.status == STARTED and not waitOnFlip:
            theseKeys = key_resp.getKeys(keyList=['lshift','rshift'], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = [key.name for key in _key_resp_allKeys]  # storing all keys
                key_resp.rt = [key.rt for key in _key_resp_allKeys]
                # a response ends the routine
                continueRoutine = False
        # start/stop exp1_trial_sound
        if exp1_trial_sound.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            exp1_trial_sound.frameNStart = frameN  # exact frame index
            exp1_trial_sound.tStart = t  # local t and not account for scr refresh
            exp1_trial_sound.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('exp1_trial_sound.started', tThisFlipGlobal)
            exp1_trial_sound.play(when=win)  # sync with win flip
        if exp1_trial_sound.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > exp1_trial_sound.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                exp1_trial_sound.tStop = t  # not accounting for scr refresh
                exp1_trial_sound.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'exp1_trial_sound.stopped')
                exp1_trial_sound.stop()
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in exp1_trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "exp1_trial" ---
    for thisComponent in exp1_trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp.keys in ['', [], None]:  # No response was made
        key_resp.keys = None
    exp1_trial_loop.addData('key_resp.keys',key_resp.keys)
    if key_resp.keys != None:  # we had a response
        exp1_trial_loop.addData('key_resp.rt', key_resp.rt)
    exp1_trial_sound.stop()  # ensure sound has stopped at end of routine
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-5.000000)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'exp1_trial_loop'


# --- Prepare to start Routine "end_exp1_trial" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# keep track of which components have finished
end_exp1_trialComponents = []
for thisComponent in end_exp1_trialComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "end_exp1_trial" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in end_exp1_trialComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "end_exp1_trial" ---
for thisComponent in end_exp1_trialComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "end_exp1_trial" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "exp1_start" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# keep track of which components have finished
exp1_startComponents = []
for thisComponent in exp1_startComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "exp1_start" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in exp1_startComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "exp1_start" ---
for thisComponent in exp1_startComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "exp1_start" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
exp1_loop = data.TrialHandler(nReps=None, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='exp1_loop')
thisExp.addLoop(exp1_loop)  # add the loop to the experiment
thisExp1_loop = exp1_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisExp1_loop.rgb)
if thisExp1_loop != None:
    for paramName in thisExp1_loop:
        exec('{} = thisExp1_loop[paramName]'.format(paramName))

for thisExp1_loop in exp1_loop:
    currentLoop = exp1_loop
    # abbreviate parameter names if possible (e.g. rgb = thisExp1_loop.rgb)
    if thisExp1_loop != None:
        for paramName in thisExp1_loop:
            exec('{} = thisExp1_loop[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "exp1" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # keep track of which components have finished
    exp1Components = []
    for thisComponent in exp1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "exp1" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in exp1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "exp1" ---
    for thisComponent in exp1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "exp1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed None repeats of 'exp1_loop'


# --- Prepare to start Routine "exp1_end" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# keep track of which components have finished
exp1_endComponents = []
for thisComponent in exp1_endComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "exp1_end" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in exp1_endComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "exp1_end" ---
for thisComponent in exp1_endComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "exp1_end" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
