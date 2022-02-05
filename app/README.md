# EF Application Code


# Installation

## Clone the repository and then navigate to the application directory:

``` 
➜  CS401 git clone git@github.com:Pokemonpower92/Applicant-Process-Automation.git
Cloning into 'Applicant-Process-Automation'...
remote: Enumerating objects: 447, done.
remote: Counting objects: 100% (447/447), done.
remote: Compressing objects: 100% (354/354), done.
remote: Total 447 (delta 76), reused 444 (delta 76), pack-reused 0
Receiving objects: 100% (447/447), 1.26 MiB | 5.43 MiB/s, done.
Resolving deltas: 100% (76/76), done.
➜  CS401 cd Applicant-Process-Automation/app 
➜  app git:(main) ls -l 
total 40
drwxr-xr-x   8 pooch  staff    256 Feb  4 22:46 client
drwxr-xr-x   3 pooch  staff     96 Feb  4 22:46 controllers
drwxr-xr-x   3 pooch  staff     96 Feb  4 22:46 db
-rw-r--r--   1 pooch  staff    381 Feb  4 22:46 index.js
drwxr-xr-x   3 pooch  staff     96 Feb  4 22:46 models
drwxr-xr-x  54 pooch  staff   1728 Feb  4 22:46 node_modules
-rw-r--r--   1 pooch  staff  14876 Feb  4 22:46 package-lock.json
drwxr-xr-x   3 pooch  staff     96 Feb  4 22:46 routes
drwxr-xr-x   3 pooch  staff     96 Feb  4 22:46 views
➜  app git:(main) 

```

## Install npm if your system doesn't currently have it installed.

You may want to install nodemon so you don't have to manually restart the 
backend server every time you make a change. I suggest installing it globally 
with the -g flag: 

```
➜  app git:(main) sudo npm install -g nodemon
Password:
/usr/local/bin/nodemon -> /usr/local/lib/node_modules/nodemon/bin/nodemon.js

> nodemon@2.0.15 postinstall /usr/local/lib/node_modules/nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate

+ nodemon@2.0.15
added 5 packages from 3 contributors, removed 8 packages and updated 24 packages in 2.082s

```

## CD into the client directory and install npm packages for the front end

```
➜  app git:(main) pwd
/Users/pooch/Documents/School/CS401/Applicant-Process-Automation/app
➜  app git:(main) cd client && npm install

> core-js@3.21.0 postinstall /Users/pooch/Documents/School/CS401/Applicant-Process-Automation/app/client/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js:
> https://opencollective.com/core-js 
> https://patreon.com/zloirock 
> https://paypal.me/zloirock 
> bitcoin: bc1qlea7544qtsmj2rayg0lthvza9fau63ux0fstcz 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js-pure@3.21.0 postinstall /Users/pooch/Documents/School/CS401/Applicant-Process-Automation/app/client/node_modules/core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"

added 1419 packages from 658 contributors and audited 1419 packages in 13.841s

169 packages are looking for funding
  run `npm fund` for details

found 2 moderate severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
➜  client git:(main) 

```

## Now you're ready to fire 'er up.

Go back to the app directory and start up the backend server: 

```
➜  app git:(main) pwd
/Users/pooch/Documents/School/CS401/Applicant-Process-Automation/app
➜  app git:(main) nodemon index.js 
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Serving on port 3001

```

Fire up a new terminal and start up the front end server: 

```
➜  Applicant-Process-Automation git:(main) ✗ cd app/client 
➜  client git:(main) ✗ npm start 

Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.12:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

asset static/js/bundle.js 1.61 MiB [emitted] (name: main) 1 related asset
asset index.html 1.67 KiB [emitted]
asset asset-manifest.json 190 bytes [emitted]
cached modules 1.48 MiB (javascript) 28.1 KiB (runtime) [cached] 141 modules
webpack 5.68.0 compiled successfully in 1299 ms

```








