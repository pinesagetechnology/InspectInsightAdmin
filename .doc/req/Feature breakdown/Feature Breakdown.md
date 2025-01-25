# Feature Breakdown

**Before starting, please refer to the 'entity' and 'model' folders to review the interfaces that reflect the actual data structure of the API data.**

## Login
The login functionality is handled internally to reduce the scope of the project. However, we need to implement the Redux Saga flow to set the "mockAuthResult" in the Redux store and use it throughout the application.

## Dashboard

A quick view of inspections along with some simple visualizations is required. Upon successful login, we should:

- Fetch user profile from the following endpoint:
  - `api/user?userId={username}`

- Fetch all Structures, Users and Inspection Reports related to the logged-in user's region from these endpoints:
  - Structures: `api/structure/list?id={regionId}`
  - Inspections: `api/inspection/list?id={regionId}`
  - Users: `api/user/list?id={regionId}`

### Summaries

Three figures at the top should show a summary of structures, inspections, and users:

1. **Total Structures:** Use the initially fetched data to show the total number of available structures.
2. **Total Users:** Use the initially fetched data to show the total number of active inspectors.
3. **Total Reports:** Use the initially fetched data to show the total number of available inspection reports.

### UI Components
- create a re-useable component to show data on the dashboard.
- `<View All>` buttons will navigate the user to the respective pages, similar to clicking on the menu.

### Visualizations

1. **Inspection Chart:** Display the number of inspections completed within a month duration using a Bar Chart from the "recharts" library. Set the X-axis as the date and the Y-axis as the number of inspections.
2. **Inspection Status:** A Pie Chart represents the status of inspections (ToDo, In Progress, Completed) over a month.

## Analysis Section

1. **Upcoming Tasks:** Display only the first five upcoming inspections. Similarly, display the first five submitted inspections for review.
2. **Reports:** Display the last five inspections with the status submitted. Clicking on the 'Review' button navigates to a new page called `<Inspection Report>`, which shows the inspection details.

## pages

### Structure Management

- Display a list of structures, with the capability to search and filter by name and code.
- Create a re-useable new components for the tiles.
- Upon clicking an arrow, it will display the structure data for review and possible updates.
- Retrieve mock data for the list of structures from "mockStructures" in the mock folder.
- If the structure has any associated inspections, display the name of the last inspector involved.

### User Management

- Display a list of users. We need to be able to edit user detail.
- Upon clicking on a user, a list of inspections associated with that user will appear on the right.
- **View Report:** Redirects to the `<Inspection Report>` page mentioned above.

### Add a New User

We need fnctionality to add a new user with the following details:

- First Name
- Last Name
- Email
- Job Title
- Supervisor
- Username
- Password
- Region: Fetch the list of regions from `api/user/list/regions` to populate a dropdown and persist the GUID.

Then call the `CreateUserAsync` endpoint:
- `[POST] api/user`

### Inspection Reports

Refer to the `InspectionEntity` interface in the entities folder. We need a page to list all inspections with the following information:

- Structure Name | Inspection Type | Inspector Name | Engineer Name | Inspection Date

Upon selecting an item, display the full inspection details including:
- All `InspectionEntity` data
- All `MaintenanceActionEntity` data
- All `ConditionRatingEntity` data

Include a button to sign and approve the report, which calls the following endpoint:
- `[PUT] api/inspection/review`
