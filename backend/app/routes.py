from fastapi import APIRouter, HTTPException
from .schemas import Task, TaskCreate
from .models import TaskManager

router = APIRouter()
TaskManager = TaskManager()

@router.post("/tasks", response_model = Task)
def createTask(task: TaskCreate):
    return TaskManager.createTask(task)

@router.get("/tasks", response_model = list[Task])
def getTask():
    return TaskManager.listTask()

@router.put("/tasks/{taskId}", response_model = Task)
def statusTask(taskId: int):
    try:
        return TaskManager.statusTask(taskId)
    except ValueError:
        raise HTTPException(statusCode = 404, detail="Task Not found")

@router.delete("/tasks/{taskId}")
def deleteTask(taskId: int):
    try:
        TaskManager.deleteTask(taskId)
        return {"message":"Task Deleted"}
    except ValueError:
        raise HTTPException(statusCode = 404, detail="Task Not found")