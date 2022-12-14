from typing import Optional

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"helltocks": "tock"}

@app.get("/hi")
def hi(name:str):
    return {"hello your name is ": name}
    


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}
