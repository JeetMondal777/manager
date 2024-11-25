// localStorage.clear()
const employees = [
  {
    "id": 1,
    "password": "123",
    "email": "employee1@example.com",
    "firstName": "Aarav",
    "tasks": {
      "activeTask": [
        {
          "title": "Prepare Presentation",
          "description": "Create a presentation for the Q4 financial meeting.",
          "category": "Work",
          "date": "2024-11-20"
        },
        {
          "title": "Update Profile",
          "description": "Revise your company bio on the website.",
          "category": "Admin",
          "date": "2024-11-17"
        }
      ],
      "newTask": [
        {
          "title": "Update Profile",
          "description": "Revise your company bio on the website.",
          "category": "Admin",
          "date": "2024-11-17"
        }
      ],
      "completed": [
        {
          "title": "Team Meeting",
          "description": "Attended weekly team sync-up.",
          "category": "Work",
          "date": "2024-11-13"
        }
      ],
      "failed": []
    },
    "taskCounts": {
      "activeTask": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "password": "123",
    "email": "employee2@example.com",
    "firstName": "Ishaan",
    "tasks": {
      "activeTask": [
        {
          "title": "Client Follow-Up",
          "description": "Send an update email to the client regarding the project.",
          "category": "Work",
          "date": "2024-11-18"
        }
      ],
      "newTask": [
        {
          "title": "Organize Files",
          "description": "Clean up and organize shared drive folders.",
          "category": "Admin",
          "date": "2024-11-19"
        }
      ],
      "completed": [
        {
          "title": "Submit Report",
          "description": "Delivered the monthly progress report to management.",
          "category": "Work",
          "date": "2024-11-12"
        }
      ],
      "failed": []
    },
    "taskCounts": {
      "activeTask": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "password": "123",
    "email": "employee3@example.com",
    "firstName": "Vihaan",
    "tasks": {
      "activeTask": [
        {
          "title": "Schedule Meeting",
          "description": "Set up a project planning meeting with stakeholders.",
          "category": "Work",
          "date": "2024-11-21"
        }
      ],
      "newTask": [
        {
          "title": "Research Tools",
          "description": "Evaluate new tools for project management.",
          "category": "Work",
          "date": "2024-11-22"
        }
      ],
      "completed": [
        {
          "title": "Policy Training",
          "description": "Completed mandatory workplace training.",
          "category": "Training",
          "date": "2024-11-10"
        }
      ],
      "failed": [
        {
          "title": "Draft Proposal",
          "description": "Failed to submit a draft proposal for the new project on time.",
          "category": "Work",
          "date": "2024-11-14"
        }
      ]
    },
    "taskCounts": {
      "activeTask": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "password": "123",
    "email": "employee4@example.com",
    "firstName": "Ananya",
    "tasks": {
      "activeTask": [
        {
          "title": "Prepare Workshop",
          "description": "Develop materials for the upcoming training workshop.",
          "category": "Training",
          "date": "2024-11-25"
        }
      ],
      "newTask": [
        {
          "title": "Update Software",
          "description": "Coordinate with IT to update team tools.",
          "category": "Admin",
          "date": "2024-11-23"
        }
      ],
      "completed": [
        {
          "title": "Feedback Review",
          "description": "Reviewed employee feedback from recent surveys.",
          "category": "Admin",
          "date": "2024-11-15"
        }
      ],
      "failed": []
    },
    "taskCounts": {
      "activeTask": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "password": "123",
    "email": "employee5@example.com",
    "firstName": "Riya",
    "tasks": {
      "activeTask": [
        {
          "title": "Social Media Campaign",
          "description": "Draft ideas for the upcoming holiday campaign.",
          "category": "Marketing",
          "date": "2024-11-19"
        }
      ],
      "newTask": [
        {
          "title": "Customer Feedback",
          "description": "Analyze feedback from the recent product launch.",
          "category": "Research",
          "date": "2024-11-24"
        }
      ],
      "completed": [
        {
          "title": "Team Workshop",
          "description": "Participated in team-building activities.",
          "category": "Training",
          "date": "2024-11-12"
        }
      ],
      "failed": [
        {
          "title": "Submit Expense Report",
          "description": "Failed to submit expense report for October.",
          "category": "Admin",
          "date": "2024-11-11"
        }
      ]
    },
    "taskCounts": {
      "activeTask": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  }
];



const admin = [{
    "id": 101,
    "password": "123",
    "firstName": "Jeet",
    "email": "admin@example.com"
  }]

  export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return { admin, employees }
    

    
  }

