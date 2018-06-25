FROM httpd:latest

ENV FRONT_DEVOPS_VERSION 0.0.1

RUN pkg install nodejs-current
RUN pkg install git
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN export PATH="$HOME/.yarn/bin:$PATH"
RUN yarn global add vue-cli
RUN yarn global add quasar-cli
RUN git clone https://github.com/Sileax/front-devops.git
RUN cd front-devops
RUN yarn
RUN yarn lint && quasar build
RUN cp dist/spa-mat /usr/local/apache2/htdocs
RUN kill $USR1