#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.5),
    on Tue Apr  4 13:02:38 2023
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
expName = 'empathy_lextale_comb'  # from the Builder filename that created this script
expInfo = {
    'id': '',
    'Variety of Spanish that is most familiar to you?': '',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['id'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/gabmac/Documents/RU/QP/exp/questionnaire/empathy_lextale-master/lextale_sp_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
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

# --- Initialize components for Routine "instructions_lextale" ---
text_lextale_instructions = visual.TextStim(win=win, name='text_lextale_instructions',
    text='',
    font='Arial',
    pos=(0, 0), height=0.025, wrapWidth=0.8, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_lextale_instructions = keyboard.Keyboard()

# --- Initialize components for Routine "practice_lextale" ---
text_lextale_practice_label = visual.TextStim(win=win, name='text_lextale_practice_label',
    text='PRACTICE',
    font='Arial',
    pos=(0, 0.3), height=0.1, wrapWidth=None, ori=0, 
    color='red', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
text_lextale_practice_word = visual.TextStim(win=win, name='text_lextale_practice_word',
    text='',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='blue', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_lextale_practice = keyboard.Keyboard()
text_lextale_practice_real_label = visual.TextStim(win=win, name='text_lextale_practice_real_label',
    text='',
    font='Arial',
    pos=(-0.3, -0.3), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
text_lextale_practice_false_label = visual.TextStim(win=win, name='text_lextale_practice_false_label',
    text='',
    font='Arial',
    pos=(0.3, -0.3), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);

# --- Initialize components for Routine "check_lextale" ---
text_lextale_check = visual.TextStim(win=win, name='text_lextale_check',
    text='Great! Let’s start. \n\nPress the spacebar to continue.',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_lextale_check = keyboard.Keyboard()

# --- Initialize components for Routine "trial_lextale" ---
text_lextale_trial_word = visual.TextStim(win=win, name='text_lextale_trial_word',
    text='',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='blue', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_lextale_trial = keyboard.Keyboard()
text_lextale_trial_real_label = visual.TextStim(win=win, name='text_lextale_trial_real_label',
    text='',
    font='Arial',
    pos=(-0.3, -0.3), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
text_lextale_trial_false_label = visual.TextStim(win=win, name='text_lextale_trial_false_label',
    text='',
    font='Arial',
    pos=(0.3, -0.3), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);

# --- Initialize components for Routine "prolific_code" ---
text = visual.TextStim(win=win, name='text',
    text='Prolific code: 446EFF68\n\nPress space to end\n',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp = keyboard.Keyboard()

# --- Initialize components for Routine "end_exp" ---

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "instructions_lextale" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
text_lextale_instructions.setText('Great! Now for the Spanish test.\n\nYou will see a total of 90 words, once each.\n\nYou must decide if each word is a real word by pressing 1.\n\nIf the word is not a real word, press 0. \n\nPress space to begin.')
key_resp_lextale_instructions.keys = []
key_resp_lextale_instructions.rt = []
_key_resp_lextale_instructions_allKeys = []
# keep track of which components have finished
instructions_lextaleComponents = [text_lextale_instructions, key_resp_lextale_instructions]
for thisComponent in instructions_lextaleComponents:
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

# --- Run Routine "instructions_lextale" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_lextale_instructions* updates
    if text_lextale_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_lextale_instructions.frameNStart = frameN  # exact frame index
        text_lextale_instructions.tStart = t  # local t and not account for scr refresh
        text_lextale_instructions.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_lextale_instructions, 'tStartRefresh')  # time at next scr refresh
        text_lextale_instructions.setAutoDraw(True)
    
    # *key_resp_lextale_instructions* updates
    waitOnFlip = False
    if key_resp_lextale_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_lextale_instructions.frameNStart = frameN  # exact frame index
        key_resp_lextale_instructions.tStart = t  # local t and not account for scr refresh
        key_resp_lextale_instructions.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_lextale_instructions, 'tStartRefresh')  # time at next scr refresh
        key_resp_lextale_instructions.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_lextale_instructions.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_lextale_instructions.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_lextale_instructions.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_lextale_instructions.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_lextale_instructions_allKeys.extend(theseKeys)
        if len(_key_resp_lextale_instructions_allKeys):
            key_resp_lextale_instructions.keys = _key_resp_lextale_instructions_allKeys[-1].name  # just the last key pressed
            key_resp_lextale_instructions.rt = _key_resp_lextale_instructions_allKeys[-1].rt
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
    for thisComponent in instructions_lextaleComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instructions_lextale" ---
for thisComponent in instructions_lextaleComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instructions_lextale" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
practice_trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('trials/lextale_practice_trials.xlsx'),
    seed=None, name='practice_trials')
thisExp.addLoop(practice_trials)  # add the loop to the experiment
thisPractice_trial = practice_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice_trial.rgb)
if thisPractice_trial != None:
    for paramName in thisPractice_trial:
        exec('{} = thisPractice_trial[paramName]'.format(paramName))

for thisPractice_trial in practice_trials:
    currentLoop = practice_trials
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_trial.rgb)
    if thisPractice_trial != None:
        for paramName in thisPractice_trial:
            exec('{} = thisPractice_trial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "practice_lextale" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    text_lextale_practice_word.setText(word)
    key_resp_lextale_practice.keys = []
    key_resp_lextale_practice.rt = []
    _key_resp_lextale_practice_allKeys = []
    text_lextale_practice_real_label.setText(prac_button_real)
    text_lextale_practice_false_label.setText(prac_button_false)
    # keep track of which components have finished
    practice_lextaleComponents = [text_lextale_practice_label, text_lextale_practice_word, key_resp_lextale_practice, text_lextale_practice_real_label, text_lextale_practice_false_label]
    for thisComponent in practice_lextaleComponents:
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
    
    # --- Run Routine "practice_lextale" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_lextale_practice_label* updates
        if text_lextale_practice_label.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_lextale_practice_label.frameNStart = frameN  # exact frame index
            text_lextale_practice_label.tStart = t  # local t and not account for scr refresh
            text_lextale_practice_label.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_lextale_practice_label, 'tStartRefresh')  # time at next scr refresh
            text_lextale_practice_label.setAutoDraw(True)
        
        # *text_lextale_practice_word* updates
        if text_lextale_practice_word.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            text_lextale_practice_word.frameNStart = frameN  # exact frame index
            text_lextale_practice_word.tStart = t  # local t and not account for scr refresh
            text_lextale_practice_word.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_lextale_practice_word, 'tStartRefresh')  # time at next scr refresh
            text_lextale_practice_word.setAutoDraw(True)
        
        # *key_resp_lextale_practice* updates
        waitOnFlip = False
        if key_resp_lextale_practice.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            key_resp_lextale_practice.frameNStart = frameN  # exact frame index
            key_resp_lextale_practice.tStart = t  # local t and not account for scr refresh
            key_resp_lextale_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_lextale_practice, 'tStartRefresh')  # time at next scr refresh
            key_resp_lextale_practice.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_lextale_practice.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_lextale_practice.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_lextale_practice.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_lextale_practice.getKeys(keyList=['1','0'], waitRelease=False)
            _key_resp_lextale_practice_allKeys.extend(theseKeys)
            if len(_key_resp_lextale_practice_allKeys):
                key_resp_lextale_practice.keys = _key_resp_lextale_practice_allKeys[0].name  # just the first key pressed
                key_resp_lextale_practice.rt = _key_resp_lextale_practice_allKeys[0].rt
                # was this correct?
                if (key_resp_lextale_practice.keys == str(correct_response)) or (key_resp_lextale_practice.keys == correct_response):
                    key_resp_lextale_practice.corr = 1
                else:
                    key_resp_lextale_practice.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # *text_lextale_practice_real_label* updates
        if text_lextale_practice_real_label.status == NOT_STARTED and tThisFlip >= 0.25-frameTolerance:
            # keep track of start time/frame for later
            text_lextale_practice_real_label.frameNStart = frameN  # exact frame index
            text_lextale_practice_real_label.tStart = t  # local t and not account for scr refresh
            text_lextale_practice_real_label.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_lextale_practice_real_label, 'tStartRefresh')  # time at next scr refresh
            text_lextale_practice_real_label.setAutoDraw(True)
        
        # *text_lextale_practice_false_label* updates
        if text_lextale_practice_false_label.status == NOT_STARTED and tThisFlip >= 0.25-frameTolerance:
            # keep track of start time/frame for later
            text_lextale_practice_false_label.frameNStart = frameN  # exact frame index
            text_lextale_practice_false_label.tStart = t  # local t and not account for scr refresh
            text_lextale_practice_false_label.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_lextale_practice_false_label, 'tStartRefresh')  # time at next scr refresh
            text_lextale_practice_false_label.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practice_lextaleComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "practice_lextale" ---
    for thisComponent in practice_lextaleComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_lextale_practice.keys in ['', [], None]:  # No response was made
        key_resp_lextale_practice.keys = None
        # was no response the correct answer?!
        if str(correct_response).lower() == 'none':
           key_resp_lextale_practice.corr = 1;  # correct non-response
        else:
           key_resp_lextale_practice.corr = 0;  # failed to respond (incorrectly)
    # store data for practice_trials (TrialHandler)
    practice_trials.addData('key_resp_lextale_practice.keys',key_resp_lextale_practice.keys)
    practice_trials.addData('key_resp_lextale_practice.corr', key_resp_lextale_practice.corr)
    if key_resp_lextale_practice.keys != None:  # we had a response
        practice_trials.addData('key_resp_lextale_practice.rt', key_resp_lextale_practice.rt)
    # the Routine "practice_lextale" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'practice_trials'


# --- Prepare to start Routine "check_lextale" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp_lextale_check.keys = []
key_resp_lextale_check.rt = []
_key_resp_lextale_check_allKeys = []
# keep track of which components have finished
check_lextaleComponents = [text_lextale_check, key_resp_lextale_check]
for thisComponent in check_lextaleComponents:
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

# --- Run Routine "check_lextale" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_lextale_check* updates
    if text_lextale_check.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_lextale_check.frameNStart = frameN  # exact frame index
        text_lextale_check.tStart = t  # local t and not account for scr refresh
        text_lextale_check.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_lextale_check, 'tStartRefresh')  # time at next scr refresh
        text_lextale_check.setAutoDraw(True)
    
    # *key_resp_lextale_check* updates
    waitOnFlip = False
    if key_resp_lextale_check.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_lextale_check.frameNStart = frameN  # exact frame index
        key_resp_lextale_check.tStart = t  # local t and not account for scr refresh
        key_resp_lextale_check.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_lextale_check, 'tStartRefresh')  # time at next scr refresh
        key_resp_lextale_check.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_lextale_check.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_lextale_check.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_lextale_check.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_lextale_check.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_lextale_check_allKeys.extend(theseKeys)
        if len(_key_resp_lextale_check_allKeys):
            key_resp_lextale_check.keys = _key_resp_lextale_check_allKeys[-1].name  # just the last key pressed
            key_resp_lextale_check.rt = _key_resp_lextale_check_allKeys[-1].rt
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
    for thisComponent in check_lextaleComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "check_lextale" ---
for thisComponent in check_lextaleComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "check_lextale" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('trials/lextale_trials.csv'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "trial_lextale" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    text_lextale_trial_word.setText(word)
    key_resp_lextale_trial.keys = []
    key_resp_lextale_trial.rt = []
    _key_resp_lextale_trial_allKeys = []
    text_lextale_trial_real_label.setText(button_real)
    text_lextale_trial_false_label.setText(button_false)
    # keep track of which components have finished
    trial_lextaleComponents = [text_lextale_trial_word, key_resp_lextale_trial, text_lextale_trial_real_label, text_lextale_trial_false_label]
    for thisComponent in trial_lextaleComponents:
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
    
    # --- Run Routine "trial_lextale" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_lextale_trial_word* updates
        if text_lextale_trial_word.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            text_lextale_trial_word.frameNStart = frameN  # exact frame index
            text_lextale_trial_word.tStart = t  # local t and not account for scr refresh
            text_lextale_trial_word.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_lextale_trial_word, 'tStartRefresh')  # time at next scr refresh
            text_lextale_trial_word.setAutoDraw(True)
        
        # *key_resp_lextale_trial* updates
        waitOnFlip = False
        if key_resp_lextale_trial.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            key_resp_lextale_trial.frameNStart = frameN  # exact frame index
            key_resp_lextale_trial.tStart = t  # local t and not account for scr refresh
            key_resp_lextale_trial.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_lextale_trial, 'tStartRefresh')  # time at next scr refresh
            key_resp_lextale_trial.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_lextale_trial.clock.reset)  # t=0 on next screen flip
        if key_resp_lextale_trial.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_lextale_trial.getKeys(keyList=['1','0'], waitRelease=False)
            _key_resp_lextale_trial_allKeys.extend(theseKeys)
            if len(_key_resp_lextale_trial_allKeys):
                key_resp_lextale_trial.keys = _key_resp_lextale_trial_allKeys[0].name  # just the first key pressed
                key_resp_lextale_trial.rt = _key_resp_lextale_trial_allKeys[0].rt
                # was this correct?
                if (key_resp_lextale_trial.keys == str(correct_response)) or (key_resp_lextale_trial.keys == correct_response):
                    key_resp_lextale_trial.corr = 1
                else:
                    key_resp_lextale_trial.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # *text_lextale_trial_real_label* updates
        if text_lextale_trial_real_label.status == NOT_STARTED and tThisFlip >= 0.25-frameTolerance:
            # keep track of start time/frame for later
            text_lextale_trial_real_label.frameNStart = frameN  # exact frame index
            text_lextale_trial_real_label.tStart = t  # local t and not account for scr refresh
            text_lextale_trial_real_label.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_lextale_trial_real_label, 'tStartRefresh')  # time at next scr refresh
            text_lextale_trial_real_label.setAutoDraw(True)
        
        # *text_lextale_trial_false_label* updates
        if text_lextale_trial_false_label.status == NOT_STARTED and tThisFlip >= 0.25-frameTolerance:
            # keep track of start time/frame for later
            text_lextale_trial_false_label.frameNStart = frameN  # exact frame index
            text_lextale_trial_false_label.tStart = t  # local t and not account for scr refresh
            text_lextale_trial_false_label.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_lextale_trial_false_label, 'tStartRefresh')  # time at next scr refresh
            text_lextale_trial_false_label.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trial_lextaleComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trial_lextale" ---
    for thisComponent in trial_lextaleComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_lextale_trial.keys in ['', [], None]:  # No response was made
        key_resp_lextale_trial.keys = None
        # was no response the correct answer?!
        if str(correct_response).lower() == 'none':
           key_resp_lextale_trial.corr = 1;  # correct non-response
        else:
           key_resp_lextale_trial.corr = 0;  # failed to respond (incorrectly)
    # store data for trials (TrialHandler)
    trials.addData('key_resp_lextale_trial.keys',key_resp_lextale_trial.keys)
    trials.addData('key_resp_lextale_trial.corr', key_resp_lextale_trial.corr)
    if key_resp_lextale_trial.keys != None:  # we had a response
        trials.addData('key_resp_lextale_trial.rt', key_resp_lextale_trial.rt)
    # the Routine "trial_lextale" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials'


# --- Prepare to start Routine "prolific_code" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
prolific_codeComponents = [text, key_resp]
for thisComponent in prolific_codeComponents:
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

# --- Run Routine "prolific_code" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text.started')
        text.setAutoDraw(True)
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
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
        win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp.status == STARTED and not waitOnFlip:
        theseKeys = key_resp.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
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
    for thisComponent in prolific_codeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "prolific_code" ---
for thisComponent in prolific_codeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp.keys in ['', [], None]:  # No response was made
    key_resp.keys = None
thisExp.addData('key_resp.keys',key_resp.keys)
if key_resp.keys != None:  # we had a response
    thisExp.addData('key_resp.rt', key_resp.rt)
thisExp.nextEntry()
# the Routine "prolific_code" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "end_exp" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# keep track of which components have finished
end_expComponents = []
for thisComponent in end_expComponents:
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

# --- Run Routine "end_exp" ---
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
    for thisComponent in end_expComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "end_exp" ---
for thisComponent in end_expComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "end_exp" was not non-slip safe, so reset the non-slip timer
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
