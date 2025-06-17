from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class TaskCreate(BaseModel):
    title: str
    description: Optional[str] = None


class Task(TaskCreate):
    id: int
    completed: bool = False
    createdAt: datetime