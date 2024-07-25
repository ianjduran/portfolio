---
title: "PCB Status Display Design"
summary: "PCB Circuit Design of a HMI interface for an autonomous underwater system"
date: "Sep 15 2021"
draft: false
tags:
- Kicad
- PCB
- Electronics
- Circuit Design
repoUrl: https://github.com/vanttec/vanttec_status_display_pcb
---

This is a 2-layer PCB designed as a complementary device for our team in order to get information more easily about the status of the vehicle, such as sensors or battery power percentage.

### Components Used
- STM32G431KBT6
- Adafruit 2.8" and 3.2" Color TFT Touchscreen
- ECS-160-12-33-AGN-TR - > 16 MHz Crystal
- R-78E3.3-1.0 -> Regulator
- TCAN330G -> 3.3V CAN Transceiver

### Notes
The display can be connected using either I2C or SPI communication protocol.
The microcontroller uses the CAN protocol to receive info and data from another device.

### Schematic 
![Circuit Design](schematic.png)

### Front View
![front view PCB](front-view.png)