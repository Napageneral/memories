# memories
Repo for testing out MERN stack and hosting services.

TO START FRONTEND
1. Open a terminal in /client/
2. run 'npm install'
3. run 'npm start'

TO START NODE BACKEND
1. Open a terminal in /server/
2. run 'npm install'
3. run 'npm start'

To START PYTHON BACKEND 
0. Dependent on having launch.json file set up properly
1. Open a terminal in /server/PythonServer/
2. run pip install -r requirements.txt
3. run 'python manage.py runserver'

Launch.json file should contain:
```
{
  "configurations": [
    {
      "name": "Python: Django",
      "type": "python",
      "request": "launch",
      "program": "${workspaceFolder}/server/PythonServer/manage.py",
      "args": [
        "runserver",
        "9000"
      ],
      "django": true
    }
  ]
}  
```