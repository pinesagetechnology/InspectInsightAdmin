# InspectInsight - Admin Portal Requirements

## 1. Project Background

### 1.1 System Overview

The Inspection Insight System is a comprehensive platform designed to facilitate structure inspections across different regions. The system consists of four main components:

- Users and Assets Management Service (Ready)
- Inspection Workflow Service (Ready)
- Inspection Workflow App (Ready)
- **Admin Portal (Current focus)**

### 1.2 Current State

- Backend services are completed
- Workflow application is completed
- Static React-based admin portal design exists but requires implementation, No component architecture or API integration currently in place for the admin portal

### 1.3 Objective

Transform the existing static React design into a fully functional admin portal with proper component architecture and API integration.

## 2. Technical Requirements

### 2.1 Technology Stack

- Frontend Framework: React with TypeScript
- Backend Integration: RESTful APIs
- Development Environment: Node.js
- State Management: TBD (recommend Redux or Context API)
- UI Component Library: TBD

### 2.2 Architecture Requirements

- Implement modular component architecture
- Establish clear separation of concerns
- Create reusable components for common UI elements
- Implement proper state management solution
- Follow TypeScript best practices and type safety

## 3. Functional Requirements

### 3.1 Authentication Module

**Feature**

- It will support two types of authentication:
    - Email/Password (existing form)
    - AzureAD (additional button)

**Login Page Requirements**

- Form validation with error messages
- Loading states during authentication
- Secure credential handling
- Session management
- Redirect to dashboard upon successful login
- Error handling for failed login attempts

**SSO Integration**

- Implement SSO authentication flow for AzureAD
- Handle SSO callback and token management
- Implement proper error handling for SSO failures
- Maintain session state for SSO users
- Direct token to user management service in authorisation header
- Obtain valid token from the user management with user details and roles

### 3.2 Dashboard Module

- Modularise dashboard components into reusable components
- Data should come from Inspection Workflow service
- Upcoming Tasks section refers to the new workflows created
- Reposts section are completed tasks which needs review

### 3.3 User Management Module

- Create CRUD operations for user management. A modal with user’s entity needed to be created.
- By clicking on a user, inspection history will be appearing on the left.
- All the user management component should be turned into reusable modules interacting with the API

### 3.4 Models (Workflow) Management Module

- Displays a list of inspection by status in tiles (need to be componentised and data retrieved from the API)
- A new modal should be added with the workflow detail upon interaction with inspection tiles

### 3.5 Reporting Module

- TBD

## 4. API Integration Requirements

### 4.1 User Management API

- It handles signing up and logging in the users both by email/password and SSO
- Login page should be integrated with User Management API to signup/login
- Create SSO authentication flow
- Handle token management and refresh
- Implement logout functionality
- Secure storage of authentication tokens

### 4.3 Inspection Service API

- Integrate inspection creation and management
- Implement workflow status updates
- Connect assignment management
- Implement reporting data retrieval

### 4.4 API Implementation Approach

- The OpenAPI specs of the service will be provided
- Implement error handling and loading states
- Create mock API implementations for development
- Establish API response typing

## 5. Non-Functional Requirements

### 5.1 Performance

- Smooth navigation between components
- Efficient data caching strategy
- Optimised API calls

### 5.2 Security

- Implement proper authentication
- Secure API communication
- Input validation and sanitisation
- Secure storage of authentication tokens
- Protection against common security vulnerabilities (XSS, CSRF)

### 5.3 Usability

- Responsive design for different screen sizes
- Consistent UI/UX across all modules
- Intuitive navigation
- Clear error messages and user feedback

## 6. Development Process

### 6.1 Phase 1: Setup and Architecture

- Review existing codebase
- Establish component architecture
- Create base components
- Implement authentication system

### 6.2 Phase 2: Core Implementation

- Develop core modules
- Create state management solution
- Implement routing

### 6.3 Phase 3: Feature Implementation

- Develop individual features
- Integrate API calls
- Implement error handling
- Add loading states

### 6.4 Phase 4: Testing and Refinement

- Unit testing
- Integration testing
- Performance optimisation
- Bug fixes

## 7. Deliverables

- Fully functional React/TypeScript admin portal
- Component documentation
- API integration documentation
- Test coverage report
- Deployment guidelines

## 8. Timeline and Milestones

Total estimated duration: 5 to 10 days

## 9. Communication and Collaboration

- Daily sync meetings
- Code review process
- Progress tracking
- Issue resolution procedure