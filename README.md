# CzeLex: A megastudy dataset of concreteness, imageability, age of acquisition, valence and gender ratings for 9,601 Czech words

This GitHub repository contains all relevant files related to the CzeLex dataset.

The OSF can be found here: https://osf.io/tqxfm/

The files structures are as follows:

## Analysis
This folder contains scripts and data related to the data cleaning, processing and analysis.

  **additional_data**
    – czlex_ldt_summaries.rds the lexical decision task summary data
    – czlex_word_list_variables.csv is the linguistic variables

  **brms_models**
  Contains all the output and models from running the Bayesian modelling of the ratings

  **clmm_models**
  Contains all the output and models from running the clmm modelling of the ratings

  **CzeLex_norms_analysis**
  The .rmd file is the R markdown file with all the code used for the analyses reported in the paper. The .html file is an output version of the file.

  **CzeLex_norms_filtering**
  The .rmd file is the R markdown file with all the code used when filtering the raw data reported in the paper, with the final output the filtered anonymised dataset. The .html file is an output version of the file.

  **CzeLex_norms_preproccessing**
  The .rmd file is the R markdown file with all the code used when preprocessing the raw data reported in the paper, with the final output the processed raw dataset. The .html file is an output version of the file. Please not that we do not include the raw files used in this analysis as they contain non-anonymised data.

## plots
These are the plots produced when running the analysis.

  **raw_filtered_data**
  This folder contains the raw filtered rating and demographic data available as .csv or .rds files. This is the output after the filtering steps.

  **raw_unfiltered_data**
  This folder contains the raw unfiltered rating and demographic data available as .csv or .rds files. This is the data used prior to the filtering steps.

## Experiments
This folder contains information about the experiment and methodology.

  **instructions_czlex.docx**
  The instructions presented to participants in Czech and the English translations for each dimension.

  **jspsych_jatos**
  The jsPysch files and scripts used to run the experiment. Note that the files will only work when hosted on JATOS server.

 **Screenshots**
 The screenshots for each of the dimensions.

  **Figures**
  The figures used in the manuscript. There is also the file czelex_tables which contains the tables and figures with their captions.

## Summary_data
This folder contains the summary data from the norming experiment. There is a .csv and .xlsx version of the file. See the README file in the folder for more information on the variables.

## Writing
This folder contains all the files related to the write up of the paper, with the cover letter, manuscript and CRediT authorship statement.
