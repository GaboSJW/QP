#Install packages
install.packages("dplyr")
install.packages("ggplot2")
install.packages("nparcomp")
library(ggplot2)
library(dplyr)
library(nparcomp)


#EXPERIMENT 1

#DATA PROCESSING

  #Set working directory to folder with csv files, replace with file path for your folder
  setwd("C:/Users/Christopher/Desktop/language/dat/dat/clean")

  #List all csv files in folder, make pattern "csv" to read relevant files
  csv_files <- list.files(pattern = "*.csv")
  
  #Read each file and store it as a data frame, add it to a list
  df_list <- lapply(csv_files, function(file) {
    read.csv(file, header = TRUE)
  })

  
#First function to filter data by various criteria, also adds correct_rate column 
  filter_1 <- function(df) {
    df %>%
      filter(exp_num == 1,         # Filter samples where exp_num=1
             !grepl("-", mat_dur), # Filter out samples containing a dash in 'mat_dur'
             grepl("\\d+", exp1_key.rt, perl = TRUE) #Some samples have "NA" or are blank in the exp1_key.rt column, filtering out to only keep rows that have numbers
      ) %>%
      mutate(
        rt = as.numeric(gsub("\\[|\\]", "", exp1_key.rt)) - as.numeric(mat_dur), #Some samples have numbers in brackets in the exp1_key.rt, removing brackets and converting values to numeric
        correct_rate = sum(exp1_key.corr == 1) / nrow(.) #Adding a correct_rate column and calculating it as a percentage of number of 1s divided by the number of total samples per file
      ) %>%
      filter(rt >= 0)  # Filter out samples with a negative value in the "rt"
  }
  
  #Apply the filter_data function to each data frame in the list
  filtered_df_list <- lapply(df_list, filter_1)
  

  

#Second function to filter out samples with a 0 in the exp1_key.corr column after calculating correct_rate
  filter_2 <- function(df) {
    df %>%
      filter(exp1_key.corr != 0)  # Filter out samples with a 0 in the "exp1_key.corr" column
  }
  
  #Apply the filter_data_and_calculate_correct_rate function to each data frame in the list
  filtered_df_list <- lapply(filtered_df_list, filter_2)


  #Combine all data frames in the list into a single data frame, easier to work with. 
  #However, if you need to reference which file a given sample (data point) came from, we would have to keep the data as a data frame list instead of a single data frame
  combined_df <- do.call(rbind, filtered_df_list)  
  
  #Create the four groups based on "lang" and "type" columns
  group1 <- combined_df %>% filter(lang == "en" & type == "na")
  group2 <- combined_df %>% filter(lang == "es" & type == "na")
  group3 <- combined_df %>% filter(lang == "es" & type == "f0u") 
  group4 <- combined_df %>% filter(lang == "es" & type == "f0c") #EMPTY


  
#PLOTS
  
  
#Scatter plot for rt vs prof with different shapes for groups (looks messy, color scatter plot may be more useful)
  ggplot(combined_df, aes(x = rt, y = prof, shape = interaction(lang, type))) +
    geom_point(size = 3) +
    labs(title = "Reaction Time vs Proficiency",
         x = "Reaction Time (rt)",
         y = "Proficiency (prof)") +
    scale_shape_manual(values = c("en.na" = 1, "es.na" = 2, "es.f0u" = 3, "es.f0c" = 4)) 

    
#Scatter plot for rt vs prof with different colors for groups
  ggplot(combined_df, aes(x = rt, y = prof, color = interaction(lang, type))) +
    geom_point() +
    labs(title = "Reaction Time vs Proficiency",
         x = "Reaction Time (rt)",
         y = "Proficiency (prof)") +
    scale_color_manual(values = c("en.na" = "red", "es.na" = "blue", "es.f0u" = "yellow", "es.f0c" = "purple"))
  
#Scatter plot for correct_rate vs rt with different colors for groups
  ggplot(combined_df, aes(x = rt, y = correct_rate, color = interaction(lang, type))) +
    geom_point() +
    labs(title = "Correct Rate vs RT",
         x = "rt",
         y = "Correct Rate") +
    scale_color_manual(values = c("en.na" = "red", "es.na" = "blue", "es.f0u" = "yellow", "es.f0c" = "purple"))  
  

  
#Box plot for rt by group
  ggplot(combined_df, aes(x = factor(interaction(lang, type)), y = rt, fill = interaction(lang, type))) +
    geom_boxplot() +
    labs(title = "RT by Group",
         x = "Group",
         y = "RT") +
    scale_fill_manual(values = c("en.na" = "red", "es.na" = "blue", "es.f0u" = "yellow", "es.f0c" = "purple"))

#Violin plot for rt by group
  ggplot(combined_df, aes(x = factor(interaction(lang, type)), y = rt, fill = interaction(lang, type))) +
    geom_violin() +
    labs(title = "RT by Group",
         x = "Group",
         y = "RT") +
    scale_fill_manual(values = c("en.na" = "red", "es.na" = "blue", "es.f0u" = "yellow", "es.f0c" = "purple"))  

  

#ANOVA
  
  
      
#Looking at the box and violin plots, en.na seems quite different from both es.f0u and es.na, but not sure on how different es.f0u and es.na are.   
#Proceeding with statistical analysis.


  
#Check if data is normally distributed
  
  # Perform Shapiro-Wilk test for each group
  print(shapiro.test(group1$rt)) 
  print(shapiro.test(group2$rt))
  print(shapiro.test(group3$rt))
 #print(shapiro.test(group4$rt)) Group 4 is empty, leaving as comment since we cannot test an empty set

#We observe tiny p-values so reject null hypothesis and conclude data is NOT normally distributed. This obviously can change as new data is introduced.
#As data is not normally distributed, proceed with non-parametric ANOVA (Kruskal-Wallis)

  print(kruskal.test(rt ~ interaction(lang, type), data = combined_df))

#Tiny p-value again, so reject null hypothesis and conclude there are indeed significant differences between groups. This may change when Group 4 data is added


  
#Want to see which groups have statistically significant differences, proceed with post-hoc Nemeyi test

  #print(nparcomp(rt ~ interaction(lang, type), data = combined_df)) Line won't run  since en.fou (Group 4) is empty, but can use this once issue is fixed.

  
  #Output should specify the p-value between each possible pair of groups in the data set (Group 1 vs Group 2, Group 1 vs Group 3, Group 1 vs Group 4, Group 2 vs Group 3, Group 2 vs Group 4, Group 3 vs Group 4)
  #p-val < 0.05 (or whatever tolerance you want to work with) should indicate that pair has statistically significant differences between groups
   


    