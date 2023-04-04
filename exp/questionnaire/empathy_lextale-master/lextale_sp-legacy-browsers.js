/******************* 
 * Lextale_Sp Test *
 *******************/


// store info about the experiment session:
let expName = 'lextale_sp';  // from the Builder filename that created this script
let expInfo = {
    'id': '',
    'Variety of Spanish that is most familiar to you?': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructions_lextaleRoutineBegin());
flowScheduler.add(instructions_lextaleRoutineEachFrame());
flowScheduler.add(instructions_lextaleRoutineEnd());
const practice_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_trialsLoopBegin(practice_trialsLoopScheduler));
flowScheduler.add(practice_trialsLoopScheduler);
flowScheduler.add(practice_trialsLoopEnd);
flowScheduler.add(check_lextaleRoutineBegin());
flowScheduler.add(check_lextaleRoutineEachFrame());
flowScheduler.add(check_lextaleRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(prolific_codeRoutineBegin());
flowScheduler.add(prolific_codeRoutineEachFrame());
flowScheduler.add(prolific_codeRoutineEnd());
flowScheduler.add(end_expRoutineBegin());
flowScheduler.add(end_expRoutineEachFrame());
flowScheduler.add(end_expRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'trials/lextale_trials.csv', 'path': 'trials/lextale_trials.csv'},
    {'name': 'trials/lextale_practice_trials.xlsx', 'path': 'trials/lextale_practice_trials.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["id"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var instructions_lextaleClock;
var text_lextale_instructions;
var key_resp_lextale_instructions;
var practice_lextaleClock;
var text_lextale_practice_label;
var text_lextale_practice_word;
var key_resp_lextale_practice;
var text_lextale_practice_real_label;
var text_lextale_practice_false_label;
var check_lextaleClock;
var text_lextale_check;
var key_resp_lextale_check;
var trial_lextaleClock;
var text_lextale_trial_word;
var key_resp_lextale_trial;
var text_lextale_trial_real_label;
var text_lextale_trial_false_label;
var prolific_codeClock;
var text;
var key_resp;
var end_expClock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions_lextale"
  instructions_lextaleClock = new util.Clock();
  text_lextale_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_lextale_instructions',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: 0.8, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_lextale_instructions = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_lextale"
  practice_lextaleClock = new util.Clock();
  text_lextale_practice_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_lextale_practice_label',
    text: 'PRACTICE',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: 1,
    depth: 0.0 
  });
  
  text_lextale_practice_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_lextale_practice_word',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_lextale_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_lextale_practice_real_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_lextale_practice_real_label',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.3)], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  text_lextale_practice_false_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_lextale_practice_false_label',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.3)], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "check_lextale"
  check_lextaleClock = new util.Clock();
  text_lextale_check = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_lextale_check',
    text: 'Great! Let’s start. \n\nPress the spacebar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_lextale_check = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_lextale"
  trial_lextaleClock = new util.Clock();
  text_lextale_trial_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_lextale_trial_word',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_lextale_trial = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_lextale_trial_real_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_lextale_trial_real_label',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.3)], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_lextale_trial_false_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_lextale_trial_false_label',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.3)], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "prolific_code"
  prolific_codeClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Prolific code: 446EFF68\n\nPress space to end\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_exp"
  end_expClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_lextale_instructions_allKeys;
var instructions_lextaleComponents;
function instructions_lextaleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_lextale' ---
    t = 0;
    instructions_lextaleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_lextale_instructions.setText('Great! Now for the Spanish test.\n\nYou will see a total of 90 words, once each.\n\nYou must decide if each word is a real word by pressing 1.\n\nIf the word is not a real word, press 0. \n\nPress space to begin.');
    key_resp_lextale_instructions.keys = undefined;
    key_resp_lextale_instructions.rt = undefined;
    _key_resp_lextale_instructions_allKeys = [];
    // keep track of which components have finished
    instructions_lextaleComponents = [];
    instructions_lextaleComponents.push(text_lextale_instructions);
    instructions_lextaleComponents.push(key_resp_lextale_instructions);
    
    instructions_lextaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_lextaleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_lextale' ---
    // get current time
    t = instructions_lextaleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_lextale_instructions* updates
    if (t >= 0.0 && text_lextale_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_lextale_instructions.tStart = t;  // (not accounting for frame time here)
      text_lextale_instructions.frameNStart = frameN;  // exact frame index
      
      text_lextale_instructions.setAutoDraw(true);
    }

    
    // *key_resp_lextale_instructions* updates
    if (t >= 0.0 && key_resp_lextale_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_lextale_instructions.tStart = t;  // (not accounting for frame time here)
      key_resp_lextale_instructions.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_lextale_instructions.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_lextale_instructions.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_lextale_instructions.clearEvents(); });
    }

    if (key_resp_lextale_instructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_lextale_instructions.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_lextale_instructions_allKeys = _key_resp_lextale_instructions_allKeys.concat(theseKeys);
      if (_key_resp_lextale_instructions_allKeys.length > 0) {
        key_resp_lextale_instructions.keys = _key_resp_lextale_instructions_allKeys[_key_resp_lextale_instructions_allKeys.length - 1].name;  // just the last key pressed
        key_resp_lextale_instructions.rt = _key_resp_lextale_instructions_allKeys[_key_resp_lextale_instructions_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_lextaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_lextaleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_lextale' ---
    instructions_lextaleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_lextale_instructions.stop();
    // the Routine "instructions_lextale" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_trials;
function practice_trialsLoopBegin(practice_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trials/lextale_practice_trials.xlsx',
      seed: undefined, name: 'practice_trials'
    });
    psychoJS.experiment.addLoop(practice_trials); // add the loop to the experiment
    currentLoop = practice_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_trials.forEach(function() {
      snapshot = practice_trials.getSnapshot();
    
      practice_trialsLoopScheduler.add(importConditions(snapshot));
      practice_trialsLoopScheduler.add(practice_lextaleRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(practice_lextaleRoutineEachFrame());
      practice_trialsLoopScheduler.add(practice_lextaleRoutineEnd(snapshot));
      practice_trialsLoopScheduler.add(practice_trialsLoopEndIteration(practice_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trials/lextale_trials.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trial_lextaleRoutineBegin(snapshot));
      trialsLoopScheduler.add(trial_lextaleRoutineEachFrame());
      trialsLoopScheduler.add(trial_lextaleRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _key_resp_lextale_practice_allKeys;
var practice_lextaleComponents;
function practice_lextaleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_lextale' ---
    t = 0;
    practice_lextaleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_lextale_practice_word.setText(word);
    key_resp_lextale_practice.keys = undefined;
    key_resp_lextale_practice.rt = undefined;
    _key_resp_lextale_practice_allKeys = [];
    text_lextale_practice_real_label.setText(prac_button_real);
    text_lextale_practice_false_label.setText(prac_button_false);
    // keep track of which components have finished
    practice_lextaleComponents = [];
    practice_lextaleComponents.push(text_lextale_practice_label);
    practice_lextaleComponents.push(text_lextale_practice_word);
    practice_lextaleComponents.push(key_resp_lextale_practice);
    practice_lextaleComponents.push(text_lextale_practice_real_label);
    practice_lextaleComponents.push(text_lextale_practice_false_label);
    
    practice_lextaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_lextaleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_lextale' ---
    // get current time
    t = practice_lextaleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_lextale_practice_label* updates
    if (t >= 0.0 && text_lextale_practice_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_lextale_practice_label.tStart = t;  // (not accounting for frame time here)
      text_lextale_practice_label.frameNStart = frameN;  // exact frame index
      
      text_lextale_practice_label.setAutoDraw(true);
    }

    
    // *text_lextale_practice_word* updates
    if (t >= 0.5 && text_lextale_practice_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_lextale_practice_word.tStart = t;  // (not accounting for frame time here)
      text_lextale_practice_word.frameNStart = frameN;  // exact frame index
      
      text_lextale_practice_word.setAutoDraw(true);
    }

    
    // *key_resp_lextale_practice* updates
    if (t >= 0.5 && key_resp_lextale_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_lextale_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_lextale_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_lextale_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_lextale_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_lextale_practice.clearEvents(); });
    }

    if (key_resp_lextale_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_lextale_practice.getKeys({keyList: ['1', '0'], waitRelease: false});
      _key_resp_lextale_practice_allKeys = _key_resp_lextale_practice_allKeys.concat(theseKeys);
      if (_key_resp_lextale_practice_allKeys.length > 0) {
        key_resp_lextale_practice.keys = _key_resp_lextale_practice_allKeys[0].name;  // just the first key pressed
        key_resp_lextale_practice.rt = _key_resp_lextale_practice_allKeys[0].rt;
        // was this correct?
        if (key_resp_lextale_practice.keys == correct_response) {
            key_resp_lextale_practice.corr = 1;
        } else {
            key_resp_lextale_practice.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_lextale_practice_real_label* updates
    if (t >= 0.25 && text_lextale_practice_real_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_lextale_practice_real_label.tStart = t;  // (not accounting for frame time here)
      text_lextale_practice_real_label.frameNStart = frameN;  // exact frame index
      
      text_lextale_practice_real_label.setAutoDraw(true);
    }

    
    // *text_lextale_practice_false_label* updates
    if (t >= 0.25 && text_lextale_practice_false_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_lextale_practice_false_label.tStart = t;  // (not accounting for frame time here)
      text_lextale_practice_false_label.frameNStart = frameN;  // exact frame index
      
      text_lextale_practice_false_label.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practice_lextaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_lextaleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_lextale' ---
    practice_lextaleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_lextale_practice.keys === undefined) {
      if (['None','none',undefined].includes(correct_response)) {
         key_resp_lextale_practice.corr = 1;  // correct non-response
      } else {
         key_resp_lextale_practice.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_lextale_practice.corr, level);
    }
    psychoJS.experiment.addData('key_resp_lextale_practice.keys', key_resp_lextale_practice.keys);
    psychoJS.experiment.addData('key_resp_lextale_practice.corr', key_resp_lextale_practice.corr);
    if (typeof key_resp_lextale_practice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_lextale_practice.rt', key_resp_lextale_practice.rt);
        routineTimer.reset();
        }
    
    key_resp_lextale_practice.stop();
    // the Routine "practice_lextale" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_lextale_check_allKeys;
var check_lextaleComponents;
function check_lextaleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'check_lextale' ---
    t = 0;
    check_lextaleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_lextale_check.keys = undefined;
    key_resp_lextale_check.rt = undefined;
    _key_resp_lextale_check_allKeys = [];
    // keep track of which components have finished
    check_lextaleComponents = [];
    check_lextaleComponents.push(text_lextale_check);
    check_lextaleComponents.push(key_resp_lextale_check);
    
    check_lextaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function check_lextaleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'check_lextale' ---
    // get current time
    t = check_lextaleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_lextale_check* updates
    if (t >= 0.0 && text_lextale_check.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_lextale_check.tStart = t;  // (not accounting for frame time here)
      text_lextale_check.frameNStart = frameN;  // exact frame index
      
      text_lextale_check.setAutoDraw(true);
    }

    
    // *key_resp_lextale_check* updates
    if (t >= 0.0 && key_resp_lextale_check.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_lextale_check.tStart = t;  // (not accounting for frame time here)
      key_resp_lextale_check.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_lextale_check.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_lextale_check.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_lextale_check.clearEvents(); });
    }

    if (key_resp_lextale_check.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_lextale_check.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_lextale_check_allKeys = _key_resp_lextale_check_allKeys.concat(theseKeys);
      if (_key_resp_lextale_check_allKeys.length > 0) {
        key_resp_lextale_check.keys = _key_resp_lextale_check_allKeys[_key_resp_lextale_check_allKeys.length - 1].name;  // just the last key pressed
        key_resp_lextale_check.rt = _key_resp_lextale_check_allKeys[_key_resp_lextale_check_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    check_lextaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function check_lextaleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'check_lextale' ---
    check_lextaleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_lextale_check.stop();
    // the Routine "check_lextale" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_lextale_trial_allKeys;
var trial_lextaleComponents;
function trial_lextaleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_lextale' ---
    t = 0;
    trial_lextaleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_lextale_trial_word.setText(word);
    key_resp_lextale_trial.keys = undefined;
    key_resp_lextale_trial.rt = undefined;
    _key_resp_lextale_trial_allKeys = [];
    text_lextale_trial_real_label.setText(button_real);
    text_lextale_trial_false_label.setText(button_false);
    // keep track of which components have finished
    trial_lextaleComponents = [];
    trial_lextaleComponents.push(text_lextale_trial_word);
    trial_lextaleComponents.push(key_resp_lextale_trial);
    trial_lextaleComponents.push(text_lextale_trial_real_label);
    trial_lextaleComponents.push(text_lextale_trial_false_label);
    
    trial_lextaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_lextaleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_lextale' ---
    // get current time
    t = trial_lextaleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_lextale_trial_word* updates
    if (t >= 0.5 && text_lextale_trial_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_lextale_trial_word.tStart = t;  // (not accounting for frame time here)
      text_lextale_trial_word.frameNStart = frameN;  // exact frame index
      
      text_lextale_trial_word.setAutoDraw(true);
    }

    
    // *key_resp_lextale_trial* updates
    if (t >= 0.5 && key_resp_lextale_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_lextale_trial.tStart = t;  // (not accounting for frame time here)
      key_resp_lextale_trial.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_lextale_trial.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_lextale_trial.start(); }); // start on screen flip
    }

    if (key_resp_lextale_trial.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_lextale_trial.getKeys({keyList: ['1', '0'], waitRelease: false});
      _key_resp_lextale_trial_allKeys = _key_resp_lextale_trial_allKeys.concat(theseKeys);
      if (_key_resp_lextale_trial_allKeys.length > 0) {
        key_resp_lextale_trial.keys = _key_resp_lextale_trial_allKeys[0].name;  // just the first key pressed
        key_resp_lextale_trial.rt = _key_resp_lextale_trial_allKeys[0].rt;
        // was this correct?
        if (key_resp_lextale_trial.keys == correct_response) {
            key_resp_lextale_trial.corr = 1;
        } else {
            key_resp_lextale_trial.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_lextale_trial_real_label* updates
    if (t >= 0.25 && text_lextale_trial_real_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_lextale_trial_real_label.tStart = t;  // (not accounting for frame time here)
      text_lextale_trial_real_label.frameNStart = frameN;  // exact frame index
      
      text_lextale_trial_real_label.setAutoDraw(true);
    }

    
    // *text_lextale_trial_false_label* updates
    if (t >= 0.25 && text_lextale_trial_false_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_lextale_trial_false_label.tStart = t;  // (not accounting for frame time here)
      text_lextale_trial_false_label.frameNStart = frameN;  // exact frame index
      
      text_lextale_trial_false_label.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_lextaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_lextaleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_lextale' ---
    trial_lextaleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_lextale_trial.keys === undefined) {
      if (['None','none',undefined].includes(correct_response)) {
         key_resp_lextale_trial.corr = 1;  // correct non-response
      } else {
         key_resp_lextale_trial.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_lextale_trial.corr, level);
    }
    psychoJS.experiment.addData('key_resp_lextale_trial.keys', key_resp_lextale_trial.keys);
    psychoJS.experiment.addData('key_resp_lextale_trial.corr', key_resp_lextale_trial.corr);
    if (typeof key_resp_lextale_trial.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_lextale_trial.rt', key_resp_lextale_trial.rt);
        routineTimer.reset();
        }
    
    key_resp_lextale_trial.stop();
    // the Routine "trial_lextale" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var prolific_codeComponents;
function prolific_codeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prolific_code' ---
    t = 0;
    prolific_codeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    prolific_codeComponents = [];
    prolific_codeComponents.push(text);
    prolific_codeComponents.push(key_resp);
    
    prolific_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function prolific_codeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prolific_code' ---
    // get current time
    t = prolific_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 1 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    prolific_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prolific_codeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prolific_code' ---
    prolific_codeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "prolific_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_expComponents;
function end_expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_exp' ---
    t = 0;
    end_expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    end_expComponents = [];
    
    end_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_expRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_exp' ---
    // get current time
    t = end_expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    end_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_expRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_exp' ---
    end_expComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "end_exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
