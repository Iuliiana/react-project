cd /home/ubuntu/react_prod
npm run build:prod

cd /var/www/react_prod
rm --r html
mv /home/ubuntu/react_prod/build /var/www/react_prod
mv build html