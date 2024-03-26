/*************** 
 * Exp_G1 Test *
 ***************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'exp_g1';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
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
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
const exp1_retrialLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp1_retrialLoopBegin(exp1_retrialLoopScheduler));
flowScheduler.add(exp1_retrialLoopScheduler);
flowScheduler.add(exp1_retrialLoopEnd);
flowScheduler.add(exp1_startRoutineBegin());
flowScheduler.add(exp1_startRoutineEachFrame());
flowScheduler.add(exp1_startRoutineEnd());
const exp1_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp1_loopLoopBegin(exp1_loopLoopScheduler));
flowScheduler.add(exp1_loopLoopScheduler);
flowScheduler.add(exp1_loopLoopEnd);
flowScheduler.add(exp1_endRoutineBegin());
flowScheduler.add(exp1_endRoutineEachFrame());
flowScheduler.add(exp1_endRoutineEnd());
const exp2_retrialLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp2_retrialLoopBegin(exp2_retrialLoopScheduler));
flowScheduler.add(exp2_retrialLoopScheduler);
flowScheduler.add(exp2_retrialLoopEnd);
flowScheduler.add(exp2_startRoutineBegin());
flowScheduler.add(exp2_startRoutineEachFrame());
flowScheduler.add(exp2_startRoutineEnd());
const exp2_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp2_loopLoopBegin(exp2_loopLoopScheduler));
flowScheduler.add(exp2_loopLoopScheduler);
flowScheduler.add(exp2_loopLoopEnd);
flowScheduler.add(full_endRoutineBegin());
flowScheduler.add(full_endRoutineEachFrame());
flowScheduler.add(full_endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': '../practice_trial/trial_exp_1/trial1.xlsx', 'path': '../practice_trial/trial_exp_1/trial1.xlsx'},
    {'name': '../practice_trial/audio/tr1.wav', 'path': '../practice_trial/audio/tr1.wav'},
    {'name': '../image/kids.png', 'path': '../image/kids.png'},
    {'name': '../image/plates.png', 'path': '../image/plates.png'},
    {'name': '../practice_trial/audio/tr2.wav', 'path': '../practice_trial/audio/tr2.wav'},
    {'name': '../image/bag.png', 'path': '../image/bag.png'},
    {'name': '../image/car.png', 'path': '../image/car.png'},
    {'name': '../practice_trial/audio/tr3.wav', 'path': '../practice_trial/audio/tr3.wav'},
    {'name': '../image/dog.png', 'path': '../image/dog.png'},
    {'name': '../image/grandma.png', 'path': '../image/grandma.png'},
    {'name': '../practice_trial/audio/tr4.wav', 'path': '../practice_trial/audio/tr4.wav'},
    {'name': '../image/shirt.png', 'path': '../image/shirt.png'},
    {'name': '../practice_trial/audio/tr5.wav', 'path': '../practice_trial/audio/tr5.wav'},
    {'name': '../image/donut.png', 'path': '../image/donut.png'},
    {'name': '../image/cups.png', 'path': '../image/cups.png'},
    {'name': '../practice_trial/audio/tr6.wav', 'path': '../practice_trial/audio/tr6.wav'},
    {'name': '../image/chair.png', 'path': '../image/chair.png'},
    {'name': '../image/sweater.png', 'path': '../image/sweater.png'},
    {'name': '../practice_trial/audio/tr7.wav', 'path': '../practice_trial/audio/tr7.wav'},
    {'name': '../image/wallet.png', 'path': '../image/wallet.png'},
    {'name': '../practice_trial/audio/tr8.wav', 'path': '../practice_trial/audio/tr8.wav'},
    {'name': '../image/key.png', 'path': '../image/key.png'},
    {'name': '../image/flipflops.png', 'path': '../image/flipflops.png'},
    {'name': '../stim/stim_g1_e1.xlsx', 'path': '../stim/stim_g1_e1.xlsx'},
    {'name': '../image/cat.png', 'path': '../image/cat.png'},
    {'name': '../image/dog.png', 'path': '../image/dog.png'},
    {'name': '../audio/061.wav', 'path': '../audio/061.wav'},
    {'name': '../image/shoe.png', 'path': '../image/shoe.png'},
    {'name': '../image/ring.png', 'path': '../image/ring.png'},
    {'name': '../audio/062.wav', 'path': '../audio/062.wav'},
    {'name': '../image/woman.png', 'path': '../image/woman.png'},
    {'name': '../image/man.png', 'path': '../image/man.png'},
    {'name': '../audio/063.wav', 'path': '../audio/063.wav'},
    {'name': '../image/wallet.png', 'path': '../image/wallet.png'},
    {'name': '../image/key.png', 'path': '../image/key.png'},
    {'name': '../audio/064.wav', 'path': '../audio/064.wav'},
    {'name': '../image/computer.png', 'path': '../image/computer.png'},
    {'name': '../image/book.png', 'path': '../image/book.png'},
    {'name': '../audio/065.wav', 'path': '../audio/065.wav'},
    {'name': '../image/bag.png', 'path': '../image/bag.png'},
    {'name': '../image/scarf.png', 'path': '../image/scarf.png'},
    {'name': '../audio/066.wav', 'path': '../audio/066.wav'},
    {'name': '../image/beer.png', 'path': '../image/beer.png'},
    {'name': '../image/glasses.png', 'path': '../image/glasses.png'},
    {'name': '../audio/067.wav', 'path': '../audio/067.wav'},
    {'name': '../image/socks.png', 'path': '../image/socks.png'},
    {'name': '../audio/068.wav', 'path': '../audio/068.wav'},
    {'name': '../image/shirt.png', 'path': '../image/shirt.png'},
    {'name': '../audio/069.wav', 'path': '../audio/069.wav'},
    {'name': '../image/bed.png', 'path': '../image/bed.png'},
    {'name': '../audio/070.wav', 'path': '../audio/070.wav'},
    {'name': '../image/plane.png', 'path': '../image/plane.png'},
    {'name': '../audio/071.wav', 'path': '../audio/071.wav'},
    {'name': '../image/fish.png', 'path': '../image/fish.png'},
    {'name': '../audio/072.wav', 'path': '../audio/072.wav'},
    {'name': '../image/tshirt.png', 'path': '../image/tshirt.png'},
    {'name': '../audio/073.wav', 'path': '../audio/073.wav'},
    {'name': '../image/boy.png', 'path': '../image/boy.png'},
    {'name': '../audio/074.wav', 'path': '../audio/074.wav'},
    {'name': '../audio/075.wav', 'path': '../audio/075.wav'},
    {'name': '../image/hotdog.png', 'path': '../image/hotdog.png'},
    {'name': '../image/burger.png', 'path': '../image/burger.png'},
    {'name': '../audio/076.wav', 'path': '../audio/076.wav'},
    {'name': '../image/mashedpotatoes.png', 'path': '../image/mashedpotatoes.png'},
    {'name': '../image/donut.png', 'path': '../image/donut.png'},
    {'name': '../audio/077.wav', 'path': '../audio/077.wav'},
    {'name': '../image/airpods.png', 'path': '../image/airpods.png'},
    {'name': '../image/joycons.png', 'path': '../image/joycons.png'},
    {'name': '../audio/078.wav', 'path': '../audio/078.wav'},
    {'name': '../image/sweatpants.png', 'path': '../image/sweatpants.png'},
    {'name': '../image/jeans.png', 'path': '../image/jeans.png'},
    {'name': '../audio/079.wav', 'path': '../audio/079.wav'},
    {'name': '../image/mouse.png', 'path': '../image/mouse.png'},
    {'name': '../image/rat.png', 'path': '../image/rat.png'},
    {'name': '../audio/080.wav', 'path': '../audio/080.wav'},
    {'name': '../image/boxers.png', 'path': '../image/boxers.png'},
    {'name': '../audio/081.wav', 'path': '../audio/081.wav'},
    {'name': '../image/mickeymouse.png', 'path': '../image/mickeymouse.png'},
    {'name': '../image/spongebob.png', 'path': '../image/spongebob.png'},
    {'name': '../audio/082.wav', 'path': '../audio/082.wav'},
    {'name': '../audio/083.wav', 'path': '../audio/083.wav'},
    {'name': '../image/penthouse.png', 'path': '../image/penthouse.png'},
    {'name': '../image/rocket.png', 'path': '../image/rocket.png'},
    {'name': '../audio/084.wav', 'path': '../audio/084.wav'},
    {'name': '../image/loafers.png', 'path': '../image/loafers.png'},
    {'name': '../image/sneakers.png', 'path': '../image/sneakers.png'},
    {'name': '../audio/085.wav', 'path': '../audio/085.wav'},
    {'name': '../image/plates.png', 'path': '../image/plates.png'},
    {'name': '../audio/086.wav', 'path': '../audio/086.wav'},
    {'name': '../image/desk.png', 'path': '../image/desk.png'},
    {'name': '../audio/087.wav', 'path': '../audio/087.wav'},
    {'name': '../image/cellphone.png', 'path': '../image/cellphone.png'},
    {'name': '../audio/088.wav', 'path': '../audio/088.wav'},
    {'name': '../audio/089.wav', 'path': '../audio/089.wav'},
    {'name': '../image/bottle.png', 'path': '../image/bottle.png'},
    {'name': '../audio/090.wav', 'path': '../audio/090.wav'},
    {'name': '../image/backpack.png', 'path': '../image/backpack.png'},
    {'name': '../image/bracelet.png', 'path': '../image/bracelet.png'},
    {'name': '../audio/091.wav', 'path': '../audio/091.wav'},
    {'name': '../image/armchair.png', 'path': '../image/armchair.png'},
    {'name': '../audio/092.wav', 'path': '../audio/092.wav'},
    {'name': '../audio/093.wav', 'path': '../audio/093.wav'},
    {'name': '../image/horchata.png', 'path': '../image/horchata.png'},
    {'name': '../audio/094.wav', 'path': '../audio/094.wav'},
    {'name': '../audio/095.wav', 'path': '../audio/095.wav'},
    {'name': '../audio/011.wav', 'path': '../audio/011.wav'},
    {'name': '../image/newspaper.png', 'path': '../image/newspaper.png'},
    {'name': '../audio/012.wav', 'path': '../audio/012.wav'},
    {'name': '../image/wine.png', 'path': '../image/wine.png'},
    {'name': '../audio/013.wav', 'path': '../audio/013.wav'},
    {'name': '../audio/014.wav', 'path': '../audio/014.wav'},
    {'name': '../image/jacket.png', 'path': '../image/jacket.png'},
    {'name': '../audio/015.wav', 'path': '../audio/015.wav'},
    {'name': '../image/flipflops.png', 'path': '../image/flipflops.png'},
    {'name': '../audio/016.wav', 'path': '../audio/016.wav'},
    {'name': '../image/jug.png', 'path': '../image/jug.png'},
    {'name': '../audio/017.wav', 'path': '../audio/017.wav'},
    {'name': '../image/cups.png', 'path': '../image/cups.png'},
    {'name': '../image/napkins.png', 'path': '../image/napkins.png'},
    {'name': '../audio/018.wav', 'path': '../audio/018.wav'},
    {'name': '../audio/019.wav', 'path': '../audio/019.wav'},
    {'name': '../audio/020.wav', 'path': '../audio/020.wav'},
    {'name': '../image/flower.png', 'path': '../image/flower.png'},
    {'name': '../audio/131.wav', 'path': '../audio/131.wav'},
    {'name': '../image/car.png', 'path': '../image/car.png'},
    {'name': '../image/grandma.png', 'path': '../image/grandma.png'},
    {'name': '../audio/132.wav', 'path': '../audio/132.wav'},
    {'name': '../audio/133.wav', 'path': '../audio/133.wav'},
    {'name': '../image/basket.png', 'path': '../image/basket.png'},
    {'name': '../image/truck.png', 'path': '../image/truck.png'},
    {'name': '../audio/134.wav', 'path': '../audio/134.wav'},
    {'name': '../audio/135.wav', 'path': '../audio/135.wav'},
    {'name': '../image/city.png', 'path': '../image/city.png'},
    {'name': '../image/village.png', 'path': '../image/village.png'},
    {'name': '../audio/136.wav', 'path': '../audio/136.wav'},
    {'name': '../audio/137.wav', 'path': '../audio/137.wav'},
    {'name': '../image/pants.png', 'path': '../image/pants.png'},
    {'name': '../audio/138.wav', 'path': '../audio/138.wav'},
    {'name': '../image/restaurant.png', 'path': '../image/restaurant.png'},
    {'name': '../image/hotel.png', 'path': '../image/hotel.png'},
    {'name': '../audio/139.wav', 'path': '../audio/139.wav'},
    {'name': '../audio/140.wav', 'path': '../audio/140.wav'},
    {'name': '../practice_trial/trial_exp_2/trial2.xlsx', 'path': '../practice_trial/trial_exp_2/trial2.xlsx'},
    {'name': '../practice_trial/audio/tr1.wav', 'path': '../practice_trial/audio/tr1.wav'},
    {'name': '../image/america.png', 'path': '../image/america.png'},
    {'name': '../image/spain.png', 'path': '../image/spain.png'},
    {'name': '../practice_trial/audio/tr2.wav', 'path': '../practice_trial/audio/tr2.wav'},
    {'name': '../practice_trial/audio/tr3.wav', 'path': '../practice_trial/audio/tr3.wav'},
    {'name': '../practice_trial/audio/tr4.wav', 'path': '../practice_trial/audio/tr4.wav'},
    {'name': '../practice_trial/audio/tr5.wav', 'path': '../practice_trial/audio/tr5.wav'},
    {'name': '../practice_trial/audio/tr6.wav', 'path': '../practice_trial/audio/tr6.wav'},
    {'name': '../practice_trial/audio/tr7.wav', 'path': '../practice_trial/audio/tr7.wav'},
    {'name': '../practice_trial/audio/tr8.wav', 'path': '../practice_trial/audio/tr8.wav'},
    {'name': '../stim/stim_g1_e2.xlsx', 'path': '../stim/stim_g1_e2.xlsx'},
    {'name': '../audio/096.wav', 'path': '../audio/096.wav'},
    {'name': '../image/america.png', 'path': '../image/america.png'},
    {'name': '../image/spain.png', 'path': '../image/spain.png'},
    {'name': '../audio/097.wav', 'path': '../audio/097.wav'},
    {'name': '../audio/098.wav', 'path': '../audio/098.wav'},
    {'name': '../audio/099.wav', 'path': '../audio/099.wav'},
    {'name': '../audio/100.wav', 'path': '../audio/100.wav'},
    {'name': '../audio/101.wav', 'path': '../audio/101.wav'},
    {'name': '../audio/102.wav', 'path': '../audio/102.wav'},
    {'name': '../audio/103.wav', 'path': '../audio/103.wav'},
    {'name': '../audio/104.wav', 'path': '../audio/104.wav'},
    {'name': '../audio/105.wav', 'path': '../audio/105.wav'},
    {'name': '../audio/106.wav', 'path': '../audio/106.wav'},
    {'name': '../audio/107.wav', 'path': '../audio/107.wav'},
    {'name': '../audio/108.wav', 'path': '../audio/108.wav'},
    {'name': '../audio/109.wav', 'path': '../audio/109.wav'},
    {'name': '../audio/110.wav', 'path': '../audio/110.wav'},
    {'name': '../audio/111.wav', 'path': '../audio/111.wav'},
    {'name': '../audio/112.wav', 'path': '../audio/112.wav'},
    {'name': '../audio/113.wav', 'path': '../audio/113.wav'},
    {'name': '../audio/114.wav', 'path': '../audio/114.wav'},
    {'name': '../audio/115.wav', 'path': '../audio/115.wav'},
    {'name': '../audio/116.wav', 'path': '../audio/116.wav'},
    {'name': '../audio/117.wav', 'path': '../audio/117.wav'},
    {'name': '../audio/118.wav', 'path': '../audio/118.wav'},
    {'name': '../audio/119.wav', 'path': '../audio/119.wav'},
    {'name': '../audio/120.wav', 'path': '../audio/120.wav'},
    {'name': '../audio/121.wav', 'path': '../audio/121.wav'},
    {'name': '../audio/122.wav', 'path': '../audio/122.wav'},
    {'name': '../audio/123.wav', 'path': '../audio/123.wav'},
    {'name': '../audio/124.wav', 'path': '../audio/124.wav'},
    {'name': '../audio/125.wav', 'path': '../audio/125.wav'},
    {'name': '../audio/126.wav', 'path': '../audio/126.wav'},
    {'name': '../audio/127.wav', 'path': '../audio/127.wav'},
    {'name': '../audio/128.wav', 'path': '../audio/128.wav'},
    {'name': '../audio/129.wav', 'path': '../audio/129.wav'},
    {'name': '../audio/130.wav', 'path': '../audio/130.wav'},
    {'name': '../audio/021.wav', 'path': '../audio/021.wav'},
    {'name': '../audio/022.wav', 'path': '../audio/022.wav'},
    {'name': '../audio/023.wav', 'path': '../audio/023.wav'},
    {'name': '../audio/024.wav', 'path': '../audio/024.wav'},
    {'name': '../audio/025.wav', 'path': '../audio/025.wav'},
    {'name': '../audio/026.wav', 'path': '../audio/026.wav'},
    {'name': '../audio/027.wav', 'path': '../audio/027.wav'},
    {'name': '../audio/028.wav', 'path': '../audio/028.wav'},
    {'name': '../audio/029.wav', 'path': '../audio/029.wav'},
    {'name': '../audio/030.wav', 'path': '../audio/030.wav'},
    {'name': '../audio/161.wav', 'path': '../audio/161.wav'},
    {'name': '../audio/162.wav', 'path': '../audio/162.wav'},
    {'name': '../audio/163.wav', 'path': '../audio/163.wav'},
    {'name': '../audio/164.wav', 'path': '../audio/164.wav'},
    {'name': '../audio/165.wav', 'path': '../audio/165.wav'},
    {'name': '../audio/166.wav', 'path': '../audio/166.wav'},
    {'name': '../audio/167.wav', 'path': '../audio/167.wav'},
    {'name': '../audio/168.wav', 'path': '../audio/168.wav'},
    {'name': '../audio/169.wav', 'path': '../audio/169.wav'},
    {'name': '../audio/170.wav', 'path': '../audio/170.wav'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var welcomeClock;
var welcome_text;
var end_welcome;
var exp1_instrClock;
var exp1_instr_text;
var exp1_instr_key;
var exp1_trialClock;
var exp1_trial_image_l;
var exp1_trial_image_r;
var exp1_trial_key;
var exp1_trial_sound;
var exp1_trial_cross;
var end_exp1_trialClock;
var end_exp1_trial_text;
var end_exp1_trial_key;
var exp1_startClock;
var exp1_start_key;
var exp1_start_text;
var exp1Clock;
var exp1_image_l;
var exp1_image_r;
var exp1_key;
var exp1_sound;
var exp1_cross;
var exp1_endClock;
var exp1_end_text;
var exp1_end_key;
var exp2_instrClock;
var exp2_instr_text;
var exp2_instr_key;
var exp2_trialClock;
var exp2_trial_iamge_l;
var exp2_trial_image_r;
var exp2_trial_key;
var exp2_trial_sound;
var exp2_trial_cross;
var end_exp2_trialClock;
var end_exp2_trial_text;
var end_exp2_trial_key;
var exp2_startClock;
var exp2_start_key;
var exp2_start_text;
var exp2Clock;
var exp2_image_l;
var exp2_image_r;
var exp2_key;
var exp2_sound;
var exp2_cross;
var full_endClock;
var full_end_text;
var full_end_key;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: "Welcome to the study.\n\nIn this study, you'll finish two similar but different experiments. You'll receive instructions and do a couple of practice trials before the real experiments begin.\n\nBetween the two experiments you'll have time to take a 5-minute break. During the experiment, if you need to pause or stop, please raise you hand so the researcher can assist you.\n\nPress space to continue.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_welcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp1_instr"
  exp1_instrClock = new util.Clock();
  exp1_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'exp1_instr_text',
    text: "Welcome! Here are the instructions for experiment 1.\n\nIn this experiment you will see two items on the screen while listening to a sentence.Only one of the two items will be mentioned in the recording. When you hear the item, you should hit the corresponding left or right shift key immediately. The sentence you hear can be English, Spanish or a mix of both. You only need to hit the key ONCE.\n\nBefore the experiment starts, let's do a couple of practice trials.\n\nHit space to start practice trial.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  exp1_instr_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp1_trial"
  exp1_trialClock = new util.Clock();
  exp1_trial_image_l = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp1_trial_image_l', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  exp1_trial_image_r = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp1_trial_image_r', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  exp1_trial_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  exp1_trial_sound = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  exp1_trial_sound.setVolume(1.0);
  exp1_trial_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'exp1_trial_cross',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "end_exp1_trial"
  end_exp1_trialClock = new util.Clock();
  end_exp1_trial_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_exp1_trial_text',
    text: 'Good Job!\n\nIf you want to practice again, hit space.\n\nIf you are ready to start the experiment, hit right shift.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_exp1_trial_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp1_start"
  exp1_startClock = new util.Clock();
  exp1_start_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  exp1_start_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'exp1_start_text',
    text: "Now let's start the experiment 1!\n\nPlease keep your hands on the left-shift key and right-shift key. \n\nTo start, please, hit the left-shift key then the right-shift key.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "exp1"
  exp1Clock = new util.Clock();
  exp1_image_l = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp1_image_l', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  exp1_image_r = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp1_image_r', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  exp1_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  exp1_sound = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  exp1_sound.setVolume(1.0);
  exp1_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'exp1_cross',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "exp1_end"
  exp1_endClock = new util.Clock();
  exp1_end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'exp1_end_text',
    text: 'Good Job! This is the end of experiment 1\n\nBefore we start experiment 2, you can take a short break.\n\nWhen you are ready to start experiment 2, please press space to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  exp1_end_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp2_instr"
  exp2_instrClock = new util.Clock();
  exp2_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'exp2_instr_text',
    text: "Welcome back. Here are the instrctions for experiment 2\n\nYou'll see two flags: American flag representing English and Spanish flag respresenting Spanish. If you hear English, hit the left shift key, if you hear Spanish, hit the right shift key. If you hear a change of language, you should then hit the other shift key as soon as you hear the change.\n\nBefore the experiment starts, let's do a couple of practice trials.\n\nHit space to start practice trial.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  exp2_instr_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp2_trial"
  exp2_trialClock = new util.Clock();
  exp2_trial_iamge_l = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp2_trial_iamge_l', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  exp2_trial_image_r = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp2_trial_image_r', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  exp2_trial_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  exp2_trial_sound = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  exp2_trial_sound.setVolume(1.0);
  exp2_trial_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'exp2_trial_cross',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "end_exp2_trial"
  end_exp2_trialClock = new util.Clock();
  end_exp2_trial_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_exp2_trial_text',
    text: 'Good Job!\n\nIf you want to practice again, hit space.\n\nIf you are ready to start the experiment, hit right shift.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_exp2_trial_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp2_start"
  exp2_startClock = new util.Clock();
  exp2_start_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  exp2_start_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'exp2_start_text',
    text: "Now let's start the experiment 2!\n\nPlease keep your hands on the left-shift key and right-shift key. \n\nTo start, please, hit the left-shift key then the right-shift key.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "exp2"
  exp2Clock = new util.Clock();
  exp2_image_l = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp2_image_l', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  exp2_image_r = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp2_image_r', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  exp2_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  exp2_sound = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  exp2_sound.setVolume(1.0);
  exp2_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'exp2_cross',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "full_end"
  full_endClock = new util.Clock();
  full_end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'full_end_text',
    text: 'This is the end of the study.\n\n\nThank you for your participation!\n\nHave a great day!\n\nPress space to exit.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  full_end_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _end_welcome_allKeys;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_welcome.keys = undefined;
    end_welcome.rt = undefined;
    _end_welcome_allKeys = [];
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcome_text);
    welcomeComponents.push(end_welcome);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_text* updates
    if (t >= 0.0 && welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_text.tStart = t;  // (not accounting for frame time here)
      welcome_text.frameNStart = frameN;  // exact frame index
      
      welcome_text.setAutoDraw(true);
    }

    
    // *end_welcome* updates
    if (t >= 0.0 && end_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_welcome.tStart = t;  // (not accounting for frame time here)
      end_welcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      end_welcome.clock.reset();
      end_welcome.start();
    }

    if (end_welcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_welcome.getKeys({keyList: ['space'], waitRelease: false});
      _end_welcome_allKeys = _end_welcome_allKeys.concat(theseKeys);
      if (_end_welcome_allKeys.length > 0) {
        end_welcome.keys = _end_welcome_allKeys[_end_welcome_allKeys.length - 1].name;  // just the last key pressed
        end_welcome.rt = _end_welcome_allKeys[_end_welcome_allKeys.length - 1].rt;
        end_welcome.duration = _end_welcome_allKeys[_end_welcome_allKeys.length - 1].duration;
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
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    end_welcome.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp1_retrial;
function exp1_retrialLoopBegin(exp1_retrialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp1_retrial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1000, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'exp1_retrial'
    });
    psychoJS.experiment.addLoop(exp1_retrial); // add the loop to the experiment
    currentLoop = exp1_retrial;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExp1_retrial of exp1_retrial) {
      snapshot = exp1_retrial.getSnapshot();
      exp1_retrialLoopScheduler.add(importConditions(snapshot));
      exp1_retrialLoopScheduler.add(exp1_instrRoutineBegin(snapshot));
      exp1_retrialLoopScheduler.add(exp1_instrRoutineEachFrame());
      exp1_retrialLoopScheduler.add(exp1_instrRoutineEnd(snapshot));
      const exp1_trial_loopLoopScheduler = new Scheduler(psychoJS);
      exp1_retrialLoopScheduler.add(exp1_trial_loopLoopBegin(exp1_trial_loopLoopScheduler, snapshot));
      exp1_retrialLoopScheduler.add(exp1_trial_loopLoopScheduler);
      exp1_retrialLoopScheduler.add(exp1_trial_loopLoopEnd);
      exp1_retrialLoopScheduler.add(end_exp1_trialRoutineBegin(snapshot));
      exp1_retrialLoopScheduler.add(end_exp1_trialRoutineEachFrame());
      exp1_retrialLoopScheduler.add(end_exp1_trialRoutineEnd(snapshot));
      exp1_retrialLoopScheduler.add(exp1_retrialLoopEndIteration(exp1_retrialLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var exp1_trial_loop;
function exp1_trial_loopLoopBegin(exp1_trial_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp1_trial_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, '/Users/gabmac/Documents/RU/QP/exp/practice_trial/trial_exp_1/trial1.xlsx', '0:8'),
      seed: undefined, name: 'exp1_trial_loop'
    });
    psychoJS.experiment.addLoop(exp1_trial_loop); // add the loop to the experiment
    currentLoop = exp1_trial_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExp1_trial_loop of exp1_trial_loop) {
      snapshot = exp1_trial_loop.getSnapshot();
      exp1_trial_loopLoopScheduler.add(importConditions(snapshot));
      exp1_trial_loopLoopScheduler.add(exp1_trialRoutineBegin(snapshot));
      exp1_trial_loopLoopScheduler.add(exp1_trialRoutineEachFrame());
      exp1_trial_loopLoopScheduler.add(exp1_trialRoutineEnd(snapshot));
      exp1_trial_loopLoopScheduler.add(exp1_trial_loopLoopEndIteration(exp1_trial_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function exp1_trial_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp1_trial_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp1_trial_loopLoopEndIteration(scheduler, snapshot) {
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


async function exp1_retrialLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp1_retrial);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp1_retrialLoopEndIteration(scheduler, snapshot) {
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


var exp1_loop;
function exp1_loopLoopBegin(exp1_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp1_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, '/Users/gabmac/Documents/RU/QP/exp/stim/stim_g1_e1.xlsx', '0:55'),
      seed: undefined, name: 'exp1_loop'
    });
    psychoJS.experiment.addLoop(exp1_loop); // add the loop to the experiment
    currentLoop = exp1_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExp1_loop of exp1_loop) {
      snapshot = exp1_loop.getSnapshot();
      exp1_loopLoopScheduler.add(importConditions(snapshot));
      exp1_loopLoopScheduler.add(exp1RoutineBegin(snapshot));
      exp1_loopLoopScheduler.add(exp1RoutineEachFrame());
      exp1_loopLoopScheduler.add(exp1RoutineEnd(snapshot));
      exp1_loopLoopScheduler.add(exp1_loopLoopEndIteration(exp1_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function exp1_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp1_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp1_loopLoopEndIteration(scheduler, snapshot) {
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


var exp2_retrial;
function exp2_retrialLoopBegin(exp2_retrialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp2_retrial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1000, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'exp2_retrial'
    });
    psychoJS.experiment.addLoop(exp2_retrial); // add the loop to the experiment
    currentLoop = exp2_retrial;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExp2_retrial of exp2_retrial) {
      snapshot = exp2_retrial.getSnapshot();
      exp2_retrialLoopScheduler.add(importConditions(snapshot));
      exp2_retrialLoopScheduler.add(exp2_instrRoutineBegin(snapshot));
      exp2_retrialLoopScheduler.add(exp2_instrRoutineEachFrame());
      exp2_retrialLoopScheduler.add(exp2_instrRoutineEnd(snapshot));
      const exp2_trial_loopLoopScheduler = new Scheduler(psychoJS);
      exp2_retrialLoopScheduler.add(exp2_trial_loopLoopBegin(exp2_trial_loopLoopScheduler, snapshot));
      exp2_retrialLoopScheduler.add(exp2_trial_loopLoopScheduler);
      exp2_retrialLoopScheduler.add(exp2_trial_loopLoopEnd);
      exp2_retrialLoopScheduler.add(end_exp2_trialRoutineBegin(snapshot));
      exp2_retrialLoopScheduler.add(end_exp2_trialRoutineEachFrame());
      exp2_retrialLoopScheduler.add(end_exp2_trialRoutineEnd(snapshot));
      exp2_retrialLoopScheduler.add(exp2_retrialLoopEndIteration(exp2_retrialLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var exp2_trial_loop;
function exp2_trial_loopLoopBegin(exp2_trial_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp2_trial_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, '/Users/gabmac/Documents/RU/QP/exp/practice_trial/trial_exp_2/trial2.xlsx', '0:8'),
      seed: undefined, name: 'exp2_trial_loop'
    });
    psychoJS.experiment.addLoop(exp2_trial_loop); // add the loop to the experiment
    currentLoop = exp2_trial_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExp2_trial_loop of exp2_trial_loop) {
      snapshot = exp2_trial_loop.getSnapshot();
      exp2_trial_loopLoopScheduler.add(importConditions(snapshot));
      exp2_trial_loopLoopScheduler.add(exp2_trialRoutineBegin(snapshot));
      exp2_trial_loopLoopScheduler.add(exp2_trialRoutineEachFrame());
      exp2_trial_loopLoopScheduler.add(exp2_trialRoutineEnd(snapshot));
      exp2_trial_loopLoopScheduler.add(exp2_trial_loopLoopEndIteration(exp2_trial_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function exp2_trial_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp2_trial_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp2_trial_loopLoopEndIteration(scheduler, snapshot) {
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


async function exp2_retrialLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp2_retrial);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp2_retrialLoopEndIteration(scheduler, snapshot) {
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


var exp2_loop;
function exp2_loopLoopBegin(exp2_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp2_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, '/Users/gabmac/Documents/RU/QP/exp/stim/stim_g1_e2.xlsx', '0:55'),
      seed: undefined, name: 'exp2_loop'
    });
    psychoJS.experiment.addLoop(exp2_loop); // add the loop to the experiment
    currentLoop = exp2_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExp2_loop of exp2_loop) {
      snapshot = exp2_loop.getSnapshot();
      exp2_loopLoopScheduler.add(importConditions(snapshot));
      exp2_loopLoopScheduler.add(exp2RoutineBegin(snapshot));
      exp2_loopLoopScheduler.add(exp2RoutineEachFrame());
      exp2_loopLoopScheduler.add(exp2RoutineEnd(snapshot));
      exp2_loopLoopScheduler.add(exp2_loopLoopEndIteration(exp2_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function exp2_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp2_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp2_loopLoopEndIteration(scheduler, snapshot) {
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


var _exp1_instr_key_allKeys;
var exp1_instrComponents;
function exp1_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp1_instr' ---
    t = 0;
    exp1_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    exp1_instr_key.keys = undefined;
    exp1_instr_key.rt = undefined;
    _exp1_instr_key_allKeys = [];
    // keep track of which components have finished
    exp1_instrComponents = [];
    exp1_instrComponents.push(exp1_instr_text);
    exp1_instrComponents.push(exp1_instr_key);
    
    for (const thisComponent of exp1_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp1_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp1_instr' ---
    // get current time
    t = exp1_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp1_instr_text* updates
    if (t >= 0.0 && exp1_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_instr_text.tStart = t;  // (not accounting for frame time here)
      exp1_instr_text.frameNStart = frameN;  // exact frame index
      
      exp1_instr_text.setAutoDraw(true);
    }

    
    // *exp1_instr_key* updates
    if (t >= 0.0 && exp1_instr_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_instr_key.tStart = t;  // (not accounting for frame time here)
      exp1_instr_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      exp1_instr_key.clock.reset();
      exp1_instr_key.start();
    }

    if (exp1_instr_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = exp1_instr_key.getKeys({keyList: ['space'], waitRelease: false});
      _exp1_instr_key_allKeys = _exp1_instr_key_allKeys.concat(theseKeys);
      if (_exp1_instr_key_allKeys.length > 0) {
        exp1_instr_key.keys = _exp1_instr_key_allKeys[_exp1_instr_key_allKeys.length - 1].name;  // just the last key pressed
        exp1_instr_key.rt = _exp1_instr_key_allKeys[_exp1_instr_key_allKeys.length - 1].rt;
        exp1_instr_key.duration = _exp1_instr_key_allKeys[_exp1_instr_key_allKeys.length - 1].duration;
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
    for (const thisComponent of exp1_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp1_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp1_instr' ---
    for (const thisComponent of exp1_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    exp1_instr_key.stop();
    // the Routine "exp1_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _exp1_trial_key_allKeys;
var exp1_trialComponents;
function exp1_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp1_trial' ---
    t = 0;
    exp1_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.250000);
    // update component parameters for each repeat
    exp1_trial_image_l.setImage(left);
    exp1_trial_image_r.setImage(right);
    exp1_trial_key.keys = undefined;
    exp1_trial_key.rt = undefined;
    _exp1_trial_key_allKeys = [];
    exp1_trial_sound.setValue(sound_dir);
    exp1_trial_sound.secs=4;
    exp1_trial_sound.setVolume(1.0);
    // keep track of which components have finished
    exp1_trialComponents = [];
    exp1_trialComponents.push(exp1_trial_image_l);
    exp1_trialComponents.push(exp1_trial_image_r);
    exp1_trialComponents.push(exp1_trial_key);
    exp1_trialComponents.push(exp1_trial_sound);
    exp1_trialComponents.push(exp1_trial_cross);
    
    for (const thisComponent of exp1_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function exp1_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp1_trial' ---
    // get current time
    t = exp1_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp1_trial_image_l* updates
    if (t >= 0.25 && exp1_trial_image_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_trial_image_l.tStart = t;  // (not accounting for frame time here)
      exp1_trial_image_l.frameNStart = frameN;  // exact frame index
      
      exp1_trial_image_l.setAutoDraw(true);
    }

    frameRemains = 0.25 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp1_trial_image_l.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp1_trial_image_l.setAutoDraw(false);
    }
    
    // *exp1_trial_image_r* updates
    if (t >= 0.25 && exp1_trial_image_r.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_trial_image_r.tStart = t;  // (not accounting for frame time here)
      exp1_trial_image_r.frameNStart = frameN;  // exact frame index
      
      exp1_trial_image_r.setAutoDraw(true);
    }

    frameRemains = 0.25 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp1_trial_image_r.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp1_trial_image_r.setAutoDraw(false);
    }
    
    // *exp1_trial_key* updates
    if (t >= 0.25 && exp1_trial_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_trial_key.tStart = t;  // (not accounting for frame time here)
      exp1_trial_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exp1_trial_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exp1_trial_key.start(); }); // start on screen flip
    }

    frameRemains = 0.25 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp1_trial_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp1_trial_key.status = PsychoJS.Status.FINISHED;
  }

    if (exp1_trial_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = exp1_trial_key.getKeys({keyList: ['lshift', 'rshift'], waitRelease: false});
      _exp1_trial_key_allKeys = _exp1_trial_key_allKeys.concat(theseKeys);
      if (_exp1_trial_key_allKeys.length > 0) {
        exp1_trial_key.keys = _exp1_trial_key_allKeys.map((key) => key.name);  // storing all keys
        exp1_trial_key.rt = _exp1_trial_key_allKeys.map((key) => key.rt);
        exp1_trial_key.duration = _exp1_trial_key_allKeys.map((key) => key.duration);
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop exp1_trial_sound
    if (t >= 1.0 && exp1_trial_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_trial_sound.tStart = t;  // (not accounting for frame time here)
      exp1_trial_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ exp1_trial_sound.play(); });  // screen flip
      exp1_trial_sound.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 1.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp1_trial_sound.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= exp1_trial_sound.tStart + 0.5) {
        exp1_trial_sound.stop();  // stop the sound (if longer than duration)
        exp1_trial_sound.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *exp1_trial_cross* updates
    if (t >= 0.0 && exp1_trial_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_trial_cross.tStart = t;  // (not accounting for frame time here)
      exp1_trial_cross.frameNStart = frameN;  // exact frame index
      
      exp1_trial_cross.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp1_trial_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp1_trial_cross.setAutoDraw(false);
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
    for (const thisComponent of exp1_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp1_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp1_trial' ---
    for (const thisComponent of exp1_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(exp1_trial_key.corr, level);
    }
    psychoJS.experiment.addData('exp1_trial_key.keys', exp1_trial_key.keys);
    if (typeof exp1_trial_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('exp1_trial_key.rt', exp1_trial_key.rt);
        psychoJS.experiment.addData('exp1_trial_key.duration', exp1_trial_key.duration);
        routineTimer.reset();
        }
    
    exp1_trial_key.stop();
    exp1_trial_sound.stop();  // ensure sound has stopped at end of routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_exp1_trial_key_allKeys;
var end_exp1_trialComponents;
function end_exp1_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_exp1_trial' ---
    t = 0;
    end_exp1_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_exp1_trial_key.keys = undefined;
    end_exp1_trial_key.rt = undefined;
    _end_exp1_trial_key_allKeys = [];
    // keep track of which components have finished
    end_exp1_trialComponents = [];
    end_exp1_trialComponents.push(end_exp1_trial_text);
    end_exp1_trialComponents.push(end_exp1_trial_key);
    
    for (const thisComponent of end_exp1_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_exp1_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_exp1_trial' ---
    // get current time
    t = end_exp1_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_exp1_trial_text* updates
    if (t >= 0 && end_exp1_trial_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_exp1_trial_text.tStart = t;  // (not accounting for frame time here)
      end_exp1_trial_text.frameNStart = frameN;  // exact frame index
      
      end_exp1_trial_text.setAutoDraw(true);
    }

    
    // *end_exp1_trial_key* updates
    if (t >= 0.0 && end_exp1_trial_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_exp1_trial_key.tStart = t;  // (not accounting for frame time here)
      end_exp1_trial_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_exp1_trial_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_exp1_trial_key.start(); }); // start on screen flip
    }

    if (end_exp1_trial_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_exp1_trial_key.getKeys({keyList: ['space', 'rshift'], waitRelease: false});
      _end_exp1_trial_key_allKeys = _end_exp1_trial_key_allKeys.concat(theseKeys);
      if (_end_exp1_trial_key_allKeys.length > 0) {
        end_exp1_trial_key.keys = _end_exp1_trial_key_allKeys[_end_exp1_trial_key_allKeys.length - 1].name;  // just the last key pressed
        end_exp1_trial_key.rt = _end_exp1_trial_key_allKeys[_end_exp1_trial_key_allKeys.length - 1].rt;
        end_exp1_trial_key.duration = _end_exp1_trial_key_allKeys[_end_exp1_trial_key_allKeys.length - 1].duration;
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
    for (const thisComponent of end_exp1_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_exp1_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_exp1_trial' ---
    for (const thisComponent of end_exp1_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    end_exp1_trial_key.stop();
    // Run 'End Routine' code from exp1_trial_code
    if ((end_exp1_trial_key.keys === "rshift")) {
        exp1_retrial.finished = true;
    }
    
    // the Routine "end_exp1_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _exp1_start_key_allKeys;
var exp1_startComponents;
function exp1_startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp1_start' ---
    t = 0;
    exp1_startClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    exp1_start_key.keys = undefined;
    exp1_start_key.rt = undefined;
    _exp1_start_key_allKeys = [];
    // keep track of which components have finished
    exp1_startComponents = [];
    exp1_startComponents.push(exp1_start_key);
    exp1_startComponents.push(exp1_start_text);
    
    for (const thisComponent of exp1_startComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp1_startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp1_start' ---
    // get current time
    t = exp1_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp1_start_key* updates
    if (t >= 0.0 && exp1_start_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_start_key.tStart = t;  // (not accounting for frame time here)
      exp1_start_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exp1_start_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exp1_start_key.start(); }); // start on screen flip
    }

    if (exp1_start_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = exp1_start_key.getKeys({keyList: ['rshift'], waitRelease: false});
      _exp1_start_key_allKeys = _exp1_start_key_allKeys.concat(theseKeys);
      if (_exp1_start_key_allKeys.length > 0) {
        exp1_start_key.keys = _exp1_start_key_allKeys[_exp1_start_key_allKeys.length - 1].name;  // just the last key pressed
        exp1_start_key.rt = _exp1_start_key_allKeys[_exp1_start_key_allKeys.length - 1].rt;
        exp1_start_key.duration = _exp1_start_key_allKeys[_exp1_start_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *exp1_start_text* updates
    if (t >= 0.0 && exp1_start_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_start_text.tStart = t;  // (not accounting for frame time here)
      exp1_start_text.frameNStart = frameN;  // exact frame index
      
      exp1_start_text.setAutoDraw(true);
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
    for (const thisComponent of exp1_startComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp1_startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp1_start' ---
    for (const thisComponent of exp1_startComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    exp1_start_key.stop();
    // the Routine "exp1_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _exp1_key_allKeys;
var exp1Components;
function exp1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp1' ---
    t = 0;
    exp1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.250000);
    // update component parameters for each repeat
    exp1_image_l.setImage(left);
    exp1_image_r.setImage(right);
    exp1_key.keys = undefined;
    exp1_key.rt = undefined;
    _exp1_key_allKeys = [];
    exp1_sound.setValue(sound_dir);
    exp1_sound.secs=4;
    exp1_sound.setVolume(1.0);
    // keep track of which components have finished
    exp1Components = [];
    exp1Components.push(exp1_image_l);
    exp1Components.push(exp1_image_r);
    exp1Components.push(exp1_key);
    exp1Components.push(exp1_sound);
    exp1Components.push(exp1_cross);
    
    for (const thisComponent of exp1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp1' ---
    // get current time
    t = exp1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp1_image_l* updates
    if (t >= 0.25 && exp1_image_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_image_l.tStart = t;  // (not accounting for frame time here)
      exp1_image_l.frameNStart = frameN;  // exact frame index
      
      exp1_image_l.setAutoDraw(true);
    }

    frameRemains = 0.25 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp1_image_l.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp1_image_l.setAutoDraw(false);
    }
    
    // *exp1_image_r* updates
    if (t >= 0.25 && exp1_image_r.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_image_r.tStart = t;  // (not accounting for frame time here)
      exp1_image_r.frameNStart = frameN;  // exact frame index
      
      exp1_image_r.setAutoDraw(true);
    }

    frameRemains = 0.25 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp1_image_r.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp1_image_r.setAutoDraw(false);
    }
    
    // *exp1_key* updates
    if (t >= 0.25 && exp1_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_key.tStart = t;  // (not accounting for frame time here)
      exp1_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exp1_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exp1_key.start(); }); // start on screen flip
    }

    frameRemains = 0.25 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp1_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp1_key.status = PsychoJS.Status.FINISHED;
  }

    if (exp1_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = exp1_key.getKeys({keyList: ['lshift', 'rshift'], waitRelease: false});
      _exp1_key_allKeys = _exp1_key_allKeys.concat(theseKeys);
      if (_exp1_key_allKeys.length > 0) {
        exp1_key.keys = _exp1_key_allKeys[0].name;  // just the first key pressed
        exp1_key.rt = _exp1_key_allKeys[0].rt;
        exp1_key.duration = _exp1_key_allKeys[0].duration;
        // was this correct?
        if (exp1_key.keys == correct_key) {
            exp1_key.corr = 1;
        } else {
            exp1_key.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop exp1_sound
    if (t >= 1.0 && exp1_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_sound.tStart = t;  // (not accounting for frame time here)
      exp1_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ exp1_sound.play(); });  // screen flip
      exp1_sound.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 1.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp1_sound.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= exp1_sound.tStart + 0.5) {
        exp1_sound.stop();  // stop the sound (if longer than duration)
        exp1_sound.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *exp1_cross* updates
    if (t >= 0.0 && exp1_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_cross.tStart = t;  // (not accounting for frame time here)
      exp1_cross.frameNStart = frameN;  // exact frame index
      
      exp1_cross.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp1_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp1_cross.setAutoDraw(false);
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
    for (const thisComponent of exp1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp1' ---
    for (const thisComponent of exp1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (exp1_key.keys === undefined) {
      if (['None','none',undefined].includes(correct_key)) {
         exp1_key.corr = 1;  // correct non-response
      } else {
         exp1_key.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(exp1_key.corr, level);
    }
    psychoJS.experiment.addData('exp1_key.keys', exp1_key.keys);
    psychoJS.experiment.addData('exp1_key.corr', exp1_key.corr);
    if (typeof exp1_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('exp1_key.rt', exp1_key.rt);
        psychoJS.experiment.addData('exp1_key.duration', exp1_key.duration);
        routineTimer.reset();
        }
    
    exp1_key.stop();
    exp1_sound.stop();  // ensure sound has stopped at end of routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _exp1_end_key_allKeys;
var exp1_endComponents;
function exp1_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp1_end' ---
    t = 0;
    exp1_endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    exp1_end_key.keys = undefined;
    exp1_end_key.rt = undefined;
    _exp1_end_key_allKeys = [];
    // keep track of which components have finished
    exp1_endComponents = [];
    exp1_endComponents.push(exp1_end_text);
    exp1_endComponents.push(exp1_end_key);
    
    for (const thisComponent of exp1_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp1_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp1_end' ---
    // get current time
    t = exp1_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp1_end_text* updates
    if (t >= 0 && exp1_end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_end_text.tStart = t;  // (not accounting for frame time here)
      exp1_end_text.frameNStart = frameN;  // exact frame index
      
      exp1_end_text.setAutoDraw(true);
    }

    
    // *exp1_end_key* updates
    if (t >= 0.0 && exp1_end_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_end_key.tStart = t;  // (not accounting for frame time here)
      exp1_end_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exp1_end_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exp1_end_key.start(); }); // start on screen flip
    }

    if (exp1_end_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = exp1_end_key.getKeys({keyList: ['space'], waitRelease: false});
      _exp1_end_key_allKeys = _exp1_end_key_allKeys.concat(theseKeys);
      if (_exp1_end_key_allKeys.length > 0) {
        exp1_end_key.keys = _exp1_end_key_allKeys[_exp1_end_key_allKeys.length - 1].name;  // just the last key pressed
        exp1_end_key.rt = _exp1_end_key_allKeys[_exp1_end_key_allKeys.length - 1].rt;
        exp1_end_key.duration = _exp1_end_key_allKeys[_exp1_end_key_allKeys.length - 1].duration;
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
    for (const thisComponent of exp1_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp1_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp1_end' ---
    for (const thisComponent of exp1_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    exp1_end_key.stop();
    // the Routine "exp1_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _exp2_instr_key_allKeys;
var exp2_instrComponents;
function exp2_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp2_instr' ---
    t = 0;
    exp2_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    exp2_instr_key.keys = undefined;
    exp2_instr_key.rt = undefined;
    _exp2_instr_key_allKeys = [];
    // keep track of which components have finished
    exp2_instrComponents = [];
    exp2_instrComponents.push(exp2_instr_text);
    exp2_instrComponents.push(exp2_instr_key);
    
    for (const thisComponent of exp2_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp2_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp2_instr' ---
    // get current time
    t = exp2_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp2_instr_text* updates
    if (t >= 0.0 && exp2_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_instr_text.tStart = t;  // (not accounting for frame time here)
      exp2_instr_text.frameNStart = frameN;  // exact frame index
      
      exp2_instr_text.setAutoDraw(true);
    }

    
    // *exp2_instr_key* updates
    if (t >= 0.0 && exp2_instr_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_instr_key.tStart = t;  // (not accounting for frame time here)
      exp2_instr_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      exp2_instr_key.clock.reset();
      exp2_instr_key.start();
    }

    if (exp2_instr_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = exp2_instr_key.getKeys({keyList: ['space'], waitRelease: false});
      _exp2_instr_key_allKeys = _exp2_instr_key_allKeys.concat(theseKeys);
      if (_exp2_instr_key_allKeys.length > 0) {
        exp2_instr_key.keys = _exp2_instr_key_allKeys[_exp2_instr_key_allKeys.length - 1].name;  // just the last key pressed
        exp2_instr_key.rt = _exp2_instr_key_allKeys[_exp2_instr_key_allKeys.length - 1].rt;
        exp2_instr_key.duration = _exp2_instr_key_allKeys[_exp2_instr_key_allKeys.length - 1].duration;
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
    for (const thisComponent of exp2_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp2_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp2_instr' ---
    for (const thisComponent of exp2_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    exp2_instr_key.stop();
    // the Routine "exp2_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _exp2_trial_key_allKeys;
var exp2_trialComponents;
function exp2_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp2_trial' ---
    t = 0;
    exp2_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.250000);
    // update component parameters for each repeat
    exp2_trial_iamge_l.setImage(left);
    exp2_trial_image_r.setImage(right);
    exp2_trial_key.keys = undefined;
    exp2_trial_key.rt = undefined;
    _exp2_trial_key_allKeys = [];
    exp2_trial_sound.setValue(sound_dir);
    exp2_trial_sound.secs=4;
    exp2_trial_sound.setVolume(1.0);
    // keep track of which components have finished
    exp2_trialComponents = [];
    exp2_trialComponents.push(exp2_trial_iamge_l);
    exp2_trialComponents.push(exp2_trial_image_r);
    exp2_trialComponents.push(exp2_trial_key);
    exp2_trialComponents.push(exp2_trial_sound);
    exp2_trialComponents.push(exp2_trial_cross);
    
    for (const thisComponent of exp2_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp2_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp2_trial' ---
    // get current time
    t = exp2_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp2_trial_iamge_l* updates
    if (t >= 0.25 && exp2_trial_iamge_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_trial_iamge_l.tStart = t;  // (not accounting for frame time here)
      exp2_trial_iamge_l.frameNStart = frameN;  // exact frame index
      
      exp2_trial_iamge_l.setAutoDraw(true);
    }

    frameRemains = 0.25 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp2_trial_iamge_l.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp2_trial_iamge_l.setAutoDraw(false);
    }
    
    // *exp2_trial_image_r* updates
    if (t >= 0.25 && exp2_trial_image_r.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_trial_image_r.tStart = t;  // (not accounting for frame time here)
      exp2_trial_image_r.frameNStart = frameN;  // exact frame index
      
      exp2_trial_image_r.setAutoDraw(true);
    }

    frameRemains = 0.25 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp2_trial_image_r.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp2_trial_image_r.setAutoDraw(false);
    }
    
    // *exp2_trial_key* updates
    if (t >= 0.25 && exp2_trial_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_trial_key.tStart = t;  // (not accounting for frame time here)
      exp2_trial_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exp2_trial_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exp2_trial_key.start(); }); // start on screen flip
    }

    frameRemains = 0.25 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp2_trial_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp2_trial_key.status = PsychoJS.Status.FINISHED;
  }

    if (exp2_trial_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = exp2_trial_key.getKeys({keyList: ['lshift', 'rshift'], waitRelease: false});
      _exp2_trial_key_allKeys = _exp2_trial_key_allKeys.concat(theseKeys);
      if (_exp2_trial_key_allKeys.length > 0) {
        exp2_trial_key.keys = _exp2_trial_key_allKeys.map((key) => key.name);  // storing all keys
        exp2_trial_key.rt = _exp2_trial_key_allKeys.map((key) => key.rt);
        exp2_trial_key.duration = _exp2_trial_key_allKeys.map((key) => key.duration);
      }
    }
    
    // start/stop exp2_trial_sound
    if (t >= 1.0 && exp2_trial_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_trial_sound.tStart = t;  // (not accounting for frame time here)
      exp2_trial_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ exp2_trial_sound.play(); });  // screen flip
      exp2_trial_sound.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 1.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp2_trial_sound.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= exp2_trial_sound.tStart + 0.5) {
        exp2_trial_sound.stop();  // stop the sound (if longer than duration)
        exp2_trial_sound.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *exp2_trial_cross* updates
    if (t >= 0.0 && exp2_trial_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_trial_cross.tStart = t;  // (not accounting for frame time here)
      exp2_trial_cross.frameNStart = frameN;  // exact frame index
      
      exp2_trial_cross.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp2_trial_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp2_trial_cross.setAutoDraw(false);
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
    for (const thisComponent of exp2_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp2_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp2_trial' ---
    for (const thisComponent of exp2_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(exp2_trial_key.corr, level);
    }
    psychoJS.experiment.addData('exp2_trial_key.keys', exp2_trial_key.keys);
    if (typeof exp2_trial_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('exp2_trial_key.rt', exp2_trial_key.rt);
        psychoJS.experiment.addData('exp2_trial_key.duration', exp2_trial_key.duration);
        }
    
    exp2_trial_key.stop();
    exp2_trial_sound.stop();  // ensure sound has stopped at end of routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_exp2_trial_key_allKeys;
var end_exp2_trialComponents;
function end_exp2_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_exp2_trial' ---
    t = 0;
    end_exp2_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_exp2_trial_key.keys = undefined;
    end_exp2_trial_key.rt = undefined;
    _end_exp2_trial_key_allKeys = [];
    // keep track of which components have finished
    end_exp2_trialComponents = [];
    end_exp2_trialComponents.push(end_exp2_trial_text);
    end_exp2_trialComponents.push(end_exp2_trial_key);
    
    for (const thisComponent of end_exp2_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_exp2_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_exp2_trial' ---
    // get current time
    t = end_exp2_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_exp2_trial_text* updates
    if (t >= 0 && end_exp2_trial_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_exp2_trial_text.tStart = t;  // (not accounting for frame time here)
      end_exp2_trial_text.frameNStart = frameN;  // exact frame index
      
      end_exp2_trial_text.setAutoDraw(true);
    }

    
    // *end_exp2_trial_key* updates
    if (t >= 0.0 && end_exp2_trial_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_exp2_trial_key.tStart = t;  // (not accounting for frame time here)
      end_exp2_trial_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_exp2_trial_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_exp2_trial_key.start(); }); // start on screen flip
    }

    if (end_exp2_trial_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_exp2_trial_key.getKeys({keyList: ['space', 'rshift'], waitRelease: false});
      _end_exp2_trial_key_allKeys = _end_exp2_trial_key_allKeys.concat(theseKeys);
      if (_end_exp2_trial_key_allKeys.length > 0) {
        end_exp2_trial_key.keys = _end_exp2_trial_key_allKeys[_end_exp2_trial_key_allKeys.length - 1].name;  // just the last key pressed
        end_exp2_trial_key.rt = _end_exp2_trial_key_allKeys[_end_exp2_trial_key_allKeys.length - 1].rt;
        end_exp2_trial_key.duration = _end_exp2_trial_key_allKeys[_end_exp2_trial_key_allKeys.length - 1].duration;
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
    for (const thisComponent of end_exp2_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_exp2_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_exp2_trial' ---
    for (const thisComponent of end_exp2_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    end_exp2_trial_key.stop();
    // Run 'End Routine' code from exp2_trial_code
    if ((end_exp2_trial_key.keys === "rshift")) {
        exp2_retrial.finished = true;
    }
    
    // the Routine "end_exp2_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _exp2_start_key_allKeys;
var exp2_startComponents;
function exp2_startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp2_start' ---
    t = 0;
    exp2_startClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    exp2_start_key.keys = undefined;
    exp2_start_key.rt = undefined;
    _exp2_start_key_allKeys = [];
    // keep track of which components have finished
    exp2_startComponents = [];
    exp2_startComponents.push(exp2_start_key);
    exp2_startComponents.push(exp2_start_text);
    
    for (const thisComponent of exp2_startComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp2_startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp2_start' ---
    // get current time
    t = exp2_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp2_start_key* updates
    if (t >= 0.0 && exp2_start_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_start_key.tStart = t;  // (not accounting for frame time here)
      exp2_start_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exp2_start_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exp2_start_key.start(); }); // start on screen flip
    }

    if (exp2_start_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = exp2_start_key.getKeys({keyList: ['rshift'], waitRelease: false});
      _exp2_start_key_allKeys = _exp2_start_key_allKeys.concat(theseKeys);
      if (_exp2_start_key_allKeys.length > 0) {
        exp2_start_key.keys = _exp2_start_key_allKeys[_exp2_start_key_allKeys.length - 1].name;  // just the last key pressed
        exp2_start_key.rt = _exp2_start_key_allKeys[_exp2_start_key_allKeys.length - 1].rt;
        exp2_start_key.duration = _exp2_start_key_allKeys[_exp2_start_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *exp2_start_text* updates
    if (t >= 0.0 && exp2_start_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_start_text.tStart = t;  // (not accounting for frame time here)
      exp2_start_text.frameNStart = frameN;  // exact frame index
      
      exp2_start_text.setAutoDraw(true);
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
    for (const thisComponent of exp2_startComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp2_startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp2_start' ---
    for (const thisComponent of exp2_startComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    exp2_start_key.stop();
    // the Routine "exp2_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _exp2_key_allKeys;
var exp2Components;
function exp2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp2' ---
    t = 0;
    exp2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.250000);
    // update component parameters for each repeat
    exp2_image_l.setImage(left);
    exp2_image_r.setImage(right);
    exp2_key.keys = undefined;
    exp2_key.rt = undefined;
    _exp2_key_allKeys = [];
    exp2_sound.setValue(sound_dir);
    exp2_sound.secs=4;
    exp2_sound.setVolume(1.0);
    // keep track of which components have finished
    exp2Components = [];
    exp2Components.push(exp2_image_l);
    exp2Components.push(exp2_image_r);
    exp2Components.push(exp2_key);
    exp2Components.push(exp2_sound);
    exp2Components.push(exp2_cross);
    
    for (const thisComponent of exp2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp2' ---
    // get current time
    t = exp2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp2_image_l* updates
    if (t >= 0.25 && exp2_image_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_image_l.tStart = t;  // (not accounting for frame time here)
      exp2_image_l.frameNStart = frameN;  // exact frame index
      
      exp2_image_l.setAutoDraw(true);
    }

    frameRemains = 0.25 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp2_image_l.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp2_image_l.setAutoDraw(false);
    }
    
    // *exp2_image_r* updates
    if (t >= 0.25 && exp2_image_r.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_image_r.tStart = t;  // (not accounting for frame time here)
      exp2_image_r.frameNStart = frameN;  // exact frame index
      
      exp2_image_r.setAutoDraw(true);
    }

    frameRemains = 0.25 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp2_image_r.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp2_image_r.setAutoDraw(false);
    }
    
    // *exp2_key* updates
    if (t >= 0.25 && exp2_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_key.tStart = t;  // (not accounting for frame time here)
      exp2_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exp2_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exp2_key.start(); }); // start on screen flip
    }

    frameRemains = 0.25 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp2_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp2_key.status = PsychoJS.Status.FINISHED;
  }

    if (exp2_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = exp2_key.getKeys({keyList: ['lshift', 'rshift'], waitRelease: false});
      _exp2_key_allKeys = _exp2_key_allKeys.concat(theseKeys);
      if (_exp2_key_allKeys.length > 0) {
        exp2_key.keys = _exp2_key_allKeys.map((key) => key.name);  // storing all keys
        exp2_key.rt = _exp2_key_allKeys.map((key) => key.rt);
        exp2_key.duration = _exp2_key_allKeys.map((key) => key.duration);
      }
    }
    
    // start/stop exp2_sound
    if (t >= 1.0 && exp2_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_sound.tStart = t;  // (not accounting for frame time here)
      exp2_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ exp2_sound.play(); });  // screen flip
      exp2_sound.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 1.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp2_sound.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= exp2_sound.tStart + 0.5) {
        exp2_sound.stop();  // stop the sound (if longer than duration)
        exp2_sound.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *exp2_cross* updates
    if (t >= 0.0 && exp2_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_cross.tStart = t;  // (not accounting for frame time here)
      exp2_cross.frameNStart = frameN;  // exact frame index
      
      exp2_cross.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp2_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp2_cross.setAutoDraw(false);
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
    for (const thisComponent of exp2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp2' ---
    for (const thisComponent of exp2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(exp2_key.corr, level);
    }
    psychoJS.experiment.addData('exp2_key.keys', exp2_key.keys);
    if (typeof exp2_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('exp2_key.rt', exp2_key.rt);
        psychoJS.experiment.addData('exp2_key.duration', exp2_key.duration);
        }
    
    exp2_key.stop();
    exp2_sound.stop();  // ensure sound has stopped at end of routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _full_end_key_allKeys;
var full_endComponents;
function full_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'full_end' ---
    t = 0;
    full_endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    full_end_key.keys = undefined;
    full_end_key.rt = undefined;
    _full_end_key_allKeys = [];
    // keep track of which components have finished
    full_endComponents = [];
    full_endComponents.push(full_end_text);
    full_endComponents.push(full_end_key);
    
    for (const thisComponent of full_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function full_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'full_end' ---
    // get current time
    t = full_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *full_end_text* updates
    if (t >= 0.0 && full_end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      full_end_text.tStart = t;  // (not accounting for frame time here)
      full_end_text.frameNStart = frameN;  // exact frame index
      
      full_end_text.setAutoDraw(true);
    }

    
    // *full_end_key* updates
    if (t >= 0.0 && full_end_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      full_end_key.tStart = t;  // (not accounting for frame time here)
      full_end_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { full_end_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { full_end_key.start(); }); // start on screen flip
    }

    if (full_end_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = full_end_key.getKeys({keyList: ['space'], waitRelease: false});
      _full_end_key_allKeys = _full_end_key_allKeys.concat(theseKeys);
      if (_full_end_key_allKeys.length > 0) {
        full_end_key.keys = _full_end_key_allKeys[_full_end_key_allKeys.length - 1].name;  // just the last key pressed
        full_end_key.rt = _full_end_key_allKeys[_full_end_key_allKeys.length - 1].rt;
        full_end_key.duration = _full_end_key_allKeys[_full_end_key_allKeys.length - 1].duration;
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
    for (const thisComponent of full_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function full_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'full_end' ---
    for (const thisComponent of full_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    full_end_key.stop();
    // the Routine "full_end" was not non-slip safe, so reset the non-slip timer
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
