#!/bin/bash

read l
l=${l//*join code /}
l=${l//[, ]*/}
msg="Join code is $l."
curl -sfSL -X POST -H "Content-Type: application/json" -d "{\"username\":\"Valheim\",\"content\":\"$msg\"}" "$DISCORD_WEBHOOK"

