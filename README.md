# T-Mobile Coding Challenge

### Important! Read this First !

Do **not** submit a pull request to this repository.  You PR wil be rejected and your submission ignored.
To be safe **do not Fork** this repository, if you do you will be tempted to create a PR.

To _properly_ submit a coding challenge you must:

1. Create a blank (empty) repo in the public git service of your choice ( github, gitlab, bitbucket )
2. Clone this repo to your local workstation
3. Reset the remote origin to point to your newly created empty repo
4. Push the master branch up to your repo

5. make necessary changes
6. push changes to your origin
7. send address of your copy to t-mobile.

We will review your copy online before and during your interview.


# Stocks coding challenge

## How to run the application

There are two apps: `stocks` and `stocks-api`.

- `stocks` is the front-end. It uses Angular 7 and Material. You can run this using `yarn serve:stocks`
- `stocks-api` uses Hapi and has a very minimal implementation. You can start the API server with `yarn serve:stocks-api`

A proxy has been set up in `stocks` to proxy calls to `locahost:3333` which is the port that the Hapi server listens on.

> You need to register for a token here: https://iexcloud.io/cloud-login#/register/ Use this token in the `environment.ts` file for the `stocks` app.

> The charting library is the Google charts API: https://developers.google.com/chart/

## Problem statement

[Original problem statement](https://github.com/tmobile/developer-kata/blob/master/puzzles/web-api/stock-broker.md)

### Task 1

Please provide a short code review of the base `master` branch:

1. What is done well?

Application is created in modular way by creating different apps for front end and middleware. By having separate apps for frontend and middleware will allow to expand, enhance and maintain each layer indepentently. Using Angular material and Google chart was also good. It saved lot of effort which would have needed to add functionlaities which these libraries provide out of the box. Also it saves lot of effort in maintain the same code. Managing the state of the frontend app by using ngrx helped in better data flow and safe state update. Once the application becomes more complex it will help in avoiding lot of bugs which can be introduced if we wrote our own code for state management.

2. What would you change?

I will also move material imports in separate module as it will help in future if we are using more materail modules.

In current state Go button is enabled even when user haven't added any value. I will keep button disabled until user enters value in both fields. 

Also if user clicks Go button without entering values then we are not showing any error message. Will add error message for that.

If api call returning empty response then we are showing a wierd error message and if it return error message then we are not showing anything in the UI. Error handling is not implemented properly. It will be better to handle error scenario and corner case properly. 

In current state stock-api app is useless and if the application is this simple as it is in current state then I don't think it is  not a good idea to create this complex code. 

3. Are there any code smells or problematic implementations?

Graph is not displayed because of ngIf condition. Fixed it.

First field only has error message. Added for both.

Displaying error message condition is also wrong it should be or instead of and. Fixed it

> Make a PR to fix at least one of the issues that you identify

### Task 2

```
Business requirement: As a user I should be able to type into
the symbol field and make a valid time-frame selection so that
the graph is refreshed automatically without needing to click a button.
```

_**Make a PR from the branch `feat_stock_typeahead` to `master` and provide a code review on this PR**_

> Add comments to the PR. Focus on all items that you can see - this is a hypothetical example but let's treat it as a critical application. Then present these changes as another commit on the PR.

### Task 3

```
Business requirement: As a user I want to choose custom dates
so that I can view the trends within a specific period of time.
```

_**Implement this feature and make a PR from the branch `feat_custom_dates` to `master`.**_

> Use the material date-picker component

> We need two date-pickers: "from" and "to". The date-pickers should not allow selection of dates after the current day. "to" cannot be before "from" (selecting an invalid range should make both dates the same value)

### Task 4

```
Technical requirement: the server `stocks-api` should be used as a proxy
to make calls. Calls should be cached in memory to avoid querying for the
same data. If a query is not in cache we should call-through to the API.
```

_**Implement the solution and make a PR from the branch `feat_proxy_server` to `master`**_

> It is important to get the implementation working before trying to organize and clean it up.
