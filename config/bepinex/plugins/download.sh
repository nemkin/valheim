#!/bin/bash

rm *.zip

wget https://gcdn.thunderstore.io/live/repository/packages/Azumatt-AzuAutoStore-2.1.9.zip
wget https://gcdn.thunderstore.io/live/repository/packages/Azumatt-AzuContainerSizes-1.0.3.zip
wget https://gcdn.thunderstore.io/live/repository/packages/Azumatt-AzuCraftyBoxes-1.3.0.zip
wget https://gcdn.thunderstore.io/live/repository/packages/Azumatt-AzuExtendedPlayerInventory-1.4.3.zip
wget https://gcdn.thunderstore.io/live/repository/packages/clevel-BeastsOfBurden-1.0.4.zip
wget https://gcdn.thunderstore.io/live/repository/packages/denikson-BepInExPack_Valheim-5.4.2202.zip
wget https://gcdn.thunderstore.io/live/repository/packages/GemHunter1-CustomChestName-1.1.1.zip
wget https://gcdn.thunderstore.io/live/repository/packages/Digitalroot-Heightmap_Unlimited_Remake-1.4.1.zip
wget https://gcdn.thunderstore.io/live/repository/packages/ValheimModding-Jotunn-2.20.0.zip
wget https://gcdn.thunderstore.io/live/repository/packages/MSchmoecker-MultiUserChest-0.5.10.zip
wget https://gcdn.thunderstore.io/live/repository/packages/Nextek-SpeedyPaths-1.0.8.zip
wget https://gcdn.thunderstore.io/live/repository/packages/JereKuusela-Vanity-1.8.0.zip

find . -mindepth 1 -maxdepth 1 -type d -exec rm -rf {} +
dtrx *.zip
rm *.zip

