#!/bin/bash

FILE="wordlist.txt"
EXPECT_MEANING=false

while read line
do
    if [[ "$line" = *qWord* ]];
    then
        if [ $EXPECT_MEANING = false ]; 
        then
            EXPECT_MEANING=true;
            WORD=${line#<*>}  #Deletes shortest match from '<' to '>' front of string
            WORD=$(sed  "s/<\/span>//" <<< "$WORD") 
            WORD=$(sed  "s/<\/h3>//" <<< "$WORD")
            WORD=$(sed 's/[^a-zA-Z;]*//g' <<< "$WORD")  
        fi
    elif [[ "$line" = *qDef* ]];
    then
        if [ $EXPECT_MEANING = true ]; 
        then
            EXPECT_MEANING=false;
            MEANING=${line#<*>}  #Deletes shortest match from '<' to '>' front of string
            MEANING=$(sed  "s/<\/span>//" <<< "$MEANING") 
            MEANING=$(sed  "s/<\/p>//" <<< "$MEANING") 
	    echo $MEANING
            MEANING=$(sed 's/[^a-zA-Z;]*//g' <<< "$MEANING")  
        fi

	echo "{\"name\":\"$WORD\",\"meaning\":\"$MEANING\"},"  >> output.txt 
    fi
done < "$FILE"

