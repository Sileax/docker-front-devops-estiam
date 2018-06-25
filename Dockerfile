FROM httpd:latest

ENV FRONT_DEVOPS_VERSION 0.0.1

RUN apt install git-all
RUN git clone https://github.com/Sileax/docker-front-devops-estiam.git
RUN cd docker-front-devops-estiam
RUN cp . /usr/local/apache2/htdocs
RUN kill $USR1