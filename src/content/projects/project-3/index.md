---
title: "Dog Feeder Prototype"
summary: "Prototype of a Smart Feeder for a school project"
date: "Dec 2 2021"
draft: false
tags:
- Internet of Things
- RFID
- Python
- SQL
- NodeMCU
- Database
demoUrl: https://www.youtube.com/watch?v=bHQAMNFiqQY
repoUrl: https://github.com/vanttec/vanttec_status_display_pcb
---

Pet food dispenser programmed in a NodeMCU (ESP-8266) that has an RFID-RC522 sensor to detect if the pet asks for food or not. The system retrieves the time from an NTP server and according to a previously set interval between meals it determines whether or not to feed the pet.
Also a telegram bot is used along the system as a simple way for a user to interact with the smart feeder.