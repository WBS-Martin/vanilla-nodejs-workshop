# Vanilla nodeJS workshop

In this exercise you will create a small nodeJS application that will create a .txt file with the name of the file you pass as a parameter.
It will contain some information about you and your system.

## Instructions

### 1. First you need to initialize an application.

### 2. Create a file called 'index.js'.

Inside index.js you can use the file system module to create a file whenever you run the application.
Have a look at the [file system module documentation](https://nodejs.org/api/fs.html) to find out how to do this.
Especially the methods fs.writeFileSync(fileName, data) or fs.writeFile(file, data) are useful.

### 3. Try to name the file you create by running your app with the help of the argv property.

You will find some usefull information about the argv property in the [node documentation](https://nodejs.org/api/process.html#process_process_argv).

### 4. Check information about the computer you are running the application on.

Place the information in your file you want to create. Use nodeJs' included module 'os' or/and the process.platform property.
You will finde information about os in the [node documentation](https://nodejs.org/api/os.html) and about the process.platform in the [node documentation](https://nodejs.org/api/process.html#process_process_platform).

### 5. Provide your private IP using the networkInterfaces method of the os module. [Link](https://nodejs.org/api/os.html#os_os_networkinterfaces)

### 6. Install the Luxon module and use it to get the current time and date. [Link](https://www.npmjs.com/package/luxon)

## Your output could look like this:


System information:

Your system is running on win32.

Your node version is v14.18.1.

Your computer has 8 cores.

Your computer has 16861372416 bytes of memory.

Your computer has 5243441152 bytes of free memory.


IP addresses:

Your private IP address is 192.174.111.41.

File created on January 26, 2022 at 14:25.
