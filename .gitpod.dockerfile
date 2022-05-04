FROM gitpod/workspace-postgres

RUN curl -sSL https://install.python-poetry.org | python3 -
RUN make install-dev
RUN make install-db
