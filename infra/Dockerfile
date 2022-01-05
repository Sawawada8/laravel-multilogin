FROM --platform=linux/x86_64 centos:7


RUN yum update -y && yum install -y httpd zip unzip git epel-release && \
    yum install -y http://rpms.remirepo.net/enterprise/remi-release-7.rpm && \
    yum-config-manager --enable remi-php74 && \
    yum update -y && \
    yum install -y php && \
    yum install -y php-gd php-xml php-PDO php-pdo_mysql php-pdo_pgsql php-mbstring php-xdebug php-wddx php-mysqlnd php-zip

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    mv ./composer.phar /usr/local/bin/composer && \
    rm ./composer-setup.php

COPY ./apache/httpd.conf /etc/httpd/conf/httpd.conf
COPY ./apache/userdir.conf /etc/httpd/conf.d/userdir.conf
COPY ./php/php.ini /etc/php.ini
COPY ./demo/index.html /home/homepage/public/index.html

CMD ["/usr/sbin/httpd","-DFOREGROUND"]
