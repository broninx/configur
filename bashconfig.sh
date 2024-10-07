#!/bin/bash

$user = whoami

sudo update

sudo upgrade

sudo atp install neofetch btop git

git clone https://github.com/AdnanHodzic/auto-cpufreq.git
cd auto-cpufreq && sudo ./auto-cpufreq-installer
mkdir /home/$user/Documents/configuration
git clone https://github.com/broninx/config3 /home/$user/Documents/configuration

cp -r -f /home/$user/Documents/configuration/* /home/$user/.config





