---
title: "Jenkins Notları"
layout: post
comments: true
---

#### installation

* Nasil master-slave kurulum yapilir?
[Redhat](http://mirrors.jenkins.io/redhat-stable)

#### Kurulum Sonrasi Yapilacaklar

* /var/lib/jenkins /Product'a tasinacak
* Hangi Java Kurulacagina karar ver
* [main url](http://192.168.122.234:8080/)
* [pipeline syntax](http://192.168.122.234:8080/pipeline-syntax/)

#### Pipeline

Pipeline provides an extensible set of tools for modeling simple-to-complex
delivery pipelines "as code" via the Pipeline domain-specific language (DSL)
syntax.

* Declarative vs scripted Pipeline syntax
Declarative Pipeline provides richer syntactical features over Scripted Pipeline
syntax, and is designed to make writing and reading Pipeline code easier.
Declarative Pipeline does not allow method calls on objects outside "script"
blocks.

The definition of a Jenkins Pipeline is written into a text file (called a
Jenkinsfile) which in turn can be committed to a project’s source control
repository. This is the foundation of "Pipeline-as-code"; treating the CD
pipeline a part of the application to be versioned and reviewed like any other
code.gt

* Shared Libraries: Pipeline has support for creating "Shared Libraries" which
  can be defined in external source control repositories and loaded into
  existing Pipelines. Shared Libraries directory structure;
  * src: standard Java source directory structure. This directory is added to
    the classpath when executing Pipelines.
  * vars: hosts script files that are exposed as a varialbe in Pipelines. The
    name of the file is the name of the varialbe in the Pipeline
  * Resources: allows the libraryResource step to be used from an external
    library to load associated non-Groovy files.
* Soru: preserved stash'lerde container images tutulabilir mi?

#### Genel Kaynaklar

* [Jenkins community wiki eklenecek](https://wiki.jenkins.io/display/JENKINS/)

* Pipeline concepts
[pipeline book](https://www.jenkins.io/doc/book/pipeline/syntax/#agent)
[pipeline examples](https://www.jenkins.io/doc/pipeline/examples/)

[//]: # (Using  Jenkinsfile)

### Maintaining Jenkins

* **Using a sacrifical Jenkins instance**:
To comabat of plugin exeptions, consider usinga a sacrifical jenkins instance
before releasing to a critical system.

* **Backing up and restoring**:
to minimize disk overflowing,  you'll need to consider your
  * backup and restore policy
  * the associated build retention policy
expressed in the advanced options of Jobs.
* thinBackup Plugin as it allows for scheduling
Differential backups contain only files that have been modified since the last
full backup.

* **Script spaghetti**:
Consider well-defined locations for your scripts, and a scripts repository
managed through a plugin.

* **Resource depletion**: proper monitoring and quick reaction reduce consumed
  memory impact.

* **A general lack of consistency between jobs due to organic growth**:
Conventions improve the consistency and readability of Jobs and thus decrease
the maintenance.

#### Reporting overall disc usage

u can make jenkins report disc usage from the gui, and periodically run groovy
scrips that trigger helpful events.
u need to install disc usage, advanced options include artifact retention
choices, which u'll need to correctly configure to avoid overwhelming disc
usage.

*Use private maven repository*
u should be pushing the snaptshots out to  where developers find them most
useful. That is not jenkins but a maven repository or a repository manager such
as nexus. that has significant advantages over dumping to disc;
    - *speed builds by acting as a cache*: if u build and use the repository
      manager as a mirror, then the repository manager will cache the
      dependencies, and when *job y* asks  for the same artifact, the download
      will be local.
    - *acts as a mechanism to share snaptshots locally.*

[further reading](http://maven.apache.org/repository-management.html)

* Retention policy: when configuring a job, *discard old builds* , and then the
  *advanced* checkbox, define the *Max #* of builds to keep with the artifacts

#### Deliberately failing builds through log parsing

* Log parser plugin:

[//]: # (nvim server mode gelistirme notlarina eklenecek)
[//]: # (http://groovy-lang.org)
[//]: # (http://www.sakaiproject.org)

#### a job to warn about disc usage violations through log parsing

* **JavaMelody plugin**

#### Keeping a track of the script glue

it's better to keep scripts in one place, and then run them remotely through
the nodes. Consider placing your scripts under the master jenkins home
directory.

[//]: # (**Scriptler Plugin**)
[//]: # (Config File Provider)
[//]: # (
Recommended plugins
Folders
OWASP Markup Formatter
Build
Timeout
Credentials
Binding
Timestamper
Workspace
Cleanup
Ant
Gradle
Pipeline
GitHub
Branch
Source
Pipeline: GitHub Groovy Libraries
Pipeline:
Stage
View
Git
SSH Build Agents
Matrix
Authorization
Strategy
PAM
Authentication
LDAP
Email
Extension
Mailer)
