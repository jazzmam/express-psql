#!/bin/bash

echo "Configuring monsters db: $database_title"

database_title="monstersdb"

dropdb -U ruta_user monstersdb
createdb -U ruta_user monstersdb

psql -U ruta_user monstersdb < ./bin/sql/monsters.sql

echo "$database_title db configured"