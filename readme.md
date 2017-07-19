# Tutorator

It's okay to ask for help! With the Tutorator bot you can get help learning languages, studying for school, and with your hobbies from within Cisco Spark. Getting started is easy, just add tutorator@sparkbot.io to your space and ask @Tutorator "Can you help?". The Tutorator will ask you about what you need help with. Once Tutorator has enough information it will send your needs to private tutors who are available at affordable prices. With the Tutorator you can join thousands of students who have already saved time by taking lessons online.

Tutorator tutors marketplace powered by Preply.com

### Getting Started

There are a few steps to get started on working with the Tutorator bot:

#### Installing Tutorator

[Deploy to Heroku](https://heroku.com/deploy?template=https://github.com/pcheek/tutorator/master)

Clone this repository:

`git clone https://github.com/pcheek/tutorator.git`

Install dependencies, including [Botkit](https://github.com/howdyai/botkit):

```
cd tutorator
npm install
```

#### Environment Setup

You need to define these environment variables:

```
access_token
public_address
secret
studio_token
```

#### Botkit Setup

You need to import the Botkit script named 'helpme' into Botkit Studio. You can find the export in: `/scripts.json`

#### Usage

To use, add the Tutorator Bot (tutorator@sparkbot.io) to your Cisco Spark team. Invite the Tutorator Bot to a space and send the Bot a message like so: `@Tutorator lookup`. Or, open a private message with the Tutorator Bot and say `lookup`. The Tutorator Bot will then prompt you for the email address to look up. 

#### Todos

- More input validation and error handling needed!

# About Tutorator 

Tutorator is a project for the [Cisco Spark Industry Challenge](https://ciscospark.devpost.com/)
