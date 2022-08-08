
## API Test Assignment

*This Project is to test the Acceptance Criteria given below

•	Name = "Carbon credits"

•	CanRelist = true

•	The Promotions element with Name = "Gallery" has a Description that contains the text "Good position in category"



## API Reference

https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false

## **Tools to install:**

*Note: If you have Node.js and GIT installed in your machine, this step can be skipped*

* **Node.js: JavaScript runtime built**

  > https://nodejs.org/en/download/

    https://nodejs.dev/learn/how-to-install-nodejs


* **Git: Version control/source code management**

  > https://git-scm.com/downloads

  https://git-scm.com/book/en/v1/Getting-Started-Installing-Git

    

**Libraries/Frameworks:**


* **SuperTest**

  > https://www.npmjs.com/package/supertest
    

* **Mocha Framework**

  > https://mochajs.org/

* **Chai JS Assertions**

  > https://www.chaijs.com/api/

* **Mochawesome Reporting Tool**

  > https://www.npmjs.com/package/mochawesome


**Git Repository:**

  > Location of the test code/framework

  https://github.com/JesrellF/api-automation-test
  
## Run Locally
* **Directions to setup locally from terminal (assuming access to github is 
already setup and git is installed):**
  ```
  cd ../<desired directory to store local copy of repo>
  git clone https://github.com/JesrellF/api-automation-test.git
  ```
    *You can refer to the git Guide for git specific helpers or the official git website: https://git-scm.com/docs*

* **Go to the project directory**

```bash
  cd api-automation-test
```

* **Install dependencies**

```bash
  npm install
```

* **Execute the test**

```bash
  npm test
```

*You can generate report as an HTML and view it by clicking the mochawesome.html
generated in mochawesome-report*
```bash
  npm test -- --reporter mochawesome
```

## Authors

- [@JesrellF](https://www.github.com/JesrellF)




![GitHub all releases](https://img.shields.io/github/downloads/JesrellF/api-automation-test/total)

![GitHub all releases](https://img.shields.io/github/languages/code-size/JesrellF/api-automation-test)