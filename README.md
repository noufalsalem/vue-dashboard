## Features
### Main Layout/Components:
* Fixed header with title and sidebar collapse toggle
* Collapsible sidebar with navigation links using vue router
* Main content area (Dashboard) to display data in a table format
* Extra empty content area component to demonstrate router-view and navigation

### API Integration:
* Fetches posts from JSONPlaceholder API
* Fetches comments from JSONPlaceholder API

### Further Functionality
* Displays fetched post title and truncated body text in a table
* "Read More" button expands post details
##### Post Details Modal:
* Clicking on a post title opens a modal with additional details
* Displays comments fetched from the /comments API endpoint
##### Dark Mode:
* Toggle between light and dark themes using Tailwind CSS
##### Pagination:
* Supports navigation through pages of posts
##### Reusability:
* Modular components like Header, Sidebar, Table, and Modal
* Composables with vue's composition API 

# Proejct Setup 
## Installation 
1. Clone the repository:
```
git clone https://github.com/your-username/vue-dashboard.git
```
2. Navigate to the project directory:
```
cd vue-dashboard
```
3. Install dependencies:
```
npm install
```
# Run the Development Server
```
npm run dev
```

# Folder Structure
```
src/
├── assets/             # Used for static assets but only has tailwind.css file
├── components/         # Reusable Vue components
├── views/              # View components for different pages
├── router/             # Vue Router configuration and enums
├── composables/        # Custom composables for reusability using Vue Compisition API
├── App.vue             # Root component
├── main.ts             # Application entry point
├── style.css           # Tailwind CSS imports and global styling
```
