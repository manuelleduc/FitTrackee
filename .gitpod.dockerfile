FROM gitpod/workspace-postgres

RUN psql -c "create user postgres password 'postgres'"
RUN psql -c 'create database fittrackee with owner postgres'
RUN psql -c 'create database fittrackee_test with owner postgres'