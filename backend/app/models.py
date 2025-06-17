from datetime import datetime
from typing import List
from .schemas import Task, TaskCreate

class TaskManager:
    def __init__(self):
        self.tasks = []
        self.counter = 1

    def createTask(self, data:TaskCreate) -> Task:
        newTask = Task(
            id = self.counter,
            title = data.title,
            description = data.description,
            completed = False,
            createdAt = datetime.now())
        
        self.tasks.append(newTask)
        self.counter += 1

        return newTask

    def listTask(self) -> List[Task]:
        return self.tasks
    
    def deleteTask(self, taskId: int) -> None:
        for task in self.tasks:
            if task.id == taskId:
                self.tasks.remove(task)
                return
        raise ValueError("Task Not found")
    
    def statusTask(self, taskId: int) -> Task:
        for task in self.tasks:
            if task.id == taskId:
                task.completed = not task.completed
                return task
        raise ValueError("Task Not found")
