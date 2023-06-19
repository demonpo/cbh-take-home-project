# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

# Your Breakdown Here

## Create new field in "Agents" Table

## 🧑 Story

Facilities want to save their own custom agent id and have that new customsId in the reports.

## Action items

- Create a nullable varchar "customId" Field in "facilities" table.

## 🔨 Acceptance Criteria

- Database has customId in "facilities" table.
- the new field is in staging and production tables.


## 📚 Resources

- [PLANNINGDOC1](WWWDOTEXAMPLEDOTCOM)

## Expected Time: 6h

----------------------------------------------------

## Create new endpoint to allow third party (facilities) add their customId for agents

## Dependencies

- [Create new endpoint to allow third party (facilities) add their customId for agents]()

## 🧑 Story

Facilities want to save their own custom agent id and have that new customsId in the reports.

## Action items

- Create [POST] /facilities/agents/id endpoint in our backend to allow the creation of customId agent and update the field in our db.
- define a structure for the request body: 
```
{
    customId: "s123s123fasf";
}
```
- Add validations for the structure. the new customId cannot be null or an empty string.

## 🔨 Acceptance Criteria

- The feature is in staging and production.
- There are tests the checks validation and the creation of the customId in the DB.


## 📚 Resources

- [PLANNINGDOC1](WWWDOTEXAMPLEDOTCOM)

## Expected Time: 6h

----------------------------------------------------

## Update getShiftsByFacility to return customId of the agent.

## Dependencies

- [Create new endpoint to allow third party (facilities) add their customId for agents]()

## 🧑 Story

Facilities want to save their own custom agent id and have that new customsId in the reports.

## Action items

- Update getShiftsByFacility so in the metadata field of the agent it returns also the customId.

## 🔨 Acceptance Criteria

- The feature is in staging and production.
- There are tests the checks the new output of the getShiftsByFacility function (update other tests if necessary).


## 📚 Resources

- [PLANNINGDOC1](WWWDOTEXAMPLEDOTCOM)

## Expected Time: 3h

----------------------------------------------------

## Update generateReport to return customId of the agent.

## Dependencies

- [Create new endpoint to allow third party (facilities) add their customId for agents]()
- [Update getShiftsByFacility to return customId of the agent.]()

## 🧑 Story

Facilities want to save their own custom agent id and have that new customsId in the reports.

## Action items

- Check or Update generateReport function so the pdf generated contains the customId of the agents.
- Use getShiftsByFacility function with the new output that returns the customId of the agents in the metadata. 

## 🔨 Acceptance Criteria

- The feature is in staging and production.
- Update generateReport tests to check the customId of the agents in the output report.


## 📚 Resources

- [PLANNINGDOC1](WWWDOTEXAMPLEDOTCOM)

## Expected Time: 3h