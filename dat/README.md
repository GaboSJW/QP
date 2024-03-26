# QP_dat

[raw] is where I store all the raw data without trimming or anything
[clean] has the .csv that only contain info that matters
[clean1] is where I store the transformed data to do analysis 1 for experiment 1
[clean2] is where I store the transformed data to do analysis 2 for experiment 2

cond
item condition
	t = target item
	f = filler item

lang
item language 
	es = Enlish - Spanish
	en = English

type
item production type
	na = naturally produced
	f0c = resynthesized with f0 controled
	f0u = resynthesized with f0 uncontroled

exp_num
Expriment 1 or 2

cs
item contains code-switching or not

key
the key participant pressed

rt
reaction time of the participant

group
participant group1 or group 2

prof
participant proficiency


## Exp1 ##

### Mutate ###
## rt = exp1_key.rt – mat_dur
## correct rate (the % of exp1_key.corr = 1 of all exp1 rows after filter1) 

## Filter1 ###
## 	exp_num = 1
## 	mat_dur != “-”
## 	rt >= 0

### Filter2 ###
## 	only the correct answers (exp1_key.corr = 1)

## Plot ###
## rt~prof
## correct rate ~ prof 
### Group by ###
## lang & type
## 4 groups
## 	Group1: lang = en & type = na
## 	Group2: lang = es & type = na
## 	Group3: lang = es & type = f0u
## 	Group4: lang = es & type = f0c
## Note: Theoretically the rt trend is rt(Group1)<rt(Group2)<rt(Group4)<rt(Group3) (This comparison by group is very important, if possible I guess this can be an additional plot by itself, Y-axis= rt and X-axis=Group)
## Other grouping
## 		correct_key



## Exp2 ##

### Mutate ###
## 	Column O into O1 and O2 (maybe O3+ if there’s more entry)
## 	rt1 = O2-O1
## 	rt2 = O2 - mat_dur
## 	discard O3+
## 	correct rate = (count of exp2 rows after filter2 / after filter1)

### Filter1 ###
## mat_dur != “-”	
## rt2>=0

### Filter2 ###
## if cs=1, exp2_key.key = [lshift, rshift]
## if cs=None, exp2_key.key = [lshift]

### Plot ###
## rt1~prof
## rt2~prof
## correct rate ~ prof 
### Group by ###
## 3 groups
## 	Group2: lang = es & type = na
## 	Group3: lang = es & type = f0u
## 	Group4: lang = es & type = f0c
## Note: Theoretically the rt trend is rt(Group2)<rt(Group4)<rt(Group3) (This comparison by group is very important, if possible I guess this can be an additional plot by itself, Y-axis= rt and X-axis=Group)

