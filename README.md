# Firebase Genkit

This repository demonstrates a simple `nodejs` application that uses __Firebase Genkit__ and configures access to various Gemini models including `gemini-2.0-flash` in Google Cloud's Vertex AI Platform.

## Initialize Firebase Genkit in Cloud Shell

1. To initialize your environment for Google Cloud, run the following commands:

```
export PROJECT_ID=$(gcloud config get-value project)
export REGION=us-central1
```

2. To authenticate the `gcloud` command-line interface and set up credentials for your project and user, run the following command:

```
gcloud auth application-default login
```

3. When prompted, type `Y` then press `ENTER`.

4. To launch the Google Cloud sign-in flow, click on the link shown in the terminal and select the email address associated with your account.

5. When you're prompted to continue, click __Continue__.

6. To let the Google Cloud SDK access your Google Account and agree to the terms, click __Allow__.

Your verification code is displayed in the browser tab.

7. Click __Copy__.

8. Back in the terminal, where it says __Enter authorization code__, paste the code and press `ENTER`.

You are now authenticated to Google Cloud via the CLI.

## Set up the demo application

1. Create a directory for your project and initialize a new node project:

```
mkdir genkit-demo && cd genkit-demo
npm init -y
```

This command creates a `package.json` file in the `genkit-intro` directory.

2. To install the Genkit CLI, run the following command:

```
npm install -D genkit-cli@1.4.0
```

