#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.5),
    on Sun Apr  2 20:28:09 2023
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
psychopyVersion = '2022.2.5'
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
    originPath='/Users/gabmac/Documents/RU/QP/exp/group1/exp_lastrun.py',
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
exp1_instr_text = visual.TextStim(win=win, name='exp1_instr_text',
    text="Welcome! Here are the instructions for experiment 1.\n\nIn this experiment you will see two items on the screen while listening to a sentence. The sentence you hear can be English, Spanish or a mix of both. Only one of the two items will be mentioned in the recording. When you hear the item, you should press the corresponding left/right shift key immediately. You only need to press the key ONCE.\n\nBefore the experiment starts, let's do a couple of practice trials.\n\nPress space to start practice trial.",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
exp1_instr_key = keyboard.Keyboard()

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
exp1_trial_key = keyboard.Keyboard()
exp1_trial_sound = sound.Sound('A', secs=-1, stereo=False, hamming=True,
    name='exp1_trial_sound')
exp1_trial_sound.setVolume(1.0)

# --- Initialize components for Routine "end_exp1_trial" ---
end_exp1_trial_text = visual.TextStim(win=win, name='end_exp1_trial_text',
    text='Good Job!\n\nIf you want to practice again, press space.\n\nIf you are ready to start the experiment, press right shift.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_exp1_trial_key = keyboard.Keyboard()

# --- Initialize components for Routine "exp1_start" ---
exp1_start_key = keyboard.Keyboard()
exp1_start_text = visual.TextStim(win=win, name='exp1_start_text',
    text="Now let's start the experiment 1!\n\nPlease keep your hands on the left-shift key and right-shift key. \n\nTo start, please, press the left-shift key then the right-shift key.",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# --- Initialize components for Routine "exp1" ---
exp1_image_l = visual.ImageStim(
    win=win,
    name='exp1_image_l', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(-0.5, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
exp1_image_r = visual.ImageStim(
    win=win,
    name='exp1_image_r', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0.5, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
exp1_key = keyboard.Keyboard()
exp1_sound = sound.Sound('A', secs=-1, stereo=False, hamming=True,
    name='exp1_sound')
exp1_sound.setVolume(1.0)

# --- Initialize components for Routine "exp1_end" ---
exp1_end_text = visual.TextStim(win=win, name='exp1_end_text',
    text='Good Job! This is the end of experiment 1\n\nBefore we start experiment 2, you can take a short break.\n\nWhen you are ready to start experiment 2, please press space to continue.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
exp1_end_key = keyboard.Keyboard()

# --- Initialize components for Routine "exp2_instr" ---
exp2_instr_text = visual.TextStim(win=win, name='exp2_instr_text',
    text="Welcome back. Here are the instrctions for experiment 2\n\nYou'll see two flags: American flag representing English and Spanish flag respresenting Spanish. You'll listen to sentences and pick the language you hear using left/right shift key. If you hear a change of language, you should then press the other shift key as soon as you hear the change.\n\nBefore the experiment starts, let's do a couple of practice trials.\n\nPress space to start practice trial.",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
exp2_instr_key = keyboard.Keyboard()

# --- Initialize components for Routine "exp2_trial" ---
exp2_trial_iamge_l = visual.ImageStim(
    win=win,
    name='exp2_trial_iamge_l', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(-0.5, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
exp2_trial_image_r = visual.ImageStim(
    win=win,
    name='exp2_trial_image_r', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0.5, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
exp2_trial_key = keyboard.Keyboard()
exp2_trial_sound = sound.Sound('A', secs=-1, stereo=False, hamming=True,
    name='exp2_trial_sound')
exp2_trial_sound.setVolume(1.0)

# --- Initialize components for Routine "end_exp2_trial" ---
end_exp2_trial_text = visual.TextStim(win=win, name='end_exp2_trial_text',
    text='Good Job!\n\nIf you want to practice again, press space.\n\nIf you are ready to start the experiment, press right shift.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_exp2_trial_key = keyboard.Keyboard()

# --- Initialize components for Routine "exp2_start" ---
exp2_start_key = keyboard.Keyboard()
exp2_start_text = visual.TextStim(win=win, name='exp2_start_text',
    text="Now let's start the experiment 2!\n\nPlease keep your hands on the left-shift key and right-shift key. \n\nTo start, please, press the left-shift key then the right-shift key.",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# --- Initialize components for Routine "exp2" ---
exp2_image_l = visual.ImageStim(
    win=win,
    name='exp2_image_l', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(-0.5, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
exp2_image_r = visual.ImageStim(
    win=win,
    name='exp2_image_r', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0.5, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
exp2_key = keyboard.Keyboard()
exp2_sound = sound.Sound('A', secs=-1, stereo=False, hamming=True,
    name='exp2_sound')
exp2_sound.setVolume(1.0)

# --- Initialize components for Routine "full_end" ---
full_end_text = visual.TextStim(win=win, name='full_end_text',
    text='This is the end of the study.\n\n\nThank you for your participation!\n\nHave a great day!\n\nPress space to exit.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
full_end_key = keyboard.Keyboard()

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
# the Routine "welcome" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
exp1_retrial = data.TrialHandler(nReps=1000.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='exp1_retrial')
thisExp.addLoop(exp1_retrial)  # add the loop to the experiment
thisExp1_retrial = exp1_retrial.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisExp1_retrial.rgb)
if thisExp1_retrial != None:
    for paramName in thisExp1_retrial:
        exec('{} = thisExp1_retrial[paramName]'.format(paramName))

for thisExp1_retrial in exp1_retrial:
    currentLoop = exp1_retrial
    # abbreviate parameter names if possible (e.g. rgb = thisExp1_retrial.rgb)
    if thisExp1_retrial != None:
        for paramName in thisExp1_retrial:
            exec('{} = thisExp1_retrial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "exp1_instr" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    exp1_instr_key.keys = []
    exp1_instr_key.rt = []
    _exp1_instr_key_allKeys = []
    # keep track of which components have finished
    exp1_instrComponents = [exp1_instr_text, exp1_instr_key]
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
        
        # *exp1_instr_text* updates
        if exp1_instr_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            exp1_instr_text.frameNStart = frameN  # exact frame index
            exp1_instr_text.tStart = t  # local t and not account for scr refresh
            exp1_instr_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp1_instr_text, 'tStartRefresh')  # time at next scr refresh
            exp1_instr_text.setAutoDraw(True)
        
        # *exp1_instr_key* updates
        if exp1_instr_key.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            exp1_instr_key.frameNStart = frameN  # exact frame index
            exp1_instr_key.tStart = t  # local t and not account for scr refresh
            exp1_instr_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp1_instr_key, 'tStartRefresh')  # time at next scr refresh
            exp1_instr_key.status = STARTED
            # keyboard checking is just starting
            exp1_instr_key.clock.reset()  # now t=0
        if exp1_instr_key.status == STARTED:
            theseKeys = exp1_instr_key.getKeys(keyList=['space'], waitRelease=False)
            _exp1_instr_key_allKeys.extend(theseKeys)
            if len(_exp1_instr_key_allKeys):
                exp1_instr_key.keys = _exp1_instr_key_allKeys[-1].name  # just the last key pressed
                exp1_instr_key.rt = _exp1_instr_key_allKeys[-1].rt
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
    exp1_trial_loop = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('/Users/gabmac/Documents/RU/QP/exp/practice_trial/trial_exp_1/trial1.xlsx', selection='0:8'),
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
        exp1_trial_key.keys = []
        exp1_trial_key.rt = []
        _exp1_trial_key_allKeys = []
        exp1_trial_sound.setSound(sound_dir, secs=4, hamming=True)
        exp1_trial_sound.setVolume(1.0, log=False)
        # keep track of which components have finished
        exp1_trialComponents = [exp1_trial_image_l, exp1_trial_image_r, exp1_trial_key, exp1_trial_sound]
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
                exp1_trial_image_l.setAutoDraw(True)
            if exp1_trial_image_l.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > exp1_trial_image_l.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    exp1_trial_image_l.tStop = t  # not accounting for scr refresh
                    exp1_trial_image_l.frameNStop = frameN  # exact frame index
                    exp1_trial_image_l.setAutoDraw(False)
            
            # *exp1_trial_image_r* updates
            if exp1_trial_image_r.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                exp1_trial_image_r.frameNStart = frameN  # exact frame index
                exp1_trial_image_r.tStart = t  # local t and not account for scr refresh
                exp1_trial_image_r.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(exp1_trial_image_r, 'tStartRefresh')  # time at next scr refresh
                exp1_trial_image_r.setAutoDraw(True)
            if exp1_trial_image_r.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > exp1_trial_image_r.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    exp1_trial_image_r.tStop = t  # not accounting for scr refresh
                    exp1_trial_image_r.frameNStop = frameN  # exact frame index
                    exp1_trial_image_r.setAutoDraw(False)
            
            # *exp1_trial_key* updates
            waitOnFlip = False
            if exp1_trial_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                exp1_trial_key.frameNStart = frameN  # exact frame index
                exp1_trial_key.tStart = t  # local t and not account for scr refresh
                exp1_trial_key.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(exp1_trial_key, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'exp1_trial_key.started')
                exp1_trial_key.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(exp1_trial_key.clock.reset)  # t=0 on next screen flip
            if exp1_trial_key.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > exp1_trial_key.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    exp1_trial_key.tStop = t  # not accounting for scr refresh
                    exp1_trial_key.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'exp1_trial_key.stopped')
                    exp1_trial_key.status = FINISHED
            if exp1_trial_key.status == STARTED and not waitOnFlip:
                theseKeys = exp1_trial_key.getKeys(keyList=['lshift','rshift'], waitRelease=False)
                _exp1_trial_key_allKeys.extend(theseKeys)
                if len(_exp1_trial_key_allKeys):
                    exp1_trial_key.keys = [key.name for key in _exp1_trial_key_allKeys]  # storing all keys
                    exp1_trial_key.rt = [key.rt for key in _exp1_trial_key_allKeys]
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
        if exp1_trial_key.keys in ['', [], None]:  # No response was made
            exp1_trial_key.keys = None
        exp1_trial_loop.addData('exp1_trial_key.keys',exp1_trial_key.keys)
        if exp1_trial_key.keys != None:  # we had a response
            exp1_trial_loop.addData('exp1_trial_key.rt', exp1_trial_key.rt)
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
    end_exp1_trial_key.keys = []
    end_exp1_trial_key.rt = []
    _end_exp1_trial_key_allKeys = []
    # keep track of which components have finished
    end_exp1_trialComponents = [end_exp1_trial_text, end_exp1_trial_key]
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
        
        # *end_exp1_trial_text* updates
        if end_exp1_trial_text.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            end_exp1_trial_text.frameNStart = frameN  # exact frame index
            end_exp1_trial_text.tStart = t  # local t and not account for scr refresh
            end_exp1_trial_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(end_exp1_trial_text, 'tStartRefresh')  # time at next scr refresh
            end_exp1_trial_text.setAutoDraw(True)
        
        # *end_exp1_trial_key* updates
        waitOnFlip = False
        if end_exp1_trial_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            end_exp1_trial_key.frameNStart = frameN  # exact frame index
            end_exp1_trial_key.tStart = t  # local t and not account for scr refresh
            end_exp1_trial_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(end_exp1_trial_key, 'tStartRefresh')  # time at next scr refresh
            end_exp1_trial_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(end_exp1_trial_key.clock.reset)  # t=0 on next screen flip
        if end_exp1_trial_key.status == STARTED and not waitOnFlip:
            theseKeys = end_exp1_trial_key.getKeys(keyList=['space','rshift'], waitRelease=False)
            _end_exp1_trial_key_allKeys.extend(theseKeys)
            if len(_end_exp1_trial_key_allKeys):
                end_exp1_trial_key.keys = _end_exp1_trial_key_allKeys[-1].name  # just the last key pressed
                end_exp1_trial_key.rt = _end_exp1_trial_key_allKeys[-1].rt
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
    # Run 'End Routine' code from exp1_trial_code
    if end_exp1_trial_key.keys == "rshift":
          exp1_retrial.finished = True
          
    # the Routine "end_exp1_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1000.0 repeats of 'exp1_retrial'


# --- Prepare to start Routine "exp1_start" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
exp1_start_key.keys = []
exp1_start_key.rt = []
_exp1_start_key_allKeys = []
# keep track of which components have finished
exp1_startComponents = [exp1_start_key, exp1_start_text]
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
    
    # *exp1_start_key* updates
    waitOnFlip = False
    if exp1_start_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        exp1_start_key.frameNStart = frameN  # exact frame index
        exp1_start_key.tStart = t  # local t and not account for scr refresh
        exp1_start_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(exp1_start_key, 'tStartRefresh')  # time at next scr refresh
        exp1_start_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(exp1_start_key.clock.reset)  # t=0 on next screen flip
    if exp1_start_key.status == STARTED and not waitOnFlip:
        theseKeys = exp1_start_key.getKeys(keyList=['rshift'], waitRelease=False)
        _exp1_start_key_allKeys.extend(theseKeys)
        if len(_exp1_start_key_allKeys):
            exp1_start_key.keys = _exp1_start_key_allKeys[-1].name  # just the last key pressed
            exp1_start_key.rt = _exp1_start_key_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *exp1_start_text* updates
    if exp1_start_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        exp1_start_text.frameNStart = frameN  # exact frame index
        exp1_start_text.tStart = t  # local t and not account for scr refresh
        exp1_start_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(exp1_start_text, 'tStartRefresh')  # time at next scr refresh
        exp1_start_text.setAutoDraw(True)
    
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
exp1_loop = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('/Users/gabmac/Documents/RU/QP/exp/stim/stim_g1_e1.xlsx', selection='0:55'),
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
    exp1_image_l.setImage(left)
    exp1_image_r.setImage(right)
    exp1_key.keys = []
    exp1_key.rt = []
    _exp1_key_allKeys = []
    exp1_sound.setSound(sound_dir, secs=4, hamming=True)
    exp1_sound.setVolume(1.0, log=False)
    # keep track of which components have finished
    exp1Components = [exp1_image_l, exp1_image_r, exp1_key, exp1_sound]
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
    while continueRoutine and routineTimer.getTime() < 5.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *exp1_image_l* updates
        if exp1_image_l.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            exp1_image_l.frameNStart = frameN  # exact frame index
            exp1_image_l.tStart = t  # local t and not account for scr refresh
            exp1_image_l.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp1_image_l, 'tStartRefresh')  # time at next scr refresh
            exp1_image_l.setAutoDraw(True)
        if exp1_image_l.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > exp1_image_l.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                exp1_image_l.tStop = t  # not accounting for scr refresh
                exp1_image_l.frameNStop = frameN  # exact frame index
                exp1_image_l.setAutoDraw(False)
        
        # *exp1_image_r* updates
        if exp1_image_r.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            exp1_image_r.frameNStart = frameN  # exact frame index
            exp1_image_r.tStart = t  # local t and not account for scr refresh
            exp1_image_r.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp1_image_r, 'tStartRefresh')  # time at next scr refresh
            exp1_image_r.setAutoDraw(True)
        if exp1_image_r.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > exp1_image_r.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                exp1_image_r.tStop = t  # not accounting for scr refresh
                exp1_image_r.frameNStop = frameN  # exact frame index
                exp1_image_r.setAutoDraw(False)
        
        # *exp1_key* updates
        waitOnFlip = False
        if exp1_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            exp1_key.frameNStart = frameN  # exact frame index
            exp1_key.tStart = t  # local t and not account for scr refresh
            exp1_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp1_key, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'exp1_key.started')
            exp1_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(exp1_key.clock.reset)  # t=0 on next screen flip
        if exp1_key.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > exp1_key.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                exp1_key.tStop = t  # not accounting for scr refresh
                exp1_key.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'exp1_key.stopped')
                exp1_key.status = FINISHED
        if exp1_key.status == STARTED and not waitOnFlip:
            theseKeys = exp1_key.getKeys(keyList=['lshift','rshift'], waitRelease=False)
            _exp1_key_allKeys.extend(theseKeys)
            if len(_exp1_key_allKeys):
                exp1_key.keys = [key.name for key in _exp1_key_allKeys]  # storing all keys
                exp1_key.rt = [key.rt for key in _exp1_key_allKeys]
                # a response ends the routine
                continueRoutine = False
        # start/stop exp1_sound
        if exp1_sound.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            exp1_sound.frameNStart = frameN  # exact frame index
            exp1_sound.tStart = t  # local t and not account for scr refresh
            exp1_sound.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('exp1_sound.started', tThisFlipGlobal)
            exp1_sound.play(when=win)  # sync with win flip
        if exp1_sound.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > exp1_sound.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                exp1_sound.tStop = t  # not accounting for scr refresh
                exp1_sound.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'exp1_sound.stopped')
                exp1_sound.stop()
        
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
    # check responses
    if exp1_key.keys in ['', [], None]:  # No response was made
        exp1_key.keys = None
    exp1_loop.addData('exp1_key.keys',exp1_key.keys)
    if exp1_key.keys != None:  # we had a response
        exp1_loop.addData('exp1_key.rt', exp1_key.rt)
    exp1_sound.stop()  # ensure sound has stopped at end of routine
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-5.000000)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'exp1_loop'


# --- Prepare to start Routine "exp1_end" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
exp1_end_key.keys = []
exp1_end_key.rt = []
_exp1_end_key_allKeys = []
# keep track of which components have finished
exp1_endComponents = [exp1_end_text, exp1_end_key]
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
    
    # *exp1_end_text* updates
    if exp1_end_text.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        exp1_end_text.frameNStart = frameN  # exact frame index
        exp1_end_text.tStart = t  # local t and not account for scr refresh
        exp1_end_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(exp1_end_text, 'tStartRefresh')  # time at next scr refresh
        exp1_end_text.setAutoDraw(True)
    
    # *exp1_end_key* updates
    waitOnFlip = False
    if exp1_end_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        exp1_end_key.frameNStart = frameN  # exact frame index
        exp1_end_key.tStart = t  # local t and not account for scr refresh
        exp1_end_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(exp1_end_key, 'tStartRefresh')  # time at next scr refresh
        exp1_end_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(exp1_end_key.clock.reset)  # t=0 on next screen flip
    if exp1_end_key.status == STARTED and not waitOnFlip:
        theseKeys = exp1_end_key.getKeys(keyList=['space'], waitRelease=False)
        _exp1_end_key_allKeys.extend(theseKeys)
        if len(_exp1_end_key_allKeys):
            exp1_end_key.keys = _exp1_end_key_allKeys[-1].name  # just the last key pressed
            exp1_end_key.rt = _exp1_end_key_allKeys[-1].rt
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

# set up handler to look after randomisation of conditions etc
exp2_retrial = data.TrialHandler(nReps=1000.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='exp2_retrial')
thisExp.addLoop(exp2_retrial)  # add the loop to the experiment
thisExp2_retrial = exp2_retrial.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisExp2_retrial.rgb)
if thisExp2_retrial != None:
    for paramName in thisExp2_retrial:
        exec('{} = thisExp2_retrial[paramName]'.format(paramName))

for thisExp2_retrial in exp2_retrial:
    currentLoop = exp2_retrial
    # abbreviate parameter names if possible (e.g. rgb = thisExp2_retrial.rgb)
    if thisExp2_retrial != None:
        for paramName in thisExp2_retrial:
            exec('{} = thisExp2_retrial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "exp2_instr" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    exp2_instr_key.keys = []
    exp2_instr_key.rt = []
    _exp2_instr_key_allKeys = []
    # keep track of which components have finished
    exp2_instrComponents = [exp2_instr_text, exp2_instr_key]
    for thisComponent in exp2_instrComponents:
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
    
    # --- Run Routine "exp2_instr" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *exp2_instr_text* updates
        if exp2_instr_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            exp2_instr_text.frameNStart = frameN  # exact frame index
            exp2_instr_text.tStart = t  # local t and not account for scr refresh
            exp2_instr_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp2_instr_text, 'tStartRefresh')  # time at next scr refresh
            exp2_instr_text.setAutoDraw(True)
        
        # *exp2_instr_key* updates
        if exp2_instr_key.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            exp2_instr_key.frameNStart = frameN  # exact frame index
            exp2_instr_key.tStart = t  # local t and not account for scr refresh
            exp2_instr_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp2_instr_key, 'tStartRefresh')  # time at next scr refresh
            exp2_instr_key.status = STARTED
            # keyboard checking is just starting
            exp2_instr_key.clock.reset()  # now t=0
        if exp2_instr_key.status == STARTED:
            theseKeys = exp2_instr_key.getKeys(keyList=['space'], waitRelease=False)
            _exp2_instr_key_allKeys.extend(theseKeys)
            if len(_exp2_instr_key_allKeys):
                exp2_instr_key.keys = _exp2_instr_key_allKeys[-1].name  # just the last key pressed
                exp2_instr_key.rt = _exp2_instr_key_allKeys[-1].rt
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
        for thisComponent in exp2_instrComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "exp2_instr" ---
    for thisComponent in exp2_instrComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "exp2_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    exp2_trial_loop = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('/Users/gabmac/Documents/RU/QP/exp/practice_trial/trial_exp_2/trial2.xlsx', selection='0:8'),
        seed=None, name='exp2_trial_loop')
    thisExp.addLoop(exp2_trial_loop)  # add the loop to the experiment
    thisExp2_trial_loop = exp2_trial_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisExp2_trial_loop.rgb)
    if thisExp2_trial_loop != None:
        for paramName in thisExp2_trial_loop:
            exec('{} = thisExp2_trial_loop[paramName]'.format(paramName))
    
    for thisExp2_trial_loop in exp2_trial_loop:
        currentLoop = exp2_trial_loop
        # abbreviate parameter names if possible (e.g. rgb = thisExp2_trial_loop.rgb)
        if thisExp2_trial_loop != None:
            for paramName in thisExp2_trial_loop:
                exec('{} = thisExp2_trial_loop[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "exp2_trial" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        exp2_trial_iamge_l.setImage(left)
        exp2_trial_image_r.setImage(right)
        exp2_trial_key.keys = []
        exp2_trial_key.rt = []
        _exp2_trial_key_allKeys = []
        exp2_trial_sound.setSound(sound_dir, secs=4, hamming=True)
        exp2_trial_sound.setVolume(1.0, log=False)
        # keep track of which components have finished
        exp2_trialComponents = [exp2_trial_iamge_l, exp2_trial_image_r, exp2_trial_key, exp2_trial_sound]
        for thisComponent in exp2_trialComponents:
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
        
        # --- Run Routine "exp2_trial" ---
        while continueRoutine and routineTimer.getTime() < 5.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *exp2_trial_iamge_l* updates
            if exp2_trial_iamge_l.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                exp2_trial_iamge_l.frameNStart = frameN  # exact frame index
                exp2_trial_iamge_l.tStart = t  # local t and not account for scr refresh
                exp2_trial_iamge_l.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(exp2_trial_iamge_l, 'tStartRefresh')  # time at next scr refresh
                exp2_trial_iamge_l.setAutoDraw(True)
            if exp2_trial_iamge_l.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > exp2_trial_iamge_l.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    exp2_trial_iamge_l.tStop = t  # not accounting for scr refresh
                    exp2_trial_iamge_l.frameNStop = frameN  # exact frame index
                    exp2_trial_iamge_l.setAutoDraw(False)
            
            # *exp2_trial_image_r* updates
            if exp2_trial_image_r.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                exp2_trial_image_r.frameNStart = frameN  # exact frame index
                exp2_trial_image_r.tStart = t  # local t and not account for scr refresh
                exp2_trial_image_r.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(exp2_trial_image_r, 'tStartRefresh')  # time at next scr refresh
                exp2_trial_image_r.setAutoDraw(True)
            if exp2_trial_image_r.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > exp2_trial_image_r.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    exp2_trial_image_r.tStop = t  # not accounting for scr refresh
                    exp2_trial_image_r.frameNStop = frameN  # exact frame index
                    exp2_trial_image_r.setAutoDraw(False)
            
            # *exp2_trial_key* updates
            waitOnFlip = False
            if exp2_trial_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                exp2_trial_key.frameNStart = frameN  # exact frame index
                exp2_trial_key.tStart = t  # local t and not account for scr refresh
                exp2_trial_key.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(exp2_trial_key, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'exp2_trial_key.started')
                exp2_trial_key.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(exp2_trial_key.clock.reset)  # t=0 on next screen flip
            if exp2_trial_key.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > exp2_trial_key.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    exp2_trial_key.tStop = t  # not accounting for scr refresh
                    exp2_trial_key.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'exp2_trial_key.stopped')
                    exp2_trial_key.status = FINISHED
            if exp2_trial_key.status == STARTED and not waitOnFlip:
                theseKeys = exp2_trial_key.getKeys(keyList=['lshift','rshift'], waitRelease=False)
                _exp2_trial_key_allKeys.extend(theseKeys)
                if len(_exp2_trial_key_allKeys):
                    exp2_trial_key.keys = [key.name for key in _exp2_trial_key_allKeys]  # storing all keys
                    exp2_trial_key.rt = [key.rt for key in _exp2_trial_key_allKeys]
                    # a response ends the routine
                    continueRoutine = False
            # start/stop exp2_trial_sound
            if exp2_trial_sound.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                # keep track of start time/frame for later
                exp2_trial_sound.frameNStart = frameN  # exact frame index
                exp2_trial_sound.tStart = t  # local t and not account for scr refresh
                exp2_trial_sound.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('exp2_trial_sound.started', tThisFlipGlobal)
                exp2_trial_sound.play(when=win)  # sync with win flip
            if exp2_trial_sound.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > exp2_trial_sound.tStartRefresh + 4-frameTolerance:
                    # keep track of stop time/frame for later
                    exp2_trial_sound.tStop = t  # not accounting for scr refresh
                    exp2_trial_sound.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'exp2_trial_sound.stopped')
                    exp2_trial_sound.stop()
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in exp2_trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "exp2_trial" ---
        for thisComponent in exp2_trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if exp2_trial_key.keys in ['', [], None]:  # No response was made
            exp2_trial_key.keys = None
        exp2_trial_loop.addData('exp2_trial_key.keys',exp2_trial_key.keys)
        if exp2_trial_key.keys != None:  # we had a response
            exp2_trial_loop.addData('exp2_trial_key.rt', exp2_trial_key.rt)
        exp2_trial_sound.stop()  # ensure sound has stopped at end of routine
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-5.000000)
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'exp2_trial_loop'
    
    
    # --- Prepare to start Routine "end_exp2_trial" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    end_exp2_trial_key.keys = []
    end_exp2_trial_key.rt = []
    _end_exp2_trial_key_allKeys = []
    # keep track of which components have finished
    end_exp2_trialComponents = [end_exp2_trial_text, end_exp2_trial_key]
    for thisComponent in end_exp2_trialComponents:
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
    
    # --- Run Routine "end_exp2_trial" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *end_exp2_trial_text* updates
        if end_exp2_trial_text.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            end_exp2_trial_text.frameNStart = frameN  # exact frame index
            end_exp2_trial_text.tStart = t  # local t and not account for scr refresh
            end_exp2_trial_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(end_exp2_trial_text, 'tStartRefresh')  # time at next scr refresh
            end_exp2_trial_text.setAutoDraw(True)
        
        # *end_exp2_trial_key* updates
        waitOnFlip = False
        if end_exp2_trial_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            end_exp2_trial_key.frameNStart = frameN  # exact frame index
            end_exp2_trial_key.tStart = t  # local t and not account for scr refresh
            end_exp2_trial_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(end_exp2_trial_key, 'tStartRefresh')  # time at next scr refresh
            end_exp2_trial_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(end_exp2_trial_key.clock.reset)  # t=0 on next screen flip
        if end_exp2_trial_key.status == STARTED and not waitOnFlip:
            theseKeys = end_exp2_trial_key.getKeys(keyList=['space','rshift'], waitRelease=False)
            _end_exp2_trial_key_allKeys.extend(theseKeys)
            if len(_end_exp2_trial_key_allKeys):
                end_exp2_trial_key.keys = _end_exp2_trial_key_allKeys[-1].name  # just the last key pressed
                end_exp2_trial_key.rt = _end_exp2_trial_key_allKeys[-1].rt
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
        for thisComponent in end_exp2_trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "end_exp2_trial" ---
    for thisComponent in end_exp2_trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from exp2_trial_code
    if end_exp2_trial_key.keys == "rshift":
          exp2_retrial.finished = True
    # the Routine "end_exp2_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1000.0 repeats of 'exp2_retrial'


# --- Prepare to start Routine "exp2_start" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
exp2_start_key.keys = []
exp2_start_key.rt = []
_exp2_start_key_allKeys = []
# keep track of which components have finished
exp2_startComponents = [exp2_start_key, exp2_start_text]
for thisComponent in exp2_startComponents:
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

# --- Run Routine "exp2_start" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *exp2_start_key* updates
    waitOnFlip = False
    if exp2_start_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        exp2_start_key.frameNStart = frameN  # exact frame index
        exp2_start_key.tStart = t  # local t and not account for scr refresh
        exp2_start_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(exp2_start_key, 'tStartRefresh')  # time at next scr refresh
        exp2_start_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(exp2_start_key.clock.reset)  # t=0 on next screen flip
    if exp2_start_key.status == STARTED and not waitOnFlip:
        theseKeys = exp2_start_key.getKeys(keyList=['rshift'], waitRelease=False)
        _exp2_start_key_allKeys.extend(theseKeys)
        if len(_exp2_start_key_allKeys):
            exp2_start_key.keys = _exp2_start_key_allKeys[-1].name  # just the last key pressed
            exp2_start_key.rt = _exp2_start_key_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *exp2_start_text* updates
    if exp2_start_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        exp2_start_text.frameNStart = frameN  # exact frame index
        exp2_start_text.tStart = t  # local t and not account for scr refresh
        exp2_start_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(exp2_start_text, 'tStartRefresh')  # time at next scr refresh
        exp2_start_text.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in exp2_startComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "exp2_start" ---
for thisComponent in exp2_startComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "exp2_start" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
exp2_loop = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('/Users/gabmac/Documents/RU/QP/exp/stim/stim_g1_e2.xlsx', selection='0:55'),
    seed=None, name='exp2_loop')
thisExp.addLoop(exp2_loop)  # add the loop to the experiment
thisExp2_loop = exp2_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisExp2_loop.rgb)
if thisExp2_loop != None:
    for paramName in thisExp2_loop:
        exec('{} = thisExp2_loop[paramName]'.format(paramName))

for thisExp2_loop in exp2_loop:
    currentLoop = exp2_loop
    # abbreviate parameter names if possible (e.g. rgb = thisExp2_loop.rgb)
    if thisExp2_loop != None:
        for paramName in thisExp2_loop:
            exec('{} = thisExp2_loop[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "exp2" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    exp2_image_l.setImage(left)
    exp2_image_r.setImage(right)
    exp2_key.keys = []
    exp2_key.rt = []
    _exp2_key_allKeys = []
    exp2_sound.setSound(sound_dir, secs=4, hamming=True)
    exp2_sound.setVolume(1.0, log=False)
    # keep track of which components have finished
    exp2Components = [exp2_image_l, exp2_image_r, exp2_key, exp2_sound]
    for thisComponent in exp2Components:
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
    
    # --- Run Routine "exp2" ---
    while continueRoutine and routineTimer.getTime() < 5.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *exp2_image_l* updates
        if exp2_image_l.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            exp2_image_l.frameNStart = frameN  # exact frame index
            exp2_image_l.tStart = t  # local t and not account for scr refresh
            exp2_image_l.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp2_image_l, 'tStartRefresh')  # time at next scr refresh
            exp2_image_l.setAutoDraw(True)
        if exp2_image_l.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > exp2_image_l.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                exp2_image_l.tStop = t  # not accounting for scr refresh
                exp2_image_l.frameNStop = frameN  # exact frame index
                exp2_image_l.setAutoDraw(False)
        
        # *exp2_image_r* updates
        if exp2_image_r.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            exp2_image_r.frameNStart = frameN  # exact frame index
            exp2_image_r.tStart = t  # local t and not account for scr refresh
            exp2_image_r.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp2_image_r, 'tStartRefresh')  # time at next scr refresh
            exp2_image_r.setAutoDraw(True)
        if exp2_image_r.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > exp2_image_r.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                exp2_image_r.tStop = t  # not accounting for scr refresh
                exp2_image_r.frameNStop = frameN  # exact frame index
                exp2_image_r.setAutoDraw(False)
        
        # *exp2_key* updates
        waitOnFlip = False
        if exp2_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            exp2_key.frameNStart = frameN  # exact frame index
            exp2_key.tStart = t  # local t and not account for scr refresh
            exp2_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp2_key, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'exp2_key.started')
            exp2_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(exp2_key.clock.reset)  # t=0 on next screen flip
        if exp2_key.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > exp2_key.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                exp2_key.tStop = t  # not accounting for scr refresh
                exp2_key.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'exp2_key.stopped')
                exp2_key.status = FINISHED
        if exp2_key.status == STARTED and not waitOnFlip:
            theseKeys = exp2_key.getKeys(keyList=['lshift','rshift'], waitRelease=False)
            _exp2_key_allKeys.extend(theseKeys)
            if len(_exp2_key_allKeys):
                exp2_key.keys = [key.name for key in _exp2_key_allKeys]  # storing all keys
                exp2_key.rt = [key.rt for key in _exp2_key_allKeys]
        # start/stop exp2_sound
        if exp2_sound.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            exp2_sound.frameNStart = frameN  # exact frame index
            exp2_sound.tStart = t  # local t and not account for scr refresh
            exp2_sound.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('exp2_sound.started', tThisFlipGlobal)
            exp2_sound.play(when=win)  # sync with win flip
        if exp2_sound.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > exp2_sound.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                exp2_sound.tStop = t  # not accounting for scr refresh
                exp2_sound.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'exp2_sound.stopped')
                exp2_sound.stop()
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in exp2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "exp2" ---
    for thisComponent in exp2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if exp2_key.keys in ['', [], None]:  # No response was made
        exp2_key.keys = None
    exp2_loop.addData('exp2_key.keys',exp2_key.keys)
    if exp2_key.keys != None:  # we had a response
        exp2_loop.addData('exp2_key.rt', exp2_key.rt)
    exp2_sound.stop()  # ensure sound has stopped at end of routine
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-5.000000)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'exp2_loop'


# --- Prepare to start Routine "full_end" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
full_end_key.keys = []
full_end_key.rt = []
_full_end_key_allKeys = []
# keep track of which components have finished
full_endComponents = [full_end_text, full_end_key]
for thisComponent in full_endComponents:
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

# --- Run Routine "full_end" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *full_end_text* updates
    if full_end_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        full_end_text.frameNStart = frameN  # exact frame index
        full_end_text.tStart = t  # local t and not account for scr refresh
        full_end_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(full_end_text, 'tStartRefresh')  # time at next scr refresh
        full_end_text.setAutoDraw(True)
    
    # *full_end_key* updates
    waitOnFlip = False
    if full_end_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        full_end_key.frameNStart = frameN  # exact frame index
        full_end_key.tStart = t  # local t and not account for scr refresh
        full_end_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(full_end_key, 'tStartRefresh')  # time at next scr refresh
        full_end_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(full_end_key.clock.reset)  # t=0 on next screen flip
    if full_end_key.status == STARTED and not waitOnFlip:
        theseKeys = full_end_key.getKeys(keyList=['space'], waitRelease=False)
        _full_end_key_allKeys.extend(theseKeys)
        if len(_full_end_key_allKeys):
            full_end_key.keys = _full_end_key_allKeys[-1].name  # just the last key pressed
            full_end_key.rt = _full_end_key_allKeys[-1].rt
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
    for thisComponent in full_endComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "full_end" ---
for thisComponent in full_endComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "full_end" was not non-slip safe, so reset the non-slip timer
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
