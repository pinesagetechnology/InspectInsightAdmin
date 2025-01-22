# Feature Breakdown
Before start you can refer to entity and model folder to get the interfaces we need to use in the app

interfaces under entity foder reflect the acual data structure of apis data 

# Login
The login functionality is being done internally to reduce the scope of the project.
But need to have the redux saga flow in place and set the "mockAuthResult" in redux store and use it in the application flow.
# Dashboard

Quick view of inspections together with some simple visualisations. 
Upon successful login we should fetch user profile formn below endpoint

Endpoint: `api/user?userId={username}`

Then fetch all Structures, Inspections, Users and inspection Reports for the logged in user region.

All valid Region structures:

Endpoint: `api/structure/list?id={regionId}`

All valid region insopections

Endpoint: `api/inspection/list?id={regionId}`

All active user's region

Endpoint: `api/user/list?id={regionId}`


## Summeries

Three figures on top show a summary of structures, inspections and users.

### 1) Total Structures

we need to use the data we fetch intially and show the total number of available structures

### 2) Total Users 

we need to use the data we fetch intially and show the total number of active inspectors

### 3) Total Reports

we should use the data we fetch intially and show the total number of available inspecton reports

### UI Components

<View All> buttons will navigate the user to the respective page same as clicking on the menue.

## Visualisation

### Inspection Chart

from the previosly fetched data we need to show the number of inspections completed in a month duration.
We need to use BarChart in the "recharts" library 
X axis date | Y axias number of inspections

### Inspection Status

the pie chart represent the number of todo, inprogress or completed inspections in a 
month duration.

there is a field, inspectionStatus, in each inspection object:
status:  `["ToDo" | "In Progress" | "Completed"]`

## Analysis Section

### Up comming tasks
shows only the first 5 comming up inspection. Report shows the first 5 submmited inspection to review. 

### Reports
shows the last 5 inspection with status submitted
Clicking on Review button navigate to a new page called <Inspection Report> will be opened which shows the inspection detail.

The <inspection Report> page; 
we need to show the inspection detail as below:
the example of the inspection report "mockInspectionData" in the mock folder
and there should be button at the end of the page to complete the inspection.

# Structure Management

Displays a list of Structures.

Able to search and filer by name and code.

Create new components for the tiles.

Upon clicking on the arrow, it’ll show the strucutre data for the user to review and update if necessary.

we can get the mock data of list of structure in the mock fodler. "mockStructures"

if the structure has any inspection, we need to show the name of the last inspector who is in the isnpection list.

# User Management

Displays list of users.

Upon clicking on the user list of inspections associated with the user will be appeared on the right.

**View Report**: it’ll be redirected to <inspection Report page> mentioned above.

## Add a new user

Add a new user with following details:

- First Name
- Last name
- Email
- Job Title
- Supervisor
- User name 
- Password
- Region: request from endpoint: `api/user/list/regions` to get the list of region and load them in a dropdown. Persist the `Guid`.

Then call `CreateUserAsync` Endpoint: `[POST] api/user`

### Inspection Reports

refer to the InspectionEntity interface under entities folder 
we need to have a page list all inspections with following information

Structure Name | Inspection Type | Inspector Name | Engineer Name | Inspection Date

and when a user select one item we need to show the full inspection details including the following data
all InspectionEntity,
all MaintenanceActionEntity
all ConditionRatingEntity


and a button to sign and approve the report

the button calls the follwoing endpoint

Endpoint: `[Put] api/inspection/review`

